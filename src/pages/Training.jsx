import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BookOpen, Users, GraduationCap, ChevronRight } from 'lucide-react';
import InviteCta from '../components/InviteCta';
import Seo from '../components/Seo';
import useScrollReveal from '../hooks/useScrollReveal';

const COURSE_TIERS = [
  {
    tier: 'Foundation',
    courses: [
      { name: 'Mastering Claude: From Chat to Power User', desc: 'Claude interface, Projects, Artifacts, system prompts, attachments, and multi-turn conversations. Why Claude is the business AI platform of choice.' },
      { name: 'Prompt Engineering That Actually Works', desc: 'Claude-specific techniques: XML tags, chain-of-thought, role prompting, few-shot examples, and structured outputs. Hands-on with real business scenarios.' },
      { name: 'AI Security, Privacy & Responsible Use', desc: 'Enterprise data policies, Claude\u2019s safety model, shadow AI governance, regulatory awareness (GDPR, HIPAA, SOC2), and knowing when not to use AI.' },
    ],
  },
  {
    tier: 'Practitioner',
    courses: [
      { name: 'Claude Code for Business Professionals', desc: 'Use Claude Code to automate tasks, manage projects, write scripts, and analyze data \u2014 no developer background required.' },
      { name: 'Building Your AI Coworker', desc: 'Create Claude Projects as persistent AI teammates: custom instructions, knowledge bases, and role-specific assistants for every function on your team.' },
      { name: 'AI-Powered Business Workflows', desc: 'Connect AI to CRM, email, docs, and spreadsheets. Practical automation recipes for the tools your team already uses \u2014 not theory.' },
    ],
  },
  {
    tier: 'Advanced',
    courses: [
      { name: 'Agentic AI: Autonomous Workflows', desc: 'What AI agents are, how they work, and when to deploy them. Multi-step task completion, tool use, and real-world agentic use cases for business.' },
      { name: 'MCP Servers & AI Tool Integration', desc: 'Connect Claude to databases, APIs, and internal tools using Model Context Protocol. Hands-on: stand up an MCP server and give your AI real capabilities.' },
      { name: 'Building Custom AI Agents', desc: 'Design, test, and deploy AI agents for business processes using Claude\u2019s Agent SDK. From architecture to production-ready autonomous workflows.' },
    ],
  },
  {
    tier: 'Role-Specific',
    courses: [
      { name: 'AI for Sales Teams: Claude-Powered Revenue', desc: 'Proposal generation, competitive intel with Claude Projects, outreach drafting with prompt templates, and pipeline automation.' },
      { name: 'AI for Marketing & Content: Brief to Published', desc: 'Claude for content calendars, SEO drafts, campaign copy, and brand voice consistency using system prompts and Projects.' },
      { name: 'AI for Leaders: Strategy, ROI & Adoption', desc: 'Build an AI adoption roadmap, measure ROI, manage organizational change, evaluate vendors, and communicate AI strategy to the board.' },
    ],
  },
];

const COURSES = COURSE_TIERS.flatMap(t => t.courses);

export default function Training() {
  useScrollReveal();

  return (
    <>
      <Seo
        title="AI Training"
        description="12 hands-on courses from Claude essentials to agentic AI and MCP servers. Live, instructor-led training with prompt libraries and reference materials."
        path="/training"
      />
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-centered">
          <div className="hero-brutal__label">AI Training</div>
          <h1 className="hero-brutal__title">
            AI Training That <span className="word-accent">Sticks</span>
          </h1>
          <p className="hero-brutal__desc">
            Master Claude, build AI agents, connect MCP servers, and deploy autonomous workflows. Live, hands-on training built by practitioners — not slide-deck consultants.
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

      {/* ── Course Catalog: Tiered rows ── */}
      <section className="section reveal">
        <div className="section-label">Course Catalog</div>
        <h2 className="section-title">12 Courses — From Claude Essentials to Agentic AI</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
          Hands-on, Claude-focused training with live instruction, interactive exercises, and small group breakout sessions. Built by practitioners who deploy AI systems — not slide-deck consultants.
        </p>

        {COURSE_TIERS.map((tier) => (
          <div key={tier.tier} style={{ marginBottom: 'var(--space-2xl)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-orange)', marginBottom: 'var(--space-sm)', paddingLeft: 'var(--space-md)' }}>
              {tier.tier}
            </div>
            <div className="course-list">
              {tier.courses.map((course) => (
                <div key={course.name} className="course-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <div style={{ flex: 1 }}>
                      <div className="course-row__name">{course.name}</div>
                    </div>
                    <ChevronRight size={18} className="course-row__arrow" />
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.55, margin: 0, paddingRight: 'var(--space-xl)' }}>
                    {course.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
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
            { title: 'C-Suite / Founders', desc: 'AI strategy & ROI, agentic AI opportunities, Claude for executive decision support, board-ready AI narratives' },
            { title: 'VP / Senior Leaders', desc: 'Department AI roadmaps, MCP integration planning, vendor evaluation, change management for AI adoption' },
            { title: 'Managers', desc: 'Claude Projects for team workflows, AI coworker setup, measuring AI ROI, adoption playbooks' },
            { title: 'Employees', desc: 'Hands-on Claude & Claude Code, prompt engineering, AI-powered productivity, building personal AI workflows' },
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
      <InviteCta title="Ready to Train Your Team on AI?" />
    </>
  );
}
