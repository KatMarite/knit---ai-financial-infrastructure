import { GoogleGenAI, Type } from "@google/genai";
import { RiskProfile, GeminiRiskAnalysis } from "../types";

// Safely access process.env to avoid ReferenceError in browser environments
const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) || '';
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
      model: 'gemini-1.5-flash',
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