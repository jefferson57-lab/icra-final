import React from 'react'
import { motion } from 'framer-motion'
import { Button, Card, CardContent, Container, Badge } from '@blinkdotnew/ui'
import { ArrowRight, Leaf, Droplets, Sprout, BarChart3, TreePine, Users2 } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
}

const priorityAreas = [
  {
    title: 'Sustainable Agriculture',
    description: 'Regenerative farming techniques that restore soil health and increase yields for African smallholder farmers.',
    icon: <Sprout className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Reforestation & Biodiversity',
    description: 'Scientific approaches to restoring native forests and protecting unique African wildlife corridors.',
    icon: <Leaf className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Water Resource Management',
    description: 'Innovative water harvesting and conservation methods to combat drought and ensure community resilience.',
    icon: <Droplets className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1504871048946-f1c1bb1fa0ce?auto=format&fit=crop&q=80&w=800',
  },
]

const stats = [
  { value: '2.5M+', label: 'Trees Planted', icon: <TreePine className="w-4 h-4" /> },
  { value: '18', label: 'African Countries', icon: <Leaf className="w-4 h-4" /> },
  { value: '50k+', label: 'Community Members', icon: <Users2 className="w-4 h-4" /> },
  { value: '15yr+', label: 'Restoration Impact', icon: <BarChart3 className="w-4 h-4" /> },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=85&w=1920"
            alt="African savanna landscape"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/65 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />
          {/* Subtle green primary tint at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>

        <Container className="relative z-10 py-24">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 py-1.5 px-4 text-sm font-semibold border border-primary/40 bg-primary/15 text-primary backdrop-blur-sm rounded-full">
                Pioneering Climate Restoration in Africa
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6"
            >
              Science-Driven{' '}
              <span className="text-primary italic font-serif">Climate Restoration</span>{' '}
              for Africa
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-2xl"
            >
              ICRA bridges the gap between scientific research and community-led action —
              restoring African ecosystems and securing a sustainable future through citizen
              science and strategic partnerships.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-13 text-base font-semibold shadow-xl shadow-primary/20"
                asChild
              >
                <Link to="/restoration">
                  Explore Our Work <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-13 text-base font-semibold border-2 border-white/35 text-white bg-white/8 backdrop-blur-sm hover:bg-white/18 hover:border-white/50"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Floating stats panel — desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-10 right-6 lg:right-16 hidden lg:grid grid-cols-2 gap-px bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-7 py-4 bg-slate-950/55 hover:bg-slate-950/70 transition-colors"
            >
              <div className="flex items-center gap-1.5 mb-1 text-primary/70">
                {s.icon}
              </div>
              <div className="text-2xl font-extrabold text-white">{s.value}</div>
              <div className="text-[10px] font-semibold text-white/45 uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 hidden lg:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ── Mission ── */}
      <section className="relative py-24 overflow-hidden">
        {/* Strong background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=75&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/95" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Mission</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                A Thriving African Continent
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our vision is an Africa where restored ecosystems support resilient communities,
                vibrant biodiversity, and sustainable economic growth. Through citizen science
                and strategic partnerships, we reverse environmental degradation at scale.
              </p>

              {/* Mobile stats */}
              <div className="grid grid-cols-2 gap-4 lg:hidden mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl bg-primary/5 border border-primary/15">
                    <div className="text-2xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <Button className="rounded-full px-7 h-12 font-semibold" asChild>
                <Link to="/restoration">
                  See Our Approach <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=1200"
                  alt="Restoration Work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating quote card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-background border border-border/80 p-6 rounded-2xl shadow-2xl max-w-[220px]"
              >
                <BarChart3 className="w-7 h-7 text-primary mb-3" />
                <p className="font-semibold text-sm leading-snug italic font-serif">
                  "Empowering local communities with scientific tools."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Priority Areas ── */}
      <section className="relative py-24 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=50&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.07]"
          />
          <div className="absolute inset-0 bg-background/97" />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Focus</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 font-serif">Priority Restoration Areas</h2>
            <p className="text-lg text-muted-foreground">
              We target the most critical ecosystems where restoration has the highest impact
              on climate and communities.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {priorityAreas.map((area, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-card overflow-hidden rounded-3xl">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-2xl text-primary shadow-sm">
                      {area.icon}
                    </div>
                  </div>
                  <CardContent className="p-7">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-5">{area.description}</p>
                    <Button variant="link" className="p-0 text-primary h-auto font-semibold group/link" asChild>
                      <Link to="/restoration">
                        Learn more
                        <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Partners / Trust strip ── */}
      <section className="relative py-14 overflow-hidden border-y border-border/60">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=40&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.04]"
          />
        </div>
        <Container className="relative z-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-8">
            Trusted Partnerships & Affiliations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {['The Nature Conservancy', 'Masinde Muliro University', 'WWANC', 'River Yala Water Fund', 'Pan-African Climate Hub'].map((name) => (
              <div key={name} className="text-sm font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default">
                {name}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Impact CTA banner ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504871048946-f1c1bb1fa0ce?auto=format&fit=crop&q=80&w=1920"
            alt="African community"
            className="w-full h-full object-cover"
          />
          {/* Deep primary overlay with texture */}
          <div className="absolute inset-0 bg-primary/88" />
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px)',
          }} />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55 mb-4">Join the Movement</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Ready to Restore Africa, Together?
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Whether you're a researcher, community leader, or organization — there's a place
              for you in ICRA's mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-13 text-base font-semibold bg-white text-primary hover:bg-white/92 shadow-xl shadow-black/20"
                asChild
              >
                <Link to="/contact">Partner with ICRA</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-13 text-base font-semibold border-2 border-white/35 text-white bg-white/10 hover:bg-white/20 hover:border-white/50"
                asChild
              >
                <Link to="/about">Our Approach</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}
