import { useCallback, useEffect, useState } from 'react';

const CHIP_FILTERS = [
  { filter: 'photographs', label: 'Photographs' },
  { filter: 'art', label: 'Art works' },
  { filter: 'work', label: 'Work life' },
  { filter: 'thoughts', label: 'Random thoughts' },
];

const GALLERY_ITEMS = [
  { id: 'j1', tags: 'photographs', src: '/assets/j1.jpeg', alt: 'City lights at night', caption: 'The MechartanZ' },
  {
    id: 'j2',
    tags: 'photographs',
    src: '/assets/j2.jpeg',
    alt: 'City lights at night',
    caption: 'Night @ Padmanabhaswami temple',
  },
  {
    id: 'j3',
    tags: 'photographs',
    src: '/assets/j3.jpeg',
    alt: 'City lights at night',
    caption: 'Night @ Padmanabhaswami temple',
  },
  {
    id: 'j4',
    tags: 'photographs',
    src: '/assets/j4.jpeg',
    alt: 'City lights at night',
    caption: 'Evening sky from pappanamcode',
  },
  { id: 'j5', tags: 'photographs', src: '/assets/j5.jpeg', alt: 'City lights at night', caption: 'Train to kannur' },
  { id: 'j6', tags: 'photographs', src: '/assets/j6.jpeg', alt: 'City lights at night', caption: 'Church @Palayam' },
  { id: 'j7', tags: 'photographs', src: '/assets/j7.jpeg', alt: 'City lights at night', caption: 'Just see the art' },
  {
    id: 'j8',
    tags: 'photographs',
    src: '/assets/j8.jpeg',
    alt: 'City lights at night',
    caption: 'View from Thampanoor railway station',
  },
  { id: 'j9', tags: 'photographs', src: '/assets/j9.jpeg', alt: 'City lights at night', caption: 'SCTCE' },
  {
    id: 'j10',
    tags: 'photographs',
    src: '/assets/j10.jpeg',
    alt: 'City lights at night',
    caption: 'Beauty of East Fort',
  },
  {
    id: 'c2',
    tags: 'work',
    src: '/assets/c2.jpeg',
    alt: 'Weekend build log',
    caption: `March 7, 2026 — A Day of Conversations and Energy

March 7, 2026 was filled with meaningful conversations and real engagement. The event had a relaxed atmosphere where people gathered, explored ideas, and interacted naturally. I spent time discussing concepts, answering questions, and connecting with students who were genuinely curious. What made the day special was the participation — people stopped, listened, and shared their thoughts. Between discussions, there were candid moments, group photos, and spontaneous interactions that captured the energy of the day. It wasn’t about one highlight, but the collective experience. A simple setup, strong conversations, and enthusiastic people turned March 7 into a memorable and motivating day.`,
  },
  {
    id: 'c1',
    tags: 'work',
    src: '/assets/c1.jpeg',
    alt: 'Weekend build log',
    caption: `August 18, 2025 — The Day Wagfu Was Launched

On August 18, 2025, at SCTCE Pappanamcode, the Wagfu idea was officially launched. What started as a concept evolved into a vision presented before faculty, students, and guests. The session focused on improving pet care accessibility and building a connected platform for pet owners. Presenting Wagfu for the first time felt like turning an idea into reality. The presence of the Thiruvananthapuram Assistant Collector made the moment more significant, marking the formal launch. Applause, discussions, and feedback followed, creating excitement around the concept. That day transformed Wagfu from a simple idea into the beginning of a real startup journey.`,
  },
  { id: 'p1', tags: 'art', src: '/assets/p1.jpeg', alt: 'Design notes', caption: 'I draw this one ,when i was in 10th std' },
  { id: 'p2', tags: 'art', src: '/assets/p2.jpeg', alt: 'Design notes', caption: 'Chacha ji' },
  { id: 'p3', tags: 'art', src: '/assets/p3.jpeg', alt: 'Design notes', caption: 'Rocky and Reena' },
  { id: 'p4', tags: 'art', src: '/assets/p4.jpeg', alt: 'Design notes', caption: 'heeeee!' },
  { id: 'p5', tags: 'art', src: '/assets/p5.jpeg', alt: 'Design notes', caption: 'Rocky Bhai' },
  { id: 'p6', tags: 'art', src: '/assets/p6.jpeg', alt: 'Design notes', caption: 'Father of Nation' },
  { id: 'p7', tags: 'art', src: '/assets/p7.jpeg', alt: 'Design notes', caption: 'I really enjoyed this work' },
  { id: 'p8', tags: 'art', src: '/assets/p8.jpeg', alt: 'Design notes', caption: 'Mountain Dear' },
  { id: 'p9', tags: 'art', src: '/assets/p9.jpeg', alt: 'Design notes', caption: '5 mins art' },
  { id: 'p10', tags: 'art', src: '/assets/p10.jpeg', alt: 'Design notes', caption: 'BAT' },
  { id: 'p11', tags: 'art', src: '/assets/p11.jpeg', alt: 'Design notes', caption: 'Random' },
  { id: 'p12', tags: 'art', src: '/assets/p12.jpeg', alt: 'Design notes', caption: 'scor' },
  { id: 'p13', tags: 'art', src: '/assets/p13.jpeg', alt: 'Design notes', caption: '3mins art' },
  { id: 'p14', tags: 'art', src: '/assets/p14.jpeg', alt: 'Design notes', caption: '!!!!!' },
  { id: 'p15', tags: 'art', src: '/assets/p15.jpeg', alt: 'Design notes', caption: 'How is that' },
  {
    id: 't1',
    tags: 'thoughts',
    src: '/assets/gallery-2.svg',
    alt: 'Notebook and coffee',
    caption: 'Momentum beats motivation — small, daily progress compounds over time.',
  },
  {
    id: 't2',
    tags: 'thoughts',
    src: '/assets/gallery-5.svg',
    alt: 'Design notes',
    caption: 'Build in public, get feedback early, and let real conversations shape the product.',
  },
  {
    id: 't3',
    tags: 'thoughts',
    src: '/assets/gallery-6.svg',
    alt: 'Coffee cup',
    caption: 'Slow mornings, clear thinking — most good ideas arrive when I’m not rushing.',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('photographs');
  const [modal, setModal] = useState(null);

  useEffect(() => {
    document.title = 'Projects — Personal Space';
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setModal(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const itemVisible = useCallback(
    (tags) => {
      const tagStr = tags || '';
      return tagStr.includes(filter);
    },
    [filter]
  );

  const openModal = (item) => {
    setModal({ src: item.src, alt: item.alt, caption: item.caption });
  };

  const closeModal = () => setModal(null);

  return (
    <>
      <section className="container section">
        <header className="section-header reveal-up">
          <h1>Projects & Life</h1>
          <p className="muted">Snapshots from my journey — work, art, and everyday moments.</p>
        </header>

        <div className="gallery-tabs reveal-up">
          {CHIP_FILTERS.map((chip) => (
            <button
              key={chip.filter}
              type="button"
              className={`chip${filter === chip.filter ? ' active' : ''}`}
              data-gallery-filter={chip.filter}
              onClick={() => setFilter(chip.filter)}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <div className="masonry reveal-up" id="masonry">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.id}
              className="masonry-item glass"
              data-tags={item.tags}
              style={{ display: itemVisible(item.tags) ? 'inline-block' : 'none' }}
            >
              <img src={item.src} alt={item.alt} onClick={() => openModal(item)} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div
        className={`modal${modal ? ' open' : ''}`}
        id="image-modal"
        aria-hidden={!modal}
        role="dialog"
        aria-label="Image viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget || e.target.hasAttribute('data-modal-close')) {
            closeModal();
          }
        }}
      >
        <button type="button" className="modal-close" data-modal-close aria-label="Close" onClick={closeModal}>
          ×
        </button>
        <div className="modal-content glass">
          <img id="modal-img" src={modal?.src ?? ''} alt={modal?.alt ?? ''} />
          <p id="modal-caption" className="muted">
            {modal?.caption ?? ''}
          </p>
        </div>
      </div>
    </>
  );
}
