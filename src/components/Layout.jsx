import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { to: '/coaching', label: 'Coaching' },
  { to: '/training', label: 'Training' },
  { to: '/consulting', label: 'Consulting' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="master-container">
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
            <span className="nav-logo-text">learn.cosama</span>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link${pathname === to ? ' active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link to="/get-started" className="btn btn-outline btn-sm nav-cta">
            Book a Demo
          </Link>

          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav-link${pathname === to ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/get-started"
          className="btn btn-primary"
          onClick={() => setMobileOpen(false)}
        >
          Book a Demo <ArrowRight size={14} />
        </Link>
      </div>

      <main className="page-enter">
        <Outlet />
      </main>

      <hr className="section-divider" />

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <Link to="/" className="nav-logo">
                <span className="nav-logo-text" style={{ color: '#fff' }}>Cosama</span>
              </Link>
              <p className="footer-brand-desc">
                Your business runs on decisions. AI makes them better. From the C-suite to the front lines, we coach, train, and deploy AI that moves the needle.
              </p>
            </div>

            <div>
              <div className="footer-col-title">Services</div>
              <Link to="/coaching" className="footer-link">Executive Coaching</Link>
              <Link to="/training" className="footer-link">Team Training</Link>
              <Link to="/consulting" className="footer-link">AI Consulting</Link>
              <Link to="/get-started" className="footer-link">Get Started</Link>
            </div>

            <div>
              <div className="footer-col-title">Company</div>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <a href="https://www.cosama.co" target="_blank" rel="noopener noreferrer" className="footer-link">Cosama.co</a>
            </div>

            <div>
              <div className="footer-col-title">Connect</div>
              <Link to="/contact" className="footer-link">Book a Call</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Cosama. All rights reserved.</span>
            <span>
              learn.cosama.co · A <a href="https://www.cosama.co" target="_blank" rel="noopener noreferrer">Cosama</a> Company
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
