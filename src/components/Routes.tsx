import { useState } from 'react';
import { MapPin, Clock, Package, ArrowRight } from 'lucide-react';
import { routes } from '../data/tourismData';
import type { Route } from '../data/tourismData';

// Filter config
const durationOptions = ['Барлығы', '1-2 күн', '2-3 күн', '3 күн'] as const;
const activityOptions = ['Барлығы', 'жаяу поход', 'атпен серуен', 'кемпинг', 'road trip', 'фото'] as const;
const difficultyOptions = ['Барлығы', 'жеңіл', 'орташа', 'жеңіл/орташа'] as const;

type DurationFilter = typeof durationOptions[number];
type ActivityFilter = typeof activityOptions[number];
type DifficultyFilter = typeof difficultyOptions[number];

function RouteCard({ route }: { route: Route }) {
  return (
    <article className="route-card">
      <div className="route-header">
        <h3 className="route-title">{route.title}</h3>
        <span className={`route-difficulty ${route.difficulty}`}>{route.difficulty}</span>
      </div>

      {/* Info grid */}
      <div className="route-info">
        <div className="route-info-item">
          <span className="route-info-label">
            <Clock size={11} style={{ display: 'inline', marginRight: 4 }} />
            Ұзақтығы
          </span>
          <span className="route-info-value">{route.duration}</span>
        </div>
        <div className="route-info-item">
          <span className="route-info-label">
            <MapPin size={11} style={{ display: 'inline', marginRight: 4 }} />
            Старт
          </span>
          <span className="route-info-value">{route.start}</span>
        </div>
      </div>

      {/* Activities */}
      <div className="route-activities">
        {route.activities.map((act) => (
          <span key={act} className="route-activity-tag">{act}</span>
        ))}
      </div>

      {/* Packing */}
      <div className="route-packing">
        <p className="route-packing-title">
          <Package size={11} style={{ display: 'inline', marginRight: 4 }} />
          Алу керек
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
        Брондау
        <ArrowRight size={15} />
      </button>
    </article>
  );
}

export default function Routes() {
  const [duration, setDuration] = useState<DurationFilter>('Барлығы');
  const [activity, setActivity] = useState<ActivityFilter>('Барлығы');
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('Барлығы');

  // Filter logic
  const filtered = routes.filter((r: Route) => {
    const matchDuration = duration === 'Барлығы' || r.durationCategory === duration;
    const matchActivity =
      activity === 'Барлығы' ||
      r.activities.some((a) => a.toLowerCase().includes(activity.toLowerCase()));
    const matchDifficulty = difficulty === 'Барлығы' || r.difficulty === difficulty;
    return matchDuration && matchActivity && matchDifficulty;
  });

  return (
    <section id="routes" className="routes">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Маршруттар</span>
          <h2 className="section-title">Дайын маршруттар</h2>
          <p className="section-subtitle">
            Ұзақтығы мен белсенділік түріне қарай маршрутты сүзгілеңіз.
          </p>
        </header>

        {/* Filters */}
        <div className="routes-filters" role="group" aria-label="Маршрут сүзгілері">
          {/* Duration */}
          <div className="filter-group">
            <span className="filter-label">Ұзақтығы</span>
            <div className="filter-options">
              {durationOptions.map((opt) => (
                <button
                  key={opt}
                  className={`filter-btn${duration === opt ? ' active' : ''}`}
                  onClick={() => setDuration(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="filter-group">
            <span className="filter-label">Белсенділік</span>
            <div className="filter-options">
              {activityOptions.map((opt) => (
                <button
                  key={opt}
                  className={`filter-btn${activity === opt ? ' active' : ''}`}
                  onClick={() => setActivity(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div className="filter-group">
            <span className="filter-label">Қиындық</span>
            <div className="filter-options">
              {difficultyOptions.map((opt) => (
                <button
                  key={opt}
                  className={`filter-btn${difficulty === opt ? ' active' : ''}`}
                  onClick={() => setDifficulty(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Route cards */}
        <div className="routes-grid">
          {filtered.length > 0 ? (
            filtered.map((route) => <RouteCard key={route.id} route={route} />)
          ) : (
            <p className="routes-empty">
              Таңдалған сүзгілерге сәйкес маршрут табылмады. Басқа параметрлерді таңдаңыз.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
