import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    machineType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj logika wysyłania formularza
    console.log('Dane formularza:', formData);
    alert('Dziękujemy za kontakt! Odpowiemy najszybciej jak to możliwe.');
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Kontakt</h2>
        <p className={styles.subtitle}>
          Skontaktuj się z nami – odpowiadamy w 24h
        </p>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Ludzie od koparek</h3>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <div>
                  <strong>Telefon</strong>
                  <p>+48 692 426 974</p>
                  <p>+48 664 716 960</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📧</span>
                <div>
                  <strong>Email</strong>
                  <p>biuro@ludzieodkoparek.pl</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <strong>Adres</strong>
                  <p>ul. Kuźnicka 28f<br />Mikołów</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⏰</span>
                <div>
                  <strong>Godziny otwarcia</strong>
                  <p>Pn-Pt: 7:00 - 18:00<br />Sb: 8:00 - 14:00</p>
                </div>
              </div>
            </div>

            <div className={styles.emergencyContact}>
              <strong>🚨 Kontakt awaryjny 24/7:</strong>
              <p>+48 692 426 974</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Wyślij zapytanie</h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="name">Imię i nazwisko *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jan Kowalski"
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jan@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+48 692 426 974"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="machineType">Typ koparki</label>
              <select
                id="machineType"
                name="machineType"
                value={formData.machineType}
                onChange={handleChange}
              >
                <option value="">Wybierz typ koparki</option>
                <option value="mini">Minikoparka 1.5-3.5T</option>
                <option value="standard">Koparka standardowa 14-20T</option>
                <option value="heavy">Koparka ciężka 30-45T</option>
                <option value="not-sure">Nie jestem pewien</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Wiadomość *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Opisz swój projekt i wymagania..."
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Wyślij zapytanie
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
