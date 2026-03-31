import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Users, Rocket, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import InviteCta from '../components/InviteCta';
import Seo from '../components/Seo';
import useScrollReveal from '../hooks/useScrollReveal';

const PAIN_POINTS = [
  { icon: '?', text: '"I know AI matters but I don\'t know where to start."' },
  { icon: '!', text: '"My team is experimenting with AI tools but there\'s no strategy."' },
  { icon: '\u21BB', text: '"We tried AI and it didn\'t deliver \u2014 now what?"' },
];

export default function GetStarted() {
  useScrollReveal();

  return (
    <>
      <Seo
        title="Get Started"
        description="Stop guessing about AI. Get expert coaching, hands-on training, and real-world deployment support from the team at Cosama."
        path="/get-started"
      />
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-centered">
          <div className="hero-brutal__label">Get Started</div>
          <h1 className="hero-brutal__title">
            Stop Guessing About AI. <span className="word-accent">Start Using It.</span>
          </h1>
          <p className="hero-brutal__desc">
            Join business leaders who've turned AI confusion into competitive advantage — with expert coaching, hands-on training, and real-world deployment support.
          </p>
          <div className="hero-brutal__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Give Us Your Contact Info <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Pain Points: Bordered rows ── */}
      <section className="section reveal">
        <div className="section-label">Sound Familiar?</div>
        <h2 className="section-title">You're Not Alone</h2>
        <div className="course-list" style={{ marginTop: 'var(--space-2xl)' }}>
          {PAIN_POINTS.map((pain, i) => (
            <div key={i} className="pain-row" style={ i === PAIN_POINTS.length - 1 ? { borderBottom: 'none' } : {}}>
              <span className="pain-row__icon">{pain.icon}</span>
              <p className="pain-row__text">{pain.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Solution: Bento grid ── */}
      <div className="section-warm">
        <section className="section reveal">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--space-3xl)' }}>
            <div className="section-label">The Cosama Approach</div>
            <h2 className="section-title">No Fluff. No Slides-Only Consulting.</h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              We get in the trenches with you — from a 1-hour strategy call to a full deployment engagement.
            </p>
          </div>

          <div className="bento-grid">
            <div className="bento-grid__featured">
              <div className="bento-accent-bar" style={{ background: 'var(--accent-orange)' }} />
              <Brain size={28} className="editorial-cell__icon" style={{ marginBottom: 'var(--space-md)' }} />
              <h3 className="editorial-cell__title" style={{ marginBottom: 'var(--space-sm)' }}>Coaching</h3>
              <p className="editorial-cell__text" style={{ marginBottom: 'var(--space-xl)' }}>
                1-on-1 strategy sessions tailored to your role and industry. Structured packages with clear deliverables across discovery, strategy, and implementation.
              </p>
              <div className="pricing-inline">
                Structured packages available &middot; <span className="pricing-inline__value">Hourly & bundle options</span>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 'var(--space-xl)' }}>
                <Link to="/coaching" className="editorial-cell__link">Explore Coaching <ArrowRight size={14} /></Link>
              </div>
            </div>

            <div className="bento-grid__stack">
              <div className="bento-grid__stack-item">
                <div className="bento-accent-bar" style={{ background: 'var(--accent-cyan)' }} />
                <Users size={24} className="editorial-cell__icon" style={{ marginBottom: 'var(--space-sm)' }} />
                <h3 className="editorial-cell__title" style={{ marginBottom: 'var(--space-sm)' }}>Training</h3>
                <p className="editorial-cell__text">
                  Claude, Claude Code, agentic AI, and MCP servers. 12 hands-on courses from foundation to advanced.
                </p>
                <div className="pricing-inline" style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)' }}>
                  Group rates available &middot; <span className="pricing-inline__value">10+ participants</span>
                </div>
              </div>
              <div className="bento-grid__stack-item">
                <div className="bento-accent-bar" style={{ background: 'var(--bg-dark)' }} />
                <Rocket size={24} className="editorial-cell__icon" style={{ marginBottom: 'var(--space-sm)' }} />
                <h3 className="editorial-cell__title" style={{ marginBottom: 'var(--space-sm)' }}>Consulting</h3>
                <p className="editorial-cell__text">
                  End-to-end AI integration, project management, and change management.
                </p>
                <div className="pricing-inline" style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)' }}>
                  <span className="pricing-inline__value">Custom scoped</span> &middot; based on requirements
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className="section-divider" />

      {/* ── Trust: Stats bar ── */}
      <div className="stats-bar">
        {[
          { icon: <Shield size={22} />, label: 'Part of Cosama' },
          { icon: <CheckCircle size={22} />, label: 'AI Practitioners' },
          { icon: <Brain size={22} />, label: 'Startup to Enterprise' },
          { icon: <AlertCircle size={22} />, label: 'Limited Quarterly Intake' },
        ].map(({ icon, label }) => (
          <div key={label} className="stats-bar__cell">
            <div className="stats-bar__value" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'var(--accent-orange)' }}>{icon}</span>
            </div>
            <div className="stats-bar__label">{label}</div>
          </div>
        ))}
      </div>

      <hr className="section-divider" />

      {/* ── CTA ── */}
      <InviteCta title="We Take On a Limited Number of New Clients Each Quarter" />
    </>
  );
}
