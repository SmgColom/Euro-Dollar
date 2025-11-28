import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import '@/styles/scss/main.scss';
import Layout from '@/components/layout';
import * as ga from '../lib/google-analytics';
import Calculator from '@/components/layout/HeroSection/Calculator';
import Quienes_Somos from '@/components/layout/HeroSection/Quienes_Somos';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      <Head>
        <meta name="google-site-verification" content="CrzBLjCsCb_XieIj02F3s_rKQckw1GkCbUP_EsBQfqQ" />
        <link rel="icon" type="image/png" href="/Icon.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />
        <Calculator rates={pageProps.rates || []} />
        <Quienes_Somos />
      </Layout>
    </Fragment>
  );
}

export default App;


