import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function ResponsabilidadPage() {
  return (
    <Fragment>
       <Head>
       <title>Seguro de Responsabilidad Civil | Protege tu Patrimonio con Mile Toro y Sura</title>
       <meta 
          name='description'
          content='Evita pérdidas económicas por daños a terceros con el seguro de responsabilidad civil de Mile Toro y Sura. Asesoría experta y cobertura completa.'
        />
          <meta property="og:title" content="Seguro de Responsabilidad Civil | Protege tu Patrimonio con Mile Toro y Sura" />
          <meta property="og:description" content="Evita pérdidas económicas por daños a terceros con el seguro de responsabilidad civil de Mile Toro y Sura. Asesoría experta y cobertura completa." />
          <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/responsabilidad" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Seguro de Responsabilidad Civil | Protege tu Patrimonio con Mile Toro y Sura" />
          <meta name="twitter:description" content="Evita pérdidas económicas por daños a terceros con el seguro de responsabilidad civil de Mile Toro y Sura. Asesoría experta y cobertura completa." />
          <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          </Head>
      <HeroSection 
      title="Responsabilidad Civil"
      description="Protege tu empresa, impulsa tu tranquilidad"
      bgImage="/backgrounds/empresariales.jpeg"
        />
    <Content
      description="Cuida el patrimonio de las personas y empresas ante los daños y perjuicios a otras personas o empresas y su patrimonio."
      finalmessage="No dejes tu empresa expuesta a lo inesperado. Asegura tu negocio hoy y enfócate en hacerlo crecer con confianza."
      />
    </Fragment>
  )
}

export default ResponsabilidadPage;