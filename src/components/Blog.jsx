import { useState, useEffect } from 'react';
import styles from './Blog.module.css';

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'Jak przygotować teren pod budowę domu?',
      excerpt: 'Prace ziemne to fundament każdej inwestycji budowlanej. Dowiedz się, jakie etapy czekają Cię na początku budowy i jak właściwie przygotować grunt pod fundamenty.',
      date: '15 stycznia 2026',
      fullContent: `Przygotowanie terenu pod budowę to jeden z najważniejszych etapów każdej inwestycji budowlanej. Właściwe wykonanie prac ziemnych decyduje o trwałości i bezpieczeństwie całego obiektu.

**Etap 1: Oczyszczenie terenu**
Przed rozpoczęciem wykopów należy usunąć całą roślinność, korzenie drzew oraz warstwę humusu (ziemia urodzajna). Humus nie nadaje się pod fundamenty ze względu na swoją strukturę. Zwykle usuwa się go na głębokość 20-30 cm.

**Etap 2: Wyznaczenie poziomów**
Geodeta musi wyznaczyć dokładne miejsca pod fundamenty. To kluczowy moment - błąd na tym etapie może kosztować bardzo drogo. Sprawdź nachylenie terenu i określ, czy potrzebny będzie dodatkowy drenażi.

**Etap 3: Wykonanie wykopów**
W zależności od rodzaju fundamentów (ławy fundamentowe, płyta, pale) potrzebna będzie minikopar ka (na małe działki) lub koparka pełnowymiarowa. Głębokość wykopu zależy od poziomu przemarzania gruntu - zazwyczaj minimum 140 cm poniżej poziomu terenu.

**Etap 4: Zabezpieczenie dna wykopu**
Na dnie wykopu układa się warstwę piasku lub żwiru (10-15 cm), która stanowi podbudowę pod fundamenty. Warstwa ta musi być dokładnie ubita.

**Wskazówka:** Zawsze sprawdź prognozę pogody przed rozpoczęciem prac. Deszcz może zalać wykopy i znacznie opóźnić budowę.`
    },
    {
      id: 2,
      title: 'Minikoparki vs koparki pełnowymiarowe - co wybrać?',
      excerpt: 'Wybór odpowiedniego sprzętu to klucz do sukcesu. Poznaj różnice między minikoparkami a dużymi maszynami i dowiedz się, która opcja będzie najlepsza dla Twojego projektu.',
      date: '10 stycznia 2026',
      fullContent: `Decyzja o wyborze odpowiedniej koparki ma ogromny wpływ na efektywność prac, koszty oraz możliwość wykonania projektu. Porównajmy oba rozwiązania.

**Minikoparki (do 3,5 tony)**

*Zalety:*
- Doskonałe na małe działki i ciasne tereny
- Wąskie przejazdy - zmieszczą się przez furtkę (szerokość od 70 cm)
- Nie niszczą trawnika i kostki brukowej
- Niższy koszt wynajmu (200-250 zł/h)
- Możliwość pracy w pomieszczeniach zamkniętych

*Wady:*
- Mniejsza wydajność przy dużych wykopach
- Ograniczona głębokość kopania (ok. 2,5-3 m)
- Nie nadają się do bardzo twardego gruntu

**Idealnie sprawdzą się przy:** wykopach pod przyłącza, małych fundamentach, pracach w ogrodzie, wykopach pod szambo, pracach w zabudowie mieszkaniowej.

**Koparki pełnowymiarowe (6-20 ton)**

*Zalety:*
- Wysoka wydajność - duże objętości gruntu w krótkim czasie
- Większa siła łyżki - radzą sobie z twardym gruntem i kamieniami
- Głębsze kopanie (do 6 m i więcej)
- Możliwość pracy z ciężkimi narzędziami (młot hydrauliczny)

*Wady:*
- Potrzebują dużo miejsca do manewrowania
- Wyższe koszty (350-800 zł/h)
- Mogą uszkodzić nawierzchnię
- Wymóg szerokiego dojazdu (minimum 3 m)

**Idealnie sprawdzą się przy:** fundamentach pod dom, dużych wykopach liniowych, pracach drogowych, robótach w terenie otwartym.

**Podsumowanie:** Jeśli budujesz dom na standardowej działce - minikopar ka w zupełności wystarczy. Jeśli masz duży projekt lub trudny teren - postaw na większą maszynę.`
    },
    {
      id: 3,
      title: 'Ile kosztuje wykop pod fundamenty? Kompletny przewodnik',
      excerpt: 'Planowanie budżetu to podstawa. Sprawdź, od czego zależą koszty prac ziemnych, jakie są stawki za wynajem koparki z operatorem i jak zaoszczędzić na wykopach fundamentowych.',
      date: '5 stycznia 2026',
      fullContent: `Koszty prac ziemnych to jeden z pierwszych wydatków podczas budowy. Przedstawiamy szczegółowe wyliczenia i czynniki wpływające na cenę.

**Stawki za wynajem koparki z operatorem (2026)**

- Minikopar ka (1,5-3,5t): 200-250 zł/h
- Koparka średnia (6-10t): 350-450 zł/h
- Koparka duża (15-20t): 600-800 zł/h

**Uwaga:** Do ceny należy doliczyć transport maszyny (300-800 zł w zależności od odległości).

**Przykładowe wyliczenia - fundamenty pod dom 150m²**

*Wariant 1: Ławy fundamentowe*
- Objętość wykopu: około 40-50 m³
- Czas pracy minikoparki: 6-8 godzin
- Koszt: 1.500-2.000 zł + transport
- RAZEM: około 2.000-2.800 zł

*Wariant 2: Płyta fundamentowa*
- Objętość wykopu: około 60-80 m³
- Czas pracy koparki średniej: 4-6 godzin
- Koszt: 1.600-2.700 zł + transport
- RAZEM: około 2.200-3.500 zł

**Dodatkowe koszty:**
- Wywóz ziemi: 30-50 zł/m³ (jeśli nie ma gdzie jej zagospodarować)
- Utwardzenie dna wykopu: 150-300 zł
- Ewentualne odwodnienie: 500-1.500 zł

**Jak zaoszczędzić?**

1. Planuj prace na okres suchy - mokry grunt to więcej godzin pracy
2. Przygotuj teren - usunięcie krzaków i gruzu przed przyjazdem koparki
3. Zagospodaruj wydobytą ziemię na działce (niwelacja terenu)
4. Wynajmij maszynę na cały dzień - wychodzi taniej niż rozliczenie godzinowe
5. Rezerwuj z wyprzedzeniem - unikniesz stawek w szczycie sezonu

**Wniosek:** Na wykopy pod fundamenty standardowego domu jednorodzinnego powinieneś zarezerwować budżet 2.500-4.000 zł. Pamiętaj o rezerwie na nieprzewidziane okoliczności (np. twarde podłoże).`
    }
  ];

  const openModal = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedArticle) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedArticle]);

  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <h2 className={styles.title}>Blog</h2>
        <p className={styles.subtitle}>
          Praktyczna wiedza i porady ekspertów
        </p>

        <div className={styles.grid}>
          {articles.map(article => (
            <article key={article.id} className={styles.card}>
              <div className={styles.cardImage}>
                <span className={styles.icon}>🚜</span>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.date}>{article.date}</span>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
                
                <button 
                  className={styles.readMore}
                  onClick={() => openModal(article)}
                >
                  Czytaj więcej →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <button className={styles.allArticles}>
            Zobacz wszystkie artykuły
          </button>
        </div>
      </div>

      {selectedArticle && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>
              ×
            </button>
            <div className={styles.modalHeader}>
              <span className={styles.modalDate}>{selectedArticle.date}</span>
              <h2 className={styles.modalTitle}>{selectedArticle.title}</h2>
            </div>
            <div className={styles.modalContent}>
              {selectedArticle.fullContent.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.includes('**')) {
                  const parts = paragraph.split('**');
                  return (
                    <p key={index}>
                      <strong>{parts[1]}</strong>
                      {parts[2]}
                    </p>
                  );
                }
                if (paragraph.startsWith('*') || paragraph.startsWith('-')) {
                  return <p key={index} className={styles.listItem}>{paragraph}</p>;
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
