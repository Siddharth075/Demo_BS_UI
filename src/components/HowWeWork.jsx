import { ArrowRight } from 'lucide-react'

const STEPS = [
  {
    tag: 'Step 1',
    title: 'Shape the product',
    body:
      'Blinking Soft turns business goals into a buildable roadmap. We define users, core flows, data models, acceptance rules and delivery milestones before engineering starts.',
    link: 'Explore product discovery',
  },
  {
    tag: 'Step 2',
    title: 'Design and engineer',
    body:
      'Our team builds web apps, mobile apps, APIs and dashboards with practical architecture, readable code and review checkpoints that keep delivery grounded.',
    link: 'Explore engineering',
  },
  {
    tag: 'Step 3',
    title: 'Connect systems',
    body:
      'We integrate payments, CRM, ERP, maps, notifications, analytics and internal tools so the new software fits the way your business already works.',
    link: 'Explore integrations',
  },
  {
    tag: 'Step 4',
    title: 'Launch and improve',
    body:
      'We set up cloud hosting, release pipelines, monitoring and support routines so your product can ship reliably and improve after real users arrive.',
    link: 'Explore DevOps',
  },
]

export default function HowWeWork() {
  return (
    <section className="how">
      <div className="container" style={{ padding: '104px 0' }}>
        <div className="section-head reveal" style={{ marginBottom: 72 }}>
          <span className="section-eyebrow" style={{ color: '#9CC3FF' }}>How Blinking Soft works</span>
          <h2>Purpose-built delivery for businesses that need custom software, clear ownership and dependable releases.</h2>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step reveal reveal-delay-1" key={s.title} style={{ transitionDelay: `${0.12 * i}s` }}>
              <span className="step-dot" aria-hidden="true" />
              <span className="step-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a className="step-link" href="#services">
                {s.link} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}