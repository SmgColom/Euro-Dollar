import { Fragment } from 'react';
import Head from 'next/head';
import HeroHome from '@/components/layout/HeroSection/HeroHome';

function HomePage() {
  return (
    <Fragment>
       <Head>
        <title>Seguros Mile Toro | Home</title>
        <meta
          name="description"
          content="Soluciones de seguros personalizadas con el respaldo de Sura y la asesoría de Mile Toro."
        />
           <meta property="og:title" content="Seguros Mile Toro | Home" />
  <meta property="og:description" content="Encuentra soluciones de seguros a tu medida con el respaldo de Sura y el acompañamiento de Mile Toro." />
  <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/Logo.jpeg" />
  <meta property="og:url" content="https://miletoroseguros.vercel.app/" />
  <meta property="og:type" content="website" />

  {/* Meta adicional para Twitter (opcional, pero recomendado) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Seguros Mile Toro | Home" />
  <meta name="twitter:description" content="Soluciones de seguros a tu medida con el respaldo de Sura y el acompañamiento de Mile Toro." />
  <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/Logo.jpeg" />
          </Head>
      <HeroHome 
      title="Nuestras Tasas"
      description="Después de conocernos e identificar juntos tus necesidades, construyamos las mejores soluciones de seguros a la medida para ti, tu familia, tu patrimonio y tu futuro,con el respaldo de la compañía líder del mercado, Seguros Sura"
       imageUrl="/tigre.jpg" alt={"Imagen tigre Suramericana"}
      />
    </Fragment>
  )
}

export default HomePage;