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
          <img src="/Logo_Blanco.png" 
          alt="Logo EuroDollar"   
          width={300}    
          height={300}
          />
        </div>
      </div>

      <div className={styles.copyright}>
        <span>&copy; {getCurrentYear()} Todos los derechos reservados</span>
      </div>

      <div className={styles.socialIcons}>
        <a 
          href="https://www.instagram.com/eurodollarcolombia?igsh=aHQxcGFjMnB5Nzh6" 
          title="Instagram" 
          aria-label="Instagram" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GrInstagram size={60} color='#f2f8f9'/>
        </a>

        <a 
          href="https://www.facebook.com/share/1JUB6tECk2/" 
          title="Facebook" 
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={60} color='#f2f8f9'/>
        </a>

        <a 
          href="Aqui va link de tiktok" 
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

