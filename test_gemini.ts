
import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyBkCWSDVPCGHrELLRg-gtnfmII0CENYZzM"; // Hardcoded for test

const testModels = async (modelName: string) => {
    try {
        const ai = new GoogleGenAI({ apiKey });
        console.log(`Testing model: ${modelName}...`);

        const response = await ai.models.generateContent({
            model: modelName,
            contents: [{
                role: 'user',
                parts: [{ text: "Hello, reply with 'OK'." }]
            }],
        });

        console.log(`[SUCCESS] ${modelName}:`, response.text);
    } catch (error: any) {
        console.error(`[FAILED] ${modelName}:`, error.message);
    }
};

const runTests = async () => {
    await testModels("gemini-2.0-flash");
    await testModels("gemini-1.5-flash");
    await testModels("gemini-1.5-pro");
    await testModels("gemini-pro");
};

runTests();
