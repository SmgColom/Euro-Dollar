import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './Header.module.scss';
import Image from 'next/image'; 

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = () => setScrolled(window.scrollY > 50);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>


<div className={styles.brand}>
<Image
  src="/Logo.png"
  alt="Logo EuroDollar"
  width={540}    
  height={540}
/>
</div>


      {/* Botón hamburguesa */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú de navegación con clase activa si está abierto */}
      <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
        <ul>
          <li><Link href="#inicio" onClick={() => setMenuOpen(false)}>Tasa</Link></li>
          <li><Link href="#calculator" onClick={() => setMenuOpen(false)}>Calculadora</Link></li>
          <li><Link href="#quienes" onClick={() => setMenuOpen(false)}>Quienes Somos</Link></li>
          <li><Link href="#visitanos" onClick={() => setMenuOpen(false)}>Visítanos</Link></li>
          <li><Link href="#contacto" onClick={() => setMenuOpen(false)}>Contáctanos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;






