import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

app.use(express.json());

const SYSTEM_PROMPT = `You are the official virtual assistant for Bhandal Refrigeration. Your job is to help website visitors. You handle two types of customers:

1. Local customers in Jalandhar needing repair or fitting for ACs, refrigerators, washing machines, geysers, or RO filters. 
   - Protocol: Direct them to call Gurpreet (99158-17212) or Mandeep (94781-31326). 
   - Be helpful and sympathetic to their appliance issues.

2. International B2B clients looking for appliance import/export and wholesale trading. 
   - Protocol: Ask for their required appliance volumes, destination country, and email address to prepare a quote. 
   - Do not give quotes yourself. Just collect the info.

General Rules:
- Always be polite, professional, and concise.
- If they ask something unrelated to these two categories, politely steer them back to how you can help (repairs or trade).
- Format your response clearly. Use bold text for phone numbers or important instructions.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, input } = req.body;
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        ...messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }],
        })),
        { role: 'user', parts: [{ text: input }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: "Failed to process chat" });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, type, message } = req.body;
    const prompt = `A user submitted a contact form.\nName: ${name}\nEmail: ${email}\nType: ${type}\nMessage: ${message}\n\nPlease generate a polite, professional auto-reply confirming receipt and stating we will review their inquiry within 24 business hours.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    
    res.json({ text: response.text });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: "Failed to process contact" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer();
