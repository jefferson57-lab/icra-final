import React from 'react'
import { motion } from 'framer-motion'
import { Container, Card, CardContent, Badge, Button } from '@blinkdotnew/ui'
import { BookOpen, Database, Globe, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

/* ─── Animation variants ─────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// ✅ initial: {} — NOT initial: { opacity: 0 } which hides everything permanently
const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
}

/* ─── Data ───────────────────────────────────────────────────────── */
const programmes = [
  {
    n: 1,
    abbr: 'PCRI',
    title: 'Pan-African Climate Restoration Initiative',
    desc: 'A flagship continental Programme driving large-scale ecosystem restoration, climate resilience, and community adaptation across Africa.',
    label: 'Focus',
    points: ['Landscape and watershed restoration', 'Nature-based solutions', 'Climate-resilient livelihoods'],
    tag: 'Multi-country implementation',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=70&w=800',
  },
  {
    n: 2,
    abbr: 'AWCRP',
    title: 'Africa Water Security & Climate Resilience Programme',
    desc: 'Focused on integrated water resources management in climate-vulnerable regions.',
    label: 'Focus',
    points: ['Watershed restoration', 'Flood & drought resilience', 'Climate-smart water infrastructure', 'Basin-level governance (e.g., Lake Victoria)'],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=70&w=800',
  },
  {
    n: 3,
    abbr: 'CCIH',
    title: 'Community Climate Innovation Hubs Network',
    desc: 'A continent-wide network of decentralized hubs serving as implementation, research, and training nodes.',
    label: 'Functions',
    points: ['Citizen science', 'Local climate solutions', 'Training & capacity building', 'Data generation'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=70&w=800',
  },
  {
    n: 4,
    abbr: 'ACLFP',
    title: 'African Climate Leadership & Fellowship Programme',
    desc: 'Developing the next generation of African climate leaders and practitioners.',
    label: 'Components',
    points: ['Fellowships', 'Practitioner training', 'Youth & women leadership programmes'],
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=70&w=800',
  },
  {
    n: 5,
    abbr: 'CDPK',
    title: 'Climate Data, Policy & Knowledge Platform',
    desc: 'A platform that translates community-generated data into policy and investment decisions.',
    label: 'Focus',
    points: ['Climate data systems', 'Policy advisory', 'Knowledge products'],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=70&w=800',
  },
]

const researchAreas = [
  {
    title: 'Community-Led Monitoring',
    description: 'Empowering local communities to monitor ecosystem health using citizen science tools and traditional ecological knowledge.',
    icon: <Database className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?auto=format&fit=crop&q=60&w=800',
  },
  {
    title: 'Scientific Research Partnerships',
    description: 'Collaborating with universities and research institutions to develop evidence-based restoration strategies.',
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=60&w=800',
  },
  {
    title: 'Capacity Building',
    description: 'Training community members in scientific methods, data collection, and restoration techniques.',
    icon: <Globe className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=60&w=800',
  },
  {
    title: 'Policy Advocacy',
    description: 'Influencing environmental policies through data-driven advocacy and community voices.',
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=60&w=800',
  },
]

const steps = [
  { title: 'Empower', desc: 'Equip local communities with the scientific tools and knowledge to take ownership of their environments.' },
  { title: 'Monitor', desc: 'Deploy a decentralized network of citizen scientists to collect accurate, ground-level ecosystem data.' },
  { title: 'Restore', desc: 'Implement scientifically-proven, climate-resilient restoration techniques tailored to each landscape.' },
  { title: 'Scale', desc: 'Share successful models across regions to create a continent-wide network of restored ecosystems.' },
]

/* ─── Page ───────────────────────────────────────────────────────── */
export default function RestorationPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="images/gradient.jpg"
            alt="African landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/68 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
        </div>
        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-5 py-1.5 px-4 text-sm font-semibold border border-primary/40 bg-primary/15 text-primary backdrop-blur-sm rounded-full">
                Our Programmes
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6"
            >
              Flagship Programmes Driving Africa's Climate Future
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
            >
              Five integrated programmes spanning ecosystem restoration, water security,
                  community innovation, climate leadership, and data-driven policy — delivered
                  across the African continent.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── Flagship Programmes ── */}
      <section className="relative overflow-hidden">

        {/* Cinematic intro banner */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1920"
            alt="ICRA Flagship Programmes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <Container className="pb-14 md:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                  Flagship Programmes
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight mb-4">
                  Where Our Work Takes Shape
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  Five integrated programmes spanning ecosystem restoration, water security,
                  community innovation, climate leadership, and data-driven policy — delivered
                  across the African continent.
                </p>
              </motion.div>
            </Container>
          </div>

          <div className="absolute top-8 right-8 md:top-12 md:right-12 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-xl shadow-primary/30">
            <div className="text-3xl font-extrabold leading-none">5</div>
            <div className="text-[10px] uppercase tracking-widest font-bold leading-none mt-1 opacity-80">
              Programmes
            </div>
          </div>
        </div>

        {/* Programme cards grid */}
<div
  className="relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/gradient.jpg')" }}
>
  {/* Optional overlay for better readability */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-950/30 to-transparent pointer-events-none z-10" />

  <Container className="py-20 relative z-20">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {programmes.map(({ n, abbr, title, desc, label, points, tag, image }) => (
        <motion.div
          key={n}
          variants={fadeUp}
          className={`group relative rounded-3xl overflow-hidden border border-border/60 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 flex flex-col
            ${n === 5 ? 'md:col-span-2 xl:col-span-1' : ''}`}
        >
          <div className="relative h-44 overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wide">
              {abbr}
            </div>
            <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-bold text-sm">
              {n}
            </div>
          </div>
          <div className="flex flex-col flex-1 p-6 bg-card">
            <h3 className="font-bold text-base mb-2 leading-snug">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{desc}</p>
            <div className="mt-auto pt-4 border-t border-border/50">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                {label}
              </p>
              <ul className="space-y-1.5">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              {tag && (
                <span className="inline-block mt-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {tag}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Container>
</div>
      </section>

      {/* ── Research Areas ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=70&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-card/93" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Focus Areas</p>
            <h2 className="text-4xl font-bold mb-4 font-serif">Deep Research, Bold Action</h2>
            <p className="text-muted-foreground">
              We focus on the intersections where science, community, and policy meet to create lasting impact.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {researchAreas.map((area, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full group hover:shadow-xl transition-all duration-500 rounded-3xl border bg-background/80 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
                  </div>
                  <CardContent className="p-8 -mt-6 relative">
                    <div className="p-3 bg-primary/10 rounded-2xl w-fit mb-5 group-hover:bg-primary group-hover:[&>*]:text-primary-foreground transition-colors duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Restoration Journey ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=50&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.04]"
          />
          <div className="absolute inset-0 bg-background/98" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">The Process</p>
            <h2 className="text-4xl font-bold mb-4 font-serif">Our Restoration Journey</h2>
            <p className="text-muted-foreground">A clear, four-step path to ecosystem restoration and community empowerment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10" />
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl mb-5 shadow-lg shadow-primary/25 ring-8 ring-background relative z-10">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Impact stats ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1920"
            alt="African forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/88" />
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px)',
          }} />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-14 font-serif text-center">Our Collective Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { val: '2.5M+', lab: 'Trees Planted' },
                { val: '18', lab: 'Countries' },
                { val: '50k+', lab: 'Community Members' },
                { val: '15yr+', lab: 'Restoration Impact' },
              ].map(({ val, lab }) => (
                <div key={lab} className="flex flex-col gap-2">
                  <div className="text-4xl md:text-5xl font-extrabold text-white">{val}</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/55">{lab}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=50&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-card/97" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-serif">Start Your Restoration Project</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Are you a local community leader or environmental organization looking to
              implement a science-driven restoration project? We can help.
            </p>
            <Button size="lg" className="rounded-full px-10 h-13 font-semibold shadow-lg" asChild>
              <Link to="/contact">
                Contact Our Team <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

    </div>
  )
}