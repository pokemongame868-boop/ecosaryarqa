import { useState } from 'react';
import { Activity, ArrowRight, Calendar, Clock } from 'lucide-react';
import type { Destination, SiteCopy } from '../data/tourismData';
import { useI18n } from '../i18n';
import DestinationModal from './DestinationModal';

function DestinationCard({
  dest,
  labels,
  onDetails,
}: {
  dest: Destination;
  labels: SiteCopy['destinations']['labels'];
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
              {labels.type}
            </span>
            <span className="destination-meta-value">{dest.type}</span>
          </div>
          <div className="destination-meta-item">
            <span className="destination-meta-label">
              <Calendar size={11} style={{ display: 'inline', marginRight: 4 }} />
              {labels.season}
            </span>
            <span className="destination-meta-value">{dest.bestSeason}</span>
          </div>
          <div className="destination-meta-item">
            <span className="destination-meta-label">{labels.difficulty}</span>
            <span className="destination-meta-value">{dest.difficulty}</span>
          </div>
          <div className="destination-meta-item">
            <span className="destination-meta-label">
              <Clock size={11} style={{ display: 'inline', marginRight: 4 }} />
              {labels.duration}
            </span>
            <span className="destination-meta-value">{dest.duration}</span>
          </div>
        </div>

        <button
          className="btn-outline"
          onClick={() => onDetails(dest)}
          aria-label={`${dest.name} ${labels.detailsAria}`}
        >
          {labels.details}
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

export default function Destinations() {
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);
  const { content } = useI18n();
  const { destinations } = content;

  return (
    <>
      <section id="destinations" className="destinations">
        <div className="container">
          <header className="section-header">
            <span className="section-tag">{destinations.tag}</span>
            <h2 className="section-title">{destinations.title}</h2>
            <p className="section-subtitle">{destinations.subtitle}</p>
          </header>

          <div className="destinations-grid">
            {destinations.items.map((dest) => (
              <DestinationCard
                key={dest.id}
                dest={dest}
                labels={destinations.labels}
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
