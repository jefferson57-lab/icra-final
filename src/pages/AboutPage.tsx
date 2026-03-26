import React from 'react'
import { motion } from 'framer-motion'
import { Container, Card, CardContent, Badge, Button } from '@blinkdotnew/ui'
import { Globe, Heart, Shield, Zap, Target, Eye, ArrowRight, Quote } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const coreValues = [
  {
    title: 'Scientific Rigor',
    description: 'Every restoration effort is grounded in peer-reviewed research and data-driven insights.',
    icon: <Shield className="w-6 h-6 text-primary" />,
    bg: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=50&w=400',
  },
  {
    title: 'Community Empowerment',
    description: 'Local communities are not passive beneficiaries — they are the architects of restoration.',
    icon: <Heart className="w-6 h-6 text-primary" />,
    bg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=50&w=400',
  },
  {
    title: 'Innovation',
    description: 'We constantly adapt and scale emerging technologies for environmental healing.',
    icon: <Zap className="w-6 h-6 text-primary" />,
    bg: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=50&w=400',
  },
  {
    title: 'Integrity',
    description: 'Full transparency in our processes and accountability for every hectare restored.',
    icon: <Globe className="w-6 h-6 text-primary" />,
    bg: 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=50&w=400',
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero header ── */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="images/nature.jpg"
            alt="African landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/72 to-slate-900/25" />
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
                About ICRA
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6"
            >
              Healing Africa{' '}
              <span className="text-primary italic font-serif">from the Ground Up</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
            >
              ICRA is a Pan-African center dedicated to bridging the science-implementation
              gap in climate restoration — empowering communities with scientific tools to
              restore their landscapes.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=60&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 bg-background/98" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <motion.div {...fadeUp} className="relative overflow-hidden rounded-3xl group">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=70&w=1200"
                  alt=""
                  className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                />
              </div>
              <div className="relative z-10 p-10 bg-primary/5 border border-primary/15 rounded-3xl h-full">
                <div className="p-3.5 bg-primary/15 rounded-2xl w-fit mb-7">
                  <Target className="w-9 h-9 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 font-serif">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To build the capacity of marginalized communities — especially women and
                  youth — to lead inclusive citizen science and training initiatives that
                  advance water security, food security, climate, health, and gender justice
                  in Africa.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div {...fadeUp} className="relative overflow-hidden rounded-3xl group">
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
                  To become Africa's leading Practo-Academia hub — bridging community
                  practice and academic research to achieve gender-responsive justice in
                  health, climate action, and community-led inquiry across the continent.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Model & Approach ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=65&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-card/95" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Model</p>
              <h2 className="text-4xl font-bold mb-7 font-serif">A Holistic Ecosystem for Restoration</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our model is built on four pillars that create a self-sustaining cycle. We
                don't just plant trees — we build systems that ensure they survive, thrive,
                and generate lasting community benefit.
              </p>
              <div className="space-y-3">
                {[
                  { n: 1, title: 'Scientific Validation', desc: 'Rigorous testing of restoration techniques across diverse African climates.' },
                  { n: 2, title: 'Citizen Science Network', desc: "Training thousands of local 'Restoration Leads' to gather data and implement practices." },
                  { n: 3, title: 'Policy Advocacy', desc: 'Translating ground-level success into national and regional policy changes.' },
                  { n: 4, title: 'Sustainable Financing', desc: 'Connecting local projects with global climate finance through transparent monitoring.' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-4 p-5 rounded-2xl hover:bg-background/70 transition-colors border border-transparent hover:border-border/60 group">
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

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-border/60">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=1200"
                  alt="Restoration Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corner label */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/30">
                <div className="text-center text-primary-foreground">
                  <div className="text-xl font-extrabold leading-none">4</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold leading-none mt-0.5">Pillars</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Core Values ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=50&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-background/97" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our DNA</p>
            <h2 className="text-4xl font-bold mb-4 font-serif">Core Values</h2>
            <p className="text-muted-foreground">These principles guide every project, partnership, and community initiative we lead.</p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {coreValues.map((v, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full group hover:shadow-xl transition-all duration-500 border rounded-3xl overflow-hidden relative">
                  {/* Subtle bg image per card */}
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
        </Container>
      </section>

      {/* ── Leadership ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=70&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-card/96" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              className="order-1 lg:order-2"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Leadership</p>
              <h2 className="text-4xl font-bold mb-6 font-serif">Visionary Leadership</h2>
              {/* Pull quote */}
              <div className="relative pl-6 mb-7 border-l-4 border-primary/40">
                <Quote className="absolute -top-1 -left-2 w-5 h-5 text-primary/40" />
                <p className="text-xl text-muted-foreground font-serif italic leading-relaxed">
                  "Our goal is not just to restore nature, but to restore hope for millions
                  of Africans who depend on these ecosystems."
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>
                  Dr. Stella Wanjala is the Founder and Lead Researcher at ICRA, bringing
                  over 25 years of experience in community development, climate action, and
                  the critical intersections between environmental health and human well-being.
                </p>
                <p>
                  A dedicated Lecturer in the Department of Biological Sciences (Environmental
                  Conservation) at Masinde Muliro University of Science and Technology, she
                  embodies the Practo-Academia model.
                </p>
                <p>
                  Dr. Wanjala serves as Project Lead for the world's first women-led water
                  fund, The River Yala Water Fund (partnership with The Nature Conservancy),
                  and is Co-Founder & Director of WWANC.
                </p>
              </div>
              <div className="flex gap-8 pt-8">
                {[
                  { val: '25+', lab: 'Years Exp.' },
                  { val: 'MMUST', lab: 'University' },
                  { val: 'WWANC', lab: 'Co-Founder' },
                ].map(({ val, lab }) => (
                  <div key={lab}>
                    <div className="text-2xl font-bold text-primary">{val}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium mt-0.5">{lab}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?auto=format&fit=crop&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/88" />
          {/* Subtle cross-hatch overlay */}
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
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </Container>
      </section>

    </div>
  )
}
