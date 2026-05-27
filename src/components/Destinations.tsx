import { useState } from 'react';
import { ArrowRight, Calendar, Activity, Clock } from 'lucide-react';
import { destinations } from '../data/tourismData';
import type { Destination } from '../data/tourismData';
import DestinationModal from './DestinationModal';

function DestinationCard({
  dest,
  onDetails,
}: {
  dest: Destination;
  onDetails: (d: Destination) => void;
}) {
  return (
    <article className="destination-card">
      <div className="destination-image">
        <img
          src={dest.imageUrl}
          alt={dest.name}
          loading="lazy"
          style={{ objectPosition: dest.imagePosition ?? 'center' }}
        />
        <div
          className="destination-image-fallback"
          style={{ background: dest.imageGradient }}
          aria-hidden="true"
        />
      </div>

      <div className="destination-body">
        <h3 className="destination-name">{dest.name}</h3>
        <p className="destination-desc">{dest.description}</p>

        <div className="destination-meta">
          <div className="destination-meta-item">
            <span className="destination-meta-label">
              <Activity size={11} style={{ display: 'inline', marginRight: 4 }} />
              Тип
            </span>
            <span className="destination-meta-value">{dest.type}</span>
          </div>
          <div className="destination-meta-item">
            <span className="destination-meta-label">
              <Calendar size={11} style={{ display: 'inline', marginRight: 4 }} />
              Маусым
            </span>
            <span className="destination-meta-value">{dest.bestSeason}</span>
          </div>
          <div className="destination-meta-item">
            <span className="destination-meta-label">Қиындық</span>
            <span className="destination-meta-value">{dest.difficulty}</span>
          </div>
          <div className="destination-meta-item">
            <span className="destination-meta-label">
              <Clock size={11} style={{ display: 'inline', marginRight: 4 }} />
              Ұзақтығы
            </span>
            <span className="destination-meta-value">{dest.duration}</span>
          </div>
        </div>

        <button
          className="btn-outline"
          onClick={() => onDetails(dest)}
          aria-label={dest.name + ' туралы толығырақ'}
        >
          Толығырақ
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

export default function Destinations() {
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);

  return (
    <>
      <section id="destinations" className="destinations">
        <div className="container">
          <header className="section-header">
            <span className="section-tag">Бағыттар</span>
            <h2 className="section-title">Танымал бағыттар</h2>
            <p className="section-subtitle">
              Қарағанды облысының ең әсем табиғи орындары — тауларынан бастап ұлан байтақ далаларына дейін.
            </p>
          </header>

          <div className="destinations-grid">
            {destinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                dest={dest}
                onDetails={setActiveDestination}
              />
            ))}
          </div>
        </div>
      </section>

      <DestinationModal
        destination={activeDestination}
        onClose={() => setActiveDestination(null)}
      />
    </>
  );
}
