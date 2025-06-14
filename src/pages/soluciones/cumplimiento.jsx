import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import Content from '@/components/layout/HeroSection/Content';



function CumplimientoPage() {
  return (
    <Fragment>
       <Head>
       <title>Seguro de Cumplimiento | Respaldo Legal y Comercial con Sura y Mile Toro</title>
       <meta 
        name='description'
        content='Garantiza el cumplimiento de tus contratos con pólizas avaladas por Sura y la asesoría experta de Mile Toro. Soluciones legales y seguras para tu empresa.'
      />
        <meta property="og:title" content="Seguro de Cumplimiento – Respaldo Legal y Comercial con Sura y Mile Toro" />
  <meta property="og:description" content="Garantiza el cumplimiento de tus contratos con pólizas avaladas por Sura y la asesoría experta de Mile Toro. Soluciones legales y seguras para tu empresa." />
  <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://miletoroseguros.vercel.app/soluciones/cumplimiento" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Seguro de Cumplimiento | Respaldo Legal y Comercial con Sura y Mile Toro" />
  <meta name="twitter:description" content="Garantiza el cumplimiento de tus contratos con pólizas avaladas por Sura y la asesoría experta de Mile Toro. Soluciones legales y seguras para tu empresa." />
  <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/empresariales.jpeg" />
          </Head> 
      <HeroSection 
      title="Cumplimiento"
      description="Protege tu empresa, impulsa tu tranquilidad"
      bgImage="/backgrounds/empresariales.jpeg"
        />
    <Content
      description="Protege al contratante en caso de incumplimiento por parte del contratista de las obligaciones pactadas en el contrato asegurado."
      finalmessage="No dejes tu empresa expuesta a lo inesperado. Asegura tu negocio hoy y enfócate en hacerlo crecer con confianza."
      />
    </Fragment>
  )
}

export default CumplimientoPage;