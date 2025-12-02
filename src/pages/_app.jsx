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
        <link rel="icon" type="image/png" href="/Icon.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default App;





