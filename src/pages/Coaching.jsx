import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Video, MapPin } from 'lucide-react';
import InviteCta from '../components/InviteCta';
import Seo from '../components/Seo';
import useScrollReveal from '../hooks/useScrollReveal';

const ROLES = [
  { label: 'C-Suite & Founders', points: ['AI strategy & competitive positioning', 'ROI modeling & board-ready narratives', 'Risk and compliance considerations', 'Investment prioritization'] },
  { label: 'VP & Senior Leadership', points: ['Department-level AI roadmaps', 'Change management strategies', 'Vendor selection & evaluation', 'Cross-functional alignment'] },
  { label: 'Directors & Managers', points: ['Workflow automation planning', 'Team adoption strategies', 'Tool selection & evaluation', 'KPI frameworks for AI initiatives'] },
  { label: 'Individual Contributors', points: ['Hands-on tool training', 'Prompt engineering mastery', 'AI-assisted productivity', 'Role-specific use cases'] },
];

export default function Coaching() {
  useScrollReveal();
  const [activeRole, setActiveRole] = useState(0);

  return (
    <>
      <Seo
        title="AI Coaching"
        description="1-on-1 AI coaching built around your business. Structured packages from discovery through implementation. Walk away with a concrete AI action plan."
        path="/coaching"
      />
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-centered">
          <div className="hero-brutal__label">Executive Coaching</div>
          <h1 className="hero-brutal__title">
            AI Coaching Built Around <span className="word-accent">Your Business</span>
          </h1>
          <p className="hero-brutal__desc">
            Every coaching package is structured around outcomes — not hours on a clock. Discovery, strategy, and delivery with clear results.
          </p>
          <div className="hero-brutal__actions">
            <Link to="/get-started" className="btn btn-primary btn-lg">
              Get Started <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── How It Works: Editorial numbered sections ── */}
      <section className="reveal">
        <div style={{ padding: 'var(--space-3xl) var(--space-xl) 0' }}>
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Structured Engagements, Clear Deliverables</h2>
          <p className="section-subtitle" style={{ marginBottom: 'var(--space-2xl)' }}>
            Every package follows the same proven framework: Discovery, Strategy, Delivery.
          </p>
        </div>

        <div className="editorial-numbered">
          <div className="editorial-numbered__label">
            <div className="editorial-numbered__step">Phase 01</div>
            <div className="editorial-numbered__ghost">01</div>
          </div>
          <div className="editorial-numbered__content">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Discovery Session</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              Understand your business, goals, current tech stack, and AI readiness. Deep dive into operations, pain points, and competitive landscape.
            </p>
          </div>
        </div>
        <div className="editorial-numbered">
          <div className="editorial-numbered__label">
            <div className="editorial-numbered__step">Phase 02</div>
            <div className="editorial-numbered__ghost">02</div>
          </div>
          <div className="editorial-numbered__content">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Review & Strategic Plan</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              Assess opportunities, prioritize use cases, and draft an AI adoption roadmap with department-level recommendations and ROI projections.
            </p>
          </div>
        </div>
        <div className="editorial-numbered" style={{ borderBottom: 'var(--border-hard)' }}>
          <div className="editorial-numbered__label" style={{ borderBottom: 'none' }}>
            <div className="editorial-numbered__step">Phase 03</div>
            <div className="editorial-numbered__ghost">03</div>
          </div>
          <div className="editorial-numbered__content" style={{ borderBottom: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Comprehensive Delivery</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              Tailored recommendations, tool selections, implementation plan, quick wins, vendor evaluations, and hands-on demos. Training courses can be included.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Packages: Discreet bento grid (NOT big pricing cards) ── */}
      <section className="section reveal">
        <div className="section-label">Coaching Packages</div>
        <h2 className="section-title">Choose Your Engagement Level</h2>

        <div className="bento-grid" style={{ marginTop: 'var(--space-2xl)' }}>
          <div className="bento-grid__featured">
            <div className="bento-accent-bar" style={{ background: 'var(--accent-orange)' }} />
            <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: 'var(--space-sm)' }}>Growth Package</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, marginBottom: 'var(--space-md)' }}>Deep-Dive Engagement</h3>
            <p className="editorial-cell__text" style={{ marginBottom: 'var(--space-xl)' }}>
              14 hours across discovery, strategy, and comprehensive delivery. Department-level recommendations, ROI projections, playbook, vendor evaluations, and implementation timeline.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: 'var(--space-xl)' }}>
              {['2-hour deep discovery', '4-hour strategic planning', '8-hour comprehensive delivery', 'Training courses included'].map(f => (
                <div key={f} className="check-feature"><CheckCircle size={14} /><span>{f}</span></div>
              ))}
            </div>
            <div className="pricing-inline" style={{ marginBottom: 'var(--space-lg)' }}>
              <span className="pricing-inline__value">$7,000</span> &middot; 14 hours total
            </div>
            <Link to="/get-started" className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start' }}>
              Choose Growth <ArrowRight size={12} />
            </Link>
          </div>

          <div className="bento-grid__stack">
            <div className="bento-grid__stack-item">
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: 'var(--space-sm)' }}>Starter Package</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Focused Strategy Session</h3>
              <p className="editorial-cell__text">
                7 hours: discovery, planning, and tailored delivery with implementation plan and quick wins.
              </p>
              <div className="pricing-inline" style={{ marginTop: 'auto', paddingTop: 'var(--space-md)' }}>
                <span className="pricing-inline__value">$3,500</span> &middot; 7 hours
              </div>
            </div>
            <div className="bento-grid__stack-item">
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: 'var(--space-sm)' }}>Flex Coaching</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Hourly & Bundle Rates</h3>
              <p className="editorial-cell__text">
                Ongoing advisory, board prep, AI vendor evaluation, or second opinions on AI proposals.
              </p>
              <div className="pricing-inline" style={{ marginTop: 'auto', paddingTop: 'var(--space-md)' }}>
                Starting at <span className="pricing-inline__value">$250/hr</span> &middot; bundles available
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-lg)', display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap' }}>
          {[
            { icon: <Video size={14} />, text: 'Video conference available' },
            { icon: <MapPin size={14} />, text: 'In-person delivery available; travel billed separately' },
            { icon: <Clock size={14} />, text: 'Training courses can be bundled' },
          ].map(({ icon, text }) => (
            <span key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {icon} {text}
            </span>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Flex Coaching: Discreet table ── */}
      <div className="section-cool">
        <section className="section reveal">
          <div className="section-label">Flex Coaching</div>
          <h2 className="section-title">Hourly & Bundle Rates</h2>
          <p className="section-subtitle" style={{ marginBottom: 'var(--space-2xl)' }}>
            For leaders who want ongoing access or a focused conversation.
          </p>

          <div className="flex-table">
            <div className="flex-table__header">
              <span>Session Type</span>
              <span>Rate</span>
              <span>Total</span>
            </div>
            {[
              { session: 'Single Session', rate: '$500/hr', total: '$500' },
              { session: 'Strategy Block (2 hrs)', rate: '$400/hr', total: '$800' },
              { session: 'Half-Day Deep Dive (4 hrs)', rate: '$300/hr', total: '$1,200' },
              { session: 'Full-Day Intensive (8 hrs)', rate: '$250/hr', total: '$2,000' },
            ].map(({ session, rate, total }) => (
              <div key={session} className="flex-table__row">
                <span className="flex-table__session">{session}</span>
                <span className="flex-table__rate">{rate}</span>
                <span className="flex-table__total">{total}</span>
              </div>
            ))}
          </div>
          <p
            style={{
              marginTop: 'var(--space-md)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            *All coaching is delivered online via Zoom video calls. In-person sessions incur travel costs.
          </p>
        </section>
      </div>

      <hr className="section-divider" />

      {/* ── Coaching by Role: Tabbed capability ── */}
      <section className="section reveal">
        <div className="section-label">Coaching by Role</div>
        <h2 className="section-title">Tailored to Your Position</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-2xl)' }}>
          Every role has different AI needs. We customize based on where you sit in the organization.
        </p>

        <div className="role-tabs">
          {ROLES.map((role, i) => (
            <button key={role.label} className={`role-tab${activeRole === i ? ' active' : ''}`} onClick={() => setActiveRole(i)}>
              {role.label}
            </button>
          ))}
        </div>

        <div className="hard-card" style={{ borderLeft: '4px solid var(--accent-orange)' }}>
          <h3 className="hard-card__title">{ROLES[activeRole].label}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)' }}>
            {ROLES[activeRole].points.map((point) => (
              <div key={point} className="check-feature">
                <CheckCircle size={14} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CTA ── */}
      <InviteCta title="Ready to Build Your AI Strategy?" />
    </>
  );
}
