import React, { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react'

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(true)

  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  // ── Theme ──────────────────────────────────────────────────────────────────
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

  // ── Close mobile menu on route change ─────────────────────────────────────
  useEffect(() => { setMobileOpen(false) }, [currentPath])

  // ── Page title per route ───────────────────────────────────────────────────
  useEffect(() => {
    const titles: Record<string, string> = {
      '/':            'ICRA | Climate Restoration Across Africa',
      '/about':       'About ICRA | Pan-African Climate Restoration',
      '/partner':     'Partner With Us | ICRA',
      '/restoration': 'Our Research | ICRA',
      '/team':        'Our Team | ICRA',
      '/membership':  'Membership | ICRA Africa',
      '/contact':     'Partner With Us | ICRA',
    }
    const matchedPath = Object.keys(titles).find((p) =>
      p === '/' ? currentPath === '/' : currentPath.startsWith(p)
    )
    document.title = titles[matchedPath || '/'] || 'ICRA | Climate Restoration Across Africa'
  }, [currentPath])

  // ── Nav items ──────────────────────────────────────────────────────────────
  const navItems = [
    { path: '/',            label: 'Home'       },
    { path: '/about',       label: 'About'      },
    { path: '/restoration', label: 'Our Work'   },
    { path: '/team',        label: 'Team'       },
    { path: '/membership',  label: 'Membership' },
  ]

  const isActive = (path: string) =>
    path === '/' ? currentPath === '/' : currentPath.startsWith(path)

  return (
    <>
      {/* Nav bar height raised to 88px to give the larger logo room to breathe */}
      <header
        id="main-nav"
        className="fixed top-0 w-full z-50 bg-stone-50 dark:bg-stone-950 border-b border-stone-200/70 dark:border-stone-800/70 shadow-soft transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[88px] flex items-center justify-between">

          {/* ── LOGO ─────────────────────────────────────────────────────── */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">

            {logoLoaded ? (
              <img
                src="/images/logo_icra.png"
                alt="ICRA — Institute for Climate Restoration Africa"
                // h-16 = 64px — large and clearly readable inside the 88px nav
                // w-auto preserves the logo's natural aspect ratio (no stretching)
                // dark:invert flips a dark/coloured logo to white on dark backgrounds
                className="h-16 w-auto object-contain
                           dark:invert dark:brightness-90
                           transition-transform duration-200 group-hover:scale-105"
                onError={() => setLogoLoaded(false)}
                loading="eager"
                decoding="async"
              />
            ) : (
              /* Fallback monogram — only shown if logo_icra.png fails to load */
              <div className="h-16 w-16 rounded-xl bg-brand-500 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                <span className="text-white font-display font-bold text-lg select-none">IC</span>
              </div>
            )}

            {/* Wordmark — shown beside the logo on sm+ screens */}
            <span className="font-display font-bold text-xl tracking-tight text-stone-900 dark:text-stone-50 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors hidden sm:inline">
              ICRA
            </span>
          </Link>

          {/* ── DESKTOP NAV ──────────────────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    active
                      ? 'text-brand-600 dark:text-brand-400 font-semibold'
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

          {/* ── RIGHT ACTIONS ─────────────────────────────────────────────── */}
          <div className="flex items-center gap-3">

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors hidden sm:flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {isDarkMode
                ? <Sun  className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                : <Moon className="w-4 h-4 text-stone-500" />
              }
            </button>

            {/* Primary CTA */}
            <Link
              to="/partner"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-white font-semibold text-sm hover:bg-brand-600 transition-all duration-200 shadow-soft hover:shadow-card hover:-translate-y-px group"
            >
              Partner With Us
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen
                ? <X    className="w-5 h-5 text-stone-700 dark:text-stone-300" />
                : <Menu className="w-5 h-5 text-stone-700 dark:text-stone-300" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ───────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[88px] left-0 right-0 z-40 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 px-6 py-6 space-y-1 shadow-card">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-semibold'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-50'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile dark mode toggle */}
          <button
            onClick={toggleDark}
            className="w-full flex items-center gap-2 px-3 py-3 rounded-xl text-base font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {isDarkMode ? 'Light mode' : 'Dark mode'}
          </button>

          <Link
            to="/partner"
            className="flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-xl bg-brand-500 text-white font-semibold text-sm text-center hover:bg-brand-600 transition-colors"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Spacer — must match the new nav height exactly */}
      <div className="h-[88px]" />
    </>
  )
}

export default Navbar