import { useState } from "react";

import Content from "@/components/layout/HeroSection/Content";
import Calculator from "@/components/layout/HeroSection/Calculator";
import Quienes_Somos from "@/components/layout/HeroSection/Quienes_Somos";
import Visitanos from "@/components/layout/HeroSection/Visitanos";
import Contactanos from "@/components/layout/HeroSection/Contactanos";
import Politica from "@/components/layout/HeroSection/Politica";
import styles from "@/components/layout/HeroSection/Politica.module.scss";
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

  const [mostrarPolitica, setMostrarPolitica] = useState(false);

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

      {/* Botón o link para abrir la política */}
        <div style={{ textAlign: "center", margin: "40px 0" }}>
          <button
            className={styles.openPoliticaBtn}
            onClick={() => setMostrarPolitica(true)}
          >
            Ver Política de Privacidad
          </button>
        </div>

      {mostrarPolitica && (
        <Politica onClose={() => setMostrarPolitica(false)} />
      )}

    </>
  );
}







