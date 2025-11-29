import { useState, useEffect } from "react";
import styles from "./Calculator.module.scss";
import Image from "next/image";

const Calculator = ({ rates = [] }) => {

  // Normalizar nombres de divisa
  const normalize = (str) =>
    str?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");


  // Preparar divisas
    const monedas = rates.map((r) => ({
    nombre: normalize(r.moneda),
    compra: r.compra ? Number(r.compra) : null,
    venta: r.venta ? Number(r.venta) : null,
    }));

  // Estados
  const [tengo, setTengo] = useState("");
  const [cambioA, setCambioA] = useState("");
  const [cantidadTengo, setCantidadTengo] = useState("");
  const [resultado, setResultado] = useState("");

  // Capitalizar texto
  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  // Formatear resultado en formato moneda
  const formatMoney = (value, currencyName) => {
    if (!value) return "";
    return Number(value).toLocaleString("es-CO", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Cálculo principal
  useEffect(() => {
    if (!tengo || !cambioA || !cantidadTengo) {
      setResultado("");
      return;
    }

    const esCOP = (nombre) => normalize(nombre) === "pesos colombianos";

    const monedaTengo = monedas.find((m) => m.nombre === normalize(tengo));
    const monedaCambio = monedas.find((m) => m.nombre === normalize(cambioA));

    if (!monedaTengo || !monedaCambio) {
      setResultado("");
      return;
    }

    const cantidad = Number(
      String(cantidadTengo).replace(/\./g, "").replace(",", ".")
    );

    if (!cantidad || isNaN(cantidad)) {
      setResultado("");
      return;
    }

    const tengoCOP = esCOP(monedaTengo.nombre);
    const cambioCOP = esCOP(monedaCambio.nombre);

    let res = 0;

    // 👉 COP → DIVISA
    if (tengoCOP && !cambioCOP) {
      if (!monedaCambio.venta) {
        setResultado("");
        return;
      }
      res = cantidad / monedaCambio.venta;
    }

    // 👉 DIVISA → COP
    else if (!tengoCOP && cambioCOP) {
      if (!monedaTengo.compra) {
        setResultado("");
        return;
      }
      res = cantidad * monedaTengo.compra;
    }

    // 👉 MISMA DIVISA (COP → COP)
    else if (tengoCOP && cambioCOP) {
      res = cantidad;
    }

    // 👉 DIVISA → DIVISA
    else {
      if (!monedaTengo.compra || !monedaCambio.venta) {
        setResultado("");
        return;
      }
      res = (cantidad * monedaTengo.compra) / monedaCambio.venta;
    }

    setResultado(res);
  }, [tengo, cambioA, cantidadTengo, monedas]);

  return (
    <section id="calculator" className={`${styles.calculatorWrapper}`}>
      <h2 className={styles.title}>Calculadora</h2>

      <div className={styles.container}>

        {/* IZQUIERDA */}
        <div className={styles.Izquierda}>
          <div className={styles.featureItem}>
            <Image src="/seguridad.svg" alt="Seguridad" width={100} height={100} />
            <div className={styles.featureBox}>Nivel de Seguridad Bancaria</div>
          </div>

          <div className={styles.featureItem}>
            <Image src="/Asesoria.svg" alt="Asesoría" width={100} height={100} />
            <div className={styles.featureBox}>Asesoría</div>
          </div>

          <div className={styles.featureItem}>
            <Image src="/Ofertas.svg" alt="Ofertas" width={100} height={100} />
            <div className={styles.featureBox} style={{ fontWeight: 700, fontSize: "22px" }}>
              Ofertas
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <div className={styles.Derecha}>

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

          {/* CANTIDAD */}
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
              {resultado !== "" &&
                `${formatMoney(resultado)} ${capitalize(cambioA)}`}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;





