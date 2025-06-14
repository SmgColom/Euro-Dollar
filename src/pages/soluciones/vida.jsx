import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function VidaPage() {
  return (
    <Fragment>
       <Head>
       <title>Seguro de Vida | Protección familiar con Mile Toro y Sura</title>
       <meta 
          name='description'
          content='Protege a quienes más amas con el Seguro de Vida de Sura. Asesoría personalizada de Mile Toro para tu tranquilidad y la de tu familia.'
        />
          <meta property="og:title" content="Seguro de Vida | Protección familiar con Mile Toro y Sura" />
          <meta property="og:description" content="Protege a quienes más amas con el Seguro de Vida de Sura. Asesoría personalizada de Mile Toro para tu tranquilidad y la de tu familia." />
          <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/vida.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/vida" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Seguro de Vida | Protección familiar con Mile Toro y Sura" />
          <meta name="twitter:description" content="Protege a quienes más amas con el Seguro de Vida de Sura. Asesoría personalizada de Mile Toro para tu tranquilidad y la de tu familia." />
          <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/vida.jpeg" />
          </Head>
      <HeroSection 
      title="Vida Individual"
      description="Protege el futuro de quienes más amas💙"
      bgImage="/backgrounds/vida.jpeg"
        />
    <Content
      description="La vida está llena de momentos valiosos, y aunque no podemos predecir el futuro, sí podemos prepararnos para él. Con nuestra póliza de seguro de vida, garantizas tranquilidad y respaldo económico para tus seres queridos cuando más lo necesiten."
      feature1="Apoyo financiero para tu familia en caso de fallecimiento"
      feature2="Cobertura flexible y adaptada a tus necesidades"
      feature3="Opciones de ahorro e inversión a largo plazo"
      feature4="Trámite fácil, rápido y sin complicaciones"
      finalmessage="Haz que tu legado sea seguridad y amor. Asegura tu vida hoy y vive con la tranquilidad de saber que estás cuidando a los tuyos."
      />
    </Fragment>
  )
}

export default VidaPage;