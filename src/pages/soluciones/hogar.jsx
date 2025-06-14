import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function HogarPage() {
  return (
    <Fragment>
       <Head>
       <title>Seguro de Hogar | Protege tu Vivienda con Sura y Mile Toro</title>
       <meta 
          name='description'
          content='Protege tu vivienda, tus bienes y a tu familia con seguros de hogar respaldados por Sura y asesoría personalizada de Mile Toro.'
        />
          <meta property="og:title" content="Seguro de Hogar | Protege tu Vivienda con Sura y Mile Toro" />
            <meta property="og:description" content="Protege tu vivienda, tus bienes y a tu familia con seguros de hogar respaldados por Sura y asesoría personalizada de Mile Toro." />
            <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/hogar.jpeg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/hogar" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Seguro de Hogar | Protege tu Vivienda con Sura y Mile Toro" />
            <meta name="twitter:description" content="Protege tu vivienda, tus bienes y a tu familia con seguros de hogar respaldados por Sura y asesoría personalizada de Mile Toro." />
            <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/hogar.jpeg" />
          </Head>
      <HeroSection 
      title="Hogar"
      description="Tu hogar, siempre protegido"
      bgImage="/backgrounds/hogar.jpeg"
        />
    <Content
      description="Tu casa es más que un lugar: es donde construyes recuerdos, compartes momentos y te sientes seguro. Con nuestra póliza de seguro para el hogar, cuidas lo que más valoras frente a imprevistos como incendios, robos, daños por agua y más."
      feature1="Cobertura para la estructura y el contenido del hogar"
      feature2="Protección ante desastres naturales, robos y accidentes domésticos"
      feature3="Asistencia domiciliaria 24/7 (plomería, cerrajería, electricidad, etc.)"
      feature4="Planes flexibles según el tipo de vivienda y tus necesidades"
      finalmessage="No esperes a que algo pase para actuar. Asegura tu hogar hoy y vive con la tranquilidad de estar respaldado."
      />
    </Fragment>
  )
}

export default HogarPage;