import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Wrench, GraduationCap, Target, Lightbulb, TrendingUp } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-centered">
          <div className="hero-brutal__label">About Cosama</div>
          <h1 className="hero-brutal__title">
            We Didn't Wait for the AI Revolution — <span className="word-accent">We Started Building It</span>
          </h1>
          <p className="hero-brutal__desc">
            Founded by an IT industry veteran with deep roots in systems architecture, infrastructure, and enterprise project management.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Story: Editorial numbered sections ── */}
      <section className="reveal">
        <div className="editorial-numbered">
          <div className="editorial-numbered__label">
            <div className="editorial-numbered__step">Our Story</div>
            <div className="editorial-numbered__ghost">01</div>
          </div>
          <div className="editorial-numbered__content">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-md)' }}>
              From Building AI Systems to Teaching What We've Learned
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 'var(--space-lg)' }}>
              When AI emerged as the next inflection point, we jumped in and started building — not simple chatbots or basic automations, but full AI orchestration systems designed for how businesses will actually operate in the years ahead.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.75 }}>
              That hands-on experience gives us something most consultants don't have: we've seen the patterns. We understand where AI is headed, what works in production versus in a demo, and how to bridge the gap between vision and execution.
            </p>
          </div>
        </div>
        <div className="editorial-numbered" style={{ borderBottom: 'var(--border-hard)' }}>
          <div className="editorial-numbered__label" style={{ borderBottom: 'none' }}>
            <div className="editorial-numbered__step">Our Mission</div>
            <div className="editorial-numbered__ghost">02</div>
          </div>
          <div className="editorial-numbered__content" style={{ borderBottom: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-md)' }}>
              Taking What We've Built and Putting It to Work for You
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.75 }}>
              That's why we launched Cosama's AI Coaching & Training practice — to take everything we've learned building AI systems and put it to work for business owners and their teams. We don't just talk about AI. We deploy it, we train on it, and we help you operationalize it.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── What Sets Us Apart: Editorial 3-column ── */}
      <section className="section reveal">
        <div className="section-label">What Sets Us Apart</div>
        <h2 className="section-title">Practitioner-First. Always.</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          We don't just talk about AI. We deploy it, we train on it, and we help you operationalize it.
        </p>

        <div className="editorial-grid-3">
          <div className="editorial-cell" style={{ borderTop: '3px solid var(--accent-orange)' }}>
            <Building2 size={28} className="editorial-cell__icon" />
            <h3 className="editorial-cell__title">Part of Cosama</h3>
            <p className="editorial-cell__text">
              Part of the Cosama family of AI products and services. Enterprise-grade thinking applied to businesses of all sizes.
            </p>
          </div>
          <div className="editorial-cell" style={{ borderTop: '3px solid var(--accent-cyan)' }}>
            <Wrench size={28} className="editorial-cell__icon" />
            <h3 className="editorial-cell__title">We Build, Then Teach</h3>
            <p className="editorial-cell__text">
              We build AI systems, deploy them in production, and teach what we've learned in the trenches.
            </p>
          </div>
          <div className="editorial-cell" style={{ borderTop: '3px solid var(--bg-dark)' }}>
            <GraduationCap size={28} className="editorial-cell__icon" />
            <h3 className="editorial-cell__title">Outcomes-Focused</h3>
            <p className="editorial-cell__text">
              Every engagement is structured around outcomes — not hours on a clock. Concrete results, not slide decks.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Approach: Dark split ── */}
      <div className="section-dark">
        <section className="section reveal">
          <div className="editorial-split">
            <div>
              <div className="section-label">Our Approach</div>
              <h2 className="section-title">Built by AI Practitioners, Not Theorists</h2>
              <p className="section-subtitle">
                Our coaching practice is powered by real experience building AI orchestration systems.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: <Target size={18} />, text: 'Systems architecture background' },
                { icon: <Wrench size={18} />, text: 'Full-stack AI deployment experience' },
                { icon: <Lightbulb size={18} />, text: 'Production-tested, not demo-only' },
                { icon: <TrendingUp size={18} />, text: 'From startup to enterprise scale' },
              ].map(({ icon, text }) => (
                <div key={text} className="feature-pill-dark">
                  <span className="feature-pill-dark__icon">{icon}</span>
                  <span className="feature-pill-dark__text">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <hr className="section-divider" />

      {/* ── Services: Bento grid ── */}
      <section className="section reveal">
        <div className="section-label">What We Offer</div>
        <h2 className="section-title">Three Pillars of AI Expertise</h2>
        <div className="editorial-grid-3" style={{ marginTop: 'var(--space-2xl)' }}>
          {[
            { title: 'Executive Coaching', desc: '1-on-1 sessions tailored to your role, industry, and goals. Walk away with a concrete AI action plan.', link: '/coaching' },
            { title: 'Team Training', desc: 'Live, interactive courses with full materials. From chatbot basics to AI-integrated workflows.', link: '/training' },
            { title: 'Integration Consulting', desc: 'End-to-end AI deployment support — from vendor evaluation through production go-live.', link: '/consulting' },
          ].map((service) => (
            <div key={service.title} className="editorial-cell">
              <h3 className="editorial-cell__title">{service.title}</h3>
              <p className="editorial-cell__text">{service.desc}</p>
              <Link to={service.link} className="editorial-cell__link">Learn More <ArrowRight size={14} /></Link>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CTA ── */}
      <div className="cta-band-wrapper">
        <section className="cta-band reveal">
          <div className="section-label">Grab an Invite Now!</div>
          <h2 className="section-title">Every Business Deserves Access to AI Expertise</h2>
          <form className="cta-band-form" onSubmit={e => e.preventDefault()}>
            <input type="email" className="form-input" placeholder="Enter your work email" />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      </div>
    </>
  );
}
