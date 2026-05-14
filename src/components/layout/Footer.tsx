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
    { path: '/partner', label: 'Partner With Us' },
  ]

  const socialLinks = [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
  ]

  return (
    <footer className="bg-stone-950 text-white">
      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center">
                <span className="text-sm font-display font-bold">IC</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold">ICRA</p>
                <p className="text-xs uppercase tracking-[0.28em] text-earth-300">Institute of Climate Restoration</p>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Restoring Africa’s climate through science, community action, and strategic partnerships.
              Active in 18 countries across the continent.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500 mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-stone-300">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500 mb-5">Contact</p>
            <div className="space-y-4 text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-earth-300 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Nairobi, Kenya</p>
                  <p className="text-stone-400">ICAD Centre — climate restoration hub</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-earth-300 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">+254 (0) 725 216 292</p>
                  <p className="text-stone-400">Mon–Fri, 9am–5pm EAT</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-earth-300 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">climaterestorationafrica@gmail.com</p>
                  <p className="text-stone-400">Partnership inquiries</p>
                </div>
              </div>
            </div>
          </div>

          <div>
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
          </div>
        </div>

        <div className="mt-16 border-t border-stone-800 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-sm text-stone-400">
          <div className="space-y-2">
            <p>© {currentYear} ICRA. All rights reserved.</p>
          </div>
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