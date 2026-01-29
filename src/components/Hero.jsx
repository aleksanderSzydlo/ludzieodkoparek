import styles from './Hero.module.css';

const Hero = () => {
  const handleCall = () => {
    window.location.href = 'tel:+48123456789';
  };

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Wynajem minikoparek
          </h1>
          <p className={styles.subtitle}>
            Wynajmij i prowadź sam. Bez papierów, bez komplikacji.
          </p>
          <p className={styles.description}>
            Minikoparka SANY SY18C 1,9 ton - nowoczesny sprzęt, który możesz wynająć i obsługiwać samodzielnie. 
            Bez uprawnień, bez operatora, bez zbędnych formalności.
          </p>
          <div className={styles.cta}>
            <button className={styles.primaryBtn} onClick={handleCall}>
              Zadzwoń teraz
            </button>
            <button className={styles.secondaryBtn} onClick={scrollToContact}>
              Darmowa wycena
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
