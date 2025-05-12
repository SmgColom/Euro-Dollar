import { Fragment } from 'react';
import Head from 'next/head';
import HeroHome from '@/components/layout/HeroSection/HeroHome';

function HomePage() {
  return (
    <Fragment>
       <Head>
        <title>SegurosMileToro | Home</title>
        <meta 
          name='Seguros Mile Toro '
          description='Aquí encuentras las soluciones de seguros a tu medida con el mejor respaldo de Sura'
          />
          </Head>
      <HeroHome 
      title="Proteccion personal y patrimonial para toda la familia"
      description="Despues de conocernos e identificar juntos tus necesidades, construyamoslas mejores soluciones de seguros a la medida para ti, tu familia, tu patrimonio y tu futuro,con el respaldo de la compañía líder del mercado, Seguros Sura"
       imageUrl="/tigre.jpg"
      />
    </Fragment>
  )
}

export default HomePage;