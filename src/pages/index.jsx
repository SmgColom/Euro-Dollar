import { Fragment } from 'react';

import HeroSection from '@/components/layout/HeroSection';

function HomePage() {
  return (
    <Fragment>
      <HeroSection 
      title="Proteccion personal y patrimonial para toda la familia"
      description="Construyamos juntos las mejores souciones de seguros a la medida de tus necesidades"
      bgImage="/backgrounds/Imagenperfil.jpeg"
      />
    </Fragment>
  )
}

export default HomePage;