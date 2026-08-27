import { CheckCircle2 } from 'lucide-react'

const ROWS = [
  {
    status: 'Mapped',
    cls: 'mapped',
    label: 'Scope',
    desc: 'Users, roles, states and acceptance rules',
  },
  {
    status: 'Ready',
    cls: 'ready',
    label: 'Release',
    desc: 'Build, test, deploy and rollback checks',
  },
  {
    status: 'Visible',
    cls: 'visible',
    label: 'Risk',
    desc: 'Integrations, data, security and support notes',
  },
]

const PHASES = [
  { num: '01', name: 'Discovery', sub: 'Brief, user flow, workflow risk, estimate assumptions' },
  { num: '02', name: 'Engineering', sub: 'Components, APIs, integrations, review checkpoints' },
  { num: '03', name: 'Launch', sub: 'Hosting, monitoring, handover, first support loop' },
]

const CHECKLIST = [
  'Scope, milestones and risks written before work starts',
  'One delivery team from idea to code to deployment',
  'Visible release and rollback checks',
  'Support ownership after launch',
]

export default function Way() {
  return (
    <section className="way">
      <div className="container" style={{ padding: '104px 0' }}>
        <div className="way-grid">
          <div>
            <div className="section-head reveal">
              <span className="section-eyebrow">The Blinking Soft way</span>
              <h2>
                Product thinking, disciplined engineering and release support in
                one delivery team
              </h2>
            </div>

            <p
              className="reveal reveal-delay-1"
              style={{ color: 'var(--slate)', fontSize: '16.5px', lineHeight: 1.7, margin: 0 }}
            >
              Too many handoffs between idea, design, code, deployment and support
              create risk. We keep the build in one room — scope visible, releases
              checkable and outcomes owned.
            </p>

            <ul className="way-list reveal reveal-delay-2">
              {CHECKLIST.map((c) => (
                <li key={c}>
                  <CheckCircle2 size={18} /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="control-room reveal reveal-delay-2" id="services">
            <div className="cr-header">
              <div className="cr-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="cr-title">Delivery control room</span>
            </div>

            <div className="cr-body">
              {ROWS.map((r) => (
                <div className="cr-row" key={r.label}>
                  <span className={`cr-status ${r.cls}`}>{r.status}</span>
                  <div>
                    <span className="cr-label">{r.label}</span>
                    <span className="cr-desc">{r.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="cr-phases">
              {PHASES.map((p) => (
                <div className="cr-phase" key={p.num}>
                  <span className="cr-phase-num">{p.num}</span>
                  <span className="cr-phase-name">{p.name}</span>
                  <span className="cr-phase-sub">{p.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}