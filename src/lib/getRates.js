import { google } from "googleapis";

export async function getRates() {
  // Autenticación con Google Service Account
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Leer TODAS las divisas desde B3 hasta el final de la tabla
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "'Tasas del dia'!B3:D9", // lee columnas B, C, D dinámicamente
  });

  console.log("Filas obtenidas:", response.data.values);

  const rows = response.data.values;

  if (!rows || rows.length === 0) {
    throw new Error("No hay datos en Google Sheets");
  }

  // Función para limpiar valores tipo "$2.655,72"
  const limpiar = (v) => {
    if (!v) return 0;

    const limpio = String(v)
      .replace(/\$/g, "")      // quita el signo $
      .replace(/\s/g, "")      // quita espacios
      .replace(/\./g, "")      // quita puntos de miles
      .replace(/,/g, ".")      // convierte coma decimal a punto
      .trim();

    return Number(limpio);
  };

  // Convertir filas en objetos
  const data = rows
    .filter((row) => row[0]) // evitar filas en blanco
    .map((row) => ({
      moneda: row[0].trim().toLowerCase(), // estandarizamos para lógica interna
      compra: limpiar(row[1]),
      venta: limpiar(row[2]),
    }));

  return data;
}

