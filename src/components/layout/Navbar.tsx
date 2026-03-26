import React, { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Button } from '@blinkdotnew/ui'
import { Moon, Sun, Menu, X } from 'lucide-react'

// ── ICRA SVG Emblem (used when no image logo is available) ──────────────────
function ICRAEmblem({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      {/* Earth arc (Africa silhouette-inspired curved base) */}
      <path
        d="M8 28 C10 22 14 18 20 17 C26 18 30 22 32 28"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.5"
      />
      {/* Central tree trunk */}
      <line x1="20" y1="28" x2="20" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Tree crown – layered circles */}
      <circle cx="20" cy="12" r="6" fill="currentColor" opacity="0.85" />
      <circle cx="15" cy="15" r="4" fill="currentColor" opacity="0.65" />
      <circle cx="25" cy="15" r="4" fill="currentColor" opacity="0.65" />
      {/* Ground roots */}
      <path d="M17 28 C15 26 13 27 12 29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.6" />
      <path d="M23 28 C25 26 27 27 28 29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.6" />
    </svg>
  )
}

interface NavbarProps {
  appName?: string
}

export function Navbar({ appName = 'Institute of Climate Restoration for Africa' }: NavbarProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  // Sync dark mode with html class
  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDarkMode(html.classList.contains('dark'))
    })
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    setIsDarkMode(html.classList.contains('dark'))
    return () => observer.disconnect()
  }, [])

  const toggleDark = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [currentPath])

  // Prevent body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/restoration', label: 'Our Work' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) =>
    path === '/' ? currentPath === '/' : currentPath.startsWith(path)

  const navBg = scrolled
    ? 'bg-background/96 backdrop-blur-2xl border-b border-border/60 shadow-[0_2px_24px_rgba(0,0,0,0.06)]'
    : 'bg-transparent border-b border-transparent'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[70px] gap-4">

            {/* ── Logo + Brand ── */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 group"
              aria-label="ICRA – Home"
            >
              {/* Logo image with SVG fallback */}
              <div className="relative flex-shrink-0">
                {!logoError ? (
                  <img
                    src="/images/logo_icra.png"
                    alt="ICRA Logo"
                    className="h-10 w-10 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ICRAEmblem className="w-7 h-7 text-primary-foreground" />
                  </div>
                )}
              </div>

              {/* Text brand – full on lg, abbreviated on sm */}
              <div className="flex flex-col leading-none">
                <span className="hidden lg:block text-[13px] font-bold tracking-tight text-foreground leading-snug">
                  Institute of Climate Restoration
                </span>
                <span className="hidden lg:block text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
                  for Africa
                </span>
                <span className="block lg:hidden text-[15px] font-extrabold tracking-tight text-foreground">
                  ICRA
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                      ${active
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }
                    `}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-primary" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-1.5 shrink-0">
              {/* Theme toggle */}
              <button
                onClick={toggleDark}
                className="h-9 w-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode
                  ? <Sun className="w-[17px] h-[17px]" />
                  : <Moon className="w-[17px] h-[17px]" />
                }
              </button>

              {/* CTA */}
              <Button
                size="sm"
                className="hidden sm:flex h-9 px-5 rounded-full font-semibold text-sm shadow-sm"
                asChild
              >
                <Link to="/contact">Get Involved</Link>
              </Button>

              {/* Hamburger – mobile only */}
              <button
                className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in panel from right */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-background border-l border-border/60 shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-5 h-[70px] border-b border-border/60 shrink-0">
            <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              {!logoError ? (
                <img
                  src="/images/logo_icra.png"
                  alt="ICRA"
                  className="h-8 w-8 object-contain rounded-lg"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <ICRAEmblem className="w-5 h-5 text-primary-foreground" />
                </div>
              )}
              <span className="font-bold text-sm">ICRA</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col p-4 gap-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted/60'
                }`}
              >
                {isActive(item.path) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                )}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Panel footer */}
          <div className="p-5 border-t border-border/60 space-y-2 shrink-0">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full h-11 px-4 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Involved
            </Link>
            <button
              onClick={toggleDark}
              className="flex items-center justify-center gap-2 w-full h-10 px-4 text-sm font-medium rounded-xl text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>

      {/* Spacer below fixed nav */}
      <div className="h-[70px]" />
    </>
  )
}

export default Navbar
