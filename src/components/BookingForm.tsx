import { useState } from 'react';
import { CheckCircle, Instagram, MapPin, MessageCircle, Send } from 'lucide-react';
import { useI18n } from '../i18n';

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

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { content } = useI18n();
  const { booking, contactInfo } = content;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = e.currentTarget as HTMLFormElement;
    if (!currentForm.reportValidity()) return;

    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="booking">
      <div className="container">
        <div className="booking-inner">
          <div className="booking-info">
            <span className="section-tag">{booking.tag}</span>
            <h2 className="booking-info-title">{booking.title}</h2>
            <p className="booking-info-desc">{booking.description}</p>

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
                  <div className="booking-contact-label">{booking.locationLabel}</div>
                  <div className="booking-contact-value">{contactInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">{booking.labels.name}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder={booking.placeholders.name}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">{booking.labels.phone}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder={booking.placeholders.phone}
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group full">
                  <label className="form-label" htmlFor="email">{booking.labels.email}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder={booking.placeholders.email}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="tourType">{booking.labels.tourType}</label>
                  <select
                    id="tourType"
                    name="tourType"
                    className="form-select"
                    value={form.tourType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{booking.placeholders.tourType}</option>
                    {booking.tourTypes.map((tourType) => (
                      <option key={tourType} value={tourType}>{tourType}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="days">{booking.labels.days}</label>
                  <input
                    id="days"
                    name="days"
                    type="text"
                    className="form-input"
                    placeholder={booking.placeholders.days}
                    value={form.days}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full">
                  <label className="form-label" htmlFor="message">{booking.labels.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder={booking.placeholders.message}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-submit-area">
                <button type="submit" className="form-submit">
                  {booking.submit}
                  <Send size={17} />
                </button>

                {submitted && (
                  <div className="form-success" role="alert">
                    <CheckCircle size={20} />
                    <span>{booking.success}</span>
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
