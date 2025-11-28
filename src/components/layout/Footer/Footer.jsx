import styles from './Footer.module.scss'
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <div className={styles.footerwrapper}>
      
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <img src="/Logo_Blanco.jpeg" alt="Logo EuroDollar" />
        </div>
      </div>

      <div className={styles.copyright}>
        <span>&copy; {getCurrentYear()} Todos los derechos reservados</span>
      </div>

      <div className={styles.socialIcons}>
        <a 
          href="https://instagram.com/mile_toro" 
          title="Instagram" 
          aria-label="Instagram" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GrInstagram size={60} color='#f2f8f9'/>
        </a>

        <a 
          href="https://www.facebook.com/mile.torogarcia?mibextid=wwXIfr&mibextid=wwXIfr" 
          title="Facebook" 
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={60} color='#f2f8f9'/>
        </a>

        <a 
          href="https://www.facebook.com/mile.torogarcia?mibextid=wwXIfr&mibextid=wwXIfr" 
          title="Tiktok" 
          aria-label="Tiktok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTikTok size={63} color='#f2f8f9' />
        </a>
      </div>

    </div>
  );
}

export default Footer;

