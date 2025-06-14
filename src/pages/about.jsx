import { Fragment } from 'react';
import Head from 'next/head';
import HeroHome from '@/components/layout/HeroSection/HeroHome';

function AboutPage() {
  return (
    <Fragment>
       <Head>
       <title>Mile Toro | Asesora experta en Seguros Sura</title>

       <meta 
          name='description'
          content='Descubre quién es Mile Toro, asesora experta en Seguros Sura. Conoce su experiencia, valores y cómo puede ayudarte con soluciones personalizadas.'
        />
        <meta property="og:title" content="Mile Toro | Asesora experta en Seguros Sura" />
          <meta property="og:description" content="Descubre quién es Mile Toro, asesora experta en Seguros Sura. Conoce su experiencia, valores y cómo puede ayudarte con soluciones personalizadas." />
          <meta property="og:image" content="https://miletoroseguros.vercel.app/public/backgrounds/Imagenperfil.jpeg" />
          <meta property="og:type" content="profile" />
          <meta property="og:url" content="https://miletoroseguros.vercel.app/about" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mile Toro | Asesora experta en Seguros Sura" />
          <meta name="twitter:description" content="Descubre quién es Mile Toro, asesora experta en Seguros Sura. Conoce su experiencia, valores y cómo puede ayudarte con soluciones personalizadas." />
          <meta name="twitter:image" content="https://miletoroseguros.vercel.app/public/backgrounds/Imagenperfil.jpeg" />
          </Head>
      <HeroHome 
      title="Mile Toro, tu asesora de soluciones en seguros"
      description="Porque cuidar lo que más quieres no debería ser complicado,estoy para acompañarte con empatía, claridad y de la mano de la compañía que cumple cuando más lo necesitas. Solo dime qué te preocupa, y construimos juntos la mejor solución. 💙"
       imageUrl="/Imagenperfil.jpeg"
      />
    </Fragment>
  )
}

export default AboutPage;