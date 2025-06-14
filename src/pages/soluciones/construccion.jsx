import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function ConstruccionPage() {
  return (
    <Fragment>
       <Head>
       <title>Seguro Todo Riesgo Construcción | Protege tu Obra con Sura y Mile Toro</title>

       <meta 
          name='description'
          content='Asegura tu proyecto de construcción con pólizas Todo Riesgo respaldadas por Sura y asesoría profesional de Mile Toro. Protege tu inversión de principio a fin.'
        />
          <meta property="og:title" content="Seguro Todo Riesgo Construcción – Protege tu Obra con Sura y Mile Toro" />
          <meta property="og:description" content="Asegura tu proyecto de construcción con pólizas Todo Riesgo respaldadas por Sura y asesoría profesional de Mile Toro. Protege tu inversión de principio a fin." />
          <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tusitio.com/soluciones/todo-riesgo-construccion" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Seguro Todo Riesgo Construcción – Protege tu Obra con Sura y Mile Toro" />
          <meta name="twitter:description" content="Asegura tu proyecto de construcción con pólizas Todo Riesgo respaldadas por Sura y asesoría profesional de Mile Toro. Protege tu inversión de principio a fin." />
          <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />

          </Head>
      <HeroSection 
      title="Todo Riesgo Construcción"
      description="Protege tu empresa, impulsa tu tranquilidad"
      bgImage="/backgrounds/empresariales.jpeg"
        />
    <Content
      description="Protege tu empresa y contratistas frente a los daños que sucedan de manera súbita, accidental e imprevista y afecten sus proyectos."
      finalmessage="No dejes tu empresa expuesta a lo inesperado. Asegura tu negocio hoy y enfócate en hacerlo crecer con confianza."
      />
    </Fragment>
  )
}

export default ConstruccionPage;