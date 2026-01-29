import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🚜</span>
          Ludzie od koparek
        </div>

        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <button onClick={() => scrollToSection('o-nas')}>
                O nas
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('koparki')}>
                Koparki
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('cennik')}>
                Cennik
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('blog')}>
                Blog
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('kontakt')} className={styles.ctaButton}>
                Kontakt
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
