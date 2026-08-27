import { Phone, Mail } from 'lucide-react'
import { SERVICES, SOLUTIONS, INDUSTRIES, RESOURCES, COMPANY, LEGAL, PHONE, EMAIL } from '../data.js'

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.12h4.52V23H.24V8.12zM8 8.12h4.33v2.03h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.51v-7.16c0-1.71-.03-3.9-2.38-3.9-2.38 0-2.74 1.86-2.74 3.77V23H8V8.12z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
  </svg>
)

const columns = [
  { title: 'Solutions', links: SOLUTIONS },
  { title: 'Services', links: SERVICES },
  { title: 'Industries', links: INDUSTRIES },
  { title: 'Resources', links: RESOURCES },
  { title: 'Company', links: COMPANY },
]

const Start = () => (
  <a href="#top" className="brand">
    <span className="brand-mark" aria-hidden="true" />
    <span className="brand-name">
      Blinking<span>Soft</span>
    </span>
  </a>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Start />
            <p className="footer-desc">
              Software delivery, under control. Web, mobile, cloud and AI
              workflow engineering for teams in Coimbatore, Chennai and Australia
              that need clear scope, visible releases and practical support.
            </p>
            <div className="footer-contact">
              <a href={`tel:${PHONE.replace(/\s/g, '')}`}>
                <Phone size={15} /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`}>
                <Mail size={15} /> {EMAIL}
              </a>
              <div className="footer-location-row">
                <span>Coimbatore</span>
                <span>Chennai</span>
                <span>Australia</span>
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              {LEGAL.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Blinking Soft. All rights reserved.</p>
          <div className="footer-legal">
            {LEGAL.map((l) => (
              <a key={l} href="#top">{l}</a>
            ))}
          </div>
          <div className="footer-social">
            <a href="#top" className="social-btn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="#top" className="social-btn" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}