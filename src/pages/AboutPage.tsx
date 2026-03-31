import React from 'react'
import { motion } from 'framer-motion'
import { Container, Card, CardContent, Badge, Button } from '@blinkdotnew/ui'
import { Globe, Heart, Zap, Target, Eye, ArrowRight, Quote } from 'lucide-react'
import { Link } from '@tanstack/react-router'

/* ─── Animation variants ─────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
}

/* ─── Data ───────────────────────────────────────────────────────── */
const coreValues = [
  {
    title: 'Respect',
    description: 'Valuing indigenous knowledge and lived experience of local communities as equal to scientific expertise.',
    icon: <Heart className="w-6 h-6 text-primary" />,
    bg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=50&w=400',
  },
  {
    title: 'Understanding',
    description: 'Co-creating solutions grounded in local realities, cultures, and environmental contexts.',
    icon: <Globe className="w-6 h-6 text-primary" />,
    bg: 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=50&w=400',
  },
  {
    title: 'Cooperation',
    description: 'Building multi-level partnerships—with communities, governments, and institutions—for scale and collective impact.',
    icon: <Zap className="w-6 h-6 text-primary" />,
    bg: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=50&w=400',
  },
]

const pillars = [
  { n: 1, title: 'Scientific Validation', desc: 'Rigorous testing of restoration techniques across diverse African climates.' },
  { n: 2, title: 'Citizen Science Network', desc: "Training thousands of local 'Restoration Leads' to gather data and implement practices." },
  { n: 3, title: 'Policy Advocacy', desc: 'Translating ground-level success into national and regional policy changes.' },
  { n: 4, title: 'Sustainable Financing', desc: 'Connecting local projects with global climate finance through transparent monitoring.' },
]

const teamMembers = [
  {
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400',
    name: 'Dr. Stella Wanjala',
    role: 'Founder & Lead Researcher',
    desc: 'Over 25 years in community development and climate action. Pioneer of the River Yala Water Fund and co-founder of WWANC.',
  },
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    name: 'Dr. James Ochieng',
    role: 'Director of Field Programs',
    desc: 'Leads on-the-ground restoration initiatives across East Africa, specializing in agroforestry and soil rehabilitation.',
  },
  {
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400',
    name: 'Amara Diallo',
    role: 'Head of Citizen Science',
    desc: 'Designs and manages participatory research programs, training community members as frontline data collectors.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    name: 'Dr. Kofi Mensah',
    role: 'Climate Policy Advisor',
    desc: 'Bridges research and policy, working with African governments to embed restoration science into national climate plans.',
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    name: 'Fatima Al-Rashid',
    role: 'Water Security Lead',
    desc: 'Specialist in watershed management and blue carbon ecosystems, driving ICRA\'s water security portfolio across 10 countries.',
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    name: 'Samuel Kariuki',
    role: 'Community Partnerships Manager',
    desc: 'Cultivates and manages ICRA\'s network of community organizations, NGOs, and local government partners.',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    name: 'Dr. Nadia Kamau',
    role: 'Research & Data Systems',
    desc: 'Oversees ICRA\'s data infrastructure and impact measurement frameworks, ensuring scientific integrity across all programs.',
  },
]

/* ─── Page ───────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="images/about1.jpg" alt="African landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/72 to-slate-900/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div className="max-w-3xl" initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge className="mb-5 py-1.5 px-4 text-sm font-semibold border border-primary/40 bg-primary/15 text-primary backdrop-blur-sm rounded-full">
                About ICRA
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6"
            >
              Restoring Africa's Climate, One Community at a Time
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
              ICRA is Africa's premier hub for climate restoration, combining cutting-edge science with
              community-driven action to heal degraded landscapes and build resilient futures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=60&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 bg-background/98" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Mission */}
            <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl group">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=70&w=1200"
                  alt=""
                  className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                />
              </div>
              <div className="relative z-10 p-10 bg-primary/15 border border-primary/20 rounded-3xl h-full backdrop-blur-sm">
                <div className="p-3.5 bg-primary/20 rounded-2xl w-fit mb-7">
                  <Target className="w-9 h-9 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 font-serif text-foreground">Our Mission</h2>
                <p className="text-foreground leading-relaxed">
                  To empower African communities with scientific knowledge and tools to restore their
                  ecosystems, combat climate change, and build sustainable livelihoods.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl group">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=70&w=1200"
                  alt=""
                  className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                />
              </div>
              <div className="relative z-10 p-10 bg-secondary/60 border border-secondary rounded-3xl h-full">
                <div className="p-3.5 bg-accent/20 rounded-2xl w-fit mb-7">
                  <Eye className="w-9 h-9 text-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4 font-serif">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A thriving African continent where restored ecosystems support resilient communities
                  and sustainable development.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Model & Approach ─────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=65&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-card/95" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* Text + pillars */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Approach</p>
              <h2 className="text-4xl font-bold mb-5 font-serif">Community-Led Implementation</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our model is built on four pillars that create a self-sustaining cycle. We
                don't just plant trees — we build systems that ensure they survive, thrive,
                and generate lasting community benefit.
              </p>
              <div className="space-y-3">
                {pillars.map(({ n, title, desc }) => (
                  <div
                    key={n}
                    className="flex gap-4 p-5 rounded-2xl hover:bg-background/70 transition-colors border border-transparent hover:border-border/60 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      {n}
                    </div>
                    <div>
                      <h4 className="font-bold mb-0.5">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image — stretches to match pillar list height */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-border/60 h-full min-h-[520px]">
                <img src="images/topafrica.jpg" alt="Restoration Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/30">
                <div className="text-center text-primary-foreground">
                  <div className="text-xl font-extrabold leading-none">4</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold leading-none mt-0.5">Pillars</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=50&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">Our DNA</p>
            <h2 className="text-4xl font-bold mb-4 font-serif">Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide every project, partnership, and community initiative we lead.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {coreValues.map((v, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full group hover:shadow-xl transition-all duration-500 border rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={v.bg}
                      alt=""
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
                    />
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <div className="p-3 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:[&>*]:text-primary-foreground transition-colors duration-300">
                      {v.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Founder Leadership ───────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=70&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-card/96" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="/images/dr-stella.jpg"
                  alt="Dr. Stella Wanjala"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h4 className="text-2xl font-bold mb-1">Dr. Stella Wanjala</h4>
                  <p className="text-white/70 text-sm font-medium">Founder & Lead Researcher, ICRA</p>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 bg-background/90 border border-white/15 rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Leadership</p>
              <h2 className="text-4xl font-bold mb-6 font-serif text-foreground">Visionary Leadership</h2>
              <div className="relative pl-6 mb-7 border-l-4 border-primary/40">
                <Quote className="absolute -top-1 -left-2 w-5 h-5 text-primary/40" />
                <p className="text-xl text-foreground font-serif italic leading-relaxed">
                  "Our goal is not just to restore nature, but to restore hope for millions
                  of Africans who depend on these ecosystems."
                </p>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed text-sm">
                <p>
                  Dr. Stella Wanjala is a leading expert in climate change, environmental conservation,
                  gender, and community development, with over 15 years of experience at the intersection
                  of ecosystems, livelihoods, and community well-being. As Founder & Lead Researcher of
                  ICRA, she champions the integration of science, communities, and climate action across Africa.
                </p>
                <p>
                  A pioneer in women-led natural resource management, Dr. Wanjala leads the world's first
                  women-led water fund and advances gender-transformative climate solutions aligned with
                  SDGs 5, 13, and 16.
                </p>
              </div>
              <div className="flex gap-8 pt-8 border-t border-border/40 mt-8">
                {[
                  { val: '15+', lab: 'Years Exp.' },
                  { val: 'AWARD', lab: 'Fellow' },
                  { val: 'WWANC', lab: 'Co-Founder' },
                  { val: 'ICRA', lab: 'Founder' },
                ].map(({ val, lab }) => (
                  <div key={lab}>
                    <div className="text-2xl font-bold text-primary">{val}</div>
                    <div className="text-xs uppercase tracking-widest text-foreground/80 font-medium mt-0.5">{lab}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full Team Grid ───────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background/98" />
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">The People</p>
            <h2 className="text-4xl font-bold mb-4 font-serif">Meet the Team</h2>
            <p className="text-muted-foreground leading-relaxed">
              Scientists, field practitioners, and community leaders united by a common mission
              to restore Africa's ecosystems.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="group relative rounded-2xl overflow-hidden border border-border/60 hover:shadow-xl hover:border-primary/30 transition-all duration-500">
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  {/* Info */}
                  <div className="p-5 -mt-2 relative">
                    <h4 className="font-bold text-base mb-0.5">{member.name}</h4>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?auto=format&fit=crop&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/88" />
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px)',
          }} />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              We Believe in an Africa that Flourishes.
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Join our researchers, scientists, and community organizers working on Africa's
              most ambitious restoration projects.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 h-13 text-base font-semibold bg-white text-primary hover:bg-white/92 shadow-xl shadow-black/20"
              asChild
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

    </div>
  )
}