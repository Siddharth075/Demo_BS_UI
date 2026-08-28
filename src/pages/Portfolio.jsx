import { useEffect, useState } from 'react'
import {
  ArrowRight, ExternalLink, ShieldCheck, Zap, Layers, Sparkles,
  Smartphone, Activity, Building2, Home, HeartPulse, ShoppingCart,
  CheckCircle2, Search, ArrowUpRight
} from 'lucide-react'
import useReveal from '../hooks/useReveal.jsx'
import CompareOptions from '../components/CompareOptions.jsx'

const DECISION_ITEMS = [
  {
    step: '01',
    label: 'Compare',
    title: 'Adjacent options by fit',
    desc: 'Evaluate similar build paths, delivery scope, and architectural models side by side.',
    icon: Search,
    tag: 'Fit Audit',
  },
  {
    step: '02',
    label: 'Risk',
    title: 'Integration and release evidence',
    desc: 'Review verified release logs, test suites, API contracts, and operational stability metrics.',
    icon: ShieldCheck,
    tag: 'Release Evidence',
  },
  {
    step: '03',
    label: 'Act',
    title: 'Move into a scoped discussion',
    desc: 'Translate project findings into a clear execution blueprint with fixed milestones.',
    icon: Zap,
    tag: 'Scoped Plan',
  },
]

const PROJECT_EVIDENCE_STEPS = [
  {
    num: '01',
    name: 'Vanquishmedia',
    subtitle: 'Problem context and scope',
    desc: 'Mapping campaign publishing complexity to role-aware admin controls.',
    image: 'images/vanquish.jpg',
  },
  {
    num: '02',
    name: 'Ligment Fitness',
    subtitle: 'Build decisions and tradeoffs',
    desc: 'Balancing quick daily trainer flows with real-time member progress metrics.',
    image: 'images/ligment.jpg',
  },
  {
    num: '03',
    name: 'NM Abdullah',
    subtitle: 'Launch evidence and operating signal',
    desc: 'Prioritizing fast page response and direct inquiry conversions.',
    image: 'images/nm_abdullah.jpg',
  },
]

const PROJECTS = [
  {
    num: '01',
    name: 'Vanquishmedia',
    category: 'Media & Publishing',
    group: 'media',
    icon: Sparkles,
    image: 'images/vanquish.jpg',
    desc: 'Vanquishmedia needed a cleaner way to manage campaign content, publishing steps and brand visibility work. The build focused on role-aware workflows, fast content updates and a maintainable admin experience.',
    highlights: ['Role-aware workflows', 'Fast content updates', 'Maintainable admin experience'],
    metrics: [{ label: 'Content Speed', val: '3x Faster' }, { label: 'Publishing SLA', val: '100% On-Time' }],
    tagColor: '#38BDF8',
  },
  {
    num: '02',
    name: 'Ligment Fitness',
    category: 'Fitness & Wellness',
    group: 'fitness',
    icon: Activity,
    image: 'images/ligment.jpg',
    desc: 'Ligment Fitness needed tools for class management, progress tracking and member engagement. The product direction centred on simple daily use for trainers and a clear experience for members.',
    highlights: ['Class management', 'Trainer mobile view', 'Member progress tracking'],
    metrics: [{ label: 'Daily Active Members', val: '1,200+' }, { label: 'Check-in Latency', val: '< 200ms' }],
    tagColor: '#10B981',
  },
  {
    num: '03',
    name: 'NM Abdullah',
    category: 'Corporate & Services',
    group: 'fitness',
    icon: Building2,
    image: 'images/nm_abdullah.jpg',
    desc: 'NM Abdullah needed a clearer digital entry point for service information and customer enquiries. The work prioritised fast pages, direct contact paths and simple content maintenance.',
    highlights: ['Fast load performance', 'Direct inquiry paths', 'Simple content updates'],
    metrics: [{ label: 'Lighthouse Score', val: '99/100' }, { label: 'Inquiry Rate', val: '+45%' }],
    tagColor: '#6366F1',
  },
  {
    num: '04',
    name: 'TheHomeIdeas',
    category: 'Home Improvement & Marketplace',
    group: 'healthcare',
    icon: Home,
    image: 'images/thehomeideas.jpg',
    desc: 'TheHomeIdeas needed a discovery experience for people planning spaces and comparing providers. The product focused on browsing, filtering and connecting users with relevant home improvement options.',
    highlights: ['Space discovery UI', 'Provider filtering', 'Lead routing system'],
    tagColor: '#F59E0B',
    metrics: [{ label: 'Monthly Browsers', val: '25K+' }, { label: 'Match Rate', val: '94%' }],
  },
  {
    num: '05',
    name: 'CareGrid',
    category: 'Healthcare Operations',
    group: 'healthcare',
    icon: HeartPulse,
    image: 'images/caregrid.jpg',
    desc: 'CareGrid is shaped around healthcare coordination, where teams need clear records, follow-ups and communication paths. The product direction favours auditability, handover clarity and simple staff workflows.',
    highlights: ['Audit-ready records', 'Handover clarity', 'Staff coordination'],
    tagColor: '#EC4899',
    metrics: [{ label: 'Handover Errors', val: '0 Reported' }, { label: 'Audit Compliance', val: '100%' }],
  },
  {
    num: '06',
    name: 'ShopLayer',
    category: 'E-commerce Operations',
    group: 'healthcare',
    icon: ShoppingCart,
    image: 'images/shoplayer.jpg',
    desc: 'ShopLayer focuses on the operational side of selling online: product data, checkout state, order handling and customer support. The build direction keeps commerce logic explicit and recoverable.',
    highlights: ['Checkout state engine', 'Order handling', 'Recoverable workflows'],
    tagColor: '#8B5CF6',
    metrics: [{ label: 'Order Processing', val: 'Automated' }, { label: 'Checkout Uptime', val: '99.99%' }],
  },
]

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Projects (6)' },
  { id: 'media', label: 'Media & Publishing' },
  { id: 'fitness', label: 'Fitness & Operations' },
  { id: 'healthcare', label: 'Healthcare & E-Commerce' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  useReveal([activeFilter])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true
    return proj.group === activeFilter
  })

  return (
    <div className="portfolio-page">
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
              Portfolio
            </div>

            <h1 className="svc-hero-title">Selected software projects</h1>

            <p className="svc-hero-sub">
              Project stories from media, fitness, home ideas, operations and customer platforms built for real business workflows.
            </p>

            <div className="hero-cta-row">
              <a href="#projects" className="btn btn-primary">
                Start your project <ArrowRight size={16} />
              </a>
              <a href="#projects" className="btn btn-secondary">
                View portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upgraded Decision Index */}
      <section className="svc-decision-section">
        <div className="container">
          <div className="svc-decision reveal">
            <div className="svc-decision-header">
              <span className="eyebrow">Decision index</span>
              <h3>Selected software projects</h3>
            </div>
            <div className="svc-decision-grid">
              {DECISION_ITEMS.map((item, idx) => {
                const IconComp = item.icon
                return (
                  <div key={idx} className="svc-decision-card upgraded-card">
                    <div className="svc-dec-top">
                      <span className="svc-dec-step-num">{item.step}</span>
                      <span className="svc-dec-tag">{item.tag}</span>
                    </div>
                    <div className="svc-dec-icon-wrap">
                      <IconComp size={20} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Project Evidence / Overview Section */}
      <section className="port-evidence">
        <div className="container">
          <div className="port-evidence-head reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Project evidence
            </div>
            <h2>Review projects by the workflow problem they solved</h2>
            <p>
              Portfolio pages should show the business context, product decisions and delivery evidence behind the work, not only a gallery of finished screens.
            </p>
          </div>

          <div className="port-evidence-grid">
            {PROJECT_EVIDENCE_STEPS.map((step) => (
              <div key={step.num} className="port-evidence-card reveal">
                <div className="port-ev-frame">
                  <img src={step.image} alt={step.name} className="port-ev-thumb" />
                  <div className="port-ev-overlay"></div>
                </div>
                <div className="port-ev-body">
                  <div className="port-ev-num">{step.num}</div>
                  <h3>{step.name}</h3>
                  <div className="port-ev-sub">{step.subtitle}</div>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Project Records Showcase with Visual Frames & Working Filter Tabs */}
      <section id="projects" className="port-showcase">
        <div className="container">
          {/* Relatable Topic Header & Filter Tabs */}
          <div className="port-showcase-head reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Case studies & Project records
            </div>
            <h2>Real Product Case Studies: From Intent to Production</h2>
            <p>
              Explore in-depth project records detailing the business challenges, product architecture decisions, and operational delivery metrics behind each build.
            </p>

            <div className="port-filter-tabs">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`port-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="port-showcase-grid">
            {filteredProjects.map((proj) => {
              const IconComp = proj.icon
              return (
                <div key={proj.num} className="port-project-card reveal">
                  {/* Browser Window Mockup Frame */}
                  <div className="port-browser-frame">
                    <div className="port-browser-bar">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                      <span className="port-browser-url">{proj.name.toLowerCase()}.blinkingsoft.com</span>
                    </div>
                    <div className="port-browser-img-wrap">
                      <img src={proj.image} alt={proj.name} className="port-project-img" />
                    </div>
                  </div>

                  <div className="port-card-top">
                    <div className="port-record-badge">
                      <span className="port-rec-num">{proj.num}</span> Project record
                    </div>
                    <div
                      className="port-cat-badge"
                      style={{ color: proj.tagColor, borderColor: `${proj.tagColor}30`, background: `${proj.tagColor}10` }}
                    >
                      <IconComp size={13} />
                      {proj.category}
                    </div>
                  </div>

                  <h3 className="port-project-title">{proj.name}</h3>

                  <p className="port-project-desc">{proj.desc}</p>

                  {/* Highlights and Metric Pills */}
                  <div className="port-highlights">
                    {proj.highlights.map((h, i) => (
                      <span key={i} className="port-hl-chip">
                        <span className="port-chip-dot" style={{ background: proj.tagColor }}></span>
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="port-metrics-row">
                    {proj.metrics.map((m, i) => (
                      <div key={i} className="port-metric-box">
                        <span className="port-m-val" style={{ color: proj.tagColor }}>{m.val}</span>
                        <span className="port-m-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="port-card-footer">
                    <a href="#contact" className="port-case-link">
                      View workflow details <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compare Options Section */}
      <CompareOptions
        eyebrow="Compare options"
        title="Selected software projects should lead to a clear next decision"
        subtitle="Use the index to compare fit, risk and ownership. When the right path is visible, Blinking Soft can turn it into a scoped project conversation."
      />
    </div>
  )
}
