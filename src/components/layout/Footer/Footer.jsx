import styles from './Footer.module.scss'

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footerbottom}>
      <div>
        <p>
          &copy; {getCurrentYear()} codefeed
        </p>
      </div>
    </div>
  );
}

export default Footer;