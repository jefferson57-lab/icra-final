import React, { useState, useEffect } from 'react'
import { ArrowRight, Leaf, Droplets, Sprout, BarChart3, TreePine, Users2 } from 'lucide-react'

// ── Animation hook (replaces framer-motion) ──────────────────────────────────
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

// Wrapper div that fades up when it enters the viewport
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

// ── Data ─────────────────────────────────────────────────────────────────────
const priorityAreas = [
  {
    title: 'Sustainable Agriculture',
    description: 'Regenerative farming techniques that restore soil health and increase yields for African smallholder farmers.',
    icon: <Sprout className="w-6 h-6" />,
    image: '/images/image_6.jpg',
  },
  {
    title: 'Reforestation & Biodiversity',
    description: 'Scientific approaches to restoring native forests and protecting unique African wildlife corridors.',
    icon: <Leaf className="w-6 h-6" />,
    image: '/images/image_1.jpg',
  },
  {
    title: 'Water Resource Management',
    description: 'Innovative water harvesting and conservation methods to combat drought and ensure community resilience.',
    icon: <Droplets className="w-6 h-6" />,
    image: '/images/image_5.jpg',
  },
]

const stats = [
  { value: '2.5M+', label: 'Trees Planted',       icon: <TreePine className="w-4 h-4" /> },
  { value: '18',    label: 'African Countries',    icon: <Leaf     className="w-4 h-4" /> },
  { value: '50k+',  label: 'Community Members',    icon: <Users2   className="w-4 h-4" /> },
  { value: '15yr+', label: 'Restoration Impact',   icon: <BarChart3 className="w-4 h-4" /> },
]

const partners = [
  'The Nature Conservancy',
  'Masinde Muliro University',
  'WWANC',
  'River Yala Water Fund',
  'Pan-African Climate Hub',
]

// ── Reusable primitives ───────────────────────────────────────────────────────
const Overline = ({ children }) => (
  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#52B788] mb-3">{children}</p>
)

const PrimaryBtn = ({ children, onClick, white = false, outline = false }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${
      white
        ? 'bg-white text-[#2D6A4F] hover:bg-white/92 shadow-xl shadow-black/20'
        : outline
        ? 'border-2 border-white/35 text-white bg-white/8 backdrop-blur-sm hover:bg-white/18 hover:border-white/50'
        : 'bg-[#52B788] text-white shadow-xl shadow-[#52B788]/30 hover:bg-[#2D6A4F]'
    }`}
  >
    {children}
  </button>
)

// ── Main component ────────────────────────────────────────────────────────────
export default function HomePage({ onNavigate }) {
  // hero fade-in
  const h1 = useFadeIn(100)
  const h2 = useFadeIn(250)
  const h3 = useFadeIn(400)
  const h4 = useFadeIn(600)
  const h5 = useFadeIn(800)

  const nav = (page) => onNavigate?.(page)

  return (
    <div className="flex flex-col font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image_3.jpg"
            alt="African savanna landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/65 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#52B788]/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full pt-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              style={{ opacity: h1 ? 1 : 0, transform: h1 ? 'translateY(0)' : 'translateY(20px)', transition: 'all .6s ease' }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 text-sm font-semibold border border-[#52B788]/40 bg-[#52B788]/15 text-[#52B788] backdrop-blur-sm rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] animate-pulse" />
                Community-Led Climate Restoration
              </span>
            </div>

            {/* Heading */}
            <div className="bg-black/45 backdrop-blur-sm rounded-2xl p-6" style={{ opacity: h2 ? 1 : 0, transform: h2 ? 'translateY(0)' : 'translateY(24px)', transition: 'all .65s ease' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6">
                Africa's Leading Platform for{' '}
                <span className="text-[#52B788] italic" style={{ fontFamily: 'Georgia, serif' }}>Climate Restoration</span>
              </h1>
            </div>

            {/* Body */}
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-6 mt-4" style={{ opacity: h3 ? 1 : 0, transform: h3 ? 'translateY(0)' : 'translateY(24px)', transition: 'all .65s ease' }}>
              <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-2xl">
                ICRA is a continental implementation and knowledge platform that designs, tests, and
                scales community-driven climate restoration solutions. We integrate implementation,
                capacity building, policy engagement, and data systems into scalable programs
                delivering measurable impact.
              </p>
            </div>

            {/* Buttons */}
            <div
              style={{ opacity: h4 ? 1 : 0, transform: h4 ? 'translateY(0)' : 'translateY(20px)', transition: 'all .6s ease' }}
              className="flex flex-wrap gap-4"
            >
              <PrimaryBtn onClick={() => nav('work')}>
                Explore Our Work <ArrowRight className="w-4 h-4" />
              </PrimaryBtn>
              <PrimaryBtn outline onClick={() => nav('about')}>
                Learn More
              </PrimaryBtn>
            </div>
          </div>
        </div>

        {/* Floating stats panel */}
        <div
          style={{ opacity: h5 ? 1 : 0, transform: h5 ? 'translateY(0)' : 'translateY(20px)', transition: 'all .6s ease' }}
          className="absolute bottom-10 right-6 lg:right-16 hidden lg:grid grid-cols-2 gap-px bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-7 py-4 bg-slate-950/55 hover:bg-slate-950/70 transition-colors">
              <div className="flex items-center gap-1.5 mb-1 text-[#52B788]/70">{s.icon}</div>
              <div className="text-2xl font-extrabold text-white">{s.value}</div>
              <div className="text-[10px] font-semibold text-white uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <Overline>What We Do</Overline>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Bridging Science,{' '}
                <span className="text-[#52B788]">Communities & Action</span>
              </h2>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                As a Practo-Academia Platform, ICRA connects communities, governments, research
                institutions, and development partners to co-create and implement climate solutions
                grounded in local realities. We lead on-the-ground climate programs while advancing
                water security, ecosystem restoration, and community well-being across the continent.
              </p>

              {/* Mobile stats */}
              <div className="grid grid-cols-2 gap-4 lg:hidden mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl bg-[#52B788]/5 border border-[#52B788]/15">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-white uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <PrimaryBtn onClick={() => nav('work')}>
                See Our Approach <ArrowRight className="w-4 h-4" />
              </PrimaryBtn>
            </FadeUp>

            <FadeUp delay={150} className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/image_2.jpg"
                  alt="Restoration Work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-2xl max-w-[220px]">
                <BarChart3 className="w-7 h-7 text-[#52B788] mb-3" />
                <p className="font-semibold text-sm leading-snug italic" style={{ fontFamily: 'Georgia, serif' }}>
                  "Empowering local communities with scientific tools."
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PRIORITY AREAS ───────────────────────────────────────────────── */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <Overline>Our Focus</Overline>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Georgia, serif' }}>
              Priority Restoration Areas
            </h2>
            <p className="text-lg text-slate-500">
              We target the most critical ecosystems where restoration has the highest impact on
              climate and communities.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {priorityAreas.map((area, i) => (
              <FadeUp key={i} delay={i * 120}>
                <div className="h-full group hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden rounded-3xl border border-slate-100">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-2xl text-[#52B788] shadow-sm">
                      {area.icon}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#52B788] transition-colors duration-200">
                      {area.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm mb-5">{area.description}</p>
                    <button
                      onClick={() => nav('work')}
                      className="inline-flex items-center gap-1.5 text-[#52B788] font-semibold text-sm hover:gap-2.5 transition-all"
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
      <section className="relative py-14 border-y border-slate-200 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">
            Trusted Partnerships & Affiliations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {partners.map((name) => (
              <div
                key={name}
                className="text-sm font-semibold text-slate-300 hover:text-slate-500 transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image_5.jpg"
            alt="African community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2D6A4F]/88" />
          {/* Hatching texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 8px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55 mb-4">Join the Movement</p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Ready to Restore Africa, Together?
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Whether you're a researcher, community leader, or organization — there's a place for
              you in ICRA's mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PrimaryBtn white onClick={() => nav('contact')}>
                Partner with ICRA
              </PrimaryBtn>
              <PrimaryBtn outline onClick={() => nav('about')}>
                Our Approach
              </PrimaryBtn>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}