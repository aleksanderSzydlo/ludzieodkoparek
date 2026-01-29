import { useState } from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const [billingType, setBillingType] = useState('hourly');

  const pricingPlans = [
    {
      id: 1,
      name: 'Mini',
      description: 'Idealne do małych prac',
      hourly: '200-250',
      daily: '1400-1750',
      features: [
        'Minikoparka 1.5-3.5T',
        'Doświadczony operator',
        'Transport do 50km gratis',
        'Podstawowe akcesoria',
        'Ubezpieczenie OC/AC'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Standard',
      description: 'Najpopularniejszy wybór',
      hourly: '350-450',
      daily: '2450-3150',
      features: [
        'Koparka 14-20T',
        'Certyfikowany operator',
        'Transport do 100km gratis',
        'Pełen zestaw akcesoriów',
        'Ubezpieczenie OC/AC',
        'Wsparcie techniczne 24/7'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Heavy',
      description: 'Do dużych projektów',
      hourly: '600-800',
      daily: '4200-5600',
      features: [
        'Koparka 30-45T',
        'Specjalistyczny operator',
        'Transport bez limitu',
        'Specjalistyczne akcesoria',
        'Ubezpieczenie OC/AC',
        'Dedykowany opiekun projektu',
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
          Transparentne ceny bez ukrytych kosztów
        </p>

        <div className={styles.toggle}>
          <button
            className={`${styles.toggleBtn} ${billingType === 'hourly' ? styles.active : ''}`}
            onClick={() => setBillingType('hourly')}
          >
            Stawka godzinowa
          </button>
          <button
            className={`${styles.toggleBtn} ${billingType === 'daily' ? styles.active : ''}`}
            onClick={() => setBillingType('daily')}
          >
            Stawka dzienna
          </button>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map(plan => (
            <article key={plan.id} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <div className={styles.badge}>Najpopularniejsze</div>}
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.price}>
                  <span className={styles.amount}>
                    {billingType === 'hourly' ? plan.hourly : plan.daily}
                  </span>
                  <span className={styles.currency}>zł</span>
                  <span className={styles.period}>
                    /{billingType === 'hourly' ? 'godz' : 'dzień'}
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
            * Ceny orientacyjne. Ostateczna wycena zależy od lokalizacji, czasu trwania 
            projektu i specyfiki prac. Skontaktuj się z nami po bezpłatną wycenę.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
