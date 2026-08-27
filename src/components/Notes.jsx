import { FileText, ListChecks, FolderOpen } from 'lucide-react'

const NOTES = [
  {
    icon: FileText,
    title: 'Engineering notes',
    cat: 'Engineering notes',
    desc: 'Practical writeups on architecture, code review, delivery planning and release quality.',
    cta: 'View Engineering notes',
  },
  {
    icon: ListChecks,
    title: 'Build guides',
    cat: 'Build guides',
    desc: 'Checklists for founders and operators planning custom software projects.',
    cta: 'View Build guides',
  },
  {
    icon: FolderOpen,
    title: 'Case studies',
    cat: 'Case studies',
    desc: 'Project stories from web, mobile, commerce, fitness and content platforms.',
    cta: 'View Case studies',
  },
]

export default function Notes() {
  return (
    <section className="notes" id="resources">
      <div className="container" style={{ padding: '104px 0' }}>
        <div className="section-head reveal">
          <span className="section-eyebrow">Resources</span>
          <h2>Engineering notes for better product decisions</h2>
          <p>
            Readable guides on planning, architecture, releases and maintenance
            for teams investing in custom software.
          </p>
        </div>

        <div className="notes-grid">
          {NOTES.map((n, i) => (
            <article key={n.title} className={`note-card reveal reveal-delay-${i + 1}`}>
              <div className="nc-icon">
                <n.icon size={20} strokeWidth={1.8} />
              </div>
              <h3>{n.title}</h3>
              <p>{n.desc}</p>
              <a
                href="#resources"
                className="step-link"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--royal)' }}
              >
                {n.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}