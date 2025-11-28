import React from 'react';
import styles from './Quienes_Somos.module.scss';
import Image from 'next/image';

const Quienes_Somos = () => {
  return (
    <section className={styles.QuienesSomosWrapper}>
        <h2 className={styles.titulo}>Quienes Somos</h2>
     <div className={styles.container}>
<div className={styles.izquierda}>
        <div className={styles.texto}>
          <p>
            Somos EuroDollar, tu mejor opción en casa de cambio con 16 años en el
            mercado y presencia en toda Colombia.
          </p>

          <p>
            Estamos avalados por la Cámara de Comercio, la UIAF y DIAN, lo que nos
            permite prestarte un servicio profesional y confiable.
          </p>
        </div>
      </div>

      <div className={styles.derecha}>
        <Image
          src="/Quienes_Somos.jpeg"
          alt="Foto oficinas EuroDollar"
          width={480}
          height={410}
          className={styles.imagen}
        />
      </div>
     </div>
      
    </section>
  );
};

export default Quienes_Somos;



