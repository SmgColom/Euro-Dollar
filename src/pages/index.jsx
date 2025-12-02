import Content from "@/components/layout/HeroSection/Content";
import Calculator from "@/components/layout/HeroSection/Calculator";
import Quienes_Somos from "@/components/layout/HeroSection/Quienes_Somos";
import Visitanos from "@/components/layout/HeroSection/Visitanos";
import Contactanos from "@/components/layout/HeroSection/Contactanos";
import Politica from "@/components/layout/HeroSection/Politica";
import { getRates } from "@/lib/getRates";

export async function getServerSideProps() {
  try {
    const rates = await getRates();
    return { props: { rates } };
  } catch (e) {
    console.error(e);
    return { props: { rates: [] } };
  }
}

export default function HomePage({ rates }) {
  return (
    <>
      <div id="inicio">
        <Content rates={rates} />
      </div>

      <div id="calculator">
        <Calculator rates={rates} />
      </div>

      <div id="quienes">
        <Quienes_Somos />
      </div>

      <div id="visitanos">
        <Visitanos />
      </div>

      <div id="contacto">
        <Contactanos />
      </div>

      <Politica />
    </>
  );
}







