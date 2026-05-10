import { useState, useEffect } from 'react';
import { Menu, X, Leaf, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/tourismData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
          <div className="logo-icon">
            <Leaf size={18} />
          </div>
          <span className="logo-text">
            Eco<span>SaryArqa</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav" aria-label="Негізгі навигация">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header actions */}
        <div className="header-actions">
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Тур брондау
            <ArrowRight size={16} />
          </a>

          {/* Mobile menu toggle */}
          <button
            className="menu-btn"
            aria-label={menuOpen ? 'Мәзірді жабу' : 'Мәзірді ашу'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Мобильді навигация">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-nav-btn">
          <a
            href="#contact"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Тур брондау
          </a>
        </div>
      </nav>
    </header>
  );
}
