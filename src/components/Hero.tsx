import { useEffect, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { heroImages } from '../data/tourismData';
import { useI18n } from '../i18n';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const { content } = useI18n();
  const { hero } = content;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleImgError = (index: number) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  const scrollToRoutes = () => {
    document.querySelector('#routes')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        {heroImages.map((src, i) => (
          <div
            key={src}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: currentSlide === i ? 1 : 0,
              transition: 'opacity 1.2s ease',
            }}
          >
            {imgErrors[i] ? (
              <div
                className="hero-bg-fallback"
                style={{
                  background: [
                    'linear-gradient(135deg, #1a3d1b 0%, #2c5f2e 40%, #4a7c3f 70%, #6b9e52 100%)',
                    'linear-gradient(135deg, #1c2b3a 0%, #2e4460 50%, #3a6b8a 100%)',
                    'linear-gradient(135deg, #3d2b1a 0%, #6b4a2c 50%, #9e7a52 100%)',
                  ][i],
                }}
              />
            ) : (
              <img
                src={src}
                alt={`${hero.imageAlt} ${i + 1}`}
                onError={() => handleImgError(i)}
              />
            )}
          </div>
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-tag">
          <MapPin size={13} />
          {hero.tag}
        </div>

        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-subtitle">{hero.subtitle}</p>

        <div className="hero-buttons">
          <button className="hero-btn-primary" onClick={scrollToRoutes}>
            {hero.routesButton}
            <ArrowRight size={18} />
          </button>
          <button className="hero-btn-secondary" onClick={scrollToContact}>
            {hero.bookButton}
          </button>
        </div>

        <div className="hero-stats">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-indicators">
        {heroImages.map((src, i) => (
          <button
            key={src}
            className={`hero-indicator${currentSlide === i ? ' active' : ''}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`${hero.slideLabel} ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
