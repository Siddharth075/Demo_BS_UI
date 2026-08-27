import { ArrowUpRight } from 'lucide-react'

const CASES = [
  {
    name: 'Vanquishmedia',
    desc: 'A digital media platform for campaigns, content publishing and brand visibility workflows.',
  },
  {
    name: 'Ligment Fitness',
    desc: 'Training, progress tracking and class management for a fitness business.',
  },
  {
    name: 'TheHomeIdeas',
    desc: 'A discovery platform connecting home owners, architects and product showrooms.',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container" style={{ padding: '104px 0' }}>
        <div
          className="section-head reveal"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '100%', gap: 32, flexWrap: 'wrap' }}
        >
          <div style={{ maxWidth: 560 }}>
            <span className="section-eyebrow">Portfolio</span>
            <h2>See how software teams turn business operations into working products</h2>
            <p style={{ marginTop: 14 }}>Real brands. Real workflows. Practical software delivery.</p>
          </div>
          <a href="#consult" className="btn btn-outline" style={{ marginBottom: 8 }}>
            View portfolio <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="portfolio-grid">
          {CASES.map((c, i) => (
            <article key={c.name} className={`case-card reveal reveal-delay-${i + 1}`}>
              <div className="case-cover">
                <div className="brand-lockup">
                  <span className="b-logo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6z" />
                    </svg>
                  </span>
                  <span className="b-name">{c.name}</span>
                </div>
                <div className="cover-meta">
                  <span>
                    View {c.name} <ArrowUpRight size={14} style={{ verticalAlign: '-2px' }} />
                  </span>
                </div>
              </div>
              <div className="case-body">
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}