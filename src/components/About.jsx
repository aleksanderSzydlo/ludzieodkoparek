import styles from './About.module.css';

const About = () => {
  return (
    <section id="o-nas" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>O nas</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>Kim jesteśmy</h3>
            <p className={styles.description}>
              Firma świadcząca usługi wynajmu koparek z operatorem. Działamy od 2010 roku. 
              Specjalizujemy się w pracach ziemnych, wykopach i wyburzeniach.
            </p>

            <h3 className={styles.subtitle}>Dla kogo pracujemy</h3>
            <p className={styles.description}>
              Współpracujemy zarówno z firmami budowlanymi, jak i klientami prywatnymi. 
              Od małych wykopów pod fundamenty, po duże projekty infrastrukturalne.
            </p>

            <h3 className={styles.subtitle}>Dlaczego z operatorem</h3>
            <ul className={styles.bulletPoints}>
              <li>Nie musisz mieć uprawnień ani doświadczenia</li>
              <li>Operator zna możliwości maszyny i pracuje efektywnie</li>
              <li>Bierzemy odpowiedzialność za sprzęt i jakość pracy</li>
              <li>To po prostu szybciej i bezpieczniej</li>
            </ul>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderIcon}>🏗️</span>
              <p>Zdjęcie operatora przy pracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
