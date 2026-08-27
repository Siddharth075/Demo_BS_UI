import { ClipboardCheck, Layers, LifeBuoy, ArrowRight } from 'lucide-react'

const POINTS = [
  {
    icon: ClipboardCheck,
    title: 'Clear project setup',
    sub: 'Scope, milestones, risks and responsibilities are written before the sprint starts.',
  },
  {
    icon: Layers,
    title: 'Engineering reviews',
    sub: 'Architecture, code quality, security and performance are reviewed during delivery.',
  },
  {
    icon: LifeBuoy,
    title: 'Support after launch',
    sub: 'We stay close to releases, fixes, monitoring and the next round of improvements.',
  },
]

export default function DeliveryBand() {
  return (
    <section id="industries">
      <div className="container" style={{ padding: '104px 0 120px' }}>
        <div className="delivery-band reveal">
          <div className="container-pad">
            <span className="section-eyebrow" style={{ color: '#BFD7F5' }}>Delivery</span>
            <h2>Ready to build properly?</h2>
            <p className="lead">
              We work from Coimbatore with clients in Chennai and Australia,
              delivering practical software through a clear build process.
            </p>

            <ul className="delivery-points">
              {POINTS.map((p) => (
                <li key={p.title}>
                  <p.icon size={19} />
                  <span style={{ fontWeight: 600 }}>{p.title}</span>
                  <span style={{ color: '#D4E3F7', fontWeight: 400 }}>— {p.sub}</span>
                </li>
              ))}
            </ul>

            <a href="#consult" className="btn btn-light pulse-cta">
              <ArrowRight size={16} /> Explore delivery
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}