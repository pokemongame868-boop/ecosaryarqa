import { Mountain, Compass, Car, Tent, Landmark } from 'lucide-react';
import { categories } from '../data/tourismData';
import type { Category } from '../data/tourismData';

// Map icon string to Lucide component
function CategoryIcon({ icon }: { icon: string }) {
  const props = { size: 24 };
  switch (icon) {
    case 'mountain': return <Mountain {...props} />;
    case 'compass': return <Compass {...props} />;
    case 'car': return <Car {...props} />;
    case 'tent': return <Tent {...props} />;
    case 'landmark': return <Landmark {...props} />;
    default: return <Compass {...props} />;
  }
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="category-card">
      <div className="category-icon">
        <CategoryIcon icon={category.icon} />
      </div>
      <h3 className="category-title">{category.title}</h3>
      <ul className="category-items">
        {category.items.map((item) => (
          <li key={item} className="category-item">
            <span className="category-item-dot" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Categories() {
  return (
    <section id="categories" className="categories">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Туризм түрлері</span>
          <h2 className="section-title">Қандай саяхат сізге ұнайды?</h2>
          <p className="section-subtitle">
            Жаяу походтан бастап атпен дала сапарына дейін — табиғатпен тілдесудің сан алуан жолдары.
          </p>
        </header>

        <div className="categories-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
