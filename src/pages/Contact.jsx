import { useState } from 'react';
import { ArrowRight, Mail, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-centered">
          <div className="hero-brutal__label">Contact Us</div>
          <h1 className="hero-brutal__title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Let's Start the <span className="word-accent">Conversation</span>
          </h1>
          <p className="hero-brutal__desc">
            Tell us about your business and what you're looking to accomplish with AI. We'll follow up with the right next step.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Form Section ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="editorial-split" style={{ alignItems: 'start' }}>
          {/* Form */}
          <div className="reveal">
            {submitted ? (
              <div className="hard-card" style={{ textAlign: 'center', padding: 'var(--space-4xl)' }}>
                <CheckCircle size={48} style={{ color: 'var(--accent-orange)', marginBottom: 'var(--space-lg)' }} />
                <h3 className="hard-card__title" style={{ fontSize: '1.5rem' }}>Thank You</h3>
                <p className="hard-card__text">We'll review your submission and respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="hard-card" style={{ boxShadow: 'var(--shadow-hard)' }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input type="text" className="form-input" required placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company *</label>
                    <input type="text" className="form-input" required placeholder="Company name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Role / Title</label>
                    <input type="text" className="form-input" placeholder="e.g. VP of Operations" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Size</label>
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>Select...</option>
                      <option>1-10</option>
                      <option>11-50</option>
                      <option>51-200</option>
                      <option>201-1,000</option>
                      <option>1,000+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-input" required placeholder="you@company.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone (optional)</label>
                    <input type="tel" className="form-input" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">What are you interested in?</label>
                    <div className="form-checkbox-group">
                      {['Coaching', 'Training', 'Consulting', 'Not sure yet'].map((opt) => (
                        <label key={opt} className="form-checkbox-label">
                          <input type="checkbox" /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Tell us about your situation</label>
                    <textarea className="form-textarea" placeholder="What challenges are you facing? What are you hoping AI can help with?" />
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Preferred Contact Method</label>
                    <div className="form-checkbox-group">
                      {['Email', 'Phone', 'Video Call'].map((opt) => (
                        <label key={opt} className="form-checkbox-label">
                          <input type="radio" name="contact-method" /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group full-width">
                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                      Submit Inquiry <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="reveal">
            <div className="course-list" style={{ marginBottom: 'var(--space-lg)' }}>
              {[
                { icon: <Clock size={18} />, title: 'Response Time', text: 'Within one business day' },
                { icon: <MessageSquare size={18} />, title: 'Discovery Call', text: 'Complimentary 30 min for qualified inquiries' },
                { icon: <Mail size={18} />, title: 'Email Us', text: 'hello@cosama.co' },
              ].map(({ icon, title, text }) => (
                <div key={title} className="course-row" style={{ cursor: 'default' }}>
                  <span style={{ color: 'var(--accent-orange)', flexShrink: 0 }}>{icon}</span>
                  <div style={{ flex: 1 }}>
                    <div className="course-row__name" style={{ fontSize: '0.9rem' }}>{title}</div>
                    <div className="course-row__desc">{text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hard-card" style={{ background: 'var(--bg-dark)', color: 'var(--text-white)', border: 'var(--border-hard)' }}>
              <h3 className="hard-card__title" style={{ color: 'var(--text-white)' }}>Not Sure Where to Start?</h3>
              <p className="hard-card__text" style={{ color: '#b0b0b0' }}>
                Qualified inquiries receive a complimentary 30-minute discovery call. All others receive a link to book a paid strategy session.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
