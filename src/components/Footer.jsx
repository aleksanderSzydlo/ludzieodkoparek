import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <h3 className={styles.logo}>
              <img src="/logos/logo2.png" alt="Ludzie od koparek logo" className={styles.logoImage} />
            </h3>
            <p className={styles.description}>
              Profesjonalny wynajem minikoparek bez operatora. 
              Doświadczenie w branży budowlanej.
            </p>
            <div className={styles.social}>
              <a href="https://facebook.com" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
              <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Nawigacja</h4>
            <nav className={styles.links}>
              <button onClick={scrollToTop}>Strona główna</button>
              <button onClick={() => scrollToSection('o-nas')}>O nas</button>
              <button onClick={() => scrollToSection('koparki')}>Koparki</button>
              <button onClick={() => scrollToSection('cennik')}>Cennik</button>
              <button onClick={() => scrollToSection('blog')}>Blog</button>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Usługi</h4>
            <nav className={styles.links}>
              <a href="#">Wynajem koparek</a>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Kontakt</h4>
            <address className={styles.address}>
              <p>📞 <a href="tel:+48692426974">+48 692 426 974</a></p>
              <p>📞 <a href="tel:+48664716960">+48 664 716 960</a></p>
              <p>📧 biuro@ludzieodkoparek.pl</p>
              <p className={styles.emergency}>
                🚨 Awaryjny: +48 692 426 974
              </p>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Ludzie od koparek. Wszelkie prawa zastrzeżone.
          </p>
          <div className={styles.legal}>
            <a href="#">Polityka prywatności</a>
            <span className={styles.separator}>•</span>
            <a href="#">Regulamin</a>
            <span className={styles.separator}>•</span>
            <a href="#">RODO</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
