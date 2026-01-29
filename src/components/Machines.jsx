import styles from './Machines.module.css';

const Machines = () => {
  const machine = {
    name: 'SANY SY18C',
    weight: '1,9 tony',
    description: 'Kompaktowa minikoparka stworzona z myślą o precyzyjnej pracy w trudnych warunkach',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
    features: [
      {
        title: 'Wygodna kabina',
        description: 'Ogrzewanie, wentylacja, regulowane podłokietniki - komfort pracy w każdych warunkach'
      },
      {
        title: 'Silnik Yanmar',
        description: '14,6 kW / 19,8 KM - niezawodny, ekonomiczny, Stage V'
      },
      {
        title: 'Regulowane podwozie',
        description: 'Szerokość 980-1350mm - przejedzie przez wąską bramę'
      },
      {
        title: 'Hydraulika Casappa',
        description: 'Włoska hydraulika - precyzyjna, sprawdzona, bezawaryjna'
      },
      {
        title: 'Bogate wyposażenie',
        description: 'Szybkozłącze, LED, dodatkowy obwód hydrauliczny, automatyczne sterowanie obrotami'
      },
      {
        title: 'Łatwy transport',
        description: 'Masa 1920kg - zmieści się na przyczepie 2,7t'
      }
    ],
    specs: [
      { label: 'Masa operacyjna', value: '1920 kg' },
      { label: 'Moc silnika', value: '19,8 KM' },
      { label: 'Maks. zasięg kopania', value: '4000 mm' },
      { label: 'Maks. głębokość', value: '2360 mm' },
      { label: 'Maks. wysokość wysypu', value: '2360 mm' },
      { label: 'Zbiornik paliwa', value: '23 L' },
      { label: 'Prędkość jazdy', value: '3,8 km/h' },
      { label: 'Szerokość', value: '980 / 1350 mm' }
    ],
    advantages: [
      'Wygodna kabina z ogrzewaniem i wentylacją',
      'Bezpieczeństwo i komfort operatora',
      'Bogate wyposażenie standardowe',
      'Regulowane podwozie - przejedziesz przez bramę',
      'Dodatkowy obwód hydrauliczny do młota',
      'Łatwy transport na przyczepie 2,7t',
      '5 lat gwarancji w cenie!'
    ]
  };

  return (
    <section id="koparki" className={styles.machines}>
      <div className={styles.container}>
        <h2 className={styles.title}>Minikoparka SANY SY18C</h2>
        <p className={styles.subtitle}>{machine.description}</p>

        <div className={styles.mainCard}>
          <div className={styles.imageSection}>
            <img 
              src={machine.image} 
              alt={machine.name}
              className={styles.mainImage}
            />
            <span className={styles.weightTag}>{machine.weight}</span>
          </div>

          <div className={styles.infoSection}>
            <h3 className={styles.machineName}>{machine.name}</h3>
            
            <div className={styles.featuresGrid}>
              {machine.features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.specsSection}>
          <h3 className={styles.sectionTitle}>Dane techniczne</h3>
          <div className={styles.specsGrid}>
            {machine.specs.map((spec, index) => (
              <div key={index} className={styles.specItem}>
                <span className={styles.specLabel}>{spec.label}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.advantagesSection}>
          <h3 className={styles.sectionTitle}>Zalety</h3>
          <ul className={styles.advantagesList}>
            {machine.advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </div>

        <div className={styles.brochureSection}>
          <a 
            href="/broszura-SANY-SY18C.pdf" 
            download="Broszura-SANY-SY18C.pdf"
            className={styles.brochureBtn}
          >
            📄 Pobierz pełną broszurę PDF
          </a>
        </div>

        <button className={styles.ctaBtn}>Zapytaj o dostępność</button>
      </div>
    </section>
  );
};

export default Machines;
