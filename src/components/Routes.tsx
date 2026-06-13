import { useState } from 'react';
import { ArrowRight, Clock, MapPin, Package } from 'lucide-react';
import type { Route, SiteCopy } from '../data/tourismData';
import { useI18n } from '../i18n';

type DurationFilter = 'all' | '1-2' | '2-3' | '3';
type DifficultyFilter = 'all' | 'easy' | 'medium' | 'easy-medium';

function RouteCard({
  route,
  labels,
}: {
  route: Route;
  labels: SiteCopy['routes']['labels'];
}) {
  return (
    <article className="route-card">
      <div className="route-header">
        <h3 className="route-title">{route.title}</h3>
        <span className={`route-difficulty ${route.difficultyId}`}>{route.difficulty}</span>
      </div>

      <div className="route-info">
        <div className="route-info-item">
          <span className="route-info-label">
            <Clock size={11} style={{ display: 'inline', marginRight: 4 }} />
            {labels.duration}
          </span>
          <span className="route-info-value">{route.duration}</span>
        </div>
        <div className="route-info-item">
          <span className="route-info-label">
            <MapPin size={11} style={{ display: 'inline', marginRight: 4 }} />
            {labels.start}
          </span>
          <span className="route-info-value">{route.start}</span>
        </div>
      </div>

      <div className="route-activities">
        {route.activities.map((act) => (
          <span key={act} className="route-activity-tag">{act}</span>
        ))}
      </div>

      <div className="route-packing">
        <p className="route-packing-title">
          <Package size={11} style={{ display: 'inline', marginRight: 4 }} />
          {labels.packing}
        </p>
        <div className="route-packing-list">
          {route.packing.map((item) => (
            <span key={item} className="route-packing-item">{item}</span>
          ))}
        </div>
      </div>

      <button
        className="btn-primary"
        onClick={() => {
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {labels.book}
        <ArrowRight size={15} />
      </button>
    </article>
  );
}

export default function Routes() {
  const { content } = useI18n();
  const { routes } = content;
  const [duration, setDuration] = useState<DurationFilter>('all');
  const [activity, setActivity] = useState('all');
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all');

  const filtered = routes.items.filter((route: Route) => {
    const matchDuration = duration === 'all' || route.durationCategory === duration;
    const matchActivity = activity === 'all' || route.activityIds.includes(activity);
    const matchDifficulty = difficulty === 'all' || route.difficultyId === difficulty;
    return matchDuration && matchActivity && matchDifficulty;
  });

  return (
    <section id="routes" className="routes">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">{routes.tag}</span>
          <h2 className="section-title">{routes.title}</h2>
          <p className="section-subtitle">{routes.subtitle}</p>
        </header>

        <div className="routes-filters" role="group" aria-label={routes.filtersLabel}>
          <div className="filter-group">
            <span className="filter-label">{routes.durationLabel}</span>
            <div className="filter-options">
              {routes.durationOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`filter-btn${duration === opt.id ? ' active' : ''}`}
                  onClick={() => setDuration(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">{routes.activityLabel}</span>
            <div className="filter-options">
              {routes.activityOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`filter-btn${activity === opt.id ? ' active' : ''}`}
                  onClick={() => setActivity(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">{routes.difficultyLabel}</span>
            <div className="filter-options">
              {routes.difficultyOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`filter-btn${difficulty === opt.id ? ' active' : ''}`}
                  onClick={() => setDifficulty(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="routes-grid">
          {filtered.length > 0 ? (
            filtered.map((route) => <RouteCard key={route.id} route={route} labels={routes.labels} />)
          ) : (
            <p className="routes-empty">{routes.labels.empty}</p>
          )}
        </div>
      </div>
    </section>
  );
}
