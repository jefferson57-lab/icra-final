import React, { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react'

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [currentPath])

  // Update page title based on route
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'ICRA | Climate Restoration Across Africa',
      '/about': 'About ICRA | Pan-African Climate Restoration',
      '/partner': 'Partner With Us | ICRA',
      '/restoration': 'Our Research | ICRA',
      '/team': 'Our Team | ICRA',
      '/contact': 'Partner With Us | ICRA',
    }

    const matchedPath = Object.keys(titles).find((path) =>
      path === '/' ? currentPath === '/' : currentPath.startsWith(path)
    )

    document.title = titles[matchedPath || '/'] || 'ICRA | Climate Restoration Across Africa'
  }, [currentPath])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/restoration', label: 'Our Work' },
    { path: '/team', label: 'Team' },
  ]

  const isActive = (path) => (path === '/' ? currentPath === '/' : currentPath.startsWith(path))

  const navBgClass = 'bg-stone-50 dark:bg-stone-950 border-b border-stone-200/70 dark:border-stone-800/70 shadow-soft'

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`} id="main-nav">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
          {/* ── LOGO + BRAND ── */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
              <span className="text-white font-display font-bold text-sm">IC</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-stone-900 group-hover:text-brand-600 transition-colors hidden sm:inline">
              ICRA
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    active
                      ? 'text-brand-600 font-semibold'
                      : 'text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-50'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-brand-500 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* ── RIGHT SECTION ── */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg border border-stone-200 hover:bg-stone-100 transition-colors hidden sm:block"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA Button — Partner With Us */}
            <Link
              to="/partner"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-white font-semibold text-sm hover:bg-brand-600 transition-all duration-200 shadow-soft hover:shadow-card hover:-translate-y-px group"
            >
              Partner With Us
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200 px-6 py-6 space-y-4 mt-[76px]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-base font-medium text-stone-900 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/partner"
            className="block mt-6 px-5 py-2.5 rounded-xl bg-brand-500 text-white font-semibold text-sm text-center hover:bg-brand-600 transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      )}

      {/* Spacer */}
      <div className="h-18" />
    </>
  )
}

export default Navbar