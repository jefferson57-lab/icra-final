import React from 'react'
import { motion } from 'framer-motion'
import { Container, Card, CardContent, Badge, Button } from '@blinkdotnew/ui'
import { BookOpen, Database, Globe, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'
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

const researchAreas = [
  {
    title: 'Resource Mobilization',
    description: 'Secure funding to establish a cutting-edge digital knowledge exchange hub and finance community-led citizen science projects focused on health and climate action.',
    icon: <Database className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?auto=format&fit=crop&q=60&w=800',
  },
  {
    title: 'Knowledge Exchange',
    description: 'Serve as a central platform for sharing expertise, networks, and best practices in citizen science, water and food security, and climate adaptation across Africa.',
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=60&w=800',
  },
  {
    title: 'Advocacy and Influence',
    description: 'Develop and implement advocacy strategies that influence donors and government partners to invest in citizen science and research-informed community projects.',
    icon: <Globe className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=60&w=800',
  },
  {
    title: 'Impact Monitoring',
    description: 'Using satellite imagery and ground-level citizen science to track restoration progress, carbon sequestration, and community benefits in real time.',
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

export default function RestorationPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=1920"
            alt="Citizen science fieldwork"
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
                Our Approach
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6"
            >
              Citizen Science:{' '}
              <span className="text-primary italic font-serif">The Pulse of Restoration</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
            >
              We believe that effective climate restoration must be community-driven and
              scientifically grounded. Our model puts the power of science in the hands
              of the people.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── Why Citizen Science ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=55&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-background/97" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
                  alt="Citizen Scientist"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute top-8 -right-4 lg:-right-10 bg-background border border-border p-6 rounded-2xl shadow-xl max-w-[250px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm">Verified Impact</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  "ICRA's data-driven approach has transformed how we manage our community forests."
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Why Citizen Science?</p>
              <h2 className="text-4xl font-bold mb-6 font-serif">Democratizing Environmental Science</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Citizen science allows us to collect data at a scale and frequency that
                traditional research teams cannot match. It connects local expertise with
                global scientific standards and ensures communities own the solutions.
              </p>
              <div className="space-y-4">
                {[
                  'Scalable monitoring across vast and remote terrains.',
                  'Local ownership of environmental outcomes and advocacy.',
                  'Rapid response to emerging threats like drought or pests.',
                  'Integration of indigenous knowledge with modern ecological practices.',
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 rounded-xl hover:bg-primary/5 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
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
              We focus on the intersections where science, community, and policy meet to
              create lasting impact.
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
                  {/* Card image header */}
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
                transition={{ delay: i * 0.12 }}
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
