import Content from "@/components/layout/HeroSection/Content";
import { getRates } from "@/lib/getRates";

export async function getServerSideProps() {
  try {
    const rates = await getRates();          // 👈 llama directo a Google Sheets
    return { props: { rates } };
  } catch (error) {
    console.error("ERROR GOOGLE SHEETS (SSR):", error);
    return { props: { rates: [] } };
  }
}

export default function HomePage({ rates }) {
  console.log("Rates en HomePage:", rates);  // 👈 para verificar en consola del server
  return <Content rates={rates} />;
}


