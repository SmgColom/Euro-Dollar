import styles from "./Politica.module.scss";
import { TbContract } from "react-icons/tb";

export default function Politica() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tarjeta}>
        <div className={styles.header}>
          <TbContract size={80} color='# 18488B'/>
          <h2 className={styles.title}>Política De Privacidad</h2>
        </div>

        <p className={styles.content}>Última actualización: 18/11/2025</p>

        <p className={styles.content}>
          En Eurodollar, nos tomamos muy en serio la privacidad de nuestros clientes y estamos comprometidos a proteger la información personal que nos proporcionas. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información personal cuando visitas nuestro sitio web y realizas compras en nuestra tienda.
        </p>

        <div className={styles.content}>

          <h3><strong>1. Información que Recopilamos</strong></h3>

          <p>
            Recopilamos la siguiente información personal para proporcionarte una experiencia óptima y mejorar nuestros servicios:
            <br /><br />
            Información de Contacto: Nombre, correo electrónico, número de teléfono.
            <br />
            Información de Compra: Detalles de tus compras, envíos y facturación.
            <br /><br />
            Información de Pago: Datos relacionados con las transacciones, como información de tarjeta de crédito (ten en cuenta que procesamos pagos a través de proveedores de servicios de pago seguros y no almacenamos datos de tarjetas de crédito en nuestros servidores).
            <br />
            Información Técnica: Datos sobre tu dispositivo, dirección IP, tipo de navegador, y páginas visitadas en nuestro sitio web.
          </p>

          <h3><strong>2. Uso de la Información</strong></h3>

          <p>
            Utilizamos la información personal que recopilamos para:
            <br /><br />
            Procesar Pedidos: Gestionar y cumplir tus pedidos, incluyendo la entrega de productos y la gestión de devoluciones.
            <br /><br />
            Mejorar Nuestros Servicios: Analizar tus preferencias para personalizar tu experiencia y mejorar la calidad de nuestros productos y servicios.
            <br /><br />
            Comunicación: Enviarte actualizaciones sobre tu pedido, promociones especiales, y noticias relacionadas con Eurodollar. Puedes optar por no recibir estos correos en cualquier momento.
            <br /><br />
            Soporte al Cliente: Ofrecerte asistencia y responder a tus consultas y comentarios.
          </p>

          <h3><strong>3. Protección de la Información</strong></h3>

          <p>
            Implementamos medidas de seguridad para proteger tu información personal contra el acceso no autorizado, la divulgación, la alteración y la destrucción. Utilizamos tecnologías de cifrado y protocolos de seguridad avanzados para proteger la información durante la transmisión y almacenamiento.
          </p>

          <h3><strong>4. Compartición de Información</strong></h3>

          <p>
            No compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
            <br /><br />
            Proveedores de Servicios: Compartimos tu información con proveedores de servicios que nos ayudan a procesar pagos, gestionar envíos y ofrecer soporte al cliente. Estos proveedores están obligados a proteger la confidencialidad de tu información y a utilizarla solo para los fines que se les ha proporcionado.
            <br /><br />
            Requisitos Legales: Podemos divulgar tu información si es requerido por la ley o en respuesta a solicitudes legales válidas.
          </p>

          <h3><strong>5. Cookies y Tecnologías Similares</strong></h3>

          <p>
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Las cookies nos ayudan a recordar tus preferencias y a analizar el uso de nuestro sitio. Puedes ajustar la configuración de tu navegador para desactivar las cookies, aunque esto podría afectar la funcionalidad del sitio.
          </p>

          <h3><strong>6. Tus Derechos</strong></h3>

          <p>
            Tienes derecho a acceder, corregir o eliminar la información personal que hemos recopilado sobre ti. También puedes oponerte al procesamiento de tus datos en ciertas circunstancias. Para ejercer estos derechos, por favor, contáctanos a través de la información proporcionada al final de esta política.
          </p>

          <h3><strong>7. Cambios en la Política de Privacidad</strong></h3>

          <p>
            Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras prácticas o en la legislación aplicable. Te notificaremos sobre cualquier cambio importante y te recomendamos revisar esta política periódicamente.
          </p>

          <h3><strong>8. Contacto</strong></h3>

          <p>
            Si tienes preguntas o inquietudes sobre nuestra Política de Privacidad, por favor contáctanos en:
            <br /><br />
            <br />Correo electrónico:<br />
            <br />gerencia@eurodollarcolombia.com<br />
    
            Teléfono: +57 324 6435412
   
            Dirección: Cra. 43A #6S-15, Local 168, El Poblado, Medellín.
          </p>

          <p>
            Gracias por confiar en Eurodollar. Nos comprometemos a proteger tu privacidad y a ofrecerte una experiencia segura y satisfactoria.
          </p>

        </div>
      </div>
    </div>
  );
}


