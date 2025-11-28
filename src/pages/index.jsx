import Content from "@/components/layout/HeroSection/Content";
import { getRates } from "@/lib/getRates";

export async function getServerSideProps() {
  try {
    const rates = await getRates(); // ← obtiene divisas desde Google Sheets
    return { props: { rates } };
  } catch (error) {
    console.error("ERROR GOOGLE SHEETS (SSR):", error);
    return { props: { rates: [] } };
  }
}

export default function HomePage({ rates }) {

  console.log("Rates en HomePage:", rates); // ← útil para desarrollo

  return (
    <>
      {/* Hero con las tasas */}
      <Content rates={rates} />

      {/* Calculator YA NO VA AQUÍ — se renderiza desde _app.js */}
    </>
  );
}



