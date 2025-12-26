
import { GoogleGenAI } from "@google/genai";
import { COMPANY_BIO } from "../constants";

export async function getAssistantResponse(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the CTECX AI Solutions Advisor. 
    Your goal is to help visitors understand how CTECX can assist their business with AI coordination and integration services.
    
    Context about CTECX:
    ${COMPANY_BIO}
    
    Services: Consulting, Custom Solutions, Managed Support.
    Flagship Product: DeckerGUI Agentic Ecosystem (supports Enterprise, Cloud, Local/Offline; planned Air-Gapped mode).
    Industries: Agriculture, Energy, Manufacturing, R&D.
    
    Style: Professional, corporate, innovative, and helpful. 
    Keep responses concise and encourage the user to reach out to info@ctecx.com or schedule a demo.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my knowledge base. Please contact our support team at support@ctecx.com for immediate assistance.";
  }
}
