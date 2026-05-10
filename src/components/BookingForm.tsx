import { useState } from 'react';
import { MessageCircle, Instagram, Send, MapPin, CheckCircle } from 'lucide-react';
import { contactInfo } from '../data/tourismData';

interface FormData {
  name: string;
  phone: string;
  email: string;
  tourType: string;
  days: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  tourType: '',
  days: '',
  message: '',
};

const tourTypes = [
  'Жаяу поход',
  'Атпен тур',
  'Машинамен саяхат',
  'Палаткамен демалыс',
  'Сакралды орындар',
  'Аралас тур',
];

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = e.currentTarget as HTMLFormElement;
    if (!currentForm.reportValidity()) return;

    const whatsappNumber = contactInfo.whatsapp.replace(/\D/g, '');
    const text = [
      'Сәлеметсіз бе! EcoSaryArqa сайты арқылы турға өтінім:',
      `Аты-жөні: ${form.name}`,
      `Телефон: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Тур түрі: ${form.tourType}`,
      form.days ? `Күн саны: ${form.days}` : null,
      form.message ? `Хабарлама: ${form.message}` : null,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="booking">
      <div className="container">
        <div className="booking-inner">
          {/* Left: info */}
          <div className="booking-info">
            <span className="section-tag">Байланыс</span>
            <h2 className="booking-info-title">
              Саяхатыңызды жоспарлайық
            </h2>
            <p className="booking-info-desc">
              Тур туралы сұрақтарыңыз болса немесе брондағыңыз келсе, бізге хабарласыңыз. 24 сағат ішінде жауап береміз.
            </p>

            <div className="booking-contacts">
              <div className="booking-contact-item">
                <div className="booking-contact-icon">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="booking-contact-label">WhatsApp</div>
                  <div className="booking-contact-value">{contactInfo.whatsapp}</div>
                </div>
              </div>

              <div className="booking-contact-item">
                <div className="booking-contact-icon">
                  <Instagram size={20} />
                </div>
                <div>
                  <div className="booking-contact-label">Instagram</div>
                  <div className="booking-contact-value">{contactInfo.instagram}</div>
                </div>
              </div>

              <div className="booking-contact-item">
                <div className="booking-contact-icon">
                  <Send size={20} />
                </div>
                <div>
                  <div className="booking-contact-label">Telegram</div>
                  <div className="booking-contact-value">{contactInfo.telegram}</div>
                </div>
              </div>

              <div className="booking-contact-item">
                <div className="booking-contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="booking-contact-label">Орналасуы</div>
                  <div className="booking-contact-value">{contactInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="booking-form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Аты-жөні</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Сіздің атыңыз"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Телефон</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+7 700 000 00 00"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group full">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="example@mail.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="tourType">Тур түрі</label>
                  <select
                    id="tourType"
                    name="tourType"
                    className="form-select"
                    value={form.tourType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Таңдаңыз</option>
                    {tourTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="days">Күн саны</label>
                  <input
                    id="days"
                    name="days"
                    type="text"
                    className="form-input"
                    placeholder="мысалы: 2-3 күн"
                    value={form.days}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full">
                  <label className="form-label" htmlFor="message">Хабарлама</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Сұрақтарыңыз, ерекше тілектеріңіз..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-submit-area">
                <button type="submit" className="form-submit">
                  Өтінім жіберу
                  <Send size={17} />
                </button>

                {submitted && (
                  <div className="form-success" role="alert">
                    <CheckCircle size={20} />
                    <span>WhatsApp ашылды. Хабарламаны тексеріп, жіберіңіз.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
