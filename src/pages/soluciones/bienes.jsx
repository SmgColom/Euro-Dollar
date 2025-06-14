import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function BienesPage() {
  return (
    <Fragment>
       <Head>
       <title>Seguros para Bienes y Patrimonio |   Protección con Sura y Mile Toro</title>
       <meta 
          name='description'
          content='Protege tu empresa o patrimonio con seguros respaldados por Sura y asesoría personalizada de Mile Toro. Soluciones a tu medida.'
        />
         <meta property="og:title" content="Seguros para Bienes y Patrimonio |   Protección con Sura y Mile Toro" />
          <meta property="og:description" content="Protege tu empresa o patrimonio con seguros respaldados por Sura y asesoría personalizada de Mile Toro. Soluciones a tu medida." />
          <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/bienes" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Seguros para Bienes y Patrimonio |   Protección con Sura y Mile Toro" />
          <meta name="twitter:description" content="Protege tu empresa o patrimonio con seguros respaldados por Sura y asesoría personalizada de Mile Toro. Soluciones a tu medida." />
          <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          </Head>
      <HeroSection 
      title="Bienes y Patrimonio"
      description="Protege tu empresa, impulsa tu tranquilidad"
      bgImage="/backgrounds/empresariales.jpeg"
        />
    <Content
      description="Cubre los costos de reparación o reemplazo de los bienes en caso de afectaciones causadas por situaciones accidentales, súbitas e imprevistas."
      finalmessage="No dejes tu empresa expuesta a lo inesperado. Asegura tu negocio hoy y enfócate en hacerlo crecer con confianza."
      />
    </Fragment>
  )
}

export default BienesPage;