import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function MovilidadPage() {
  return (
    <Fragment>
       <Head>
       <title>Seguro para Carros | Protección Total con Sura y Mile Toro</title>
       <meta 
          name='description'
          content='Conduce tranquilo con el seguro para carros de Sura y Mile Toro. Protección contra daños, robos y accidentes con asesoría personalizada.'
        />
          <meta property="og:title" content="Seguro para Carros | Protección Total con Sura y Mile Toro" />
          <meta property="og:description" content="Conduce tranquilo con el seguro para carros de Sura y Mile Toro. Protección contra daños, robos y accidentes con asesoría personalizada." />
          <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/movilidad.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/movilidad" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Seguro para Carros | Protección Total con Sura y Mile Toro" />
          <meta name="twitter:description" content="Conduce tranquilo con el seguro para carros de Sura y Mile Toro. Protección contra daños, robos y accidentes con asesoría personalizada." />
          <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/movilidad.jpeg" />
          </Head>
      <HeroSection 
      title="Movilidad"
      description="Conduce tranquilo, nosotros te respaldamos"
      bgImage="/backgrounds/movilidad.jpeg"
        />
    <Content
      description="Tu vehículo es más que un medio de transporte: es parte de tu día a día. Con nuestra póliza de seguro para autos, estarás protegido ante cualquier imprevisto en la vía."
      feature1="Cobertura contra accidentes, robos y daños a terceros"
      feature2="Asistencia 24/7 en carretera"
      feature3="Red de talleres aliados y servicio ágil de atención"
      feature4="Planes personalizados según tu tipo de vehículo y uso"
      finalmessage="No dejes tu seguridad al azar. Asegura tu auto hoy y maneja con la confianza de estar en buenas manos."
      />
    </Fragment>
  )
}

export default MovilidadPage;