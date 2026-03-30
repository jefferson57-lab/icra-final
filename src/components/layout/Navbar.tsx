import React, { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Button } from '@blinkdotnew/ui'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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

  // Load preferred theme from localStorage on mount
  useEffect(() => {
    const html = document.documentElement
    const savedTheme = window.localStorage.getItem('icra-theme')
    if (savedTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    setIsDarkMode(html.classList.contains('dark'))

    const observer = new MutationObserver(() => {
      const dark = html.classList.contains('dark')
      setIsDarkMode(dark)
      window.localStorage.setItem('icra-theme', dark ? 'dark' : 'light')
    })
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const toggleDark = () => {
    const html = document.documentElement
    const darkMode = html.classList.toggle('dark')
    window.localStorage.setItem('icra-theme', darkMode ? 'dark' : 'light')
    setIsDarkMode(darkMode)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

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
                    className="h-16 w-16 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="h-16 w-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ICRAEmblem className="w-10 h-10 text-primary-foreground" />
                  </div>
                )}
              </div>

              {/* Text brand – larger on all screens */}
              <div className="flex flex-col leading-none">
                <span className="text-lg md:text-xl font-bold tracking-tight text-foreground leading-tight">
                  Institute of Climate Restoration
                </span>
                <span className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-primary">
                  for Africa
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      active
                        ? 'text-[#52B788]'
                        : isDarkMode
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-700 hover:text-[#2D6A4F]'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#52B788] to-[#2D6A4F] rounded-full" />
                    )}
                  </Link>
                )
              })}

              <button
                onClick={toggleDark}
                className={`p-2.5 rounded-xl transition-all duration-300 border ${
                  isDarkMode
                    ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400 border-slate-700'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-sm'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Button
                size="sm"
                className="hidden sm:flex h-9 px-5 rounded-full font-semibold text-sm shadow-sm"
                asChild
              >
                <Link to="/contact">Get Involved</Link>
              </Button>

              <Button
                size="sm"
                className="hidden sm:flex h-9 px-5 rounded-full font-semibold text-sm shadow-sm"
                asChild
              >
                <a href="/updated-profile-ICRA.pdf" download="ICRA-profile.pdf">Download Profile</a>
              </Button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDark}
                className={`p-2 rounded-lg transition-colors active:scale-95 ${
                  isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-white border border-slate-200 text-slate-700 shadow-sm'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                className={`p-2 rounded-lg transition-colors active:scale-95 ${
                  isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100 border border-slate-200'
                }`}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-down menu */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/60 shadow-2xl rounded-b-2xl overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
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
                  className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors active:scale-95"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col p-4 gap-1 overflow-y-auto max-h-[calc(100vh-140px)]">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-4 py-4 text-base font-semibold rounded-xl transition-all duration-200 active:scale-95 ${
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
                  className="flex items-center justify-center w-full h-12 px-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors active:scale-95"
                >
                  Get Involved
                </Link>
                <a
                  href="/updated-profile-ICRA.pdf"
                  download="ICRA-profile.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full h-12 px-4 text-base font-semibold rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors active:scale-95"
                >
                  Download Profile
                </a>
                <button
                  onClick={() => { toggleDark(); setMobileOpen(false); }}
                  className="flex items-center justify-center gap-2 w-full h-10 px-4 text-sm font-medium rounded-xl text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors active:scale-95"
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer below fixed nav */}
      <div className="h-[70px]" />
    </>
  )
}

export default Navbar
