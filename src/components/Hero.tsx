import { useState, useEffect } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { heroImages } from '../data/tourismData';

const heroStats = [
  { value: '5+', label: 'Бағыт' },
  { value: '4', label: 'Маршрут' },
  { value: '100%', label: 'Жауапты туризм' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  // Auto-advance slides
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
      {/* Background images */}
      <div className="hero-bg">
        {heroImages.map((src, i) => (
          <div
            key={i}
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
                alt={`Қарағанды облысының табиғаты ${i + 1}`}
                onError={() => handleImgError(i)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-tag">
          <MapPin size={13} />
          Қарағанды облысы, Қазақстан
        </div>

        <h1 className="hero-title">
          Қарағанды облысының табиғатын бірге ашайық
        </h1>

        <p className="hero-subtitle">
          Қарағанды облысының ерекше табиғатын, киелі жерлерін және ұлттық туризм мәдениетін бірге ашыңыз. Жаяу походтар, атпен серуендер, кемпинг және road trip маршруттары сізді күтеді.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn-primary" onClick={scrollToRoutes}>
            Маршруттарды қарау
            <ArrowRight size={18} />
          </button>
          <button className="hero-btn-secondary" onClick={scrollToContact}>
            Тур брондау
          </button>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="hero-indicators">
        {heroImages.map((_, i) => (
          <button
            key={i}
            className={`hero-indicator${currentSlide === i ? ' active' : ''}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
