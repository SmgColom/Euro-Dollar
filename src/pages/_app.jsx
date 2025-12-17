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
      <Head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default App;





