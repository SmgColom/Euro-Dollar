import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function TransportePage() {
  return (
    <Fragment>
       <Head>
       <title>Seguro de Transporte | Protege tus mercancías con Mile Toro y Sura</title>
       <meta 
          name='description'
          content='Asegura tus cargas y vehículos con el respaldo de Sura. Protección para transportes terrestres, aéreos o marítimos, con asesoría experta de Mile Toro.'
        />
          <meta property="og:title" content="Seguro de Transporte | Protege tus mercancías con Mile Toro y Sura" />
          <meta property="og:description" content="Asegura tus cargas y vehículos con el respaldo de Sura. Protección para transportes terrestres, aéreos o marítimos, con asesoría experta de Mile Toro." />
          <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/transporte" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Seguro de Transporte | Protege tus mercancías con Mile Toro y Sura" />
          <meta name="twitter:description" content="Asegura tus cargas y vehículos con el respaldo de Sura. Protección para transportes terrestres, aéreos o marítimos, con asesoría experta de Mile Toro." />
          <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          </Head>
      <HeroSection 
      title="Transporte de mercancias"
      description="Protege tu empresa, impulsa tu tranquilidad"
      bgImage="/backgrounds/empresariales.jpeg"
        />
    <Content
      description="Proteger a los diferentes actores logísticos ante los riesgos asociados a la movilización de mercancías."
      finalmessage="No dejes tu empresa expuesta a lo inesperado. Asegura tu negocio hoy y enfócate en hacerlo crecer con confianza."
      />
    </Fragment>
  )
}

export default TransportePage;