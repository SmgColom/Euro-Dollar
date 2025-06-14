import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function MultiriesgoPage() {
  return (
    <Fragment>
       <Head>
       <title>Seguro Multiriesgo Empresarial – Protección Total con Mile Toro y Sura</title>
       <meta 
          name='description'
          content='Protege tu empresa o negocio con el seguro multiriesgo de Sura y Mile Toro. Cobertura contra incendios, robos, desastres y más.'
        />
          <meta property="og:title" content="Seguro Multiriesgo Empresarial – Protección Total con Mile Toro y Sura" />
          <meta property="og:description" content="Protege tu empresa o negocio con el seguro multiriesgo de Sura y Mile Toro. Cobertura contra incendios, robos, desastres y más." />
          <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/multiriesgo" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Seguro Multiriesgo Empresarial – Protección Total con Mile Toro y Sura" />
          <meta name="twitter:description" content="Protege tu empresa o negocio con el seguro multiriesgo de Sura y Mile Toro. Cobertura contra incendios, robos, desastres y más." />
          <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          </Head>
      <HeroSection 
      title="Multiriesgo Empresarial"
      description="Protege tu empresa, impulsa tu tranquilidad"
      bgImage="/backgrounds/empresariales.jpeg"
        />
    <Content
      description="Tu negocio es el resultado de esfuerzo, visión y compromiso. Con nuestra póliza de seguros empresariales, te ayudamos a proteger lo que has construido frente a riesgos operativos, patrimoniales y legales."
      feature1="Cobertura contra incendios, robos, daños materiales y responsabilidad civil"
      feature2="Protección para maquinaria, equipos, mercancía y activos clave"
      feature3="Planes personalizados según el tamaño y sector de tu empresa"
      feature4="Asistencia jurídica y soporte especializado"
      finalmessage="No dejes tu empresa expuesta a lo inesperado. Asegura tu negocio hoy y enfócate en hacerlo crecer con confianza."
      />
    </Fragment>
  )
}

export default MultiriesgoPage;