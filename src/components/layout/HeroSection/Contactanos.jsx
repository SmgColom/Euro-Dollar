import React from "react";
import styles from "./Contactanos.module.scss";
import Image from "next/image";
import { GrInstagram } from "react-icons/gr";
import { ImMail4 } from "react-icons/im";
import { PiPhoneOutgoingFill } from "react-icons/pi";

const Contactanos = () => {
  return (
    <section className={styles.wrapper}>
    
        <h2 className={styles.titulo}>Contáctanos</h2>

        <div className={styles.container}>

          {/* CARD 1 */}
          <div className={styles.card}>
            <div className={styles.photoWrapper}>
            <Image
            src="/Sede_Oviedo-portrait.png"
            fill
            alt="Foto Sede"
            className={styles.photo}
            />
            </div>
                <div>
                    <a href="https://instagram.com/mile_toro" 
                       title="Instagram" 
                       aria-label="Instagram" 
                       target="_blank" 
                       rel="noopener noreferrer"
                        >
                    <GrInstagram size={100} color='# 18488B'/>
                    </a>
                </div>


          </div>

          {/* CARD 2 */}
          <div className={styles.card}>


                <div>
                    <a href="https://instagram.com/mile_toro" 
                       title="Instagram" 
                       aria-label="Instagram" 
                       target="_blank" 
                       rel="noopener noreferrer"
                        >
                    <ImMail4 size={100} color='# 18488B'/>
                    </a>
                </div>
                                <div>
                    <a href="https://instagram.com/mile_toro" 
                       title="Instagram" 
                       aria-label="Instagram" 
                       target="_blank" 
                       rel="noopener noreferrer"
                        >
                    <PiPhoneOutgoingFill size={100} color='# 18488B'/>
                    </a>
                </div>


          </div>

        </div>
    </section>
  );
};

export default Contactanos;