import { useEffect } from 'react'
import {
  ArrowRight, Heart, ShoppingCart, Plane, Building2, GraduationCap,
  Landmark, Truck, Factory, Dumbbell, Newspaper, Briefcase,
} from 'lucide-react'
import useReveal from '../hooks/useReveal.jsx'
import CompareOptions from '../components/CompareOptions.jsx'

const DECISION_INDEX = [
  { label: 'Compare', value: 'Adjacent options by fit' },
  { label: 'Risk', value: 'Integration and release evidence' },
  { label: 'Act', value: 'Move into a scoped discussion' },
]

const INDUSTRY_MAP = [
  { num: '01', name: 'Healthcare', sub: 'Customer and staff journeys' },
  { num: '02', name: 'E-commerce', sub: 'Data, permissions and exceptions' },
  { num: '03', name: 'Travel and Tourism', sub: 'Reports and support loops' },
]

const INDUSTRIES = [
  { icon: Heart, name: 'Healthcare', desc: 'Patient portals, appointment flows, staff dashboards and privacy-aware workflow tools for care operations.' },
  { icon: ShoppingCart, name: 'E-commerce', desc: 'Catalogues, checkout flows, payment handling, order dashboards and integrations for online selling.' },
  { icon: Plane, name: 'Travel and Tourism', desc: 'Booking flows, itinerary tools, payment recovery and customer support systems for travel teams.' },
  { icon: Building2, name: 'Real Estate', desc: 'Property discovery, lead capture, CRM workflows and dashboards for brokers, agents and builders.' },
  { icon: GraduationCap, name: 'Education', desc: 'Learning portals, cohort dashboards, assessments and communication tools for schools and training teams.' },
  { icon: Landmark, name: 'Finance', desc: 'Reporting dashboards, approval workflows, reconciliations and secure portals for finance operations.' },
  { icon: Truck, name: 'Logistics', desc: 'Booking, dispatch, shipment visibility, exception queues and customer updates for logistics operations.' },
  { icon: Factory, name: 'Manufacturing', desc: 'Production dashboards, quality checks, inventory workflows and maintenance reporting for factory teams.' },
  { icon: Dumbbell, name: 'Fitness and Wellness', desc: 'Member apps, class booking, trainer dashboards, subscriptions and progress tracking for wellness teams.' },
  { icon: Newspaper, name: 'Media and Publishing', desc: 'Content workflows, campaign systems, publishing operations and audience dashboards for media teams.' },
  { icon: Briefcase, name: 'Professional Services', desc: 'Client portals, intake workflows, reports, approvals and knowledge systems for service businesses.' },
]

export default function Industries() {
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
          <span className="section-eyebrow reveal">Industry</span>
          <h1 className="reveal reveal-delay-1">Industries we serve</h1>
          <p className="svc-hero-sub reveal reveal-delay-2">
            Tailored software for healthcare, commerce, travel, real estate,
            education, finance and internal operations.
          </p>
          <div className="svc-hero-actions reveal reveal-delay-3">
            <a href="#consult" className="btn btn-primary">
              Discuss your project <ArrowRight size={16} />
            </a>
            <a href="#/" className="btn btn-outline">
              View portfolio
            </a>
          </div>
        </div>

        <div className="container">
          <div className="svc-decision reveal reveal-delay-4">
            <h3 className="svc-decision-title">Decision index</h3>
            <span className="svc-decision-label">Industries we serve</span>
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

      {/* Industry Map */}
      <section className="svc-map">
        <div className="container">
          <div className="svc-map-head reveal">
            <span className="section-eyebrow" style={{ color: '#9CC3FF' }}>Industry map</span>
            <h2>Different domains need different operating signals</h2>
            <p>
              Industry pages translate software work into the real screens,
              approvals, data checks and support paths each business type needs.
            </p>
          </div>

          <div className="svc-map-grid reveal reveal-delay-1">
            {INDUSTRY_MAP.map((s) => (
              <div className="svc-map-card" key={s.num}>
                <span className="svc-map-num">{s.num}</span>
                <h3 className="svc-map-name">{s.name}</h3>
                <p className="svc-map-sub">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Table */}
      <section className="ind-table-section">
        <div className="container">
          <div className="ind-table-head">
            <span className="ind-col-label">Domain</span>
            <span className="ind-col-label">Operating need</span>
            <span className="ind-col-label ind-col-action">Open page</span>
          </div>

          {INDUSTRIES.map((ind, idx) => (
            <div className={`ind-row reveal${idx < 4 ? ` reveal-delay-${idx + 1}` : ''}`} key={ind.name}>
              <div className="ind-row-name">
                <div className="ind-row-icon">
                  <ind.icon size={20} strokeWidth={1.8} />
                </div>
                <h3>{ind.name}</h3>
              </div>
              <p className="ind-row-desc">{ind.desc}</p>
              <a href="#consult" className="ind-row-link">
                View workflow <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Compare Options */}
      <CompareOptions
        eyebrow="Compare options"
        title="Industries we serve should lead to a clear next decision"
        subtitle="Use the index to compare fit, risk and ownership. When the right path is visible, Blinking Soft can turn it into a scoped project conversation."
      />
    </main>
  )
}
