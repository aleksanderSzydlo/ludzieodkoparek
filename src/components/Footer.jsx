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
              <span className={styles.logoIcon}>🚜</span>
              Ludzie od koparek
            </h3>
            <p className={styles.description}>
              Profesjonalny wynajem koparek z operatorem. 
              15 lat doświadczenia w branży budowlanej.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">📘</a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">📷</a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">💼</a>
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
              <a href="#">Prace ziemne</a>
              <a href="#">Wyburzenia</a>
              <a href="#">Usługi transportowe</a>
              <a href="#">Doradztwo techniczne</a>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Kontakt</h4>
            <address className={styles.address}>
              <p>📞 +48 123 456 789</p>
              <p>📧 kontakt@ludzieodkoparek.pl</p>
              <p>📍 ul. Budowlana 123<br />00-000 Warszawa</p>
              <p className={styles.emergency}>
                🚨 Awaryjny: +48 999 888 777
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
