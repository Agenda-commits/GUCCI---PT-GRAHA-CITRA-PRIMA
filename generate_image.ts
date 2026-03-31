import { GoogleGenAI } from "@google/genai";

async function generateGucciImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A luxury fashion advertisement for a Gucci program integrated with a P4P ADVERTISING system. The image should feature a high-end fashion model or a luxury store environment, with subtle digital advertising overlays like performance graphs or P4P branding. The aesthetic is premium, elegant, using a color scheme of deep forest green, gold, and ivory. High-resolution, cinematic lighting, professional photography style.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "3:4",
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      console.log(`data:image/png;base64,${part.inlineData.data}`);
    }
  }
}

generateGucciImage();
