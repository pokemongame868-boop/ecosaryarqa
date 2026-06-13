import { Instagram, Leaf, MapPin, MessageCircle, Send } from 'lucide-react';
import { useI18n } from '../i18n';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { content } = useI18n();
  const { navLinks, contactInfo, footer } = content;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-logo">
              <div className="footer-logo-icon">
                <Leaf size={18} />
              </div>
              <span className="footer-brand-name">EcoSaryArqa</span>
            </div>
            <p className="footer-slogan">{footer.slogan}</p>

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

          <div>
            <p className="footer-col-title">{footer.navigation}</p>
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

          <div>
            <p className="footer-col-title">{footer.contacts}</p>
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

          <div>
            <p className="footer-col-title">{footer.ecoTourism}</p>
            <ul className="footer-nav-list">
              {footer.ecoLinks.map((link) => (
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
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} EcoSaryArqa. {footer.copyright}
          </p>
          <p className="footer-note">{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
