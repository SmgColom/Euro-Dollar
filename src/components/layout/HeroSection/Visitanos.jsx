import React from "react";
import styles from "./Visitanos.module.scss";
import Image from "next/image";
import { trackEvent } from "@/lib/google-analytics/events";

const Sucursales = () => {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.wrapper}>
        <h2 className={styles.titulo}>Visítanos</h2>

        <div className={styles.container}>

          {/* CARD 1 - OVIEDO */}
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

            <a
              href="AQUI_VA_TU_LINK_DE_GOOGLE_MAPS"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
              aria-label="Ver ruta a Euro Dollar Colombia en Oviedo"
              onClick={() =>
                trackEvent({
                  action: "click_google_maps",
                  category: "location",
                  label: "oviedo",
                })
              }
            >
              Ver ruta
            </a>
          </div>

          {/* CARD 2 - JMC */}
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
                alt="Sucursal Aeropuerto José María Córdova"
                className={styles.photo}
              />
            </div>

            <a
              href="AQUI_VA_TU_LINK_DE_GOOGLE_MAPS"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
              aria-label="Ver ruta a Euro Dollar Colombia vía Aeropuerto JMC"
              onClick={() =>
                trackEvent({
                  action: "click_google_maps",
                  category: "location",
                  label: "jmc",
                })
              }
            >
              Ver ruta
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sucursales;


