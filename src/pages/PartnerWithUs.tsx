import React from 'react'
import { motion } from 'framer-motion'
import { Container, Card, CardContent, Badge, Button, Input, Textarea } from '@blinkdotnew/ui'
import { Mail, Phone, MapPin, Globe, Send, CheckCircle, Zap, Target, Users, TrendingUp, Award } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const partnershipTiers = [
  {
    title: 'Community Champion',
    amount: '$5,000 - $25,000',
    description: 'Support local restoration initiatives and community-led programs.',
    benefits: [
      'Recognition in annual report',
      'Quarterly impact updates',
      'Co-branding opportunities',
      'Exclusive webinar access',
    ],
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Restoral Partner',
    amount: '$25,000 - $100,000',
    description: 'Fund large-scale ecosystem restoration across multiple countries.',
    benefits: [
      'All Community benefits',
      'Strategic partnership meetings',
      'Customized impact dashboard',
      'Joint communications plan',
      'Site visit opportunities',
    ],
    icon: <Target className="w-6 h-6" />,
    recommended: true,
  },
  {
    title: 'Transform Leader',
    amount: '$100,000+',
    description: 'Lead transformative impact across our Pan-African programs.',
    benefits: [
      'All Restoral benefits',
      'Board liaison engagement',
      'Dedicated relationship manager',
      'Custom program design',
      'Research collaboration',
      'Major donor recognition',
    ],
    icon: <TrendingUp className="w-6 h-6" />,
  },
]

const fundingUrgencies = [
  {
    icon: <Zap className="w-5 h-5 text-yellow-500" />,
    text: '2025 is critical: Active in 18 countries, expanding to 22.',
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    text: 'Every $50K directly restores 1,000 additional hectares.',
  },
  {
    icon: <Award className="w-5 h-5 text-blue-500" />,
    text: '94% of projects meet or exceed targets—bankable impact.',
  },
]

export default function PartnerWithUs() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1920&q=85"
            alt="Two professionals shaking hands outdoors in Africa — a partnership moment against a bright landscape"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/78 via-stone-900/45 to-stone-900/15" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-5 py-1.5 px-4 text-sm font-semibold border border-earth-300/40 bg-earth-300/12 text-earth-300 backdrop-blur-sm">
                Partner With Impact
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Fund measurable climate restoration across Africa
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-10"
            >
              ICRA delivers science-backed, community-led ecosystem restoration at scale. Your partnership restores degraded ecosystems, strengthens communities, and unlocks measurable climate impact across 18 countries.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-center">
                <p className="text-3xl font-display font-bold text-white">18</p>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Countries active</p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-center">
                <p className="text-3xl font-display font-bold text-white">94%</p>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Success rate</p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-center">
                <p className="text-3xl font-display font-bold text-white">50K+</p>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Hectares restored</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-earth-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-stone-950 hover:bg-earth-500 transition"
              >
                Schedule a call
              </a>
              <a
                href="#tiers"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                See funding tiers
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Fund ICRA ── */}
      <section className="relative py-24 overflow-hidden bg-stone-50">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Value Props */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                eyebrow="Why Fund ICRA?"
                title="Capital that delivers measurable restoration impact"
                subtitle="Partner with ICRA to support community-centered restoration programs, trusted research, and a scale-ready delivery model across Africa."
              />

              <div className="space-y-4">
                {fundingUrgencies.map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-3xl bg-white border border-stone-200 shadow-soft hover:shadow-card transition-shadow duration-200">
                    {item.icon}
                    <p className="text-sm leading-relaxed text-stone-700">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[28px] border border-brand-200 bg-brand-50 p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 mb-3">Impact focus</p>
                <ul className="space-y-3 text-sm text-stone-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span>Science-led restoration approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span>Community co-design and ownership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span>Transparent impact tracking and reporting</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right: Impact Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-[28px] bg-white border border-stone-200 shadow-soft">
                <div className="text-4xl font-display font-bold text-brand-600 mb-2">94%</div>
                <p className="text-sm text-stone-600">Projects meet or exceed targets</p>
              </div>
              <div className="p-6 rounded-[28px] bg-white border border-stone-200 shadow-soft">
                <div className="text-4xl font-display font-bold text-brand-600 mb-2">50K+</div>
                <p className="text-sm text-stone-600">Hectares restored to date</p>
              </div>
              <div className="p-6 rounded-[28px] bg-white border border-stone-200 shadow-soft">
                <div className="text-4xl font-display font-bold text-brand-600 mb-2">18</div>
                <p className="text-sm text-stone-600">Countries active</p>
              </div>
              <div className="p-6 rounded-[28px] bg-white border border-stone-200 shadow-soft">
                <div className="text-4xl font-display font-bold text-brand-600 mb-2">120K+</div>
                <p className="text-sm text-stone-600">Lives directly impacted</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Partnership Tiers ── */}
      <section id="tiers" className="relative py-24 overflow-hidden bg-stone-100">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Partnership Opportunities</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Funding Tiers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a partnership level that aligns with your organization's impact goals and capacity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`relative rounded-3xl border-2 transition-all ${
                  tier.recommended
                    ? 'border-primary bg-primary/5 shadow-lg scale-105 md:scale-110'
                    : 'border-border bg-background hover:shadow-lg'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{tier.title}</h3>
                  </div>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary mb-2">{tier.amount}</p>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                      tier.recommended
                        ? 'bg-brand-600 text-white hover:bg-brand-700'
                        : 'border border-stone-300 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="relative py-24 overflow-hidden bg-stone-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 md:p-10 rounded-[32px] shadow-soft border border-stone-200 bg-white">
                <CardContent className="p-0">
                  <h2 className="font-display text-3xl font-bold mb-8 text-stone-900">Start Your Partnership</h2>
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
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Partnership Interest</label>
                      <select className="w-full h-12 rounded-xl bg-background border border-input px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="">Select a tier</option>
                        <option>Community Champion ($5K-$25K)</option>
                        <option>Restoral Partner ($25K-$100K)</option>
                        <option>Transform Leader ($100K+)</option>
                        <option>Corporate ESG Partnership</option>
                        <option>Research Collaboration</option>
                        <option>Other / Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                      <Textarea
                        placeholder="Tell us about your impact goals and timeline..."
                        className="min-h-[120px] rounded-xl py-3"
                      />
                    </div>
                    <Button size="lg" className="w-full h-12 rounded-xl font-semibold group">
                      Send Inquiry{' '}
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column */}
            <div className="flex flex-col gap-12">

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-6 font-serif">Contact Our Partnership Team</h2>
                <div className="p-7 rounded-[28px] bg-white border border-stone-200 space-y-5 shadow-soft">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-stone-900">Regional Headquarters</p>
                      <p className="text-sm text-stone-600">Nairobi, Kenya</p>
                      <p className="text-xs text-stone-500 mt-1">ICAD Center — Premier African hub for climate restoration research</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-stone-900">+254 (0) 725 216 292</p>
                      <p className="text-sm text-stone-600">Mon–Fri, 9am–5pm EAT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-stone-900">partnerships@climaterestorationafrica.org</p>
                      <p className="text-sm text-stone-600">Dedicated partnership inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Globe className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-stone-900">Pan-African Operations</p>
                      <p className="text-sm text-stone-600">Active in 18 countries across the continent</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Funding Window */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-6 rounded-2xl bg-yellow-50 border border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-900/30"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-800 dark:text-yellow-200 mb-2">
                  2025 Critical Funding Window
                </p>
                <p className="text-sm text-yellow-900 dark:text-yellow-100 leading-relaxed">
                  We're expanding to 22 countries this year. Partnership funding now directly enables scaling across new regions. Submit your inquiry today to lock in funding allocation.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}
