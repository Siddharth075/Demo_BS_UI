import { useEffect } from 'react'
import { ArrowRight, Code2, Smartphone, Palette, Search, Cloud, Webhook, GitBranch, TestTube2, Bot, Database, Gauge, Shield, Wrench } from 'lucide-react'
import useReveal from '../hooks/useReveal.jsx'
import CompareOptions from '../components/CompareOptions.jsx'

const SERVICE_MAP_STEPS = [
  { num: '01', name: 'Web Development', sub: 'Define the exact responsibility' },
  { num: '02', name: 'Mobile Development', sub: 'Connect design, code and release' },
  { num: '03', name: 'UI/UX Design', sub: 'Keep support visible after launch' },
]

const CATEGORIES = [
  {
    num: '01',
    title: 'Product engineering',
    items: [
      { icon: Code2, name: 'Web Development', desc: 'React, TanStack, Node and dashboard builds for portals, SaaS products and internal business tools.' },
      { icon: Smartphone, name: 'Mobile Development', desc: 'Flutter and React Native apps with onboarding, API sync, notifications and release-store readiness.' },
      { icon: Palette, name: 'UI/UX Design', desc: 'Product flows, wireframes, design systems and handoff notes that help engineering move without guessing.' },
      { icon: Search, name: 'Product Discovery', desc: 'Scope, user journeys, data models, backlog shape and delivery estimates before implementation starts.' },
    ],
  },
  {
    num: '02',
    title: 'Platform delivery',
    items: [
      { icon: Cloud, name: 'Cloud Solutions', desc: 'Cloud architecture, hosting, storage, backups and monitoring designed around traffic and operating cost.' },
      { icon: Webhook, name: 'API Development', desc: 'Stable APIs, authentication, integrations, webhooks and admin workflows for connected products.' },
      { icon: GitBranch, name: 'DevOps Services', desc: 'CI/CD, environment setup, release automation, logs and deployment routines for safer launches.' },
      { icon: TestTube2, name: 'QA Engineering', desc: 'Test plans, release checks, regression coverage and practical quality gates for business-critical flows.' },
    ],
  },
  {
    num: '03',
    title: 'Live product care',
    items: [
      { icon: Bot, name: 'AI Automation', desc: 'AI-assisted tools for document handling, support triage, internal search and controlled workflow automation.' },
      { icon: Database, name: 'Data Engineering', desc: 'Data pipelines, reporting models, warehouse-ready flows and dashboards with traceable business metrics.' },
      { icon: Gauge, name: 'Performance Engineering', desc: 'Core Web Vitals, API latency, frontend rendering and production bottleneck tuning for real product usage.' },
      { icon: Shield, name: 'Security and Compliance', desc: 'Access control, data protection, audit trails and release practices for safer business software.' },
      { icon: Wrench, name: 'Maintenance', desc: 'Bug fixes, refactoring, dependency updates, performance work and support planning for live software.' },
    ],
  },
]

const DECISION_INDEX = [
  {
    step: '01',
    label: 'Compare',
    title: 'Adjacent options by fit',
    desc: 'Evaluate web, mobile, and cloud options tailored to your build responsibility.',
    icon: Search,
    tag: 'Fit Audit',
  },
  {
    step: '02',
    label: 'Risk',
    title: 'Integration and release evidence',
    desc: 'Verify API contracts, deployment routines, and release safety nets.',
    icon: Shield,
    tag: 'Release Evidence',
  },
  {
    step: '03',
    label: 'Act',
    title: 'Move into a scoped discussion',
    desc: 'Transition from requirements into a structured development timeline.',
    icon: Code2,
    tag: 'Scoped Plan',
  },
]

export default function Services() {
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
          <span className="section-eyebrow reveal">Service</span>
          <h1 className="reveal reveal-delay-1">Software development services</h1>
          <p className="svc-hero-sub reveal reveal-delay-2">
            Web apps, mobile apps, UI/UX design, cloud solutions, API development
            and DevOps delivered from Coimbatore with practical engineering discipline.
          </p>
          <div className="svc-hero-actions reveal reveal-delay-3">
            <a href="#consult" className="btn btn-primary">
              Get consultation <ArrowRight size={16} />
            </a>
            <a href="#/" className="btn btn-outline">
              View portfolio
            </a>
          </div>
        </div>

        <div className="container">
          <div className="svc-decision reveal reveal-delay-4">
            <div className="svc-decision-header">
              <span className="eyebrow">Decision index</span>
              <h3>Software development services</h3>
            </div>
            <div className="svc-decision-grid">
              {DECISION_INDEX.map((d) => {
                const IconComp = d.icon
                return (
                  <div className="svc-decision-card" key={d.label}>
                    <div className="svc-dec-top">
                      <span className="svc-dec-step-num">{d.step}</span>
                      <span className="svc-dec-tag">{d.tag}</span>
                    </div>
                    <div className="svc-dec-icon-wrap">
                      <IconComp size={20} />
                    </div>
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Map */}
      <section className="svc-map">
        <div className="container">
          <div className="svc-map-head reveal">
            <span className="section-eyebrow" style={{ color: '#9CC3FF' }}>Service map</span>
            <h2>Choose the capability, then the delivery rhythm</h2>
            <p>
              Every service page now points to a specific build responsibility:
              discovery, interface work, engineering, infrastructure, release
              quality or support ownership.
            </p>
          </div>

          <div className="svc-map-grid reveal reveal-delay-1">
            {SERVICE_MAP_STEPS.map((s) => (
              <div className="svc-map-card" key={s.num}>
                <span className="svc-map-num">{s.num}</span>
                <h3 className="svc-map-name">{s.name}</h3>
                <p className="svc-map-sub">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="svc-categories">
        <div className="container">
          {CATEGORIES.map((cat) => (
            <div className="svc-category reveal" key={cat.title}>
              <div className="svc-cat-header">
                <span className="svc-cat-num">{cat.num}</span>
                <h2 className="svc-cat-title">{cat.title}</h2>
              </div>
              <div className="svc-cat-grid">
                {cat.items.map((item) => (
                  <div className="svc-item-card" key={item.name}>
                    <div className="svc-item-icon">
                      <item.icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compare Options */}
      <CompareOptions
        eyebrow="Compare options"
        title="Software development services should lead to a clear next decision"
        subtitle="Use the index to compare fit, risk and ownership. When the right path is visible, Blinking Soft can turn it into a scoped project conversation."
      />
    </main>
  )
}
