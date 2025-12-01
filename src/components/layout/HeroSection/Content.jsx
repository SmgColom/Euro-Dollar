import styles from "./Content.module.scss";
import Image from "next/image";
import { AiOutlineExclamationCircle } from "react-icons/ai";


const Hero = ({ rates = [] }) => {

  // Normalizar cualquier nombre de moneda (quita acentos, mayúsculas, plurales)
  const normalize = (str) =>
    str
      ?.toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // remover acentos

  // Encontrar Euro y Dólar robustamente
  const euro = rates.find((r) => normalize(r.moneda).includes("euro"));
  const dolar = rates.find((r) => normalize(r.moneda).includes("dolar"));

  return (
  
    <section className={styles.heroWrapper}>
      <div className={styles.heroContent}>

        {/* LEFT CARD */}
        <div className={styles.leftCard}>
          <h2>Nuestras Tasa</h2>

          <div className={styles.ratesTable}>
            {/* Subtítulos */}
            <div className={styles.gridHeader}>
              <div></div>
              <div className={styles.headerItem}>
                Compra<br />(We Buy)
              </div>
              <div className={styles.headerItem}>
                Venta<br />(We Sell)
              </div>
            </div>

            {/* EURO */}
            <div className={styles.rateRow}>
              <div className={styles.iconAndName}>
                <div className={styles.circleIcon}>
                  <Image src="/eu.svg" alt="Euro" width={55} height={55} />
                </div>
                <strong>Euro</strong>
              </div>

              <span>${euro?.compra ?? ""}</span>
              <span>${euro?.venta ?? ""}</span>
            </div>

            {/* DÓLAR */}
            <div className={styles.rateRow}>
              <div className={styles.iconAndName}>
                <div className={styles.circleIcon}>
                  <Image src="/us.svg" alt="USD" width={55} height={55} />
                </div>
                <strong>Dólar</strong>
              </div>

              <span>${dolar?.compra ?? ""}</span>
              <span>${dolar?.venta ?? ""}</span>
            </div>
          </div>

          <div className={styles.warningRow}>
            <AiOutlineExclamationCircle className={styles.warningIcon} />
            <div className={styles.warningBox}>
              ¡El mercado se mueve rápido! Las tasas mostradas son de referencia.
              Asegura tu valor confirmándolo con nosotros antes de transaccionar.
              <br />
              <em>
                "The market moves fast! Rates shown are for reference. Please lock in your
                value by confirming with us just before your transaction."
              </em>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightContent}>
          <h3>RÁPIDO Y SEGURO</h3>
          <h1>¿Cansado de Buscar?</h1>

          <p>
            ¿Tienes un grupo, excursión o una gran cantidad?
            Te garantizamos la tasa más ventajosa del mercado, con la
            confidencialidad y protección exclusiva de nuestras oficinas en el
            C.C. Oviedo (Milla de Oro) y el Aeropuerto JMC.
          </p>

          <a
            href="https://wa.me/573001112233"
            target="_blank"
            className={styles.whatsappBtn}
          >
            <img src="/Digital_Glyph_Green.svg" alt="WhatsApp" />
            Habla con nosotros
          </a>
        </div>

      </div>

      {/* CURVA INFERIOR */}
      <div className={styles.curveBottom}></div>
    </section>
  );
};

export default Hero;





