import { Car, Compass, Landmark, Mountain, Tent } from 'lucide-react';
import type { Category } from '../data/tourismData';
import { useI18n } from '../i18n';

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
  const { content } = useI18n();
  const { categories } = content;

  return (
    <section id="categories" className="categories">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">{categories.tag}</span>
          <h2 className="section-title">{categories.title}</h2>
          <p className="section-subtitle">{categories.subtitle}</p>
        </header>

        <div className="categories-grid">
          {categories.items.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
