import { useState } from 'react'
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from 'lucide-react'
import { NAV, PHONE } from '../data.js'

const LogoMark = () => (
  <a href="#top" className="brand">
    <span className="brand-mark" aria-hidden="true" />
    <span className="brand-name">
      Blinking<span>Soft</span>
    </span>
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <LogoMark />

        <nav aria-label="Primary">
          <ul className="nav-links">
            {NAV.map((item) => (
              <li className="nav-item" key={item.label}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                  {item.items && <ChevronDown size={14} className="chev" />}
                </a>
                {item.items && (
                  <div className="dropdown">
                    {item.items.map((sub) => (
                      <a key={sub} href={item.href}>
                        {sub}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a className="nav-call" href={`tel:${PHONE.replace(/\s/g, '')}`}>
            <Phone size={14} /> Call us
          </a>
          <a href="#consult" className="btn btn-primary nav-cta">
            Get consultation
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        {NAV.map((item) => (
          <details key={item.label}>
            <summary>{item.label}</summary>
            {item.items && (
              <div style={{ paddingBottom: '8px' }}>
                {item.items.map((sub) => (
                  <a key={sub} href={item.href} onClick={() => setOpen(false)}>
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </details>
        ))}
        <a
          href="#consult"
          className="btn btn-primary"
          style={{ marginTop: '18px', width: '100%' }}
          onClick={() => setOpen(false)}
        >
          Get consultation
        </a>
      </div>
    </header>
  )
}