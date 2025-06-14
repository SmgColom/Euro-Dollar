import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function ArlPage() {
  return (
    <Fragment>
       <Head>
       <title>Afiliación ARL Sura | Protección Laboral con Mile Toro</title>
       <meta 
        name='description'
        content='Afíliate a la ARL Sura con asesoría de Mile Toro. Protege a tus empleados con cobertura de riesgos laborales y respaldo especializado.'
      />
        <meta property="og:title" content="Afiliación ARL Sura – Protección Laboral con Mile Toro" />
        <meta property="og:description" content="Afíliate a la ARL Sura con asesoría de Mile Toro. Protege a tus empleados con cobertura de riesgos laborales y respaldo especializado." />
        <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/arl" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Afiliación ARL Sura | Protección Laboral con Mile Toro" />
        <meta name="twitter:description" content="Afíliate a la ARL Sura con asesoría de Mile Toro. Protege a tus empleados con cobertura de riesgos laborales y respaldo especializado." />
        <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          </Head>
      <HeroSection 
      title="ARL Sura"
      description="Protege a tu equipo, fortalece tu empresa"
      bgImage="/backgrounds/empresariales.jpeg"
        />
    <Content
      description="En SURA, entendemos que el capital humano es el activo más valioso de tu organización. Nuestra Administradora de Riesgos Laborales (ARL) está diseñada para prevenir, atender y proteger a tus colaboradores frente a accidentes de trabajo y enfermedades laborales."
      feature1="Cobertura integral en salud ocupacional"
      feature2="Acompañamiento en prevención y gestión del riesgo"
      feature3="Atención médica especializada y oportuna"
      feature4="Asesoría en seguridad y salud en el trabajo (SST)"
      feature5="Afiliación fácil y 100% en línea"
      finalmessage="Con ARL SURA, tu empresa cumple con la normativa legal y, lo más importante, cuida el bienestar de quienes la hacen posible."
      />
    </Fragment>
  )
}

export default ArlPage;