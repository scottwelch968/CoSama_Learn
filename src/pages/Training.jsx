import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BookOpen, Users, GraduationCap, ChevronRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const COURSES = [
  { name: 'AI Chat Essentials' },
  { name: 'AI in Everyday Business Tools' },
  { name: 'Prompt Engineering for Business' },
  { name: 'AI for Sales & Revenue' },
  { name: 'AI for Marketing & Content' },
  { name: 'AI for Operations & Logistics' },
  { name: 'AI for HR & People Ops' },
  { name: 'AI for Finance & Accounting' },
  { name: 'AI for Customer Service' },
  { name: 'AI Security, Privacy & Compliance' },
  { name: 'AI for Project Managers' },
  { name: 'Building Your Personal AI Toolkit' },
];

export default function Training() {
  useScrollReveal();

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-centered">
          <div className="hero-brutal__label">AI Training</div>
          <h1 className="hero-brutal__title">
            AI Training That <span className="word-accent">Sticks</span>
          </h1>
          <p className="hero-brutal__desc">
            Because tools without skills are just toys. Live, interactive training with built-in breakout sessions for focused review and hands-on coaching.
          </p>
          <div className="hero-brutal__actions">
            <Link to="/get-started" className="btn btn-primary btn-lg">
              Get Started <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── What's Included: Stats bar ── */}
      <div className="stats-bar">
        {[
          { icon: <BookOpen size={22} />, label: 'Training Handbook' },
          { icon: <GraduationCap size={22} />, label: 'Slide Deck' },
          { icon: <CheckCircle size={22} />, label: 'Reference Materials' },
          { icon: <Users size={22} />, label: 'Prompt Libraries' },
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

      {/* ── Course Catalog: Bordered rows ── */}
      <section className="section reveal">
        <div className="section-label">Course Catalog</div>
        <h2 className="section-title">12 Courses Across Every Business Function</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          Each course features live, instructor-led delivery with interactive exercises and small group breakout sessions.
        </p>

        <div className="course-list">
          {COURSES.map((course, i) => (
            <div key={course.name} className="course-row">
              <span className="course-row__number">{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1 }}>
                <div className="course-row__name">{course.name}</div>
              </div>
              <ChevronRight size={18} className="course-row__arrow" />
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Group Training: Editorial numbered ── */}
      <section className="reveal">
        <div style={{ padding: 'var(--space-3xl) var(--space-xl) 0' }}>
          <div className="section-label">Group Training</div>
          <h2 className="section-title">Scale AI Skills Across Your Organization</h2>
        </div>

        <div className="editorial-numbered">
          <div className="editorial-numbered__label">
            <div className="editorial-numbered__step">In-House</div>
            <div className="editorial-numbered__ghost">01</div>
          </div>
          <div className="editorial-numbered__content">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Team Training</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 'var(--space-md)' }}>
              On-site or video conference. 20-hour minimum engagement. Customized curriculum based on your industry, tools, and team roles. Includes hands-on exercises, prompt libraries, handbooks, and post-training resource kit.
            </p>
            <div className="pricing-inline">
              <span className="pricing-inline__value">$200/seat</span> &middot; minimum 10 participants
            </div>
          </div>
        </div>
        <div className="editorial-numbered">
          <div className="editorial-numbered__label">
            <div className="editorial-numbered__step">Custom</div>
            <div className="editorial-numbered__ghost">02</div>
          </div>
          <div className="editorial-numbered__content">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Tailored Course Development</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 'var(--space-md)' }}>
              Custom courses developed around your company's specific tools, workflows, industry requirements, and compliance needs.
            </p>
            <div className="pricing-inline">
              <span className="pricing-inline__value">Custom pricing</span> &middot; based on scope & group size
            </div>
          </div>
        </div>
        <div className="editorial-numbered" style={{ borderBottom: 'var(--border-hard)' }}>
          <div className="editorial-numbered__label" style={{ borderBottom: 'none' }}>
            <div className="editorial-numbered__step">Enterprise</div>
            <div className="editorial-numbered__ghost">03</div>
          </div>
          <div className="editorial-numbered__content" style={{ borderBottom: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Training Intensive</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 'var(--space-md)' }}>
              Multi-day, immersive training for 25+ participants. We handle everything: conference room, hotel, meals, travel, materials. Ideal for company-wide AI rollouts and leadership offsites.
            </p>
            <div className="pricing-inline">
              <span className="pricing-inline__value">All-inclusive per-seat pricing</span> &middot; contact us
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Training by Level: 2x2 grid ── */}
      <section className="section reveal">
        <div className="section-label">Training by Level</div>
        <h2 className="section-title">Right Content for the Right Audience</h2>
        <div className="capability-grid" style={{ marginTop: 'var(--space-2xl)' }}>
          {[
            { title: 'C-Suite / Founders', desc: 'Strategic AI literacy, risk/opportunity assessment, board communication' },
            { title: 'VP / Senior Leaders', desc: 'Department AI roadmaps, change management, vendor evaluation' },
            { title: 'Managers', desc: 'Team workflows, tool adoption, measuring AI ROI' },
            { title: 'Employees', desc: 'Hands-on tool usage, prompt skills, productivity gains, compliance basics' },
          ].map((level) => (
            <div key={level.title} className="capability-block">
              <h3 className="capability-block__title">{level.title}</h3>
              <p className="capability-block__text">{level.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CTA ── */}
      <div className="cta-band-wrapper">
        <section className="cta-band reveal">
          <div className="section-label">Grab an Invite Now!</div>
          <h2 className="section-title">Ready to Train Your Team on AI?</h2>
          <form className="cta-band-form" onSubmit={e => e.preventDefault()}>
            <input type="email" className="form-input" placeholder="Enter your work email" />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      </div>
    </>
  );
}
