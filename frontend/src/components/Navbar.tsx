interface NavbarProps {
  onToggleSidebar: () => void
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <nav className="navbar">
      <a className="logo" href="#hero">
        <div className="logo-icon">Ω</div>
        <span className="logo-name">Omnigent</span>
        <span className="logo-pill">Docs</span>
      </a>
      <div className="nav-sep" />
      <div className="nav-links">
        <a href="#hero" className="nav-link on">Home</a>
        <a href="#what-is" className="nav-link">Overview</a>
        <a href="#features" className="nav-link">Features</a>
        <a href="#tutorial" className="nav-link">Tutorial</a>
      </div>
      <div className="nav-right">
        <div className="nav-search">
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          Search docs...
          <span className="kbd">⌘K</span>
        </div>
        <a href="https://github.com" className="btn btn-ghost" style={{ padding: '6px 13px', fontSize: '13px' }}>
          GitHub
        </a>
        <a href="#tutorial" className="btn btn-primary" style={{ padding: '6px 13px', fontSize: '13px' }}>
          Get Started
        </a>
      </div>
      <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle menu">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
  )
}
