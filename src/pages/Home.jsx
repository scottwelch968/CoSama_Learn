import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Users, Rocket } from 'lucide-react';
import InviteCta from '../components/InviteCta';
import Seo from '../components/Seo';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Seo
        description="AI coaching, training, and consulting for business. Master Claude, build AI agents, and deploy autonomous workflows. From the C-suite to the front lines."
        path="/"
      />
      {/* ── Hero: Asymmetric 3fr/2fr with dot-grid aside ── */}
      <section className="hero">
        <div className="hero-brutal">
          <div className="hero-brutal__main">
            <div className="hero-brutal__label">AI Coaching, Training & Consulting</div>
            <h1 className="hero-brutal__title">
              Your Business Runs on Decisions. <span className="word-accent">AI Makes Them Better.</span>
            </h1>
            <p className="hero-brutal__desc">
              Cosama helps business owners and their teams adopt AI — not as a buzzword, but as a competitive weapon. From the C-suite to the front lines.
            </p>
            <div className="hero-brutal__actions">
              <Link to="/get-started" className="btn btn-primary btn-lg">
                Get Started <ArrowRight size={14} />
              </Link>
              <Link to="/coaching" className="btn btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-brutal__aside">
            <div className="aside-service">
              <span className="aside-service__name">Executive Coaching</span>
              <span className="aside-service__tag">1:1</span>
            </div>
            <div className="aside-service">
              <span className="aside-service__name">Team Training</span>
              <span className="aside-service__tag">12 Courses</span>
            </div>
            <div className="aside-service">
              <span className="aside-service__name">AI Consulting</span>
              <span className="aside-service__tag">End-to-End</span>
            </div>
            <div className="aside-service" style={{ borderBottom: 'none' }}>
              <span className="aside-service__name">All Org Levels</span>
              <span className="aside-service__tag">C-Suite to IC</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Stats Bar ── */}
      <div className="stats-bar">
        <div className="stats-bar__cell">
          <div className="stats-bar__value">12</div>
          <div className="stats-bar__label">Training Courses</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value">4</div>
          <div className="stats-bar__label">Coaching Tiers</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value">1:1</div>
          <div className="stats-bar__label">Personalized</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value">ALL</div>
          <div className="stats-bar__label">Org Sizes Served</div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* ── Three Pillars: Bento grid (featured + stack) ── */}
      <section className="section reveal">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Three Pillars. One Mission.</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          AI isn't one-size-fits-all — and neither are we.
        </p>

        <div className="bento-grid">
          <div className="bento-grid__featured">
            <div className="bento-accent-bar" style={{ background: 'var(--accent-orange)' }} />
            <Brain size={28} className="editorial-cell__icon" style={{ marginBottom: 'var(--space-md)' }} />
            <h3 className="editorial-cell__title" style={{ marginBottom: 'var(--space-sm)' }}>Executive Coaching</h3>
            <p className="editorial-cell__text" style={{ marginBottom: 'var(--space-xl)' }}>
              1-on-1 sessions tailored to your role, your industry, your goals. Walk away with a concrete AI action plan — not a slide deck. Structured packages with clear deliverables, from discovery through implementation.
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
              <h3 className="editorial-cell__title" style={{ marginBottom: 'var(--space-sm)' }}>Team Training</h3>
              <p className="editorial-cell__text">
                From Claude essentials to agentic AI and MCP servers. Live, hands-on sessions with full materials included.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)' }}>
                <Link to="/training" className="editorial-cell__link">View Courses <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="bento-grid__stack-item">
              <div className="bento-accent-bar" style={{ background: 'var(--bg-dark)' }} />
              <Rocket size={24} className="editorial-cell__icon" style={{ marginBottom: 'var(--space-sm)' }} />
              <h3 className="editorial-cell__title" style={{ marginBottom: 'var(--space-sm)' }}>Integration Consulting</h3>
              <p className="editorial-cell__text">
                We select, deploy, and operationalize AI across your organization with full project management support.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)' }}>
                <Link to="/consulting" className="editorial-cell__link">Learn More <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── How We Work: Editorial numbered sections ── */}
      <section className="reveal">
        <div style={{ padding: '0 var(--space-xl)' }}>
          <div className="section-label">How We Work</div>
          <h2 className="section-title">A Practitioner-First Approach</h2>
        </div>

        <div className="editorial-numbered">
          <div className="editorial-numbered__label">
            <div className="editorial-numbered__step">01/</div>
            <div className="editorial-numbered__ghost">01</div>
          </div>
          <div className="editorial-numbered__content">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
              We Build AI Systems — Then Teach What We've Learned
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              Our coaching practice is powered by real experience building AI orchestration systems — not borrowed slides and recycled talking points.
            </p>
          </div>
        </div>
        <div className="editorial-numbered">
          <div className="editorial-numbered__label">
            <div className="editorial-numbered__step">02/</div>
            <div className="editorial-numbered__ghost">02</div>
          </div>
          <div className="editorial-numbered__content">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
              Outcomes, Not Hours on a Clock
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              Every engagement is structured around deliverables — concrete action plans, implementation roadmaps, and hands-on training that sticks.
            </p>
          </div>
        </div>
        <div className="editorial-numbered" style={{ borderBottom: 'var(--border-hard)' }}>
          <div className="editorial-numbered__label" style={{ borderBottom: 'none' }}>
            <div className="editorial-numbered__step">03/</div>
            <div className="editorial-numbered__ghost">03</div>
          </div>
          <div className="editorial-numbered__content" style={{ borderBottom: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
              From Startup to Fortune 500
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              Enterprise-grade thinking applied to businesses of all sizes. Whether you're a solo founder or a VP at a large organization, we meet you where you are.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Coaching by Role: 2x2 capability grid ── */}
      <section className="section reveal">
        <div className="section-label">Who We Serve</div>
        <h2 className="section-title">AI Coaching for Every Level</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          Whether you're a solo founder or a Fortune 500 VP, we meet you where you are.
        </p>
        <div className="capability-grid">
          {[
            { title: 'C-Suite & Founders', desc: 'AI strategy, competitive positioning, ROI modeling, board-ready narratives, risk and compliance considerations.' },
            { title: 'VP & Senior Leadership', desc: 'Department-level AI roadmaps, change management, vendor selection, cross-functional alignment.' },
            { title: 'Directors & Managers', desc: 'Workflow automation, team adoption strategies, tool selection, KPI frameworks for AI initiatives.' },
            { title: 'Individual Contributors', desc: 'Hands-on tool training, prompt engineering, AI-assisted productivity, role-specific use cases.' },
          ].map((role) => (
            <div key={role.title} className="capability-block">
              <div className="capability-block__icon"><Brain size={22} /></div>
              <h3 className="capability-block__title">{role.title}</h3>
              <p className="capability-block__text">{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CTA ── */}
      <InviteCta title="Start Your AI Journey Today" />
    </>
  );
}
