import { useState } from 'react';
import { galleryItems } from '../data/tourismData';

export default function Gallery() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Галерея</span>
          <h2 className="section-title">Табиғат суреттері</h2>
          <p className="section-subtitle">
            Қарағанды облысының ерекше табиғи көрінісі — дала, тау, көл және киелі жерлер.
          </p>
        </header>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className={`gallery-item ${item.span ?? 'normal'}`}>
              {item.imageUrl && !imgErrors[item.id] ? (
                <img
                  src={item.imageUrl}
                  alt={item.caption}
                  loading="lazy"
                  onError={() => handleImgError(item.id)}
                />
              ) : (
                <div
                  className="gallery-item-bg"
                  style={{ background: item.gradient }}
                  aria-label={item.caption}
                />
              )}
              <div className="gallery-item-overlay">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
