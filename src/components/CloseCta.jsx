import { MapPin, PenSquare, ScanSearch } from 'lucide-react'

const CLOSE_ITEMS = [
  {
    icon: PenSquare,
    title: 'Start a build',
    sub: 'Turn an idea into scope, architecture, release plan and working software.',
  },
  {
    icon: ScanSearch,
    title: 'Audit an existing product',
    sub: 'Get a grounded review of codebase, cloud setup and release pipeline.',
  },
  {
    icon: MapPin,
    title: 'Coimbatore team · Chennai and Australia delivery',
    sub: 'Practical engineering with clear scope and visible releases.',
  },
]

export default function CloseCta() {
  return (
    <section className="close" id="consult">
      <div className="container" style={{ padding: '104px 0' }}>
        <div className="close-grid">
          <div>
            <span className="section-eyebrow reveal" style={{ color: '#9CC3FF' }}>
              Software, built with ownership
            </span>
            <h2 className="reveal reveal-delay-1">
              Tell us what you need to build.
            </h2>
            <p className="lead reveal reveal-delay-2">
              We will help turn the idea into scope, architecture, release plan
              and working software.
            </p>
            <p className="footnote reveal reveal-delay-2">
              Coimbatore team. Chennai and Australia delivery. Practical
              engineering.
            </p>
            <div className="close-actions reveal reveal-delay-3">
              <a href="#consult" className="btn btn-glass pulse-cta">
                Get free consultation
              </a>
              <a href="tel:+917418488095" className="btn btn-glass" style={{ borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>
                Call us
              </a>
            </div>
          </div>

          <div className="close-panel reveal reveal-delay-2">
            <h4>How to get started</h4>
            {CLOSE_ITEMS.map((c) => (
              <div className="close-item" key={c.title}>
                <div className="ci-icon">
                  <c.icon size={19} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="ci-title">{c.title}</div>
                  <div className="ci-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}