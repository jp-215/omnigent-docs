interface SidebarProps {
  isOpen: boolean
  activeSection: string
  onClose: () => void
}

interface NavLink {
  href: string
  label: string
  sectionId: string
}

const gettingStartedLinks: NavLink[] = [
  { href: '#hero', label: '🏠 Introduction', sectionId: 'hero' },
  { href: '#problem', label: '⚠️ The Problem', sectionId: 'problem' },
  { href: '#what-is', label: '🔮 What is Omnigent', sectionId: 'what-is' },
]

const coreConceptLinks: NavLink[] = [
  { href: '#features', label: '⚡ Features', sectionId: 'features' },
  { href: '#tutorial', label: '📖 Tutorial', sectionId: 'tutorial' },
  { href: '#testimonials', label: '💬 Community', sectionId: 'testimonials' },
]

const referenceLinks = [
  { href: '#', label: '🔧 CLI Reference' },
  { href: '#', label: '🌐 REST API' },
  { href: '#', label: '🤖 Agent Configs' },
  { href: '#', label: '🔗 Integrations' },
]

const communityLinks = [
  { href: '#', label: '💻 GitHub' },
  { href: '#', label: '💬 Discord' },
  { href: '#', label: '🐦 Twitter / X' },
]

export default function Sidebar({ isOpen, activeSection, onClose }: SidebarProps) {
  const handleNavClick = () => {
    if (window.innerWidth <= 780) {
      onClose()
    }
  }

  const linkClass = (sectionId: string) =>
    `sb-link${activeSection === sectionId ? ' on' : ''}`

  return (
    <aside className={`sidebar${isOpen ? ' open' : ''}`}>
      <div className="sb-group">
        <div className="sb-head">Getting Started</div>
        {gettingStartedLinks.map((link) => (
          <a
            key={link.sectionId}
            href={link.href}
            className={linkClass(link.sectionId)}
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="sb-divider" />

      <div className="sb-group">
        <div className="sb-head">Core Concepts</div>
        {coreConceptLinks.map((link) => (
          <a
            key={link.sectionId}
            href={link.href}
            className={linkClass(link.sectionId)}
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="sb-divider" />

      <div className="sb-group">
        <div className="sb-head">Reference</div>
        {referenceLinks.map((link) => (
          <a key={link.label} href={link.href} className="sb-link">
            {link.label}
          </a>
        ))}
      </div>

      <div className="sb-divider" />

      <div className="sb-group">
        <div className="sb-head">Community</div>
        {communityLinks.map((link) => (
          <a key={link.label} href={link.href} className="sb-link">
            {link.label}
          </a>
        ))}
      </div>

      <div className="sb-card">
        <div className="sb-card-tag">✨ v1.4 Released</div>
        <div className="sb-card-desc">
          Parallel agent execution, session trees &amp; token-aware routing now available.
        </div>
        <a href="#" className="sb-card-link">See what's new →</a>
      </div>
    </aside>
  )
}
