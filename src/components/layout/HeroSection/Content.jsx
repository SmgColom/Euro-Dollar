import styles from './Content.module.scss';
import Image from "next/image";
const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        {/* LEFT CARD */}
        <div className={styles.leftCard}>
        <h2>Nuestras Tasa</h2>
          <div className={styles.ratesTable}>
          {/* Subtítulos */}
          <div className={styles.gridHeader}>
              <div></div> {/* espacio vacío para icono/moneda */}
              <div className={styles.headerItem}>Compra<br />(We Buy)</div>
              <div className={styles.headerItem}>Venta<br />(We Sell)</div>
          </div>

          {/* EURO */}
          <div className={styles.rateRow}>
            <div className={styles.iconAndName}>
              <div className={styles.circleIcon}>
              <Image src="/eu.svg" alt="Euro" width={55} height={55} />
              </div>
              <strong>Euro</strong>
            </div>
            <span>$ 3.307</span>
            <span>$ 3.307</span>
  </div>

          {/* DÓLAR */}
          <div className={styles.rateRow}>
          <div className={styles.iconAndName}>
            <div className={styles.circleIcon}>
        <Image src="/us.svg" alt="USD" width={55} height={55} />
      </div>
      <strong>Dólar</strong>
    </div>
    <span>$ 3.307</span>
    <span>$ 3.307</span>
  </div>

</div><div className={styles.ratesTable}>

  

</div>

          <p className={styles.warningBox}>
            ¡El mercado se mueve rápido! Las tasas mostradas son de referencia.
            Asegura tu valor confirmándolo con nosotros antes de transaccionar.
            <br />
            <em>
              "The market moves fast! Rates shown are for reference. Please lock in your value
              by confirming with us just before your transaction."
            </em>
          </p>
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
