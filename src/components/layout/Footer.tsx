import { Link } from '@tanstack/react-router'
import { Container } from '@blinkdotnew/ui'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

// Optional: reuse your emblem for fallback
function ICRAEmblem({ className = 'w-10 h-10' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M8 28 C10 22 14 18 20 17 C26 18 30 22 32 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
      <line x1="20" y1="28" x2="20" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="12" r="6" fill="currentColor" opacity="0.85"/>
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/restoration', label: 'Our Work' },
    { path: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
  ]

  return (
    <footer className="relative border-t border-border bg-background/95 backdrop-blur-xl">
      <Container className="py-16">

        {/* ── TOP GRID ── */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ── BRAND ── */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                <img
                  src="/images/logo_icra.png"
                  alt="ICRA Logo"
                  className="h-full w-full object-contain p-1"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <ICRAEmblem className="w-8 h-8 text-primary absolute" />
              </div>

              <div className="leading-tight">
                <p className="text-sm font-semibold">
                  Institute of Climate Restoration
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  for Africa
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Advancing climate restoration across Africa through research,
              innovation, and community-driven solutions.
            </p>
          </div>

          {/* ── QUICK LINKS ── */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-muted-foreground hover:text-primary transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── CONTACT ── */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <span>+254 725 216 292</span>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <span>climaterestorationafrica@gmail.com</span>
              </div>

              <p className="text-xs">Mon–Fri, 9am–5pm (EAT)</p>
            </div>
          </div>

          {/* ── SOCIAL ── */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm rounded-full border border-border hover:bg-muted transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="my-10 border-t border-border" />

        {/* ── BOTTOM ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Institute of Climate Restoration for Africa. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/" className="hover:text-primary transition">Privacy</Link>
            <Link to="/" className="hover:text-primary transition">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer