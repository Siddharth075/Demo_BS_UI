import { CircleHelp, PackageOpen, Timer } from 'lucide-react'

const PROBLEMS = [
  {
    icon: CircleHelp,
    title: 'Unclear scope',
    quote:
      'We need a product, but every meeting creates a new version of what the team should build.',
  },
  {
    icon: PackageOpen,
    title: 'Fragile delivery',
    quote:
      'The screens look ready, but integrations, deployment, testing and handover are still scattered.',
  },
  {
    icon: Timer,
    title: 'Slow releases',
    quote:
      'Every change takes longer because the codebase, cloud setup and review process were not built to scale.',
  },
]

export default function Problems() {
  return (
    <section className="problems" id="solutions">
      <div className="container" style={{ padding: '104px 0' }}>
        <div className="section-head reveal">
          <span className="section-eyebrow">The usual way</span>
          <h2>
            Loose briefs, disconnected tools and rushed releases make software
            expensive to change
          </h2>
        </div>

        <div className="problems-grid">
          {PROBLEMS.map((p, i) => (
            <article
              key={p.title}
              className={`problem-card reveal reveal-delay-${i + 1}`}
            >
              <span className="problem-num">0{i + 1}</span>
              <div style={{ maxWidth: '300px' }}>
                <div className="problem-icon">
                  <p.icon size={19} strokeWidth={1.8} />
                </div>
                <div className="problem-text">
                  <h3>{p.title}</h3>
                  <p>
                    <span className="quote-sign">&ldquo;</span>&nbsp;
                    {p.quote}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}