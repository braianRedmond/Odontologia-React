import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';
import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}>Volver al inicio</button>
        <div className={`${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} ${styles.footer}`}>
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                <img className={`${isDarkMode ? styles.iconsDark : ''} ${styles.dhLogo}`} src="/images/DH.png" alt='DH-logo' />
              </div>
              <div className={`col-sm-12 col-lg-6 ${isDarkMode ? styles.iconsDark : ''} ${styles.icons}`}>
                <Link to='www.facebook.com'><img src="/images/ico-facebook.png" alt="Facebook" className={styles.icon} /></Link>
                <img src="/images/ico-instagram.png" alt="Instagram" className={styles.icon} />
                <img src="/images/ico-whatsapp.png" alt="Whatsapp" className={styles.icon} />
                <img src="/images/ico-tiktok.png" alt="Tik-Tok" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer >
  )
}

export default Footer