import React from "react";
import styles from "./Visitanos.module.scss";
import Image from "next/image";


const Sucursales = () => {
  return (
   <div className={styles.bgWrapper}>
<div className={styles.wrapper}>
        <h2 className={styles.titulo}>Visítanos</h2>

        <div className={styles.container}>

          {/* CARD 1 */}
          <div className={styles.card}>
            <div className={styles.header}>
              <Image src="/Icono_Oviedo.svg" width={45} height={45} alt="Bolsa" />
              <h3>Oviedo Centro Comercial</h3>
            </div>

            <div className={styles.photoWrapper}>
              <Image
                src="/Sede_Oviedo.jpeg"
                width={200}
                height={100}
                alt="Sucursal Oviedo"
                className={styles.photo}
              />
            </div>

            <button className={styles.btn}>Ver ruta</button>
          </div>

          {/* CARD 2 */}
          <div className={styles.card}>
            <div className={styles.header}>
              <Image src="/Icono_JMC.svg" width={45} height={45} alt="Avión" />
              <h3>Vía Aeropuerto JMC</h3>
            </div>

            <div className={styles.photoWrapper}>
              <Image
                src="/Sede_Oviedo.jpeg"
                width={200}
                height={100}
                alt="Sucursal JMC"
                className={styles.photo}
              />
            </div>

            <button className={styles.btn}>Ver ruta</button>
          </div>

        </div>
      </div>

   </div>
      
 
  );
};

export default Sucursales;

