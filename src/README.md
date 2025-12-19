# Euro Dollar Colombia – Web

Sitio web corporativo para **Euro Dollar Colombia**, casa de cambio especializada en compra y venta de dólares y euros en Medellín.

El sitio está preparado técnicamente para campañas de **Google Ads, Meta Ads y analítica avanzada**, sin forzar configuraciones publicitarias específicas.

---

## 🧱 Stack técnico

- **Framework:** Next.js
- **Lenguaje:** JavaScript
- **Estilos:** SCSS Modules
- **Hosting:** (Vercel)
- **Analytics:** Google Analytics 4 (GA4)

---

## 📊 Analítica y tracking (IMPORTANTE)

### Google Analytics 4
GA4 está correctamente instalado vía `gtag.js`.

- Page views automáticos
- Eventos personalizados verificados en tiempo real (DebugView)

### Eventos disponibles
Los siguientes eventos **ya se están emitiendo desde el frontend**:

| Evento | Descripción |
|------|------------|
| `calculator_result_ready` | Usuario usa la calculadora y obtiene resultado |
| `click_whatsapp` | Click en botón de WhatsApp |
| `click_phone` | Click en llamada telefónica |
| `click_google_maps` | Click en ruta de Google Maps |
| `page_view` | Vista de página (automático GA4) |

📌 **Naming consistente (snake_case)**  
📌 Eventos listos para ser marcados como conversiones en plataformas Ads

---

## 🎯 Alcance del tracking

- No se instalaron píxeles publicitarios hardcodeados
- No se configuraron conversiones en Google Ads ni Meta Ads
- El sitio está **listo para ser conectado vía Google Tag Manager o plataformas de Ads**

👉 Esto permite a la agencia:
- Configurar conversiones sin modificar el código
- Usar server-side tracking si lo desean
- Conectar múltiples cuentas publicitarias

---

## 🧩 Estructura relevante

src/
├─ components/
├─ lib/
│ └─ google-analytics/
│ ├─ index.js
│ └─ events.js
├─ pages/
└─ styles/


Los eventos personalizados se disparan desde helpers centralizados para facilitar mantenimiento y escalabilidad.

---

## 🚀 Entorno

Variables de entorno requeridas:

NEXT_PUBLIC_GA_ID=G-LL90ZEJSB9

---

## 📌 Notas finales

- El sitio cumple buenas prácticas para pauta digital
- La configuración de campañas, audiencias y presupuestos corresponde a la agencia de marketing
- El frontend no requiere cambios para iniciar campañas

---

## 👤 Contacto técnico

Desarrollador: _(Santiago Montoya Gómez)_  
Rol: Frontend / Full-Stack  
Fecha de entrega: _(20/12/2025)_

