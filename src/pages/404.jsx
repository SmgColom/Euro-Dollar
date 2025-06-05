// CUSTOM 404 PAGE
import Link from "next/link"
import { Fragment } from 'react';

import HeroHome from '@/components/layout/HeroSection/HeroHome';

function NotFoundPage() {
  return (
    <Fragment>
      <HeroHome 
      title="Hmm..."
      description="Página no encontrada, por favor vuelve al inicio "
       imageUrl="/Notfound.jpg" 
      />
<div style={{ textAlign: 'center' }}>
  <Link href="/" style={{ color: '#232f45' }}>
    Volver a inicio
  </Link>
</div>
    </Fragment>
    
  )
}


export default NotFoundPage