import React, { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Button } from '@blinkdotnew/ui'
import { Moon, Sun, Menu, X } from 'lucide-react'

// ── ICRA SVG Emblem ─────────────────────────────────────────────────────────
function ICRAEmblem({ className = 'w-10 h-10' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path
        d="M8 28 C10 22 14 18 20 17 C26 18 30 22 32 28"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.5"
      />
      <line x1="20" y1="28" x2="20" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="12" r="6" fill="currentColor" opacity="0.85" />
      <circle cx="15" cy="15" r="4" fill="currentColor" opacity="0.65" />
      <circle cx="25" cy="15" r="4" fill="currentColor" opacity="0.65" />
    </svg>
  )
}

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  // Theme
  useEffect(() => {
    const html = document.documentElement
    const savedTheme = localStorage.getItem('icra-theme')
    if (savedTheme === 'dark') html.classList.add('dark')
    else html.classList.remove('dark')

    setIsDarkMode(html.classList.contains('dark'))

    const observer = new MutationObserver(() => {
      const dark = html.classList.contains('dark')
      setIsDarkMode(dark)
      localStorage.setItem('icra-theme', dark ? 'dark' : 'light')
    })

    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const toggleDark = () => {
    const html = document.documentElement
    const dark = html.classList.toggle('dark')
    localStorage.setItem('icra-theme', dark ? 'dark' : 'light')
    setIsDarkMode(dark)
  }

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [currentPath])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/restoration', label: 'Our Work' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) =>
    path === '/' ? currentPath === '/' : currentPath.startsWith(path)

  const navBg = scrolled
    ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm'
    : 'bg-transparent'

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[76px]">

            {/* ── LOGO + BRAND ── */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
                {!logoError ? (
                  <img
                    src="/images/logo_icra.png"
                    alt="ICRA Logo"
                    className="h-full w-full object-contain p-1 transition-transform group-hover:scale-105"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <ICRAEmblem className="w-10 h-10 text-primary" />
                )}
              </div>

              <div className="flex flex-col leading-tight max-w-[260px]">
                <span className="text-sm md:text-base font-semibold text-foreground leading-snug">
                  Institute of Climate Restoration
                </span>
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-medium">
                  for Africa
                </span>
              </div>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative text-sm font-medium transition ${
                      active
                        ? 'text-primary'
                        : isDarkMode
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-700 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-1.5 h-1.5 bg-primary rounded-full" />
                    )}
                  </Link>
                )
              })}

              {/* Theme toggle */}
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg border transition"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* CTA */}
              <Button className="h-10 px-6 rounded-full font-semibold shadow-md" asChild>
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>

            {/* ── MOBILE ── */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleDark} className="p-2">
                {isDarkMode ? <Sun /> : <Moon />}
              </button>

              <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-base"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Spacer */}
      <div className="h-[76px]" />
    </>
  )
}

export default Navbar