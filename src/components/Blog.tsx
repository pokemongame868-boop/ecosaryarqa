import { Clock } from 'lucide-react';
import { blogPosts } from '../data/tourismData';

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Мақалалар</span>
          <h2 className="section-title">Пайдалы кеңестер</h2>
          <p className="section-subtitle">
            Саяхатқа дайындық, қауіпсіздік және жауапты туризм туралы оқыңыз.
          </p>
        </header>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-top">
                <span className="blog-card-category">{post.category}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-desc">{post.description}</p>
              </div>

              <div className="blog-card-bottom">
                <span className="blog-card-read-time">
                  <Clock size={14} />
                  {post.readTime} оқу
                </span>
                <span className="blog-card-link">Оқу</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
