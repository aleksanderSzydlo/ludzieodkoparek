import styles from './Machines.module.css';

const Machines = () => {
  const machines = [
    {
      id: 1,
      name: 'Minikoparka 1.5T',
      type: 'Minikoparka',
      scope: 'Wykopy pod fundamenty, rowy pod instalacje, prace w ciasnych przestrzeniach',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500'
    },
    {
      id: 2,
      name: 'Minikoparka 3.5T',
      type: 'Minikoparka',
      scope: 'Większe wykopy, drenaże, roboty na osiedlach, prace ogrodowe',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=500'
    },
    {
      id: 3,
      name: 'Koparka 14T',
      type: 'Koparka gąsienicowa',
      scope: 'Średnie roboty ziemne, wykopy pod budynki, niwelacja terenu',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500'
    },
    {
      id: 4,
      name: 'Koparka 20T',
      type: 'Koparka gąsienicowa',
      scope: 'Duże roboty ziemne, wykopy głębokie, burzenie konstrukcji',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500'
    },
    {
      id: 5,
      name: 'Koparka 30T',
      type: 'Koparka gąsienicowa',
      scope: 'Rozbiórki, wykopy głębokie, duże inwestycje budowlane',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500'
    },
    {
      id: 6,
      name: 'Koparka 45T',
      type: 'Koparka gąsienicowa',
      scope: 'Największe projekty, wyburzenia budynków, roboty infrastrukturalne',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500'
    }
  ];

  return (
    <section id="koparki" className={styles.machines}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nasze koparki</h2>

        <div className={styles.grid}>
          {machines.map(machine => (
            <article key={machine.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img 
                  src={machine.image} 
                  alt={machine.name}
                  className={styles.image}
                />
                <span className={styles.typeTag}>{machine.type}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.machineName}>{machine.name}</h3>
                <div className={styles.scope}>
                  <strong>Zakres prac:</strong>
                  <p>{machine.scope}</p>
                </div>
                <button className={styles.inquiryBtn}>Zapytaj o dostępność</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Machines;
