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
    setMobileOpen(false)
  }, [currentPath])

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

      {/* ── Mobile Navigation ── */}
      {mobileOpen && (
        <div className={`md:hidden border-t backdrop-blur-2xl transition-all duration-300 ${
          isDarkMode
            ? 'border-slate-800 bg-slate-900/95'
            : 'border-slate-200 bg-white/90'
        }`}>
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-all ${
                  isDarkMode
                    ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-[#2D6A4F]'
                } ${
                  isActive(item.path) ? 'text-[#52B788]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Spacer below fixed nav */}
      <div className="h-[70px]" />
    </>
  )
}

export default Navbar
