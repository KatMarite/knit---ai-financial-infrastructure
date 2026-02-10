/// <reference types="vite/client" />
import { GoogleGenAI, Type } from "@google/genai";
import { RiskProfile, GeminiRiskAnalysis } from "../types";

// Safely access API key in browser (Vite) and Node environments
// Vite replaces process.env.API_KEY with the string value if defined in vite.config.ts
// Standard Vite env vars are in import.meta.env.VITE_*
let apiKey = '';
try {
  apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
} catch (e) {
  // Ignore
}

if (!apiKey) {
  try {
    // @ts-ignore
    apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
  } catch (e) {
    // Ignore ReferenceError for process is not defined
  }
}

const ai = new GoogleGenAI({ apiKey });

export const analyzeRiskProfile = async (profile: RiskProfile): Promise<GeminiRiskAnalysis> => {
  if (!apiKey) {
    // Fallback mock response if no API key is present for demo purposes
    // In a real app, we would throw an error or handle this upstream
    console.warn("No API Key found. Returning mock data.");
    return new Promise(resolve => setTimeout(() => resolve({
      riskScore: 78,
      riskLevel: 'High',
      prediction: "High likelihood of default within 30 days due to degrading payment consistency.",
      interventionStrategy: "Immediate soft restructuring offer. Do not aggressively pursue; offer a 3-month split plan.",
      draftedMessage: "Hi [Name], we noticed your account is past due. To keep things on track, we've unlocked a flexible payment option for you. Click here to review."
    }), 1500));
  }

  try {
    const prompt = `
      You are Knit, an AI-powered financial intelligence platform. 
      Analyze the following debtor profile and predict payment friction.
      
      Profile Data:
      - Type: ${profile.type}
      - Amount Due: R ${profile.amountDue}
      - Days Overdue: ${profile.daysOverdue}
      - Payment History: ${profile.paymentHistory}
      - Last Contact: ${profile.lastContact}

      Your goal is "Prevention over Punishment".
      
      Return a JSON object with:
      1. riskScore (0-100 integer, where 100 is certain default)
      2. riskLevel (Low, Medium, High, Critical)
      3. prediction (A short sentence predicting the outcome)
      4. interventionStrategy (A specific, empathetic action to take)
      5. draftedMessage (A short, compliant SMS/Email text to the user)
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            riskScore: { type: Type.INTEGER },
            riskLevel: { type: Type.STRING },
            prediction: { type: Type.STRING },
            interventionStrategy: { type: Type.STRING },
            draftedMessage: { type: Type.STRING },
          },
          required: ["riskScore", "riskLevel", "prediction", "interventionStrategy", "draftedMessage"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as GeminiRiskAnalysis;

  } catch (error) {
    console.warn("Gemini Analysis Failed (likely due to invalid API key or quota). Falling back to mock data.", error);

    // Fallback mock response so the UI still works for demo purposes
    return {
      riskScore: 78,
      riskLevel: 'High',
      prediction: "High likelihood of default within 30 days due to degrading payment consistency.",
      interventionStrategy: "Immediate soft restructuring offer. Do not aggressively pursue; offer a 3-month split plan.",
      draftedMessage: "Hi [Name], we noticed your account is past due. To keep things on track, we've unlocked a flexible payment option for you. Click here to review."
    };
  }
};

export const generateChatResponse = async (history: { role: string, content: string }[], message: string): Promise<string> => {
  if (!apiKey) {
    return new Promise(resolve => setTimeout(() => resolve("I see you're interested in Knit! Since I'm currently running in demo mode without an active AI connection, I can tell you that Knit helps schools and businesses automate their financial operations. How else can I assist?"), 1000));
  }

  try {
    const systemPrompt = `
      You are Knit, an intelligent AI assistant for a financial infrastructure platform.
      Your tone is professional, helpful, and forward-thinking.
      You help potential customers understand how Knit can automate their payments, collections, and financial workflows.
      
      Key Value Propositions:
      - AI-driven debt collection (empathetic, not aggressive).
      - Automated reconciliation.
      - Seamless integration with existing accounting software (Sage, Xero, etc.).
      - "Days, not months" implementation time.
      
      Do not make up facts. If you don't know something, suggest they book a demo or contact support.
      Keep responses concise and engaging.
    `;

    // Format history for the prompt context if needed, or if the API supports it directly.
    // For simplicity with this specific client library version usage, we'll concatenate context.

    const conversationContext = history.map(msg => `${msg.role === 'user' ? 'User' : 'Knit'}: ${msg.content}`).join('\n');

    const fullPrompt = `${systemPrompt}\n\nConversation History:\n${conversationContext}\n\nUser: ${message}\nKnit:`;

    // Correct format for @google/genai SDK v0.2.0
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{
        role: 'user',
        parts: [{ text: fullPrompt }]
      }],
    });

    return response.text || "I apologize, I couldn't process that request at the moment.";

  } catch (error: any) {
    console.error("Chat generation failed:", error);

    // safe check for error properties
    const status = error?.status || error?.response?.status;
    const errorMessage = error?.message || '';

    if (status === 429) {
      return "I'm currently experiencing high traffic (Quota Exceeded). Please try again in a moment.";
    }

    if (status === 400 || status === 403 || errorMessage.includes('API key')) {
      return "Using a placeholder API Key? Please check your .env.local file and ensure VITE_GEMINI_API_KEY is set to a valid Google Gemini API Key.";
    }

    return "I'm having trouble connecting to my knowledge base right now. Please try again or contact our support team.";
  }
};