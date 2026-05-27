import { Leaf, MessageCircle, Instagram, Send, MapPin } from 'lucide-react';
import { navLinks, contactInfo } from '../data/tourismData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <div className="footer-brand-logo">
              <div className="footer-logo-icon">
                <Leaf size={18} />
              </div>
              <span className="footer-brand-name">EcoSaryArqa</span>
            </div>
            <p className="footer-slogan">
              Табиғатты сақтай отырып саяхаттаңыз.
            </p>

            {/* Social links */}
            <div className="footer-socials">
              <a
                href="#"
                className="footer-social-link"
                aria-label="WhatsApp"
                onClick={(e) => e.preventDefault()}
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="Telegram"
                onClick={(e) => e.preventDefault()}
              >
                <Send size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-title">Навигация</p>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Baylanis */}
          <div>
            <p className="footer-col-title">Байланыс</p>
            <div>
              <div className="footer-contact-item">
                <MessageCircle size={15} />
                <span>{contactInfo.whatsapp}</span>
              </div>
              <div className="footer-contact-item">
                <Instagram size={15} />
                <span>{contactInfo.instagram}</span>
              </div>
              <div className="footer-contact-item">
                <Send size={15} />
                <span>{contactInfo.telegram}</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={15} />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Eco info */}
          <div>
            <p className="footer-col-title">Эко туризм</p>
            <ul className="footer-nav-list">
              <li><a href="#eco-rules" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#eco-rules')}>Эко қағидалар</a></li>
              <li><a href="#destinations" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#destinations')}>Бағыттар</a></li>
              <li><a href="#routes" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#routes')}>Маршруттар</a></li>
              <li><a href="#gallery" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#gallery')}>Галерея</a></li>
              <li><a href="#blog" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#blog')}>Мақалалар</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} EcoSaryArqa. Барлық құқықтар қорғалған.
          </p>
          <p className="footer-note">
            Қарағанды облысы, Қазақстан
          </p>
        </div>
      </div>
    </footer>
  );
}
