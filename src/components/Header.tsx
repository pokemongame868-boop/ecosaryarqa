import { useEffect, useState } from 'react';
import { ArrowRight, Leaf, Menu, X } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, content } = useI18n();
  const { navLinks, header } = content;

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

  const languageSwitcher = (className = '') => (
    <div className={`language-switcher${className ? ` ${className}` : ''}`} aria-label="Language switcher">
      <button
        type="button"
        className={`language-option${language === 'ru' ? ' active' : ''}`}
        onClick={() => setLanguage('ru')}
        aria-pressed={language === 'ru'}
      >
        RU
      </button>
      <button
        type="button"
        className={`language-option${language === 'kk' ? ' active' : ''}`}
        onClick={() => setLanguage('kk')}
        aria-pressed={language === 'kk'}
      >
        KZ
      </button>
    </div>
  );

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      {languageSwitcher('floating-language-switcher')}

      <div className="header-inner">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
          <div className="logo-icon">
            <Leaf size={18} />
          </div>
          <span className="logo-text">
            Eco<span>SaryArqa</span>
          </span>
        </a>

        <nav className="nav" aria-label={header.desktopNavLabel}>
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

        <div className="header-actions">
          {languageSwitcher()}

          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            {header.bookTour}
            <ArrowRight size={16} />
          </a>

          <button
            className="menu-btn"
            aria-label={menuOpen ? header.menuClose : header.menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label={header.mobileNavLabel}>
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
          <div className="mobile-language-switcher">{languageSwitcher()}</div>
          <a
            href="#contact"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            {header.bookTour}
          </a>
        </div>
      </nav>
    </header>
  );
}
