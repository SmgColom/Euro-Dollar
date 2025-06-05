import { Fragment } from 'react';
import Head from 'next/head';
import HeroHome from '@/components/layout/HeroSection/HeroHome';

function HomePage() {
  return (
    <Fragment>
       <Head>
        <title>SegurosMileToro | Home</title>
        <meta 
          name='description'
          description='Aquí encuentras las soluciones de seguros a tu medida con el mejor respaldo de Sura'
          />

                  {/* Meta etiquetas Open Graph (SEO y redes sociales) */}
        <meta property="og:title" content="SegurosMileToro | Home" />
        <meta property="og:description" content="Aquí encuentras las mejores soluciones de seguros con el respaldo de Sura." />
        <meta property="og:image" content="https://miletoroseguros.vercel.app/tigre.jpg" />
        <meta property="og:url" content="https://miletoroseguros.vercel.app/" />
        <meta property="og:type" content="website" />
          </Head>
      <HeroHome 
      title="Proteccion personal y patrimonial para toda la familia"
      description="Despues de conocernos e identificar juntos tus necesidades, construyamos las mejores soluciones de seguros a la medida para ti, tu familia, tu patrimonio y tu futuro,con el respaldo de la compañía líder del mercado, Seguros Sura"
       imageUrl="/tigre.jpg" alt={"Imagen tigre Suramericana"}
      />
    </Fragment>
  )
}

export default HomePage;