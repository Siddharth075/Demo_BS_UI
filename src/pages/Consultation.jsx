import { useState, useEffect } from 'react'
import {
  ArrowRight, Phone, Mail, MapPin, CheckCircle2, Clock, ShieldCheck,
  Send, MessageSquare, Zap, Layers, Sparkles, Building2, Code2, Check
} from 'lucide-react'
import useReveal from '../hooks/useReveal.jsx'
import CompareOptions from '../components/CompareOptions.jsx'

const DECISION_ITEMS = [
  {
    step: '01',
    label: 'Scope',
    title: 'Workflow and ownership',
    desc: 'Clarify core user journeys, key features, and initial release priorities.',
    icon: Layers,
    tag: 'Discovery',
  },
  {
    step: '02',
    label: 'Build',
    title: 'Engineering and review',
    desc: 'Agile development with sprint demos, clean code handoffs, and staging previews.',
    icon: Code2,
    tag: 'Delivery',
  },
  {
    step: '03',
    label: 'Support',
    title: 'Launch and improvement',
    desc: 'Production deployment, uptime monitoring, performance SLA, and iterative updates.',
    icon: ShieldCheck,
    tag: 'Retainer',
  },
]

const SERVICES_OPTIONS = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Cloud Solutions',
  'API & DevOps',
  'AI Automation',
  'Software Modernization',
  'Support Retainer',
  'Other',
]

const DIRECT_LINES = [
  {
    title: 'Call',
    value: '+91 74184 88095',
    sub: 'Business hours, IST. Fastest for scoping questions.',
    icon: Phone,
    action: 'tel:+917418488095',
    btnText: 'Call now',
    tagColor: '#38BDF8',
  },
  {
    title: 'Email',
    value: 'muthu@blinkingsoft.com',
    sub: 'Best for briefs, documents and detailed requirements.',
    icon: Mail,
    action: 'mailto:muthu@blinkingsoft.com',
    btnText: 'Send email',
    tagColor: '#10B981',
  },
  {
    title: 'Visit',
    value: 'SAP Illam, Jeyasimmapuram, Coimbatore 641037',
    sub: 'The engineering team works from Coimbatore, Tamil Nadu.',
    icon: MapPin,
    action: '#office-map',
    btnText: 'View location',
    tagColor: '#6366F1',
  },
]

const CONTACT_CHANNELS = [
  {
    channel: 'Phone',
    detail: '+91 74184 88095 for direct project conversations.',
    icon: Phone,
  },
  {
    channel: 'Email',
    detail: 'muthu@blinkingsoft.com for briefs, documents and follow-up details.',
    icon: Mail,
  },
  {
    channel: 'Office',
    detail: '10/11, 3rd floor, SAP Illam, Jeyasimmapuram, Coimbatore.',
    icon: MapPin,
  },
]

const INTAKE_PILLARS = [
  {
    title: 'Business goal',
    desc: 'What product outcome or operational metric needs to improve with this build?',
    icon: Sparkles,
  },
  {
    title: 'System context',
    desc: 'What existing software, APIs, database tables, or legacy flows does this touch?',
    icon: Layers,
  },
  {
    title: 'Timeline',
    desc: 'When do you need the first working demo, staging release, or live launch?',
    icon: Clock,
  },
]

export default function Consultation() {
  useReveal()

  const [selectedService, setSelectedService] = useState('Web Development')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="consult-page">
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
              Get started
            </div>

            <h1 className="svc-hero-title">Contact Blinking Soft</h1>

            <p className="svc-hero-sub">
              Talk to Blinking Soft about your project, product idea, support need or engineering role.
            </p>

            <div className="hero-cta-row">
              <a href="#form-section" className="btn btn-primary">
                Send message <ArrowRight size={16} />
              </a>
              <a href="#/portfolio" className="btn btn-secondary">
                View portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Index / Delivery Evidence */}
      <section className="svc-decision-section">
        <div className="container">
          <div className="svc-decision reveal">
            <div className="svc-decision-header">
              <span className="eyebrow">Delivery evidence</span>
              <h3>Contact Blinking Soft</h3>
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

      {/* Main Interactive Consultation Form Section */}
      <section id="form-section" className="cns-main-section">
        <div className="container">
          <div className="cns-grid">
            {/* Left Column: Context & Scoping Details */}
            <div className="cns-info-col reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                What happens next
              </div>
              <h2 className="cns-info-title">Get a practical project conversation</h2>
              <p className="cns-info-desc">
                Share the product goal, budget range, timeline and current constraints. The team responds during business hours and follows up with scope questions, a next step and an estimate path.
              </p>

              {/* Response Guarantee Badge */}
              <div className="cns-guarantee-badge">
                <Clock size={16} className="cns-clock-icon" />
                <span>Response within 24 hours on working days</span>
              </div>

              {/* Direct Info List */}
              <div className="cns-quick-info">
                <div className="cns-qi-item">
                  <Phone size={18} />
                  <div>
                    <span className="cns-qi-lbl">Phone</span>
                    <a href="tel:+917418488095" className="cns-qi-val">+91 74184 88095</a>
                  </div>
                </div>
                <div className="cns-qi-item">
                  <MapPin size={18} />
                  <div>
                    <span className="cns-qi-lbl">Office</span>
                    <span className="cns-qi-val">10/11, 3rd floor, SAP Illam, Jeyasimmapuram, Coimbatore</span>
                  </div>
                </div>
              </div>

              {/* Office Image Frame */}
              <div className="cns-office-card" id="office-map">
                <div className="cns-office-img-wrap">
                  <img src="images/office.jpg" alt="Coimbatore Office" className="cns-office-img" />
                  <div className="cns-office-overlay">
                    <span className="cns-loc-badge"><MapPin size={12} /> Coimbatore Engineering Desk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Interactive Form Panel */}
            <div className="cns-form-col reveal">
              <div className="cns-form-panel">
                <div className="cns-form-head">
                  <h3>Project Scoping Intake</h3>
                  <p>Fill out the details below to receive a response within 24 working hours.</p>
                </div>

                {submitted ? (
                  <div className="cns-success-box">
                    <CheckCircle2 size={48} className="cns-success-icon" />
                    <h4>Message sent successfully!</h4>
                    <p>
                      Thank you, {formData.name || 'there'}! Our Coimbatore engineering team has received your inquiry for <strong>{selectedService}</strong> and will follow up with scope questions shortly.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ marginTop: '16px' }}>
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="cns-form">
                    <div className="cns-form-group">
                      <label>Full name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="cns-form-row">
                      <div className="cns-form-group">
                        <label>Work email</label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="cns-form-group">
                        <label>Phone number</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 74184 88095"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Service Selection Pills */}
                    <div className="cns-form-group">
                      <label>Service needed</label>
                      <div className="cns-service-pills">
                        {SERVICES_OPTIONS.map((srv) => (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => setSelectedService(srv)}
                            className={`cns-srv-pill ${selectedService === srv ? 'active' : ''}`}
                          >
                            {selectedService === srv && <Check size={13} />}
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="cns-form-group">
                      <label>Tell us about your project, users, timeline and current constraints</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Briefly describe what you are building, key target features, preferred launch date, and any hard technical constraints..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary cns-submit-btn">
                      Send message <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Lines Section */}
      <section className="cns-direct-lines">
        <div className="container">
          <div className="cns-dl-head reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Direct lines
            </div>
            <h2>Skip the form if you prefer</h2>
          </div>

          <div className="cns-dl-grid">
            {DIRECT_LINES.map((dl, idx) => {
              const IconComp = dl.icon
              return (
                <div key={idx} className="cns-dl-card reveal">
                  <div className="cns-dl-icon" style={{ color: dl.tagColor, borderColor: `${dl.tagColor}30`, background: `${dl.tagColor}10` }}>
                    <IconComp size={22} />
                  </div>
                  <h3>{dl.title}</h3>
                  <div className="cns-dl-val">{dl.value}</div>
                  <p>{dl.sub}</p>
                  <a href={dl.action} className="cns-dl-link">
                    {dl.btnText} <ArrowRight size={14} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* Project Intake Section */}
      <section className="cns-intake">
        <div className="container">
          <div className="cns-intake-head reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Project intake
            </div>
            <h2>Send enough context for a useful reply</h2>
            <p>
              The best enquiry includes what you are building, who uses it, what systems it touches, what is broken now and when you need the first decision.
            </p>
          </div>

          <div className="cns-intake-grid">
            {INTAKE_PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon
              return (
                <div key={idx} className="cns-intake-card reveal">
                  <div className="cns-intake-num">0{idx + 1}</div>
                  <div className="cns-intake-body">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compare Options Section */}
      <CompareOptions
        eyebrow="Contact Blinking Soft"
        title="Contact Blinking Soft should lead to a clear next decision"
        subtitle="Use the index to compare fit, risk and ownership. When the right path is visible, Blinking Soft can turn it into a scoped project conversation."
      />
    </div>
  )
}
