import React from 'react'
import { motion } from 'framer-motion'
import { Container, Card, CardContent, Badge, Button, Input, Textarea } from '@blinkdotnew/ui'
import { Mail, Phone, MapPin, Globe, Send, Handshake, Briefcase } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const partnershipTracks = [
  {
    title: 'Research Partnership',
    description: 'Collaborate on groundbreaking climate restoration research with our Pan-African network.',
    icon: <Globe className="w-5 h-5 text-primary" />,
  },
  {
    title: 'Community Program',
    description: "Bring ICRA's Citizen Science model to your local community or organization.",
    icon: <Handshake className="w-5 h-5 text-primary" />,
  },
  {
    title: 'Corporate ESG',
    description: 'Support large-scale restoration and demonstrate your commitment to African sustainability.',
    icon: <Briefcase className="w-5 h-5 text-primary" />,
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=85&w=1920"
            alt="Partnership and collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
        </div>
        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-5 py-1.5 px-4 text-sm font-semibold border border-primary/40 bg-primary/15 text-primary backdrop-blur-sm">
                Contact & Partner
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Partner for a{' '}
              <span className="text-primary italic font-serif">Resilient Africa</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
            >
              We're always looking for visionary partners, researchers, and community leaders to join our mission. Let's start a conversation.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── Main Contact Section ── */}
      <section className="relative py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=60&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.04]"
          />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 md:p-10 rounded-3xl shadow-xl border bg-card">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-8 font-serif">Send Us a Message</h2>
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                        <Input placeholder="Jane Doe" className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                        <Input type="email" placeholder="jane@example.com" className="h-12 rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Organization</label>
                      <Input placeholder="Your organization" className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Inquiry Type</label>
                      <select className="w-full h-12 rounded-xl bg-background border border-input px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="">Select an inquiry type</option>
                        <option>Partnership Opportunity</option>
                        <option>Research Collaboration</option>
                        <option>Funding &amp; Grants</option>
                        <option>Media Inquiry</option>
                        <option>General Question</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                      <Textarea
                        placeholder="How can we work together?"
                        className="min-h-[140px] rounded-xl py-3"
                      />
                    </div>
                    <Button size="lg" className="w-full h-12 rounded-xl font-semibold group">
                      Send Message{' '}
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right column */}
            <div className="flex flex-col gap-12">

              {/* Partnership Tracks */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-6 font-serif">Partnership Tracks</h2>
                <div className="flex flex-col gap-4">
                  {partnershipTracks.map((track, i) => (
                    <div key={i} className="flex gap-5 p-5 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-background shadow-sm border border-border flex items-center justify-center">
                        {track.icon}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{track.title}</h3>
                        <p className="text-sm text-muted-foreground">{track.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <h2 className="text-2xl font-bold mb-6 font-serif">Regional Headquarters</h2>
                <div className="p-7 rounded-2xl bg-card border border-border space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Nairobi, Kenya</p>
                      <p className="text-sm text-muted-foreground">ICAD Center — Premier African hub for climate restoration research</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">+254 (0) 725 216 292</p>
                      <p className="text-sm text-muted-foreground">Mon–Fri, 9am–5pm EAT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">climaterestorationafrica@gmail.com</p>
                      <p className="text-sm text-muted-foreground">General inquiries &amp; partnerships</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Pan-African Operations</p>
                      <p className="text-sm text-muted-foreground">Active field offices and research centres across the continent</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Map / Visual CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=1920"
            alt="Africa map / satellite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">Active Across Africa</h2>
            <p className="text-lg text-white/70 mb-8">
              From West Africa to the Horn, ICRA maintains an active presence in 18 countries — co-designing solutions with communities on the ground.
            </p>
            <div className="inline-flex gap-2 items-center px-5 py-3 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-sm font-semibold text-primary">18 countries · Active operations</span>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}
