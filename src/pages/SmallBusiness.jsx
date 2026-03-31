import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Brain, Clock, Zap } from 'lucide-react';
import { InviteForm } from '../components/InviteCta';
import Seo from '../components/Seo';
import useScrollReveal from '../hooks/useScrollReveal';

const INCLUDED_COURSES = [
  'Mastering Claude: From Chat to Power User',
  'Prompt Engineering That Actually Works',
  'Claude Code for Business Professionals',
  'Building Your AI Coworker',
  'AI-Powered Business Workflows',
  'AI for Leaders: Strategy, ROI & Adoption',
];

export default function SmallBusiness() {
  useScrollReveal();

  return (
    <>
      <Seo
        title="AI for Small Business — 50% Off"
        description="AI coaching and training for small business owners. Learn how to use AI in your business with 1-on-1 coaching and live team training — 50% off for a limited time."
        path="/small-business"
      />
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-centered">
          <div className="hero-brutal__label" style={{ color: 'var(--accent-orange)' }}>For Small Business Owners</div>
          <h1 className="hero-brutal__title">
            AI for Your Business.<br /><span className="word-accent">Easier Than You Think.</span>
          </h1>
          <p className="hero-brutal__desc">
            50% off for a limited time. We show small business owners exactly how to use AI to save time, win more deals, and run a smarter operation — no tech team or six-figure budget required.
          </p>
          <div className="hero-brutal__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Claim Your Spot <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Urgency bar ── */}
      <div className="stats-bar">
        <div className="stats-bar__cell">
          <div className="stats-bar__value" style={{ color: 'var(--accent-orange)' }}>50%</div>
          <div className="stats-bar__label">Off All Packages</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value">1–25</div>
          <div className="stats-bar__label">Team Members</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value">1:1</div>
          <div className="stats-bar__label">Coaching Included</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={22} />
          </div>
          <div className="stats-bar__label">Limited Availability</div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* ── Pain points ── */}
      <section className="section reveal">
        <div className="section-label">Sound Familiar?</div>
        <h2 className="section-title">Small Businesses Get Left Behind on AI</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          Enterprise companies have AI teams. You have Google and guesswork. That changes now.
        </p>

        <div className="course-list">
          {[
            { icon: '?', text: '"I know AI could help my business, but I don\'t have time to figure it out."' },
            { icon: '!', text: '"My team is using ChatGPT randomly with no strategy and no guardrails."' },
            { icon: '$', text: '"Enterprise AI consulting costs $50K+. I need results, not a six-figure retainer."' },
          ].map((pain, i) => (
            <div key={i} className="pain-row" style={i === 2 ? { borderBottom: 'none' } : {}}>
              <span className="pain-row__icon">{pain.icon}</span>
              <p className="pain-row__text">{pain.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── What you get: Bento ── */}
      <div className="section-warm">
        <section className="section reveal">
          <div className="section-label">The Small Business AI Package</div>
          <h2 className="section-title">Everything You Need. Nothing You Don't.</h2>

          <div className="bento-grid" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="bento-grid__featured">
              <div className="bento-accent-bar" style={{ background: 'var(--accent-orange)' }} />
              <Brain size={28} className="editorial-cell__icon" style={{ marginBottom: 'var(--space-md)' }} />
              <h3 className="editorial-cell__title" style={{ marginBottom: 'var(--space-sm)' }}>1-on-1 Coaching</h3>
              <p className="editorial-cell__text" style={{ marginBottom: 'var(--space-xl)' }}>
                Direct coaching for the business owner or team lead. We build your AI strategy around your actual business — your tools, your workflows, your goals. Walk away with a concrete action plan, not a slide deck.
              </p>
              <div className="pricing-inline">
                <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', marginRight: '0.5rem' }}>$3,500</span>
                <span className="pricing-inline__value">$1,750</span> &middot; Starter Package
              </div>
            </div>

            <div className="bento-grid__stack">
              <div className="bento-grid__stack-item">
                <div className="bento-accent-bar" style={{ background: 'var(--accent-cyan)' }} />
                <Users size={24} className="editorial-cell__icon" style={{ marginBottom: 'var(--space-sm)' }} />
                <h3 className="editorial-cell__title" style={{ marginBottom: 'var(--space-sm)' }}>Team Training</h3>
                <p className="editorial-cell__text">
                  Live, hands-on Claude training for your team. Small group sessions with breakout exercises — not death-by-webinar.
                </p>
                <div className="pricing-inline" style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)' }}>
                  <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', marginRight: '0.5rem' }}>$200/seat</span>
                  <span className="pricing-inline__value">$100/seat</span>
                </div>
              </div>
              <div className="bento-grid__stack-item">
                <div className="bento-accent-bar" style={{ background: 'var(--bg-dark)' }} />
                <Zap size={24} className="editorial-cell__icon" style={{ marginBottom: 'var(--space-sm)' }} />
                <h3 className="editorial-cell__title" style={{ marginBottom: 'var(--space-sm)' }}>AI Playbook</h3>
                <p className="editorial-cell__text">
                  Custom prompt libraries, workflow templates, and tool recommendations built for your business. Yours to keep.
                </p>
                <div className="pricing-inline" style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)' }}>
                  <span className="pricing-inline__value">Included</span> &middot; with every package
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className="section-divider" />

      {/* ── Pricing breakdown ── */}
      <section className="reveal">
        <div style={{ padding: 'var(--space-3xl) var(--space-xl) 0' }}>
          <div className="section-label">50% Off — Small Business Pricing</div>
          <h2 className="section-title">Pick the Package That Fits</h2>
        </div>

        <div className="editorial-numbered">
          <div className="editorial-numbered__label">
            <div className="editorial-numbered__step">Coaching</div>
            <div className="editorial-numbered__ghost">01</div>
          </div>
          <div className="editorial-numbered__content">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>1-on-1 Starter Package</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 'var(--space-md)' }}>
              7 hours of structured coaching: discovery session, strategic plan, and hands-on delivery with your AI action plan, tool selections, and quick wins.
            </p>
            <div className="pricing-inline">
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', marginRight: '0.5rem' }}>$3,500</span>
              <span className="pricing-inline__value">$1,750</span>
            </div>
          </div>
        </div>
        <div className="editorial-numbered">
          <div className="editorial-numbered__label">
            <div className="editorial-numbered__step">Coaching</div>
            <div className="editorial-numbered__ghost">02</div>
          </div>
          <div className="editorial-numbered__content">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>1-on-1 Growth Package</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 'var(--space-md)' }}>
              14 hours of deep-dive coaching: extended discovery, department-level strategy with ROI projections, comprehensive playbook, vendor evaluations, and implementation timeline.
            </p>
            <div className="pricing-inline">
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', marginRight: '0.5rem' }}>$7,000</span>
              <span className="pricing-inline__value">$3,500</span>
            </div>
          </div>
        </div>
        <div className="editorial-numbered" style={{ borderBottom: 'var(--border-hard)' }}>
          <div className="editorial-numbered__label" style={{ borderBottom: 'none' }}>
            <div className="editorial-numbered__step">Training</div>
            <div className="editorial-numbered__ghost">03</div>
          </div>
          <div className="editorial-numbered__content" style={{ borderBottom: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Team Training (Small Group)</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 'var(--space-md)' }}>
              Live, instructor-led Claude training for your team. Includes training handbook, slide deck, prompt libraries, and reference materials. Minimum 5 participants for this offer.
            </p>
            <div className="pricing-inline">
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', marginRight: '0.5rem' }}>$200/seat</span>
              <span className="pricing-inline__value">$100/seat</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Courses included ── */}
      <section className="section reveal">
        <div className="section-label">Courses for Small Business</div>
        <h2 className="section-title">6 Courses Built for Teams Under 25</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          We picked the courses that deliver the fastest ROI for small businesses. No filler, no fluff — just the skills your team needs to start using AI this week.
        </p>

        <div className="course-list">
          {INCLUDED_COURSES.map((course, i) => (
            <div key={course} className="course-row">
              <span className="course-row__number">{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1 }}>
                <div className="course-row__name">{course}</div>
              </div>
              <CheckCircle size={18} style={{ color: 'var(--accent-orange)', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── What makes this different ── */}
      <div className="section-dark">
        <section className="section reveal">
          <div className="editorial-split">
            <div>
              <div className="section-label">Why Cosama</div>
              <h2 className="section-title">This Isn't a Generic AI Webinar</h2>
              <p className="section-subtitle">
                We build AI systems for a living. Then we teach what we've learned. Your small business gets the same practitioner-level training that enterprise teams pay 10x for.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: <CheckCircle size={18} />, text: 'Claude-focused — not generic "AI overview"' },
                { icon: <CheckCircle size={18} />, text: 'Hands-on exercises, not slide decks' },
                { icon: <CheckCircle size={18} />, text: 'Built for teams of 1–25' },
                { icon: <CheckCircle size={18} />, text: 'Prompt libraries you keep forever' },
                { icon: <CheckCircle size={18} />, text: '1-on-1 coaching with the founder' },
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

      {/* ── CTA ── */}
      <div className="cta-band-wrapper">
        <section className="cta-band reveal">
          <div className="section-label" style={{ color: 'var(--accent-orange)' }}>50% Off — Limited Spots</div>
          <h2 className="section-title">Ready to Give Your Small Team an Unfair Advantage?</h2>
          <p className="section-subtitle" style={{ marginBottom: 'var(--space-xl)', maxWidth: '600px', margin: '0 auto var(--space-xl)' }}>
            This offer is for businesses with 1–25 employees. Spots are limited — we cap intake to keep sessions small and personal.
          </p>
          <InviteForm buttonLabel="Claim My 50% Off" title="Ready to Give Your Small Team an Unfair Advantage?" />
        </section>
      </div>
    </>
  );
}
