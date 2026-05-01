import { Link } from 'react-router-dom';
import {
  ArrowRight,
  User,
  Users,
  Briefcase,
  Crown,
  Monitor,
  MapPin,
  Video,
  Calendar,
  Shield,
  Sparkles,
  Clock,
  ChevronRight,
} from 'lucide-react';
import InviteCta from '../components/InviteCta';
import Seo from '../components/Seo';
import useScrollReveal from '../hooks/useScrollReveal';

const AUDIENCES = [
  {
    label: 'Solo',
    title: 'One-on-One Executive Training',
    desc: 'Intensive, personalized sessions for founders, executives, and senior leaders who need to move fast. No generic curriculum — every minute is built around your business, your stack, and your goals. Flexible scheduling and direct instructor access.',
    meta: '1:1 \u00b7 Flexible scheduling \u00b7 Custom curriculum',
  },
  {
    label: 'Group',
    title: 'Team Workshops That Actually Engage',
    desc: 'Small group sessions with breakout exercises, role-play scenarios, and team-specific workflows. Minimum 5, maximum 25 per session. Every workshop includes hands-on labs and a post-session resource kit.',
    meta: '5–25 people \u00b7 Breakout exercises \u00b7 Resource kit',
  },
  {
    label: 'Manager',
    title: 'Train the Trainer for Managers',
    desc: 'We do not just train your team — we train the people who lead them. Managers leave with coaching frameworks, adoption playbooks, and the confidence to drive AI transformation without hand-holding.',
    meta: 'Coaching frameworks \u00b7 Adoption playbooks \u00b7 Ongoing support',
  },
  {
    label: 'C-Suite',
    title: 'Board-Ready AI Strategy Sessions',
    desc: 'Executive briefings focused on ROI, competitive positioning, risk management, and vendor evaluation. Walk away with a narrative you can deliver to the board and a roadmap your team can execute.',
    meta: 'ROI modeling \u00b7 Vendor evaluation \u00b7 Board narratives',
  },
];

const FORMATS = [
  {
    icon: <Monitor size={24} />,
    title: 'Online',
    desc: 'Self-paced modules and live virtual sessions. Recorded replays, interactive labs, and progress tracking from any device.',
    span: 'large',
  },
  {
    icon: <MapPin size={24} />,
    title: 'In-Person',
    desc: 'We come to you. On-site workshops at your office, conference room, or training facility.',
    span: 'small',
  },
  {
    icon: <Video size={24} />,
    title: 'Zoom',
    desc: 'Virtual live sessions with breakout rooms, shared whiteboards, and real-time exercises.',
    span: 'small',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Events & Offsites',
    desc: 'Multi-day intensives, leadership retreats, and company-wide rollout events. We handle logistics, materials, and follow-up so you focus on learning.',
    span: 'large',
  },
];

export default function Training() {
  useScrollReveal();

  return (
    <>
      <Seo
        title="AI Training"
        description="Live AI training for individuals, teams, managers, and executives. Online, in-person, Zoom, and events. Post-training retainer support available."
        path="/training"
      />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-brutal">
          <div className="hero-brutal__main">
            <div className="hero-brutal__label">AI Training</div>
            <h1 className="hero-brutal__title">
              Train Your People. <span className="word-accent">Transform Your Business.</span>
            </h1>
            <p className="hero-brutal__desc">
              Solo sessions for executives. Group workshops for teams. Immersive offsites for the entire organization. However you learn best, we deliver.
            </p>
            <div className="hero-brutal__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request a Proposal <ArrowRight size={14} />
              </Link>
              <Link to="/courses" className="btn btn-secondary btn-lg">
                View Courses
              </Link>
            </div>
          </div>

          <div className="hero-brutal__aside">
            {[
              { name: 'Solo & 1:1', tag: 'Executive' },
              { name: 'Team Workshops', tag: '5–25 People' },
              { name: 'Manager Training', tag: 'Train the Trainer' },
              { name: 'C-Suite Briefings', tag: 'Board-Ready' },
            ].map((item) => (
              <div key={item.name} className="aside-service">
                <span className="aside-service__name">{item.name}</span>
                <span className="aside-service__tag">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Stats ── */}
      <div className="stats-bar">
        <div className="stats-bar__cell">
          <div className="stats-bar__value">4</div>
          <div className="stats-bar__label">Formats</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value">4</div>
          <div className="stats-bar__label">Audience Types</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value"><Shield size={28} style={{ color: 'var(--accent-orange)' }} /></div>
          <div className="stats-bar__label">Retainer Support</div>
        </div>
        <div className="stats-bar__cell">
          <div className="stats-bar__value"><Sparkles size={28} style={{ color: 'var(--accent-orange)' }} /></div>
          <div className="stats-bar__label">Enhanced Learning</div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* ── Who We Train: Editorial numbered rows ── */}
      <section className="reveal">
        <div style={{ padding: 'var(--space-3xl) var(--space-xl) 0' }}>
          <div className="section-label">Who We Train</div>
          <h2 className="section-title">The Right Training for Every Seat</h2>
          <p className="section-subtitle" style={{ marginBottom: 'var(--space-2xl)' }}>
            From the boardroom to the front lines, we tailor every session to the people in the room.
          </p>
        </div>

        {AUDIENCES.map((a, i) => (
          <div key={a.label} className="editorial-numbered" style={i === AUDIENCES.length - 1 ? { borderBottom: 'var(--border-hard)' } : {}}>
            <div className="editorial-numbered__label" style={i === AUDIENCES.length - 1 ? { borderBottom: 'none' } : {}}>
              <div className="editorial-numbered__step">{a.label}</div>
              <div className="editorial-numbered__ghost">0{i + 1}</div>
            </div>
            <div className="editorial-numbered__content" style={i === AUDIENCES.length - 1 ? { borderBottom: 'none' } : {}}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
                {a.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 'var(--space-md)' }}>
                {a.desc}
              </p>
              <div className="pricing-inline">{a.meta}</div>
            </div>
          </div>
        ))}
      </section>

      <hr className="section-divider" />

      {/* ── How We Deliver: Asymmetric deliver grid ── */}
      <section className="section reveal">
        <div className="section-label">Delivery</div>
        <h2 className="section-title">Four Ways to Train</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          One consistent quality standard. Whatever fits your schedule, your team, and your culture.
        </p>

        <div className="deliver-grid">
          {FORMATS.map((fmt) => (
            <div key={fmt.title} className={`deliver-cell deliver-cell--${fmt.span}`}>
              <div className="deliver-cell__icon">{fmt.icon}</div>
              <h3 className="deliver-cell__title">{fmt.title}</h3>
              <p className="deliver-cell__text">{fmt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Post-Training: Bento grid ── */}
      <section className="section reveal">
        <div className="section-label">After Training</div>
        <h2 className="section-title">The Training Does Not End</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          Most firms drop you after the last slide. We stick around.
        </p>

        <div className="bento-grid bento-grid--reverse">
          <div className="bento-grid__featured">
            <div className="bento-accent-bar" style={{ background: 'var(--accent-orange)' }} />
            <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: 'var(--space-sm)' }}>Retainer Support</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
              Ongoing Support When You Need It
            </h3>
            <p className="editorial-cell__text" style={{ marginBottom: 'var(--space-xl)', flex: 1 }}>
              Monthly office hours, Slack or email access, priority scheduling for follow-ups, and quarterly progress reviews. We stay in your corner as you roll out AI.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: 'var(--space-xl)' }}>
              {['Monthly office hours', 'Direct Slack or email support', 'Priority follow-up scheduling', 'Quarterly progress reviews'].map((f) => (
                <div key={f} className="check-feature"><Clock size={14} /><span>{f}</span></div>
              ))}
            </div>
            <div className="pricing-inline">
              <span className="pricing-inline__value">Monthly retainers</span> &middot; custom scopes
            </div>
          </div>

          <div className="bento-grid__stack">
            <div className="bento-grid__stack-item">
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: 'var(--space-sm)' }}>Enhanced Learning</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
                Level Up After the Basics
              </h3>
              <p className="editorial-cell__text">
                Advanced modules, refresher sessions, and new-course previews for teams that want to stay ahead of the curve.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: 'auto', paddingTop: 'var(--space-md)' }}>
                {['Advanced follow-up modules', 'New tool onboarding', 'Refresher workshops', 'Early access to new courses'].map((f) => (
                  <div key={f} className="check-feature" style={{ padding: '0.3rem 0' }}><Sparkles size={14} /><span>{f}</span></div>
                ))}
              </div>
            </div>
            <div className="bento-grid__stack-item">
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: 'var(--space-sm)' }}>Courses</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
                12 Courses Available
              </h3>
              <p className="editorial-cell__text">
                Foundation to advanced. Claude essentials through agentic AI and MCP servers.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)' }}>
                <Link to="/courses" className="editorial-cell__link">Browse Catalog <ChevronRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CTA ── */}
      <InviteCta title="Ready to Train Your Team?" />
    </>
  );
}
