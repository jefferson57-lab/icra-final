import { Link } from '@tanstack/react-router'
import { Container } from '@blinkdotnew/ui'
import { Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [logoLoaded, setLogoLoaded] = useState(true)

  const quickLinks = [
    { path: '/',            label: 'Home'           },
    { path: '/about',       label: 'About'          },
    { path: '/restoration', label: 'Our Work'       },
    { path: '/partner',     label: 'Partner With Us'},
  ]

  return (
    <footer className="bg-stone-950 text-white">
      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-4">

          {/* ── BRAND COLUMN ─────────────────────────────────────────────── */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">

              {/* Logo image — falls back to text monogram if file missing */}
              {logoLoaded ? (
                <img
                  src="/images/logo_icra.png"
                  alt="ICRA — Institute for Climate Restoration Africa"
                  // h-12 gives the logo a bit more presence in the footer
                  // brightness-90 softens the white inversion slightly on dark bg
                  // invert flips a dark logo to white — remove if logo is already white
                  className="h-12 w-auto object-contain invert brightness-90
                             transition-opacity duration-200 group-hover:opacity-80"
                  loading="lazy"
                  decoding="async"
                  onError={() => setLogoLoaded(false)}
                />
              ) : (
                /* Fallback monogram — only shown if logo_icra.png fails to load */
                <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-display font-bold select-none">IC</span>
                </div>
              )}

              {/* Wordmark + tagline */}
              <div>
                <p className="font-display text-lg font-semibold text-white leading-tight">
                  ICRA
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-earth-300 leading-tight">
                  Institute of Climate Restoration For Africa
                </p>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed">
              Restoring Africa's climate through science, community action, and strategic
              partnerships. Active in 18 countries across the continent.
            </p>
          </div>

          {/* ── EXPLORE ──────────────────────────────────────────────────── */}
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500 mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-stone-300">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT ──────────────────────────────────────────────────── */}
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500 mb-5">Contact</p>
            <div className="space-y-4 text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-earth-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Nairobi, Kenya</p>
                  <p className="text-stone-400">AICAD Centre — climate restoration hub</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-earth-300 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+254725216292" className="font-semibold text-white hover:text-earth-300 transition-colors">
                    +254 (0) 725 216 292
                  </a>
                  <p className="text-stone-400">Mon–Fri, 9am–5pm EAT</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-earth-300 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:climaterestorationafrica@gmail.com" className="font-semibold text-white hover:text-earth-300 transition-colors break-all">
                    climaterestorationafrica@gmail.com
                  </a>
                  <p className="text-stone-400">Partnership inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── LEGAL & TRUST ────────────────────────────────────────────── */}
          {/* <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500 mb-5">Legal & Trust</p>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>Registered NGO · Kenya</li>
              <li>Reg. No: <span className="text-white font-medium">[INSERT REG NUMBER]</span></li>
              <li>
                <a href="/annual-report.pdf" className="underline underline-offset-2 hover:text-white transition-colors">
                  Annual Report 2024
                </a>
              </li>
              <li>
                <a href="/financials.pdf" className="underline underline-offset-2 hover:text-white transition-colors">
                  Audited Accounts
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* ── BOTTOM BAR ───────────────────────────────────────────────────── */}
        <div className="mt-16 border-t border-stone-800 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-sm text-stone-400">
          <p>© {currentYear} ICRA. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer