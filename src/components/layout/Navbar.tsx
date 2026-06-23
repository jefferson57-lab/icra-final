import React, { useState, useEffect, useRef } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(true)

  // ── Scroll behaviour ─────────────────────────────────────────────────────
  // `scrolled`  -> background switches from transparent to solid/blurred
  // `hidden`    -> bar slides up out of view on scroll-down, returns on scroll-up
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

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

  // ── Scroll listener: transparent→solid + hide/reveal ──────────────────────
  useEffect(() => {
    lastScrollY.current = window.scrollY
    let ticking = false

    const SOLID_THRESHOLD = 24   // px scrolled before bg goes solid
    const HIDE_THRESHOLD = 96    // px scrolled before hide/reveal kicks in
    const DELTA = 6              // ignore tiny scroll jitter

    const update = () => {
      const y = window.scrollY
      setScrolled(y > SOLID_THRESHOLD)

      if (y < HIDE_THRESHOLD) {
        setHidden(false)
      } else if (y > lastScrollY.current + DELTA) {
        setHidden(true)   // scrolling down
      } else if (y < lastScrollY.current - DELTA) {
        setHidden(false)  // scrolling up
      }

      lastScrollY.current = y
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  // ── Mobile menu animation variants ────────────────────────────────────────
  const mobileListVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
  }
  const mobileItemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <>
      {/* Nav bar height raised to 88px to give the larger logo room to breathe */}
      <motion.header
        id="main-nav"
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
          scrolled
            ? 'bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-stone-200/70 dark:border-stone-800/70 shadow-soft'
            : 'bg-transparent border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[88px] flex items-center justify-between">

          {/* ── LOGO ─────────────────────────────────────────────────────── */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">

            {logoLoaded ? (
              <motion.img
                src="/images/logo_icra.png"
                alt="ICRA — Institute for Climate Restoration Africa"
                // h-16 = 64px — large and clearly readable inside the 88px nav
                // w-auto preserves the logo's natural aspect ratio (no stretching)
                // dark:invert flips a dark/coloured logo to white on dark backgrounds
                className="h-16 w-auto object-contain dark:invert dark:brightness-90"
                whileHover={{ scale: 1.08, rotate: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                onError={() => setLogoLoaded(false)}
                loading="eager"
                decoding="async"
              />
            ) : (
              /* Fallback monogram — only shown if logo_icra.png fails to load */
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.96 }}
                className="h-16 w-16 rounded-xl bg-brand-500 flex items-center justify-center flex-shrink-0"
              >
                <span className="text-white font-display font-bold text-lg select-none">IC</span>
              </motion.div>
            )}

            {/* Wordmark — shown beside the logo on sm+ screens */}
            <span className="font-display font-bold text-xl tracking-tight text-stone-900 dark:text-stone-50 transition-colors hidden sm:inline">
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
                  className={`text-sm font-medium transition-colors relative group py-2 ${
                    active
                      ? 'text-brand-600 dark:text-brand-400 font-semibold'
                      : 'text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-50'
                  }`}
                >
                  {item.label}

                  {/* Hover underline for non-active items */}
                  {!active && (
                    <span className="absolute -bottom-0.5 left-0 h-px bg-brand-500 w-0 group-hover:w-full transition-all duration-300" />
                  )}

                  {/* Animated circle indicator — glides between tabs as the active route changes */}
                  <span className="absolute -bottom-1.5 inset-x-0 flex justify-center pointer-events-none">
                    {active && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </span>
                </Link>
              )
            })}
          </nav>

          {/* ── RIGHT ACTIONS ─────────────────────────────────────────────── */}
          <div className="flex items-center gap-3">

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 active:scale-90 transition-all hidden sm:flex items-center justify-center overflow-hidden"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <Sun className="w-4 h-4 text-stone-400" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <Moon className="w-4 h-4 text-stone-500" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Primary CTA */}
            <Link to="/partner" className="hidden md:inline-flex">
              <motion.span
                whileHover={{ y: -2, boxShadow: '0 12px 24px -8px rgba(0,0,0,0.25)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-white font-semibold text-sm shadow-soft group"
              >
                Partner With Us
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </motion.span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 active:scale-90 transition-all overflow-hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex"
                  >
                    <X className="w-5 h-5 text-stone-700 dark:text-stone-300" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex"
                  >
                    <Menu className="w-5 h-5 text-stone-700 dark:text-stone-300" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE MENU ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden fixed top-[88px] left-0 right-0 z-40 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 px-6 py-6 shadow-card"
          >
            <motion.div
              variants={mobileListVariants}
              initial="hidden"
              animate="visible"
              className="space-y-1"
            >
              {navItems.map((item) => (
                <motion.div key={item.path} variants={mobileItemVariants}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-semibold'
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-50'
                    }`}
                  >
                    {isActive(item.path) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400" />
                    )}
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile dark mode toggle */}
              <motion.button
                variants={mobileItemVariants}
                onClick={toggleDark}
                className="w-full flex items-center gap-2 px-3 py-3 rounded-xl text-base font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {isDarkMode ? 'Light mode' : 'Dark mode'}
              </motion.button>

              <motion.div variants={mobileItemVariants}>
                <Link
                  to="/partner"
                  className="flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-xl bg-brand-500 text-white font-semibold text-sm text-center hover:bg-brand-600 transition-colors"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer — must match the nav height exactly */}
      <div className="h-[88px]" />
    </>
  )
}

export default Navbar