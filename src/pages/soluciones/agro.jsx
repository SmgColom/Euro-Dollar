import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function AgroPage() {
  return (
    <Fragment>
       <Head>
        <title>Seguros de Agro|Seguros Mile Toro</title>
        <meta 
    name='description'
    content='Protege tu actividad agropecuaria con Seguros Sura. Asesoría personalizada con Mile Toro y respaldo confiable para el sector agrícola.'
  />
  <meta property="og:title" content="Seguros de Agro|Seguros Mile Toro" />
  <meta property="og:description" content="Protege tu actividad agropecuaria con seguros Sura. Asesoría personalizada con Mile Toro y respaldo confiable para el sector agrícola." />
  <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/agro" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Seguros de Agro|Seguros Mile Toro" />
  <meta name="twitter:description" content="Protege tu actividad agropecuaria con seguros Sura. Asesoría personalizada con Mile Toro y respaldo confiable para el sector agrícola." />
  <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
</Head>
      <HeroSection 
      title="Agro"
      description="Protege tu empresa, impulsa tu tranquilidad"
      bgImage="/backgrounds/empresariales.jpeg"
        />
    <Content
      description="Protege a los productores agropecuarios contra pérdidas económicas derivadas de eventos climáticos y naturales que afectan sus cultivos y animales vivos."
      finalmessage="No dejes tu empresa expuesta a lo inesperado. Asegura tu negocio hoy y enfócate en hacerlo crecer con confianza."
      />
    </Fragment>
  )
}

export default AgroPage;