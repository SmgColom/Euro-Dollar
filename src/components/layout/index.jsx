import styles from './Layout.module.scss';
import Header from "./Header";
import Footer from "./Footer";



function Layout(props) {
  return (
    <div className={`${styles.app}`}>
      <Header />
      <main className={styles.main}>
        {props.children}
      </main> 
      <Footer />
    </div>
  );
}

export default Layout;