import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function SaludPage() {
  return (
    <Fragment>
       <Head>
       <title>Seguro de Salud | Protege tu Bienestar con Mile Toro y Sura</title>
       <meta 
          name='description'
          content='Cuida tu salud y la de tu familia con los seguros médicos de Mile Toro y Sura. Cobertura completa y asesoría personalizada para tu tranquilidad.'
        />
          <meta property="og:title" content="Seguro de Salud | Protege tu Bienestar con Mile Toro y Sura" />
          <meta property="og:description" content="Cuida tu salud y la de tu familia con los seguros médicos de Mile Toro y Sura. Cobertura completa y asesoría personalizada para tu tranquilidad." />
          <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/salud.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/salud" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Seguro de Salud | Protege tu Bienestar con Mile Toro y Sura" />
          <meta name="twitter:description" content="Cuida tu salud y la de tu familia con los seguros médicos de Mile Toro y Sura. Cobertura completa y asesoría personalizada para tu tranquilidad." />
          <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/salud.jpeg" />
          </Head>
      <HeroSection 
      title="Salud Familiar"
      description="Tu salud es lo primero: protege lo que más importa"
      bgImage="/backgrounds/salud.jpeg"
        />
    <Content
      description="En la vida, lo inesperado puede suceder en cualquier momento. Con nuestra póliza de salud, tú y tu familia estarán cubiertos ante cualquier eventualidad médica."
      feature1="Cobertura médica integral"
      feature2="Acceso a una amplia red de clínicas y hospitales"
      feature3="Atención médica de calidad sin largas esperas"
      feature4="Planes flexibles que se adaptan a tus necesidades y presupuesto"
      finalmessage="No pongas en pausa tu bienestar. Contrata hoy tu seguro de salud y vive con la tranquilidad de estar protegido"
      />
    </Fragment>
  )
}

export default SaludPage;