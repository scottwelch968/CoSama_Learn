import { Link } from 'react-router-dom';
import { ArrowRight, Search, GitBranch, Layers, ClipboardList, Users, BarChart3, CheckCircle, ChevronRight } from 'lucide-react';
import InviteCta from '../components/InviteCta';
import Seo from '../components/Seo';
import useScrollReveal from '../hooks/useScrollReveal';

const CAPABILITIES = [
  { icon: <Search size={20} />, title: 'AI Readiness Assessment', desc: 'Evaluate your current tech stack, data infrastructure, team capabilities, and organizational readiness.' },
  { icon: <GitBranch size={20} />, title: 'Technology Selection', desc: 'We evaluate AI platforms, models, and tools against your actual requirements — not marketing hype.' },
  { icon: <Layers size={20} />, title: 'Integration & Deployment', desc: 'Design and implement AI solutions that plug into your existing CRM, ERP, data pipelines, and applications.' },
  { icon: <ClipboardList size={20} />, title: 'Project Management', desc: 'Full PM support from scoping through go-live. Milestones, timelines, risk management, and coordination.' },
  { icon: <Users size={20} />, title: 'Change Management', desc: 'We train your teams, build internal champions, and create adoption playbooks that stick.' },
  { icon: <BarChart3 size={20} />, title: 'Ongoing Advisory', desc: 'Post-deployment support, performance monitoring, iteration, and expansion planning.' },
];

const WHO_FOR = [
  'Companies evaluating their first AI investment',
  'Organizations with failed or stalled AI initiatives',
  'IT and ops leaders tasked with "figuring out AI"',
  'Businesses scaling from pilot to production',
];

export default function Consulting() {
  useScrollReveal();

  return (
    <>
      <Seo
        title="AI Consulting"
        description="End-to-end AI integration, project management, and change management. From strategy to go-live — we build the bridge to AI for your organization."
        path="/consulting"
      />
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-centered">
          <div className="hero-brutal__label">AI Consulting</div>
          <h1 className="hero-brutal__title">
            From Strategy to Go-Live — <span className="word-accent">We Build the Bridge</span>
          </h1>
          <p className="hero-brutal__desc">
            AI adoption isn't just picking a tool. It's integration, change management, training, and ongoing optimization. We manage the entire journey.
          </p>
          <div className="hero-brutal__actions">
            <Link to="/get-started" className="btn btn-primary btn-lg">
              Get Started <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── What We Do: Numbered list ── */}
      <section className="section reveal">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">End-to-End AI Integration Support</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          We don't drop off a strategy deck and walk away. We get in the trenches with you.
        </p>

        <div className="course-list">
          {CAPABILITIES.map((cap, i) => (
            <div key={cap.title} className="course-row">
              <span className="course-row__number">{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1 }}>
                <div className="course-row__name">{cap.title}</div>
                <div className="course-row__desc">{cap.desc}</div>
              </div>
              <span style={{ color: 'var(--accent-orange)', flexShrink: 0 }}>{cap.icon}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Pricing: Discreet editorial section (NOT a big card) ── */}
      <div className="section-dark">
        <section className="section reveal">
          <div className="editorial-split" style={{ alignItems: 'start' }}>
            <div>
              <div className="section-label">Engagement Model</div>
              <h2 className="section-title">Transparent Starting Point</h2>
              <p className="section-subtitle" style={{ marginBottom: 'var(--space-xl)' }}>
                Initial discovery and assessment sessions are billed hourly. All implementation, integration, and project management engagements are scoped and priced as custom proposals.
              </p>
              <div className="pricing-inline" style={{ fontSize: '0.7rem' }}>
                Discovery & Assessment: <span className="pricing-inline__value">$500/hr</span> &middot; Implementation: <span className="pricing-inline__value">Custom proposals</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Scoped to your requirements',
                'Milestone-based delivery',
                'No surprises — clear timelines',
                'Post-deployment support included',
              ].map(text => (
                <div key={text} className="feature-pill-dark">
                  <span className="feature-pill-dark__icon"><CheckCircle size={16} /></span>
                  <span className="feature-pill-dark__text">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <hr className="section-divider" />

      {/* ── Who This Is For ── */}
      <section className="section reveal">
        <div className="section-label">Who This Is For</div>
        <h2 className="section-title">Is Consulting Right for You?</h2>
        <div className="course-list" style={{ marginTop: 'var(--space-2xl)' }}>
          {WHO_FOR.map((item) => (
            <div key={item} className="course-row">
              <CheckCircle size={18} style={{ color: 'var(--accent-orange)', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div className="course-row__name">{item}</div>
              </div>
              <ChevronRight size={18} className="course-row__arrow" />
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CTA ── */}
      <InviteCta title="Ready to Move from Pilot to Production?" />
    </>
  );
}
