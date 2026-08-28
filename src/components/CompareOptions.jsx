import { useState } from 'react'
import {
  ArrowRight, CheckCircle2, Shield, Search, Zap, Layers, GitBranch,
  FileText, Sparkles, Check, ChevronRight, HelpCircle
} from 'lucide-react'

export default function CompareOptions({
  eyebrow = "Compare options",
  title = "Software delivery should lead to a clear next decision",
  subtitle = "Use the index to compare fit, risk and ownership. When the right path is visible, Blinking Soft can turn it into a scoped project conversation.",
}) {
  const [activeTab, setActiveTab] = useState('fit')

  return (
    <section className="cmp-section" id="compare-options">
      <div className="cmp-bg">
        <div className="cmp-glow cmp-glow-1"></div>
        <div className="cmp-glow cmp-glow-2"></div>
        <div className="cmp-grid-pattern"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="cmp-header reveal">
          <div className="eyebrow" style={{ color: '#38BDF8' }}>
            <span className="eyebrow-dot" style={{ background: '#38BDF8' }}></span>
            {eyebrow}
          </div>
          <h2 className="cmp-title">{title}</h2>
          <p className="cmp-sub">{subtitle}</p>

          {/* Interactive Tabs */}
          <div className="cmp-tabs-wrapper">
            <div className="cmp-tabs">
              <button
                className={`cmp-tab ${activeTab === 'fit' ? 'active' : ''}`}
                onClick={() => setActiveTab('fit')}
              >
                <Search size={16} />
                <span>Fit comparison</span>
                {activeTab === 'fit' && <span className="cmp-tab-indicator"></span>}
              </button>
              <button
                className={`cmp-tab ${activeTab === 'risk' ? 'active' : ''}`}
                onClick={() => setActiveTab('risk')}
              >
                <Shield size={16} />
                <span>Risk view</span>
                {activeTab === 'risk' && <span className="cmp-tab-indicator"></span>}
              </button>
              <button
                className={`cmp-tab ${activeTab === 'step' ? 'active' : ''}`}
                onClick={() => setActiveTab('step')}
              >
                <Zap size={16} />
                <span>Scoped next step</span>
                {activeTab === 'step' && <span className="cmp-tab-indicator"></span>}
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="cmp-content-area reveal">
          {/* TAB 1: FIT COMPARISON */}
          {activeTab === 'fit' && (
            <div className="cmp-tab-pane fade-in">
              <div className="cmp-cards-grid">
                <div className="cmp-card featured">
                  <div className="cmp-card-badge">Fastest Time-to-Market</div>
                  <div className="cmp-card-header">
                    <div className="cmp-card-icon">
                      <Zap size={22} />
                    </div>
                    <h3>Startup MVP Launch</h3>
                    <div className="cmp-card-subtitle">4 to 6 Weeks Delivery</div>
                  </div>
                  <ul className="cmp-feature-list">
                    <li><Check size={16} className="cmp-check" /> Core user journeys & rapid prototyping</li>
                    <li><Check size={16} className="cmp-check" /> Scalable cloud foundation (Vite / Node / Postgres)</li>
                    <li><Check size={16} className="cmp-check" /> Production-ready launch checklist</li>
                    <li><Check size={16} className="cmp-check" /> Fixed scope & predictable budget</li>
                  </ul>
                  <div className="cmp-card-footer">
                    <span className="cmp-fit-tag">Ideal for Founders & 0-to-1 Products</span>
                  </div>
                </div>

                <div className="cmp-card">
                  <div className="cmp-card-header">
                    <div className="cmp-card-icon">
                      <Layers size={22} />
                    </div>
                    <h3>SaaS Platform Build</h3>
                    <div className="cmp-card-subtitle">Scalable Architecture</div>
                  </div>
                  <ul className="cmp-feature-list">
                    <li><Check size={16} className="cmp-check" /> Multi-tenant data & RBAC authorization</li>
                    <li><Check size={16} className="cmp-check" /> API versioning & Webhook automation</li>
                    <li><Check size={16} className="cmp-check" /> Payment gateway & subscription workflows</li>
                    <li><Check size={16} className="cmp-check" /> High-volume dashboard performance</li>
                  </ul>
                  <div className="cmp-card-footer">
                    <span className="cmp-fit-tag">Ideal for Product Teams & Scale-ups</span>
                  </div>
                </div>

                <div className="cmp-card">
                  <div className="cmp-card-header">
                    <div className="cmp-card-icon">
                      <GitBranch size={22} />
                    </div>
                    <h3>Modernization & Rescue</h3>
                    <div className="cmp-card-subtitle">Zero Downtime Migration</div>
                  </div>
                  <ul className="cmp-feature-list">
                    <li><Check size={16} className="cmp-check" /> Legacy code decoupling without full rewrite</li>
                    <li><Check size={16} className="cmp-check" /> Refactoring bottleneck APIs & queries</li>
                    <li><Check size={16} className="cmp-check" /> Automated regression & integration test suite</li>
                    <li><Check size={16} className="cmp-check" /> Incremental release strategy</li>
                  </ul>
                  <div className="cmp-card-footer">
                    <span className="cmp-fit-tag">Ideal for Operations & Legacy Systems</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RISK VIEW */}
          {activeTab === 'risk' && (
            <div className="cmp-tab-pane fade-in">
              <div className="cmp-risk-grid">
                <div className="cmp-risk-card">
                  <div className="cmp-risk-head">
                    <div className="cmp-risk-step-num">01</div>
                    <div>
                      <h4>Integration & API Evidence</h4>
                      <p>Contracts & backward compatibility guarantees</p>
                    </div>
                  </div>
                  <div className="cmp-risk-metrics">
                    <div className="cmp-metric">
                      <span className="cmp-metric-val">100%</span>
                      <span className="cmp-metric-lbl">API Spec Coverage</span>
                    </div>
                    <div className="cmp-metric">
                      <span className="cmp-metric-val">Zero</span>
                      <span className="cmp-metric-lbl">Breaking Changes</span>
                    </div>
                  </div>
                  <p className="cmp-risk-desc">
                    Every endpoint changes are versioned cleanly so web portals, mobile apps, and third-party webhooks remain operational during updates.
                  </p>
                </div>

                <div className="cmp-risk-card">
                  <div className="cmp-risk-head">
                    <div className="cmp-risk-step-num">02</div>
                    <div>
                      <h4>Release Verification</h4>
                      <p>Automated deployment & rollback safety nets</p>
                    </div>
                  </div>
                  <div className="cmp-risk-metrics">
                    <div className="cmp-metric">
                      <span className="cmp-metric-val">CI/CD</span>
                      <span className="cmp-metric-lbl">Automated Pipeline</span>
                    </div>
                    <div className="cmp-metric">
                      <span className="cmp-metric-val">99.9%</span>
                      <span className="cmp-metric-lbl">Uptime SLA</span>
                    </div>
                  </div>
                  <p className="cmp-risk-desc">
                    Automated testing gates run on every pull request. Staging environments mirror production data rules before any live deployment.
                  </p>
                </div>

                <div className="cmp-risk-card">
                  <div className="cmp-risk-head">
                    <div className="cmp-risk-step-num">03</div>
                    <div>
                      <h4>Support & Ownership Handoff</h4>
                      <p>Clean repository, full IP transfer & documentation</p>
                    </div>
                  </div>
                  <div className="cmp-risk-metrics">
                    <div className="cmp-metric">
                      <span className="cmp-metric-val">Full</span>
                      <span className="cmp-metric-lbl">IP & Code Rights</span>
                    </div>
                    <div className="cmp-metric">
                      <span className="cmp-metric-val">Direct</span>
                      <span className="cmp-metric-lbl">Engineer Handoff</span>
                    </div>
                  </div>
                  <p className="cmp-risk-desc">
                    No vendor lock-in. Full access to source code, deployment scripts, architecture documentation, and post-launch support SLA.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SCOPED NEXT STEP */}
          {activeTab === 'step' && (
            <div className="cmp-tab-pane fade-in">
              <div className="cmp-process-flow">
                <div className="cmp-flow-step">
                  <div className="cmp-flow-badge">Step 1</div>
                  <h4>Fit & Scope Discussion</h4>
                  <p>30-minute interactive audit of product requirements, timeline expectations, and stack fit.</p>
                  <div className="cmp-flow-time">Response in &lt; 24h</div>
                </div>

                <div className="cmp-flow-arrow">
                  <ArrowRight size={20} />
                </div>

                <div className="cmp-flow-step highlight">
                  <div className="cmp-flow-badge alt">Step 2</div>
                  <h4>Architecture Brief & Scope</h4>
                  <p>You receive a scoped execution document with clear sprint deliverables, architecture, and cost breakdowns.</p>
                  <div className="cmp-flow-time">Delivered in 48h</div>
                </div>

                <div className="cmp-flow-arrow">
                  <ArrowRight size={20} />
                </div>

                <div className="cmp-flow-step">
                  <div className="cmp-flow-badge">Step 3</div>
                  <h4>Sprint 0 & Execution</h4>
                  <p>Repo setup, CI/CD pipeline initialization, design system alignment, and weekly demo rhythm start.</p>
                  <div className="cmp-flow-time">Immediate Kickoff</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="cmp-actions reveal">
          <div className="cmp-action-note">
            <Sparkles size={16} style={{ color: '#38BDF8' }} />
            <span>Ready to turn your requirements into a scoped project blueprint?</span>
          </div>
          <div className="cmp-btn-group">
            <a href="#contact" className="btn btn-primary cmp-main-btn">
              Discuss your project <ArrowRight size={16} />
            </a>
            <a href="#portfolio" className="btn btn-secondary cmp-sec-btn">
              View portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
