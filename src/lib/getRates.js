import { google } from "googleapis";

export async function getRates() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "'Tasas del dia'!B3:D4", // tu rango actual
  });

  const rows = response.data.values;

  if (!rows || rows.length === 0) {
    throw new Error("No hay datos en Google Sheets");
  }

  const limpiar = (v) =>
    String(v || "")
      .replace("$", "")
      .replace(",", "")
      .trim();

  const data = rows.map((row) => ({
    moneda: row[0],         // "Euro" / "Dolar"
    compra: limpiar(row[1]),
    venta: limpiar(row[2]),
  }));

  return data;
}
