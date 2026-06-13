import { useState } from 'react';
import { useI18n } from '../i18n';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { content } = useI18n();
  const { gallery } = content;

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <header className="section-header">
            <span className="section-tag">{gallery.tag}</span>
            <h2 className="section-title">{gallery.title}</h2>
            <p className="section-subtitle">{gallery.subtitle}</p>
          </header>

          <div className="gallery-grid">
            {gallery.items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`gallery-item ${item.span ?? 'normal'}`}
                aria-label={`${item.caption} - ${gallery.zoomAria}`}
                onClick={() => setLightboxIndex(i)}
              >
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

                <div className="gallery-zoom-hint" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={gallery.items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNav={setLightboxIndex}
      />
    </>
  );
}
