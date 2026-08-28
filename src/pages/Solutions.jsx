import { useEffect } from 'react'
import {
  ArrowRight, Rocket, Layers, LayoutDashboard, Users, Store,
  Bot, BarChart3, RefreshCw, LifeBuoy, CloudCog, ShieldAlert,
  User, Briefcase, Headphones,
} from 'lucide-react'
import useReveal from '../hooks/useReveal.jsx'
import CompareOptions from '../components/CompareOptions.jsx'

const DECISION_INDEX = [
  { label: 'Compare', value: 'Adjacent options by fit' },
  { label: 'Risk', value: 'Integration and release evidence' },
  { label: 'Act', value: 'Move into a scoped discussion' },
]

const SOLUTION_MAP = [
  { num: '01', name: 'Startup MVP Development', sub: 'Smallest useful launch path' },
  { num: '02', name: 'SaaS Platform Build', sub: 'Roles, workflows and evidence' },
  { num: '03', name: 'Internal Tools', sub: 'Improvements without rewrite risk' },
]

const SOLUTIONS = [
  { num: '01', path: 'Build path', icon: Rocket, name: 'Startup MVP Development', desc: 'A practical MVP path with scope control, release planning and the right technical base for later growth.' },
  { num: '02', path: 'Build path', icon: Layers, name: 'SaaS Platform Build', desc: 'Build SaaS foundations with roles, billing-aware workflows, data boundaries and maintainable product architecture.' },
  { num: '03', path: 'Build path', icon: LayoutDashboard, name: 'Internal Tools', desc: 'Turn repeated internal workflows into secure dashboards, approvals, reports and role-based tools.' },
  { num: '04', path: 'Build path', icon: Users, name: 'Customer Portal Build', desc: 'Build customer portals that reduce support load and make account, document and request workflows easier to manage.' },
  { num: '05', path: 'Operate path', icon: Store, name: 'Marketplace Platforms', desc: 'Build marketplace workflows with searchable supply, trust signals, transactions, dispute paths and operator dashboards.' },
  { num: '06', path: 'Improve path', icon: Bot, name: 'AI Workflow Automation', desc: 'Use AI where it reduces manual work while keeping approvals, audit trails and fallback paths visible.' },
  { num: '07', path: 'Improve path', icon: BarChart3, name: 'Data Dashboard Build', desc: 'Build dashboards around the questions teams ask every week, with reliable data paths and decision-ready views.' },
  { num: '08', path: 'Improve path', icon: RefreshCw, name: 'Software Modernization', desc: 'A controlled modernization path for existing software that needs safer change and better user experience.' },
  { num: '09', path: 'Improve path', icon: ShieldAlert, name: 'Legacy App Rescue', desc: 'Stabilize fragile software with audits, tactical fixes, release guardrails and a staged modernization path.' },
  { num: '10', path: 'Operate path', icon: LifeBuoy, name: 'Support Retainers', desc: 'Maintenance and support capacity for live products that need stable ownership after launch.' },
  { num: '11', path: 'Operate path', icon: CloudCog, name: 'Cloud Cost Control', desc: 'Find cloud spend risks, tune architecture and set monitoring around cost drivers before bills surprise the business.' },
]

const ROLES = [
  {
    icon: User,
    title: 'Founder',
    desc: 'You have a product idea or an early business that needs software to prove itself.',
    solutions: ['Startup MVP Development', 'SaaS Platform Build', 'Marketplace Platforms'],
  },
  {
    icon: Briefcase,
    title: 'Operations lead',
    desc: 'Your team runs on spreadsheets, disconnected tools and manual approvals that don\u2019t scale.',
    solutions: ['Internal Tools', 'Customer Portal Build', 'Data Dashboard Build'],
  },
  {
    icon: Headphones,
    title: 'Product / support owner',
    desc: 'You own a live system that is slow, fragile, expensive or unsupported.',
    solutions: ['Software Modernization', 'Legacy App Rescue', 'Support Retainers'],
  },
]

export default function Solutions() {
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="svc-hero">
        <div className="svc-hero-bg" aria-hidden="true" />
        <div className="container svc-hero-inner">
          <span className="section-eyebrow reveal">Solution</span>
          <h1 className="reveal reveal-delay-1">Software solutions</h1>
          <p className="svc-hero-sub reveal reveal-delay-2">
            Focused software delivery paths for startups, SaaS teams, operations
            teams and businesses modernising existing systems.
          </p>
          <div className="svc-hero-actions reveal reveal-delay-3">
            <a href="#consult" className="btn btn-primary">
              Plan your solution <ArrowRight size={16} />
            </a>
            <a href="#/" className="btn btn-outline">
              View portfolio
            </a>
          </div>
        </div>

        <div className="container">
          <div className="svc-decision reveal reveal-delay-4">
            <h3 className="svc-decision-title">Decision index</h3>
            <span className="svc-decision-label">Software solutions</span>
            <div className="svc-decision-grid">
              {DECISION_INDEX.map((d) => (
                <div className="svc-decision-item" key={d.label}>
                  <span className="svc-di-label">{d.label}</span>
                  <span className="svc-di-value">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Map */}
      <section className="svc-map">
        <div className="container">
          <div className="svc-map-head reveal">
            <span className="section-eyebrow" style={{ color: '#9CC3FF' }}>Solution map</span>
            <h2>Start from the business workflow, not a generic stack</h2>
            <p>
              Solution pages group common software problems into practical build
              shapes for founders, operations teams and product owners.
            </p>
          </div>

          <div className="svc-map-grid reveal reveal-delay-1">
            {SOLUTION_MAP.map((s) => (
              <div className="svc-map-card" key={s.num}>
                <span className="svc-map-num">{s.num}</span>
                <h3 className="svc-map-name">{s.name}</h3>
                <p className="svc-map-sub">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Sequence */}
      <section className="sol-sequence">
        <div className="container">
          <div className="sol-sequence-head reveal">
            <span className="section-eyebrow">Solution sequence</span>
            <h2>Pick the operating problem before the build package</h2>
            <p>
              Each solution page is arranged around the product surface, internal
              controls and support responsibility needed after launch.
            </p>
          </div>

          <div className="sol-grid reveal reveal-delay-1">
            {SOLUTIONS.map((s) => (
              <div className="sol-card" key={s.num}>
                <div className="sol-card-top">
                  <span className="sol-card-num">{s.num}</span>
                  <span className={`sol-card-path sol-path--${s.path.split(' ')[0].toLowerCase()}`}>
                    {s.path}
                  </span>
                </div>
                <div className="sol-card-icon">
                  <s.icon size={20} strokeWidth={1.8} />
                </div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start from your seat */}
      <section className="sol-roles">
        <div className="container">
          <div className="sol-roles-head reveal">
            <span className="section-eyebrow">Start from your seat</span>
            <h2>Different roles arrive with different problems</h2>
          </div>

          <div className="sol-roles-grid reveal reveal-delay-1">
            {ROLES.map((r) => (
              <div className="sol-role-card" key={r.title}>
                <div className="sol-role-icon">
                  <r.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <ul className="sol-role-list">
                  {r.solutions.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Planning CTA */}
      {/* Compare Options */}
      <CompareOptions
        eyebrow="Solution planning"
        title="Software solutions should start with evidence, not a feature list"
        subtitle="The next step is to clarify the first useful release, control surfaces, integration risk and support ownership so the build has a defensible sequence."
      />
    </main>
  )
}
