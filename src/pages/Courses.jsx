import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Layers,
  Users,
  ChevronRight,
  Play,
  Zap,
} from 'lucide-react';
import InviteCta from '../components/InviteCta';
import Seo from '../components/Seo';
import useScrollReveal from '../hooks/useScrollReveal';

const TIERS = [
  {
    id: 'foundation',
    label: 'Foundation',
    color: '#2563EB',
    desc: 'Claude essentials, prompt engineering, and responsible AI.',
    courses: [
      { name: 'Mastering Claude: From Chat to Power User', duration: '3 hrs', audience: 'All levels', lessons: 8 },
      { name: 'Prompt Engineering That Actually Works', duration: '4 hrs', audience: 'All levels', lessons: 12 },
      { name: 'AI Security, Privacy & Responsible Use', duration: '2 hrs', audience: 'All levels', lessons: 6 },
    ],
  },
  {
    id: 'practitioner',
    label: 'Practitioner',
    color: '#00a8c6',
    desc: 'Build AI coworkers, automate workflows, and use Claude Code.',
    courses: [
      { name: 'Claude Code for Business Professionals', duration: '3 hrs', audience: 'Managers & ICs', lessons: 9 },
      { name: 'Building Your AI Coworker', duration: '4 hrs', audience: 'Managers & ICs', lessons: 10 },
      { name: 'AI-Powered Business Workflows', duration: '4 hrs', audience: 'Managers & ICs', lessons: 11 },
    ],
  },
  {
    id: 'advanced',
    label: 'Advanced',
    color: '#1a1a1a',
    desc: 'Agents, MCP servers, and autonomous workflows.',
    courses: [
      { name: 'Agentic AI: Autonomous Workflows', duration: '4 hrs', audience: 'Senior leads', lessons: 10 },
      { name: 'MCP Servers & AI Tool Integration', duration: '4 hrs', audience: 'Technical leads', lessons: 12 },
      { name: 'Building Custom AI Agents', duration: '5 hrs', audience: 'Technical leads', lessons: 14 },
    ],
  },
  {
    id: 'role',
    label: 'Role-Specific',
    color: '#7c3aed',
    desc: 'Tailored skills for sales, marketing, and leadership.',
    courses: [
      { name: 'AI for Sales Teams', duration: '3 hrs', audience: 'Sales teams', lessons: 8 },
      { name: 'AI for Marketing & Content', duration: '3 hrs', audience: 'Marketing teams', lessons: 8 },
      { name: 'AI for Leaders: Strategy, ROI & Adoption', duration: '4 hrs', audience: 'C-Suite & VPs', lessons: 10 },
    ],
  },
];

const JOURNEY = [
  { step: '01', title: 'Assess', desc: "We evaluate your team's current AI fluency, tool stack, and business goals." },
  { step: '02', title: 'Curate', desc: 'We hand-pick the right course sequence — no filler, no fluff.' },
  { step: '03', title: 'Train', desc: 'Live, instructor-led sessions with hands-on exercises and real scenarios.' },
  { step: '04', title: 'Apply', desc: 'Your team deploys what they learned immediately — with playbooks and prompt libraries.' },
];

function CourseCard({ course, tierColor, featured = false }) {
  return (
    <div className={`course-card${featured ? ' course-card--featured' : ''}`}>
      <div className="course-card__accent" style={{ background: tierColor }} />
      <div className="course-card__meta">
        <span className="course-card__duration"><Clock size={12} /> {course.duration}</span>
        <span className="course-card__lessons"><Layers size={12} /> {course.lessons} lessons</span>
      </div>
      <h3 className="course-card__title">{course.name}</h3>
      <p className="course-card__audience"><Users size={12} /> {course.audience}</p>
      <div className="course-card__footer">
        <span className="course-card__cta">View syllabus <ChevronRight size={12} /></span>
      </div>
    </div>
  );
}

function BentoTier({ tier, reverse = false }) {
  const [featured, ...stacked] = tier.courses;
  const gridClass = reverse ? 'bento-grid bento-grid--reverse' : 'bento-grid';

  return (
    <div className={gridClass} style={{ marginBottom: 'var(--space-2xl)' }}>
      <div className="bento-grid__featured">
        <div className="bento-accent-bar" style={{ background: tier.color }} />
        <div className="mono-label" style={{ color: tier.color, marginBottom: 'var(--space-sm)' }}>{tier.label} Tier</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
          {featured.name}
        </h3>
        <p className="editorial-cell__text" style={{ marginBottom: 'var(--space-xl)', flex: 1 }}>
          {tier.desc} Start with {featured.name}, then layer on the rest of the tier.
        </p>
        <div className="course-card__meta" style={{ marginBottom: 'var(--space-md)' }}>
          <span className="course-card__duration"><Clock size={12} /> {featured.duration}</span>
          <span className="course-card__lessons"><Layers size={12} /> {featured.lessons} lessons</span>
          <span className="course-card__audience"><Users size={12} /> {featured.audience}</span>
        </div>
        <div className="pricing-inline">
          <span className="pricing-inline__value">{featured.lessons} lessons</span> &middot; {featured.duration}
        </div>
      </div>

      <div className="bento-grid__stack">
        {stacked.map((course) => (
          <div key={course.name} className="bento-grid__stack-item">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: tier.color, marginBottom: 'var(--space-sm)' }}>
              {tier.label}
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, marginBottom: 'var(--space-sm)', lineHeight: 1.35 }}>
              {course.name}
            </h4>
            <p className="editorial-cell__text" style={{ flex: 1 }}>
              {course.duration} &middot; {course.lessons} lessons &middot; {course.audience}
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)' }}>
              <span className="editorial-cell__link" style={{ color: tier.color }}>
                View syllabus <ChevronRight size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Courses() {
  useScrollReveal();
  const [activeTier, setActiveTier] = useState(0);

  const currentTier = TIERS[activeTier];

  return (
    <>
      <Seo
        title="Courses"
        description="12 hands-on AI courses from Claude essentials to agentic AI. Foundation, Practitioner, Advanced, and Role-Specific tiers. Live, instructor-led training."
        path="/courses"
      />

      {/* ═══════════════════════════════════════════════════════
          HERO — Asymmetric brutalist
          ═══════════════════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-brutal">
          <div className="hero-brutal__main">
            <div className="hero-brutal__label">Course Catalog</div>
            <h1 className="hero-brutal__title">
              12 Courses. One <span className="word-accent">Goal.</span>
            </h1>
            <p className="hero-brutal__desc">
              From your first Claude prompt to production AI agents. Four tiers of hands-on, live instruction — built by practitioners who deploy AI systems daily.
            </p>
            <div className="hero-brutal__actions">
              <Link to="/training" className="btn btn-primary btn-lg">
                Training Options <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Inquire
              </Link>
            </div>
          </div>

          <div className="hero-brutal__aside">
            {TIERS.map((tier) => (
              <div key={tier.id} className="aside-service">
                <span className="aside-service__name">{tier.label}</span>
                <span className="aside-service__tag" style={{ borderColor: tier.color, color: tier.color }}>
                  {tier.courses.length} Courses
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════════════════════════════════════════════════════
          STATS BAR
          ═══════════════════════════════════════════════════════ */}
      <div className="stats-bar">
        <div className="stats-bar__cell">
          <div className="stats-bar__value">12</div>
          <div className="stats-bar__label">Courses</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value">4</div>
          <div className="stats-bar__label">Skill Tiers</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value">40+</div>
          <div className="stats-bar__label">Hands-On Labs</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value"><Clock size={28} style={{ color: 'var(--accent-orange)' }} /></div>
          <div className="stats-bar__label">2–5 Hrs Each</div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* ═══════════════════════════════════════════════════════
          COURSE EXPLORER — Tabbed sidebar + cards
          ═══════════════════════════════════════════════════════ */}
      <section className="section reveal">
        <div className="section-label">Explore</div>
        <h2 className="section-title">Pick Your Tier</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          Each tier builds on the last. Jump in where you are — we'll meet you there.
        </p>

        <div className="course-explorer">
          <div className="course-explorer__sidebar">
            {TIERS.map((tier, i) => (
              <button
                key={tier.id}
                className={`tier-tab${activeTier === i ? ' active' : ''}`}
                onClick={() => setActiveTier(i)}
                style={activeTier === i ? { borderLeftColor: tier.color } : {}}
              >
                <span className="tier-tab__label" style={{ color: activeTier === i ? tier.color : undefined }}>
                  {tier.label}
                </span>
                <span className="tier-tab__count">{tier.courses.length} courses</span>
                <ChevronRight size={14} className="tier-tab__arrow" />
              </button>
            ))}
          </div>

          <div className="course-explorer__content">
            <div className="course-explorer__header">
              <div className="mono-label" style={{ color: currentTier.color }}>{currentTier.label} Tier</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.65, marginTop: 'var(--space-sm)' }}>
                {currentTier.desc}
              </p>
            </div>

            <div className="course-cards reveal-stagger">
              {currentTier.courses.map((course, idx) => (
                <CourseCard key={course.name} course={course} tierColor={currentTier.color} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════════════════════════════════════════════════════
          COURSE CATALOG — Asymmetric bento grids, alternating
          ═══════════════════════════════════════════════════════ */}
      <section className="section reveal">
        <div className="section-label">Complete Catalog</div>
        <h2 className="section-title">Browse the Full Catalog</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          Four tiers. Twelve courses. Each one designed to be applied the same day you learn it.
        </p>

        <BentoTier tier={TIERS[0]} />
        <BentoTier tier={TIERS[1]} reverse />
        <BentoTier tier={TIERS[2]} />
        <BentoTier tier={TIERS[3]} reverse />
      </section>

      <hr className="section-divider" />

      {/* ═══════════════════════════════════════════════════════
          LEARNING JOURNEY — Stepped path
          ═══════════════════════════════════════════════════════ */}
      <section className="section reveal">
        <div className="section-label">The Journey</div>
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          A proven four-step process from assessment to real-world application.
        </p>

        <div className="journey-track">
          {JOURNEY.map((item, i) => (
            <div key={item.step} className="journey-step">
              <div className="journey-step__node">
                <span className="journey-step__number">{item.step}</span>
                {i < JOURNEY.length - 1 && <div className="journey-step__line" />}
              </div>
              <div className="journey-step__body">
                <h3 className="journey-step__title">{item.title}</h3>
                <p className="journey-step__text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════════════════════════════════════════════════════
          DELIVERY — Editorial split, no colored bg, no equal grid
          ═══════════════════════════════════════════════════════ */}
      <section className="section reveal">
        <div className="editorial-split">
          <div>
            <div className="section-label">Delivery</div>
            <h2 className="section-title">What You Get</h2>
            <p className="section-subtitle">
              Every course includes the full practitioner toolkit — not just slides. Live instruction, hands-on labs, and resources you keep forever.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { icon: <Play size={18} />, title: 'Live Instruction', desc: 'Not a webinar. Real-time teaching with Q&A.' },
              { icon: <Zap size={18} />, title: 'Hands-On Labs', desc: 'Every course includes interactive exercises.' },
              { icon: <BookOpen size={18} />, title: 'Resource Kit', desc: 'Handbooks, slides, and prompt libraries.' },
              { icon: <Users size={18} />, title: 'Small Groups', desc: 'Breakout sessions for deeper engagement.' },
            ].map((item) => (
              <div key={item.title} className="feature-pill">
                <span className="feature-pill__icon">{item.icon}</span>
                <div>
                  <div className="feature-pill__title">{item.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════ */}
      <InviteCta title="Ready to Level Up Your Team?" />
    </>
  );
}
