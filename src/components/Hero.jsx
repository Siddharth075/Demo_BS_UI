import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

const CLIENTS = [
  'Vanquishmedia',
  'Ligment Fitness',
  'NM Abdullah',
  'TheHomeIdeas',
  'CareGrid',
  'EduPilot',
  'ShopLayer',
  'TripForge',
  'EstateDesk',
]

const CircuitLines = () => (
  <svg
    viewBox="0 0 1440 720"
    preserveAspectRatio="none"
    fill="none"
    stroke="rgba(148,197,255,0.5)"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <path d="M120 80 H320 V240 H520" />
    <circle cx="520" cy="240" r="3" fill="rgba(148,197,255,0.6)" />
    <path d="M1100 100 H900 V300 H760" />
    <circle cx="760" cy="300" r="3" fill="rgba(148,197,255,0.6)" />
    <path d="M1300 520 H1080 V360 H940" />
    <circle cx="940" cy="360" r="3" fill="rgba(148,197,255,0.6)" />
    <path d="M200 620 H420 V480 H620" />
    <circle cx="620" cy="480" r="3" fill="rgba(148,197,255,0.6)" />
    <path d="M620 120 V200 H760 V320" />
    <circle cx="760" cy="320" r="2" fill="rgba(148,197,255,0.55)" />
  </svg>
)

export default function Hero() {
  const logoRow = [...CLIENTS, ...CLIENTS]

  return (
    <section className="hero" id="top">
      <div className="hero-mesh" aria-hidden="true" />
      <div className="circuit" aria-hidden="true" />
      <div className="circuit-lines" aria-hidden="true">
        <CircuitLines />
      </div>

      <div className="container hero-inner">
        <span className="hero-badge reveal">
          <span className="dot" /> Software development company in Coimbatore
        </span>

        <h1 className="reveal reveal-delay-1">
          Build software that works <span className="accent">in the real world.</span>
        </h1>

        <p className="hero-sub reveal reveal-delay-2">
          Blinking Soft designs and builds web apps, mobile apps, APIs and cloud
          systems for businesses that need reliable software, not slideware.
        </p>

        <div className="hero-cta-row reveal reveal-delay-3">
          <a href="#consult" className="btn btn-glass">
            <Sparkles size={17} /> Get free consultation
          </a>
          <a href="#portfolio" className="btn btn-glass" style={{ borderColor: 'rgba(255,255,255,0.32)', background: 'rgba(255,255,255,0.14)' }}>
            View work <ArrowRight size={16} />
          </a>
        </div>

        <p className="hero-sub-line reveal reveal-delay-4">
          <ShieldCheck size={18} />
          Trusted for web, mobile, cloud and API projects across healthcare,
          commerce, travel, real estate, education and finance.
        </p>

        <div className="trust-logos reveal reveal-delay-4">
          <p className="trust-label">Trusted by teams and brands</p>
          <div className="marquee">
            <div className="marquee-track">
              {logoRow.map((c, i) => (
                <span className="marquee-item" key={`${c}-${i}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6z" />
                  </svg>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}