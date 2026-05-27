import { useEffect, useCallback } from 'react';
import {
  X, Calendar, Clock, Activity, MapPin,
  CheckCircle2, Lightbulb, Route, ArrowRight,
} from 'lucide-react';
import type { Destination } from '../data/tourismData';

interface Props {
  destination: Destination | null;
  onClose: () => void;
}

export default function DestinationModal({ destination, onClose }: Props) {
  // Close on Escape
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!destination) return;
    document.addEventListener('keydown', handleKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [destination, handleKey]);

  if (!destination) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleBook = () => {
    onClose();
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={destination.name}
    >
      <div className="modal-panel">
        {/* Hero image / gradient banner */}
        <div
          className="modal-hero"
          style={{ background: destination.imageGradient }}
          aria-hidden="true"
        >
          <img
            className="modal-hero-img"
            src={destination.imageUrl}
            alt=""
            loading="lazy"
          />
          <div className="modal-hero-overlay" />
          <div className="modal-hero-content">
            <span className="modal-hero-type">{destination.type}</span>
            <h2 className="modal-hero-title">{destination.name}</h2>
          </div>
        </div>

        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Жабу">
          <X size={20} />
        </button>

        {/* Scrollable body */}
        <div className="modal-body">
          {/* Quick meta row */}
          <div className="modal-meta-row">
            <div className="modal-meta-item">
              <Calendar size={14} />
              <div>
                <span className="modal-meta-label">Ең жақсы маусым</span>
                <span className="modal-meta-value">{destination.bestSeason}</span>
              </div>
            </div>
            <div className="modal-meta-item">
              <Activity size={14} />
              <div>
                <span className="modal-meta-label">Қиындық</span>
                <span className="modal-meta-value">{destination.difficulty}</span>
              </div>
            </div>
            <div className="modal-meta-item">
              <Clock size={14} />
              <div>
                <span className="modal-meta-label">Ұзақтығы</span>
                <span className="modal-meta-value">{destination.duration}</span>
              </div>
            </div>
            <div className="modal-meta-item">
              <MapPin size={14} />
              <div>
                <span className="modal-meta-label">Тур түрі</span>
                <span className="modal-meta-value">{destination.type}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="modal-desc">{destination.description}</p>

          <div className="modal-sections">
            {/* Highlights */}
            <section className="modal-section">
              <h3 className="modal-section-title">
                <CheckCircle2 size={18} />
                Не қарауға болады
              </h3>
              <ul className="modal-list">
                {destination.detail.highlights.map((h) => (
                  <li key={h} className="modal-list-item">
                    <span className="modal-list-dot" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Activities */}
            <section className="modal-section">
              <h3 className="modal-section-title">
                <Activity size={18} />
                Белсенділіктер
              </h3>
              <div className="modal-tags">
                {destination.detail.activities.map((a) => (
                  <span key={a} className="modal-tag">{a}</span>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="modal-section modal-section--full">
              <h3 className="modal-section-title">
                <Route size={18} />
                Шамамен күнтәртіп
              </h3>
              <ol className="modal-itinerary">
                {destination.detail.itinerary.map((step, i) => (
                  <li key={i} className="modal-itinerary-item">
                    <span className="modal-itinerary-num">{i + 1}</span>
                    <span className="modal-itinerary-text">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Tips */}
            <section className="modal-section modal-section--full">
              <h3 className="modal-section-title">
                <Lightbulb size={18} />
                Туристерге кеңес
              </h3>
              <ul className="modal-tips">
                {destination.detail.tips.map((tip) => (
                  <li key={tip} className="modal-tip-item">
                    <span className="modal-tip-icon" aria-hidden="true">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* CTA */}
          <div className="modal-footer">
            <button className="btn-primary modal-book-btn" onClick={handleBook}>
              Тур брондау
              <ArrowRight size={17} />
            </button>
            <button className="btn-secondary modal-close-text-btn" onClick={onClose}>
              Жабу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
