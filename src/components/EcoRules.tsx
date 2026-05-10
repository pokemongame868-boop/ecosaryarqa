import { Trash2, Footprints, Bird, Flame, HeartHandshake, Droplets, Store } from 'lucide-react';
import { ecoRules } from '../data/tourismData';
import type { EcoRule } from '../data/tourismData';

function EcoIcon({ icon }: { icon: string }) {
  const props = { size: 20 };
  switch (icon) {
    case 'trash2': return <Trash2 {...props} />;
    case 'footprints': return <Footprints {...props} />;
    case 'bird': return <Bird {...props} />;
    case 'flame': return <Flame {...props} />;
    case 'heart-handshake': return <HeartHandshake {...props} />;
    case 'droplets': return <Droplets {...props} />;
    case 'store': return <Store {...props} />;
    default: return <Droplets {...props} />;
  }
}

function EcoRuleCard({ rule }: { rule: EcoRule }) {
  return (
    <div className="eco-rule-card">
      <div className="eco-rule-icon" aria-hidden="true">
        <EcoIcon icon={rule.icon} />
      </div>
      <p className="eco-rule-text">{rule.text}</p>
    </div>
  );
}

export default function EcoRules() {
  return (
    <section id="eco-rules" className="eco-rules">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Эко қағидалар</span>
          <h2 className="section-title">Жауапты саяхат қағидалары</h2>
          <p className="section-subtitle">
            Табиғатты сақтай отырып саяхаттау — болашақ ұрпаққа аманат.
          </p>
        </header>

        <div className="eco-rules-grid">
          {ecoRules.map((rule) => (
            <EcoRuleCard key={rule.id} rule={rule} />
          ))}
        </div>
      </div>
    </section>
  );
}
