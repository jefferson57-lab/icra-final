import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Card, CardContent, Badge, Button } from '@blinkdotnew/ui'
import {
  Users,
  BookOpen,
  CalendarDays,
  Handshake,
  MapPin,
  Send,
  Loader2,
  AlertCircle,
  Lock,
  ArrowRight,
  CheckCircle2,
  Check,
} from 'lucide-react'

const STATS = [
  { num: '320+', label: 'Active members' },
  { num: '28', label: 'Countries' },
  { num: '140+', label: 'Publications' },
]

const BENEFITS = [
  { icon: Users, title: 'Collaboration network', desc: 'Connect with researchers, policymakers, and institutions across Africa.', bg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=60&w=600' },
  { icon: BookOpen, title: 'Research access', desc: 'Access exclusive working papers, data repositories, and findings.', bg: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=60&w=600' },
  { icon: CalendarDays, title: 'Events & forums', desc: 'Priority invitations to symposia, workshops, and policy dialogues.', bg: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=60&w=600' },
  { icon: Handshake, title: 'Knowledge exchange', desc: 'Co-author papers, share insights, and shape continental research agendas.', bg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=60&w=600' },
]

const ROLES = ['Researcher / Academic','Policy analyst','PhD / Graduate student','NGO / Civil society','Government official','Private sector','Other']
const COUNTRIES = ['Kenya','Nigeria','Ghana','Ethiopia','Rwanda','Uganda','Tanzania','South Africa','Senegal','Côte d\'Ivoire','Cameroon','Zambia','Zimbabwe','Mozambique','Other']
const EXPERIENCE = ['Less than 2 years','2–5 years','6–10 years','More than 10 years']
const INTEREST_AREAS = [
  { value: 'policy', label: 'Policy & governance' },
  { value: 'health', label: 'Health systems' },
  { value: 'climate', label: 'Climate & environment' },
  { value: 'econ', label: 'Economic development' },
  { value: 'edu', label: 'Education & skills' },
  { value: 'tech', label: 'Technology & innovation' },
  { value: 'gender', label: 'Gender & inclusion' },
  { value: 'other', label: 'Other / interdisciplinary' },
]
const REQUIRED_FIELDS = ['firstName','lastName','email','org','role','country','experience']

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] } },
}
const stagger = { initial: {}, animate: { transition: { staggerChildren: 0.1 } } }

const BenefitCard = ({ icon: Icon, title, desc, bg }) => (
  <motion.div variants={fadeUp} className="group relative rounded-3xl overflow-hidden border border-border/60 hover:shadow-xl hover:border-primary/30 transition-all duration-500 h-full">
    <div className="absolute inset-0 z-0">
      <img src={bg} alt="" className="w-full h-full object-cover opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
    </div>
    <div className="relative z-10 p-7">
      <div className="p-3 bg-primary/15 rounded-2xl w-fit mb-5 group-hover:bg-primary group-hover:[&>*]:text-primary-foreground transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-bold text-base mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </motion.div>
)

const AreaChip = ({ label, selected, onToggle }) => {
  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); onToggle(); }
  }
  return (
    <div role="checkbox" aria-checked={selected} tabIndex={0} onClick={onToggle} onKeyDown={handleKeyDown} className={`flex items-center gap-3 p-3 rounded-xl border ${selected ? 'border-primary bg-primary/10' : 'border-border bg-background/60 hover:border-primary/40 hover:bg-primary/5'} focus-visible:ring-2 focus-visible:ring-primary/50`}>
      <div className={`w-4 h-4 rounded flex items-center justify-center ${selected ? 'bg-primary text-white' : 'bg-transparent'}`}>
        {selected && <Check className="w-3 h-3" />}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  )
}

export default function MembershipPage() {
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', org:'', role:'', country:'', experience:'', motivation:'' })
  const [selectedAreas, setSelectedAreas] = useState([])
  const [errors, setErrors] = useState({})
  const [submitState, setSubmitState] = useState('idle')

  const update = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))
  const toggleArea = (val) => setSelectedAreas(prev => prev.includes(val) ? prev.filter(v=>v!==val) : [...prev, val])

  const inputCls = (field) => `w-full rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition-all duration-150 placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-background ${errors[field] ? 'border-destructive ring-2 ring-destructive/20' : 'border-border hover:border-border/80'}`

  const validate = () => {
    const errs = {}
    REQUIRED_FIELDS.forEach(f => { if (!form[f].toString().trim()) errs[f] = 'Required' })
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address'
    return errs
  }

  const handleSubmit = async () => {
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs); setSubmitState('error'); setTimeout(()=>setSubmitState('idle'),2500); return
    }
    setErrors({}); setSubmitState('loading')
    // await fetch('https://your-api.icra.africa/membership/apply', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ ...form, areas: selectedAreas }) })
    await new Promise(r=>setTimeout(r,1300))
    setSubmitState('success')
  }

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative py-24 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 z-0">
          <img src="/images/Shifty.jpg" alt="" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger} className="grid gap-8 max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3">
              <Badge>
                <MapPin className="w-4 h-4" />
                <span className="ml-2">ICRA Africa Network</span>
              </Badge>
            </motion.div>
            <motion.h1 id="hero-heading" variants={fadeUp} className="font-serif text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
              Join our community of <span className="text-primary">research leaders</span> across Africa
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/75 text-lg">Apply to join a multidisciplinary network bridging research, policy, and practice across the continent.</motion.p>

            <motion.div variants={fadeUp} aria-label="Network statistics" className="flex gap-6 mt-6 bg-transparent border-t border-white/10 pt-6">
              {STATS.map((s,i)=> (
                <div key={s.label} className={`flex-1 ${i>0? 'pl-6 border-l border-white/10':''}`}>
                  <div className="text-3xl font-bold font-serif text-primary">{s.num}</div>
                  <div className="text-sm text-white/70 uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-20 overflow-hidden bg-background/95" aria-labelledby="benefits-heading">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=50&w=1920" alt="" className="w-full h-full object-cover opacity-[0.04]" />
          <div className="absolute inset-0 bg-background/95" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} className="grid gap-8">
            <motion.div variants={fadeUp} className="max-w-xl">
              <div className="text-sm font-semibold uppercase text-primary mb-2">Why join us</div>
              <h2 className="font-serif text-3xl mb-3">What membership gives you</h2>
              <p className="text-muted-foreground">Membership connects you to peers, data, and policy forums across the continent.</p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map(b => <BenefitCard key={b.title} {...b} />)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative py-20 overflow-hidden" aria-labelledby="form-heading">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=65&w=1920" alt="" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-card/95" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="text-sm font-semibold uppercase text-primary mb-2">Apply</div>
              <h2 id="form-heading" className="font-serif text-3xl mb-4">Apply for membership</h2>
              <p className="text-muted-foreground mb-6">Tell us about your background, role, and interests so we can review your application.</p>

              <ol className="space-y-4 text-sm">
                <li className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">01</div><div><div className="font-semibold">Submit application</div><div className="text-muted-foreground">Tell us about your work and interests.</div></div></li>
                <li className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">02</div><div><div className="font-semibold">Review</div><div className="text-muted-foreground">Our team reviews eligibility and fit.</div></div></li>
                <li className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">03</div><div><div className="font-semibold">Join</div><div className="text-muted-foreground">Successful applicants are welcomed to the network.</div></div></li>
              </ol>

              <div className="hidden lg:block mt-8 rounded-3xl overflow-hidden h-52">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=70&w=800" alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            <div>
              <Card className="bg-background/90 backdrop-blur-sm border border-border/60 rounded-3xl p-8 shadow-2xl">
                <CardContent>
                  {submitState === 'success' ? (
                    <motion.div initial={{ opacity:0, scale:0.96 }} animate={{ opacity:1, scale:1 }} role="status" aria-live="polite" className="flex flex-col items-center gap-4 text-center">
                      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-600"><CheckCircle2 className="w-8 h-8" /></div>
                      <h3 className="font-serif text-2xl">Application received!</h3>
                      <p className="text-muted-foreground">Thank you. We'll review your submission and contact you with next steps.</p>
                    </motion.div>
                  ) : (
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-grid="2col">
                        <div>
                          <label className="text-sm font-medium">First name</label>
                          <input className={inputCls('firstName')} value={form.firstName} onChange={update('firstName')} />
                          {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium">Last name</label>
                          <input className={inputCls('lastName')} value={form.lastName} onChange={update('lastName')} />
                          {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="text-sm font-medium">Email address</label>
                        <input type="email" className={inputCls('email')} value={form.email} onChange={update('email')} />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" data-grid="2col">
                        <div>
                          <label className="text-sm font-medium">Organisation</label>
                          <input className={inputCls('org')} value={form.org} onChange={update('org')} />
                          {errors.org && <p className="text-xs text-destructive mt-1">{errors.org}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium">Role</label>
                          <select className={inputCls('role')} value={form.role} onChange={update('role')}>
                            <option value="">Select your role</option>
                            {ROLES.map(r=> <option key={r} value={r}>{r}</option>)}
                          </select>
                          {errors.role && <p className="text-xs text-destructive mt-1">{errors.role}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" data-grid="2col">
                        <div>
                          <label className="text-sm font-medium">Country</label>
                          <select className={inputCls('country')} value={form.country} onChange={update('country')}>
                            <option value="">Select your country</option>
                            {COUNTRIES.map(c=> <option key={c} value={c}>{c}</option>)}
                          </select>
                          {errors.country && <p className="text-xs text-destructive mt-1">{errors.country}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium">Years of experience</label>
                          <select className={inputCls('experience')} value={form.experience} onChange={update('experience')}>
                            <option value="">Select experience</option>
                            {EXPERIENCE.map(e=> <option key={e} value={e}>{e}</option>)}
                          </select>
                          {errors.experience && <p className="text-xs text-destructive mt-1">{errors.experience}</p>}
                        </div>
                      </div>

                      <hr className="border-border/50 my-6" />

                      <div role="group" aria-label="Research interest areas">
                        <div className="text-sm font-semibold uppercase text-primary mb-3">Interest areas</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {INTEREST_AREAS.map(a => (
                            <AreaChip key={a.value} label={a.label} selected={selectedAreas.includes(a.value)} onToggle={()=>toggleArea(a.value)} />
                          ))}
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="text-sm font-medium">Motivation <span className="text-muted-foreground text-xs">(optional)</span></label>
                        <textarea rows={4} className={`w-full rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-background`} value={form.motivation} onChange={update('motivation')}></textarea>
                      </div>

                      <hr className="border-border/50 my-6" />

                      <div className="mt-2">
                        <Button className={`w-full h-12 rounded-xl ${submitState==='error' ? 'bg-destructive text-white' : ''}`} onClick={handleSubmit} disabled={submitState==='loading'} aria-busy={submitState==='loading'}>
                          {submitState==='loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : submitState==='error' ? <AlertCircle className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                          <span className="ml-2">{submitState==='loading' ? 'Submitting…' : submitState==='error' ? 'Please fill all required fields' : 'Submit membership application'}</span>
                        </Button>
                      </div>

                      <div className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" />
                        <span>We keep your details secure and only use them for membership review.</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-16 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 z-0">
          <img src="public/images/gradient_membership.jpg" alt="" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 8px)' }} />
        </div>
        <div className="w-full max-w-3xl mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center">
          <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">Advancing African research, together.</h2>
          <p className="text-white/80 mt-3">Join a growing network of researchers shaping policy and practice across the continent.</p>
          <a href="mailto:membership@icra.africa" className="inline-flex items-center gap-3 mt-6 px-8 py-3 rounded-full bg-white text-primary font-semibold shadow-xl hover:bg-white/95">
            Contact membership <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 480px) {
          [data-grid="2col"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
