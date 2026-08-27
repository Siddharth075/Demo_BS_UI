import { useState } from 'react'
import { CheckCircle2, Compass, Boxes, Rocket, Settings } from 'lucide-react'
import { SERVICES } from '../data.js'

const TABS = [
  {
    key: 'Discovery',
    icon: Compass,
    heading: 'Requirements are agreed before sprint work starts',
    body:
      'The team documents users, permissions, workflow states, external systems, data ownership and release assumptions before engineering starts. That keeps the scope practical and reviewable.',
    checks: [
      'User roles and permissions',
      'Workflow and exception paths',
      'Integration and data risks',
      'Milestone acceptance checks',
    ],
  },
  {
    key: 'Engineering',
    icon: Boxes,
    heading: 'Components, APIs and integrations are built to a definition of done',
    body:
      'Engineering progresses against agreed components and review checkpoints. Architecture decisions, code quality, security and performance are reviewed during delivery, not after the fact.',
    checks: [
      'Clean component and API boundaries',
      'Code review at every checkpoint',
      'Security and performance gates',
      'Definition of done before sign-off',
    ],
  },
  {
    key: 'Release',
    icon: Rocket,
    heading: 'Releases are evidenced, tested and rollback-safe',
    body:
      'Every release carries build, test, deploy and rollback evidence. Hosting and monitoring are configured before launch so a release is a controlled event, not a gamble.',
    checks: [
      'Build, test and deploy evidence',
      'Rollback plan for every release',
      'Hosting and monitoring configured',
      'Handover and support loop ready',
    ],
  },
  {
    key: 'Operate',
    icon: Settings,
    heading: 'Blinking Soft stays close after launch',
    body:
      'Delivery continues past go-live with monitoring, fixes, data ownership and a first support loop. The product improves after real users arrive, with one accountable team.',
    checks: [
      'Monitoring and alerting in place',
      'First support loop defined',
      'Fixes and hotfixes owned',
      'Next improvements planned',
    ],
  },
]

const STEPS = ['Discovery', 'Engineering', 'Release', 'Operate']

export default function Standards() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]
  const Icon = tab.icon

  return (
    <section className="standards">
      <div className="container" style={{ padding: '104px 0' }}>
        <div className="section-head reveal">
          <span className="section-eyebrow">Engineering standards</span>
          <h2>
            Serious software delivery needs clear standards
          </h2>
          <p>
            Blinking Soft keeps delivery grounded in requirements clarity,
            definition-of-done, release evidence, DevSecOps habits and support
            ownership.
          </p>
        </div>

        <div className="tabs-bar reveal reveal-delay-1">
          {TABS.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setActive(i)}
              className={`tab-btn ${i === active ? 'active' : ''}`}
            >
              {t.key}
            </button>
          ))}
        </div>

        <div className="tab-panel">
          <div>
            <span className="tab-tag">{STEPS.indexOf(tab.key) + 1} — {tab.key}</span>
            <h3>{tab.heading}</h3>
            <p className="tab-copy">{tab.body}</p>
            <ul className="check-list">
              {tab.checks.map((c) => (
                <li key={c}>
                  <CheckCircle2 size={18} /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-visual">
            <Icon size={44} strokeWidth={1.4} color="var(--royal-bright)" style={{ marginBottom: 20 }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>{tab.key}</h3>
            {SERVICES.slice(0, 4).map((s, i) => (
              <div
                key={s}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 14,
                  color: 'var(--slate-dark)',
                  padding: '7px 0',
                  borderBottom: i === 3 ? 'none' : '1px solid var(--silver)',
                }}
              >
                <span style={{ color: 'var(--royal)', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                  0{i + 1}
                </span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}