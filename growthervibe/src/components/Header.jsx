const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Blog', href: '#blog' },
  { label: 'Website', href: '#website' },
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <span className="brand-mark">GV</span>
        <span className="brand-text">
          <strong>Growther Vibe</strong>
          <small>Growth-led digital experiences</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
