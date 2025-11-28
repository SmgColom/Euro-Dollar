import { useState, useEffect } from "react";
import styles from "./Calculator.module.scss";
import Image from "next/image";

const Calculator = ({ rates = [] }) => {

  // Normalizar divisas (sin acentos)
  const normalize = (str) =>
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Divisas desde la API
  const monedas = rates.map((r) => ({
    nombre: normalize(r.moneda),
    compra: Number(r.compra),
    venta: Number(r.venta),
  }));

  // Estados
  const [tengo, setTengo] = useState("");
  const [cambioA, setCambioA] = useState("");
  const [cantidadTengo, setCantidadTengo] = useState("");
  const [resultado, setResultado] = useState("");

  // Capitalizar
  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  // Cálculo
  useEffect(() => {
    if (!tengo || !cambioA || !cantidadTengo) {
      setResultado("");
      return;
    }

    const monedaTengo = monedas.find((m) => m.nombre === tengo);
    const monedaCambio = monedas.find((m) => m.nombre === cambioA);

    if (!monedaTengo || !monedaCambio) return;

    const res =
      (Number(cantidadTengo) * monedaTengo.compra) /
      monedaCambio.venta;

    setResultado(res.toFixed(2));
  }, [tengo, cambioA, cantidadTengo]);

  return (
    <section className={styles.calculatorWrapper}>
      <h2 className={styles.title}>CALCULADORA</h2>

      <div className={styles.container}>

        {/* LEFT SIDE */}
        <div className={styles.leftColumn}>

          <div className={styles.featureItem}>
            <Image 
              src="/seguridad.svg"
              alt="Seguridad"
              width={100}
              height={100}
            />
            <div className={styles.featureBox}>Nivel de Seguridad Bancaria</div>
          </div>

          <div className={styles.featureItem}>
            <Image 
              src="/Asesoria.svg"
              alt="Asesoría"
              width={100}
              height={100}
            />
            <div className={styles.featureBox}>Asesoría</div>
          </div>

          <div className={styles.featureItem}>
            <Image 
              src="/Ofertas.svg"
              alt="Ofertas"
              width={100}
              height={100}
            />
            <div
              className={styles.featureBox}
              style={{ fontWeight: "bold", fontSize: "22px" }}
            >
              Ofertas
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className={styles.card}>

          {/* TENGO */}
          <div className={styles.row}>
            <button className={styles.actionBtn}>Tengo</button>

            <div className={styles.selectGrow}>
              <select
                className={styles.visibleSelect}
                value={tengo}
                onChange={(e) => setTengo(e.target.value)}
              >
                <option value="">Seleccione...</option>
                {monedas.map((m, i) => (
                  <option key={i} value={m.nombre}>
                    {capitalize(m.nombre)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* CAMBIO A */}
          <div className={styles.row}>
            <button className={styles.actionBtn}>Cambio A</button>

            <div className={styles.selectGrow}>
              <select
                className={styles.visibleSelect}
                value={cambioA}
                onChange={(e) => setCambioA(e.target.value)}
              >
                <option value="">Seleccione...</option>
                {monedas.map((m, i) => (
                  <option key={i} value={m.nombre}>
                    {capitalize(m.nombre)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* CUÁNTOS TENGO */}
          <div className={styles.row}>
            <button className={styles.actionBtn}>
              {tengo ? `Cuantos ${capitalize(tengo)} Tengo` : "Cuantos Tengo"}
            </button>

            <input
              type="number"
              className={styles.visibleInput}
              placeholder="0"
              value={cantidadTengo}
              onChange={(e) => setCantidadTengo(e.target.value)}
            />
          </div>

          {/* RESULTADO */}
          <div className={styles.row}>
            <button className={styles.actionBtn}>Obtengo</button>

            <span className={styles.result}>
              {resultado && `${resultado} ${capitalize(cambioA)}`}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Calculator;




