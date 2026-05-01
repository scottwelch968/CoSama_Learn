import { useState } from 'react';
import { ArrowRight, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import Seo from '../components/Seo';
import useScrollReveal from '../hooks/useScrollReveal';
import { apiUrl } from '../lib/api';

const INTEREST_OPTIONS = ['Coaching', 'Training', 'Consulting', 'Not sure yet'];
const CONTACT_METHOD_OPTIONS = ['Email', 'Phone', 'Video Call'];

const initialFormData = {
  name: '',
  company: '',
  role: '',
  companySize: '',
  email: '',
  phone: '',
  interests: [],
  message: '',
  contactMethod: 'Email',
  website: '',
};

export default function Contact() {
  useScrollReveal();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submissionResult, setSubmissionResult] = useState({
    confirmationSent: false,
    email: '',
    submitted: false,
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleInterestChange = (event) => {
    const { checked, value } = event.target;

    setFormData((current) => ({
      ...current,
      interests: checked
        ? [...current.interests, value]
        : current.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      let response;

      try {
        response = await fetch(apiUrl('/api/contact'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (error) {
        throw new Error(
          import.meta.env.DEV
            ? 'The contact API is unavailable. Start the app with npm run dev and reload the page.'
            : 'We could not send your message right now. Please try again.'
        );
      }

      const contentType = response.headers.get('content-type') || '';
      const result = contentType.includes('application/json')
        ? await response.json().catch(() => ({}))
        : {};

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error ||
            (import.meta.env.DEV && !contentType.includes('application/json')
              ? 'The contact API is unavailable. Make sure you are running the full app with npm run dev, not Vite by itself.'
              : 'We could not send your message right now. Please try again.')
        );
      }

      setSubmissionResult({
        confirmationSent: Boolean(result.confirmationSent),
        email: formData.email,
        submitted: true,
      });
      setFormData(initialFormData);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'We could not send your message right now. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSubmissionState = () => {
    setSubmissionResult({
      confirmationSent: false,
      email: '',
      submitted: false,
    });
    setSubmitError('');
  };

  return (
    <>
      <Seo
        title="Contact Us"
        description="Tell us about your business and what you're looking to accomplish with AI. We respond within one business day."
        path="/contact"
      />
      {/* Hero */}
      <section className="hero">
        <div className="hero-centered">
          <div className="hero-brutal__label">Contact Us</div>
          <h1 className="hero-brutal__title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Let&apos;s Start the <span className="word-accent">Conversation</span>
          </h1>
          <p className="hero-brutal__desc">
            Tell us about your business and what you&apos;re looking to accomplish with AI.
            We&apos;ll follow up with the right next step.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Form Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="editorial-split" style={{ alignItems: 'start' }}>
          <div className="reveal">
            {submissionResult.submitted ? (
              <div className="hard-card hard-card--static contact-form-card" style={{ textAlign: 'center', padding: 'var(--space-4xl)' }}>
                <CheckCircle
                  size={48}
                  style={{ color: 'var(--accent-orange)', marginBottom: 'var(--space-lg)' }}
                />
                <h3 className="hard-card__title" style={{ fontSize: '1.5rem' }}>
                  Thank You
                </h3>
                <p className="hard-card__text" style={{ marginBottom: 'var(--space-sm)' }}>
                  We&apos;ll review your submission and respond within one business day.
                </p>
                <p className="hard-card__text" style={{ marginBottom: 'var(--space-xl)' }}>
                  {submissionResult.confirmationSent
                    ? `A confirmation email has been sent to ${submissionResult.email}.`
                    : 'Your request was delivered, but we could not send the confirmation email.'}
                </p>
                <button type="button" className="btn btn-secondary" onClick={resetSubmissionState}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="hard-card hard-card--static contact-form-card" style={{ boxShadow: 'var(--shadow-hard)' }}>
                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    autoComplete="off"
                    id="contact-website"
                    name="website"
                    onChange={handleFieldChange}
                    tabIndex={-1}
                    type="text"
                    value={formData.website}
                  />
                </div>

                <fieldset
                  disabled={isSubmitting}
                  style={{ border: 0, margin: 0, padding: 0 }}
                >
                  <div className="form-grid">
                    {submitError ? (
                      <div className="form-group full-width">
                        <div className="form-status form-status--error" aria-live="assertive">
                          <strong>Submission error</strong>
                          <span>{submitError}</span>
                        </div>
                      </div>
                    ) : null}

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="form-input"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-company">Company *</label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        className="form-input"
                        required
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-role">Role / Title</label>
                      <input
                        id="contact-role"
                        name="role"
                        type="text"
                        className="form-input"
                        placeholder="e.g. VP of Operations"
                        value={formData.role}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-company-size">Company Size</label>
                      <select
                        id="contact-company-size"
                        name="companySize"
                        className="form-select"
                        value={formData.companySize}
                        onChange={handleFieldChange}
                      >
                        <option value="">Select...</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-1,000">201-1,000</option>
                        <option value="1,000+">1,000+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="form-input"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone (optional)</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label">What are you interested in?</label>
                      <div className="form-checkbox-group">
                        {INTEREST_OPTIONS.map((option) => (
                          <label key={option} className="form-checkbox-label">
                            <input
                              type="checkbox"
                              name="interests"
                              value={option}
                              checked={formData.interests.includes(option)}
                              onChange={handleInterestChange}
                            />{' '}
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="contact-message">Tell us about your situation</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-textarea"
                        placeholder="What challenges are you facing? What are you hoping AI can help with?"
                        value={formData.message}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label">Preferred Contact Method</label>
                      <div className="form-checkbox-group">
                        {CONTACT_METHOD_OPTIONS.map((option) => (
                          <label key={option} className="form-checkbox-label">
                            <input
                              type="radio"
                              name="contactMethod"
                              value={option}
                              checked={formData.contactMethod === option}
                              onChange={handleFieldChange}
                            />{' '}
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="form-group full-width">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ width: '100%' }}
                      >
                        {isSubmitting ? 'Sending Inquiry...' : 'Submit Inquiry'} <ArrowRight size={14} />
                      </button>
                      <p className="form-status">
                        We&apos;ll send a confirmation email after your inquiry is received.
                      </p>
                    </div>
                  </div>
                </fieldset>
              </form>
            )}
          </div>

          <div className="reveal">
            <div className="course-list" style={{ marginBottom: 'var(--space-lg)' }}>
              {[
                { icon: <Clock size={18} />, title: 'Response Time', text: 'Within one business day' },
                { icon: <MessageSquare size={18} />, title: 'Discovery Call', text: 'Complimentary 30 min for qualified inquiries' },
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
