import { useState } from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const [billingType, setBillingType] = useState('hourly');

  const pricingPlans = [
    {
      id: 1,
      name: 'Wynajem dzienny',
      description: 'Podstawowa opcja wynajmu',
      hourly: null,
      daily: '350-450',
      features: [
        'Minikoparka SANY SY18C 1,9T',
        'Pełny zbiornik paliwa',
        'Transport do 30km gratis',
        'Podstawowe akcesoria',
        'Ubezpieczenie OC/AC',
        'Instruktaż obsługi'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Wynajem tygodniowy',
      description: 'Najpopularniejszy wybór',
      hourly: null,
      daily: '300-400',
      features: [
        'Minikoparka SANY SY18C 1,9T',
        'Pełny zbiornik paliwa',
        'Transport do 50km gratis',
        'Pełen zestaw akcesoriów',
        'Ubezpieczenie OC/AC',
        'Instruktaż obsługi',
        'Wsparcie techniczne 24/7'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Wynajem miesięczny',
      description: 'Najlepsza cena',
      hourly: null,
      daily: '250-350',
      features: [
        'Minikoparka SANY SY18C 1,9T',
        'Pełny zbiornik paliwa',
        'Transport bez limitu',
        'Specjalistyczne akcesoria',
        'Ubezpieczenie OC/AC',
        'Instruktaż obsługi',
        'Dedykowany opiekun',
        'Serwis 24/7'
      ],
      popular: false
    }
  ];

  return (
    <section id="cennik" className={styles.pricing}>
      <div className={styles.container}>
        <h2 className={styles.title}>Cennik</h2>
        <p className={styles.subtitle}>
          Proste ceny bez ukrytych kosztów. Wynajmij na dzień, tydzień lub miesiąc.
        </p>

        <div className={styles.grid}>
          {pricingPlans.map(plan => (
            <article key={plan.id} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <div className={styles.badge}>Najpopularniejsze</div>}
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.price}>
                  <span className={styles.amount}>
                    {plan.daily}
                  </span>
                  <span className={styles.currency}>zł</span>
                  <span className={styles.period}>
                    /dzień
                  </span>
                </div>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={styles.ctaBtn}>
                Zapytaj o ofertę
              </button>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <p>
            * Ceny orientacyjne za dzień wynajmu. Rabaty przy wynajmie tygodniowym i miesięcznym. 
            Ostateczna wycena zależy od lokalizacji i czasu trwania wynajmu. Skontaktuj się z nami po bezpłatną wycenę.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
