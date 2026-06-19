import React, { useState, useEffect } from 'react'
import { ArrowRight, Leaf, Droplets, Sprout, BarChart3, TreePine, Users2, Globe, Award, Calendar } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { SectionHeading } from '../components/ui/SectionHeading'

// ── Animation hook ────────────────────────────────────────────────────────────
function useFadeIn(delay = 0) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return visible
}

function useInView(ref) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
  return inView
}

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = React.useRef(null)
  const inView = useInView(ref)
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const priorityAreas = [
  {
    title: 'Sustainable Agriculture',
    description: 'Regenerative farming techniques that restore soil health and increase yields for African smallholder farmers.',
    icon: <Sprout className="w-6 h-6" />,
    image: '/images/action1.jpg',
  },
  {
    title: 'Reforestation & Biodiversity',
    description: 'Scientific approaches to restoring native forests and protecting unique African wildlife corridors.',
    icon: <Leaf className="w-6 h-6" />,
    image: '/images/community1.jpg',
  },
  {
    title: 'Water Resource Management',
    description: 'Innovative water harvesting and conservation methods to combat drought and ensure community resilience.',
    icon: <Droplets className="w-6 h-6" />,
    image: '/images/community2.jpg',
  },
]

const stats = [
  { value: '2.5M+', label: 'Trees Planted',      icon: <TreePine  className="w-4 h-4" /> },
  { value: '10+',   label: 'Climate Experts',     icon: <Leaf      className="w-4 h-4" /> },
  { value: '1500+', label: 'Community Members',   icon: <Users2    className="w-4 h-4" /> },
  { value: '10yr+', label: 'Restoration Impact',  icon: <BarChart3 className="w-4 h-4" /> },
]

const impactStats = [
  { value: '10+',    label: 'Partner Organizations',    icon: Globe  },
  { value: '50K+',  label: 'Hectares restored',   icon: Leaf   },
  { value: '2024', label: 'FOUNDED',       icon: Calendar },
  { value: '100%',   label: 'Locally-Led', icon: Award  },
]

const partners = [
  'The Nature Conservancy',
  'Masinde Muliro University',
  'WWANC',
  'River Yala Water Fund',
  'Pan-African Climate Hub',
]

// ── Reusable button ───────────────────────────────────────────────────────────
const PrimaryBtn = ({ children, onClick, white = false, outline = false }) => (
  <button
    onClick={onClick}
    className={`w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-200 ${
      white
        ? 'bg-white text-stone-900 hover:bg-stone-100 shadow-soft'
        : outline
        ? 'border border-white/25 text-white bg-white/10 backdrop-blur-sm hover:bg-white/15'
        : 'bg-brand-500 text-white hover:bg-brand-600 shadow-soft hover:-translate-y-0.5'
    }`}
  >
    {children}
  </button>
)

// ── Main component ────────────────────────────────────────────────────────────
export default function HomePage() {
  const h1 = useFadeIn(80)
  const h2 = useFadeIn(220)
  const h3 = useFadeIn(380)
  const h4 = useFadeIn(540)
  const h5 = useFadeIn(700)
  const h6 = useFadeIn(900)

  const navigate = useNavigate()

  const nav = (page) => {
    if (page === 'work')    navigate({ to: '/restoration' })
    else if (page === 'about')   navigate({ to: '/about' })
    else if (page === 'contact') navigate({ to: '/partner' })
    else if (page === 'partner') navigate({ to: '/partner' })
  }

  return (
    <div className="flex flex-col font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">

        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/16973544/pexels-photo-16973544.jpeg"
            alt="Sweeping African savannah at golden hour"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/45 to-stone-900/10" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(to top, rgba(250,249,247,1), transparent)',
              backgroundSize: '100% 35%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom',
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-24 w-full pt-32">
          <div className="max-w-3xl">

            {/* ── INSTITUTE NAME — the most important identity element ── */}
            {/*
              Placement rationale:
                • Sits ABOVE the headline as an authoritative identity stamp
                • Two-line treatment: acronym "ICRA" large + full name beneath
                  in letterspaced small caps — the classic editorial masthead pattern
                • Cormorant Garamond (display serif) gives it institutional weight
                  without feeling corporate; it reads like a journal or foundation
                • The full name is set at a comfortable reading size with generous
                  letter-spacing — wide tracking on all-caps text is a proven
                  typographic technique that communicates authority and permanence
                • Separated from the headline below by a thin earth-ochre rule —
                  a clear compositional break that anchors the brand before the
                  storytelling begins
            */}
            <div
              style={{
                opacity: h1 ? 1 : 0,
                transform: h1 ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.55s cubic-bezier(0.22,1,0.36,1)',
              }}
              className="mb-8"
            >
              {/* Acronym — large, bold, display serif */}
              <div className="flex items-baseline gap-4 mb-2">
                <span
                  className="font-display font-bold text-orange-500 leading-none"
                  style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)', letterSpacing: '-0.03em' }}
                >
                  Institute of Climate Restoration for Africa
                </span>
                {/* Thin vertical divider — editorial detail */}
                <span className="w-px self-stretch bg-white/25 mx-1" />
                {/* Est. year — small contextual label beside the acronym */}
                <span
                  className="font-body text-white/45 font-medium"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
                >
                
                </span>
              </div>

              {/* Full institute name — letterspaced small caps treatment */}
              <p
                className="font-display text-white font-semibold"
                style={{
                  fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  lineHeight: 1.5,
                }}
              >
                I C R A
              </p>

              {/* Earth-ochre rule — separates identity from narrative */}
              <div className="flex items-center gap-3 mt-5">
                <div className="h-px w-12 bg-orange-500" />
                <span
                  className="font-body text-orange-500 font-semibold"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
                >
                  Pan-African climate restoration
                </span>
              </div>
            </div>

            {/* ── MAIN HEADLINE ── */}
            <div
              style={{
                opacity: h2 ? 1 : 0,
                transform: h2 ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1)',
              }}
              className="mb-8"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-white">
                Restoring <span className="text-orange-500">Africa's</span> climate,<br />
                one community at a time
              </h1>
            </div>

            {/* ── SUBHEADLINE ── */}
            <div
              style={{
                opacity: h3 ? 1 : 0,
                transform: h3 ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1)',
              }}
              className="max-w-2xl mb-10"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/75 leading-relaxed">
                ICRA deploys science, citizen action, and strategic capital to restore degraded African ecosystems at scale. Your partnership directly funds measurable, lasting change across 18 countries.
              </p>
            </div>

            {/* ── CTA BUTTONS ── */}
            <div
              style={{
                opacity: h4 ? 1 : 0,
                transform: h4 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => navigate({ to: '/partner' })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-500 text-white font-bold text-base hover:bg-brand-600 transition-all duration-200 shadow-soft hover:-translate-y-0.5"
              >
                Become a Partner <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/25 text-white text-base font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                See Our Impact
              </button>
            </div>
          </div>
        </div>

        {/* ── FLOATING STAT CARD (bottom-right) ── */}
        <div
          style={{
            opacity: h6 ? 1 : 0,
            transform: h6 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1)',
          }}
          className="absolute bottom-10 right-6 lg:right-16 hidden lg:grid grid-cols-2 gap-px bg-white/10 border border-white/15 backdrop-blur-xl rounded-3xl overflow-hidden shadow-soft"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-7 py-4 bg-stone-950/75 hover:bg-stone-950/90 transition-colors">
              <div className="flex items-center gap-1.5 mb-1 text-orange-400/80">{s.icon}</div>
              <div className="text-2xl font-extrabold text-white">{s.value}</div>
              <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMPACT STATS ─────────────────────────────────────────────────── */}
      <section id="impact" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col items-center justify-center gap-3 mb-12">
            <div className="h-px w-10 bg-earth-400" />
            <span className="text-xs uppercase tracking-[0.28em] text-earth-400 font-semibold font-body">
              Our Impact
            </span>
            <div className="h-px w-10 bg-earth-400" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <FadeUp key={i} delay={i * 80}>
                  <div className="relative flex flex-col items-center text-center p-8 rounded-[28px] bg-white border border-stone-200 shadow-soft hover:shadow-card transition-shadow duration-300">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-50 rounded-bl-[28px] opacity-80" />
                    <Icon className="w-6 h-6 text-brand-500 mb-4 relative" />
                    <div className="font-display text-4xl font-bold text-brand-600 mb-2 relative">{stat.value}</div>
                    <div className="text-sm font-medium text-stone-500 relative">{stat.label}</div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <SectionHeading
                eyebrow="What We Do"
                title="Bridging science, communities and action"
                subtitle="ICRA connects governments, research institutions, and local communities to design and implement restoration solutions grounded in African realities."
              />
              <p className="font-body text-base text-stone-600 leading-relaxed mb-8">
                Our continental platform blends field implementation, policy engagement, research and data systems to deliver restoration at scale. Every project is co-designed to deliver climate and livelihoods impact.
              </p>
              <PrimaryBtn onClick={() => nav('work')}>
                See Our Approach <ArrowRight className="w-4 h-4" />
              </PrimaryBtn>
            </FadeUp>

            <FadeUp delay={150} className="relative">
              <div className="aspect-[4/5] rounded-[36px] overflow-hidden shadow-card">
                <img
                  src="/images/image_2.jpg"
                  alt="Restoration Work"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl border border-stone-200 shadow-soft p-6 max-w-[240px]">
                <BarChart3 className="w-7 h-7 text-brand-500 mb-3" />
                <p className="font-display text-base text-stone-900 leading-snug italic">
                  "Empowering local communities with scientific tools."
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PRIORITY AREAS ───────────────────────────────────────────────── */}
      <section className="relative py-24 bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading
              eyebrow="Our Focus"
              title="Priority restoration areas"
              subtitle="We target ecosystems where restoration delivers the greatest climate, biodiversity, and community value."
            />
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {priorityAreas.map((area, i) => (
              <FadeUp key={i} delay={i * 120}>
                <div className="group h-full overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-sm text-brand-600 shadow-sm">
                      {area.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-semibold mb-3 text-stone-900 transition-colors duration-200 group-hover:text-brand-600">
                      {area.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-500 mb-6">{area.description}</p>
                    <button
                      onClick={() => nav('work')}
                      className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS STRIP ───────────────────────────────────────────────── */}
      <section className="relative py-14 bg-stone-100 border-t border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500 mb-10 font-body">
            In collaboration with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {partners.map((name) => (
              <span
                key={name}
                className="font-display text-xl font-semibold text-stone-500 hover:text-stone-700 transition-colors duration-200"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=85"
            alt="Aerial view of African forest canopy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-950/65" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-earth-100 mb-4 font-body">
              Join the movement
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to restore Africa, together?
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Whether you're a researcher, community leader, or organisation — your partnership unlocks restoration at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PrimaryBtn onClick={() => nav('partner')}>Partner with ICRA</PrimaryBtn>
              <PrimaryBtn outline onClick={() => nav('about')}>Our Approach</PrimaryBtn>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}