import { getRates } from "@/lib/getRates";

export default async function handler(req, res) {
  try {
    const data = await getRates();     // 👈 Llama al helper compartido
    res.status(200).json({ data });
  } catch (error) {
    console.error("ERROR GOOGLE SHEETS (API):", error);
    res.status(500).json({
      error: "Error leyendo Google Sheets",
      details: error.message,
    });
  }
}






