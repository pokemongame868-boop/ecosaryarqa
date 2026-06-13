import { ArrowRight, Clock } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Blog() {
  const { content } = useI18n();
  const { blog } = content;

  return (
    <section id="blog" className="blog">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">{blog.tag}</span>
          <h2 className="section-title">{blog.title}</h2>
          <p className="section-subtitle">{blog.subtitle}</p>
        </header>

        <div className="blog-grid">
          {blog.items.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-top">
                <span className="blog-card-category">{post.category}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-desc">{post.description}</p>
              </div>

              <div className="blog-card-bottom">
                <span className="blog-card-read-time">
                  <Clock size={14} />
                  {post.readTime} {blog.readSuffix}
                </span>
                <a href="#" className="blog-card-link" onClick={(e) => e.preventDefault()}>
                  {blog.read}
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
