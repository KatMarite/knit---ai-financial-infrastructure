
import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyBkCWSDVPCGHrELLRg-gtnfmII0CENYZzM"; // Hardcoded for test

const listModels = async () => {
    try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.list();
        console.log("Available Models:");
        response.models.forEach(m => console.log(m.name));
    } catch (error: any) {
        console.error("List models failed:", error.message);
        if (error.response) {
            console.error("Error details:", JSON.stringify(error.response, null, 2));
        }
    }
};

listModels();
