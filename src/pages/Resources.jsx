import { useEffect } from 'react'
import {
  ArrowRight, BookOpen, Layers, Sparkles, Smartphone, ShieldCheck,
  GraduationCap, BarChart3, Users, CheckCircle2, ArrowUpRight, Code2
} from 'lucide-react'
import useReveal from '../hooks/useReveal.jsx'
import CompareOptions from '../components/CompareOptions.jsx'

const DECISION_ITEMS = [
  {
    step: 'Compare',
    title: 'Adjacent options by fit',
    desc: 'Evaluate architectural choices, MVP trade-offs, and maintainability paths side by side.',
  },
  {
    step: 'Risk',
    title: 'Integration and release evidence',
    desc: 'Verify test coverage, API contracts, deployment checklists, and state management integrity.',
  },
  {
    step: 'Act',
    title: 'Move into a scoped discussion',
    desc: 'Turn engineering recommendations into clear sprint deliverables and execution timelines.',
  },
]

const NUMBERED_NOTES = [
  {
    num: '01',
    category: 'founder led MVPs',
    title: 'API versioning for growing products for founder led MVPs',
    desc: 'A practical approach to changing API behavior without breaking mobile apps, partners or internal tools.',
  },
  {
    num: '02',
    category: 'founder led MVPs',
    title: 'Release checklists for small teams for founder led MVPs',
    desc: 'The checks that keep lean teams from shipping preventable bugs when delivery speed is high.',
  },
  {
    num: '03',
    category: 'founder led MVPs',
    title: 'React form architecture that stays readable for founder led MVPs',
    desc: 'How to structure forms so validation, default values, errors and API state remain easy to reason about.',
  },
  {
    num: '04',
    category: 'founder led MVPs',
    title: 'Mobile app onboarding mistakes to avoid for founder led MVPs',
    desc: 'Where onboarding flows lose users and how to design the first session with measurable intent.',
  },
]

const READER_CONTEXTS = [
  {
    title: 'founder led MVPs',
    desc: 'scope, budget and launch order are still changing',
    audience: 'founders and first hires',
    icon: Sparkles,
  },
  {
    title: 'SaaS admin portals',
    desc: 'staff need fast screens without losing control of access or data quality',
    audience: 'operations teams and account managers',
    icon: Layers,
  },
  {
    title: 'mobile commerce apps',
    desc: 'latency, failed payments and unclear recovery paths directly affect revenue',
    audience: 'customers buying on small screens',
    icon: Smartphone,
  },
  {
    title: 'healthcare workflow products',
    desc: 'privacy, auditability and handover accuracy matter as much as screen polish',
    audience: 'care teams, coordinators and patients',
    icon: ShieldCheck,
  },
  {
    title: 'education platforms',
    desc: 'usage patterns change across classes, cohorts and assessment windows',
    audience: 'learners, teachers and administrators',
    icon: GraduationCap,
  },
  {
    title: 'finance dashboards',
    desc: 'numbers must be traceable from source data to every visible total',
    audience: 'owners, analysts and finance managers',
    icon: BarChart3,
  },
]

export default function Resources() {
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <div className="svc-hero-grid-pattern"></div>
          <div className="svc-hero-glow"></div>
        </div>

        <div className="container relative z-10">
          <div className="svc-hero-content reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Blog
            </div>

            <h1 className="svc-hero-title">Engineering blog</h1>

            <p className="svc-hero-sub">
              Engineering notes for teams planning, building, launching and maintaining custom software.
            </p>

            <div className="hero-cta-row">
              <a href="#articles" className="btn btn-primary">
                Read articles <ArrowRight size={16} />
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                View portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Index */}
      <section className="svc-decision-section">
        <div className="container">
          <div className="svc-decision reveal">
            <div className="svc-decision-header">
              <span className="eyebrow">Decision index</span>
              <h3>Engineering blog</h3>
            </div>
            <div className="svc-decision-grid">
              {DECISION_ITEMS.map((item, idx) => (
                <div key={idx} className="svc-decision-card">
                  <div className="svc-decision-step">{item.step}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Engineering Blog Section */}
      <section id="articles" className="res-blog">
        <div className="container">
          <div className="res-blog-head reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Engineering blog
            </div>
            <h2>Engineering blog for product teams that need decisions, not filler</h2>
            <p>
              Notes are organized around delivery risk: requirements, APIs, releases, dashboards, integrations, support and maintenance. The page reads like an editorial desk, not a card dump.
            </p>
          </div>

          <a href="#latest" className="res-read-link reveal">
            Read latest note <ArrowRight size={14} />
          </a>

          {/* Featured Article Desk Card */}
          <div id="latest" className="res-featured reveal">
            <div className="res-featured-tag">founder led MVPs</div>
            <h3>Requirements developers can build from for founder led MVPs</h3>
            <p>
              How to turn business intent into scope, flows, acceptance rules and review points that engineers can trust.
            </p>
            <a href="#read" className="res-article-link">
              Read engineering breakdown <ArrowRight size={16} />
            </a>
          </div>

          {/* Numbered Articles Grid */}
          <div className="res-article-grid">
            {NUMBERED_NOTES.map((note) => (
              <div key={note.num} className="res-article-card reveal">
                <div className="res-article-num">{note.num}</div>
                <div className="res-article-body">
                  <div className="res-featured-tag" style={{ fontSize: '11px', marginBottom: '6px' }}>
                    {note.category}
                  </div>
                  <h4>{note.title}</h4>
                  <p>{note.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Context Section */}
      <section className="res-context">
        <div className="container">
          <div className="res-context-head reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Reader context
            </div>
            <h2>Browse by the product situation</h2>
          </div>

          <div className="res-context-grid">
            {READER_CONTEXTS.map((ctx, idx) => {
              const IconComp = ctx.icon
              return (
                <div key={idx} className="res-context-card reveal">
                  <div className="res-ctx-icon">
                    <IconComp size={24} />
                  </div>
                  <h3>{ctx.title}</h3>
                  <p className="res-ctx-detail">{ctx.desc}</p>
                  <div className="res-ctx-audience">
                    <Users size={14} />
                    <span>{ctx.audience}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compare Options */}
      <CompareOptions
        eyebrow="Compare options"
        title="Engineering blog should lead to a clear next decision"
        subtitle="Use the index to compare fit, risk and ownership. When the right path is visible, Blinking Soft can turn it into a scoped project conversation."
      />
    </div>
  )
}
