import { Fragment, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "@/styles/scss/main.scss";
import Layout from "@/components/layout";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {};
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <Fragment>
      {/* ✅ Schema.org – DEBE ir fuera de <Head> */}
      <Script
        id="schema-financial-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "Euro Dollar Colombia",
            url: "https://eurodollarcolombia.com",
            logo: "https://eurodollarcolombia.com/Logo.png",
            image: "https://eurodollarcolombia.com/Logo.png",
            description:
              "Casa de cambio especializada en compra y venta de dólares y euros en Medellín. Servicio rápido, seguro y confiable.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Medellín",
              addressCountry: "CO",
            },
            areaServed: {
              "@type": "City",
              name: "Medellín",
            },
            currenciesAccepted: "COP, USD, EUR",
            sameAs: [
              "https://www.instagram.com/TU_INSTAGRAM",
              "https://www.facebook.com/TU_FACEBOOK",
            ],
          }),
        }}
      />

      <Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=G-LL90ZEJSB9"
/>

<Script
  id="ga4-init"
  strategy="afterInteractive"
>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-LL90ZEJSB9', {
      page_path: window.location.pathname,
    });
  `}
</Script>


      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* SEO Básico */}
        <title>Euro Dollar Colombia | Cambio de Divisas Seguro en Medellín</title>
        <meta
          name="description"
          content="Casa de cambio Euro y Dólar en Medellín. Tasas competitivas, atención segura y rápida en Oviedo y Aeropuerto JMC."
        />
        <meta
          name="keywords"
          content="cambio de divisas Medellín, euro a peso colombiano, dólar a peso colombiano, casa de cambio Medellín"
        />
        <meta name="author" content="Euro Dollar Colombia" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eurodollarcolombia.com/" />
        <meta
          property="og:title"
          content="Euro Dollar Colombia | Cambio de Divisas Seguro"
        />
        <meta
          property="og:description"
          content="Compra y venta de euros y dólares en Medellín con tasas competitivas y total seguridad."
        />
        <meta
          property="og:image"
          content="https://eurodollarcolombia.com/Logo.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Euro Dollar Colombia" />
        <meta
          name="twitter:description"
          content="Cambio de divisas seguro y rápido en Medellín."
        />
        <meta
          name="twitter:image"
          content="https://eurodollarcolombia.com/Logo.png"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default App;
