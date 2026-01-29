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
            Wynajem koparek z operatorem
          </h1>
          <p className={styles.subtitle}>
            Sprzęt, który robi robotę. Operator, który wie co robi.
          </p>
          <p className={styles.description}>
            Profesjonalne usługi koparek z doświadczonymi operatorami. 
            Realizujemy projekty budowlane każdej skali – szybko, sprawnie i bezpiecznie.
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
