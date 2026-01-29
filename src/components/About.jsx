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
              Wynajmujemy minikoparki bez operatora. Działamy od 2010 roku. 
              Oferujemy prosty i bezproblemowy wynajem sprzętu budowlanego bez zbędnych formalności.
            </p>

            <h3 className={styles.subtitle}>Dla kogo</h3>
            <p className={styles.description}>
              Dla każdego, kto potrzebuje minikoparki. Firmy budowlane, rzemieślnicy, właściciele domów - 
              od małych wykopów pod fundamenty, po prace ogrodowe i instalacyjne.
            </p>

            <h3 className={styles.subtitle}>Dlaczego bez operatora</h3>
            <ul className={styles.bulletPoints}>
              <li>Nie potrzebujesz żadnych uprawnień ani dokumentów</li>
              <li>Minikoparką steruje się intuicyjnie - każdy da radę</li>
              <li>Niższa cena - płacisz tylko za sprzęt</li>
              <li>Pełna swoboda - pracujesz we własnym tempie</li>
            </ul>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderIcon}>🏗️</span>
              <p>SANY SY18C w akcji</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
