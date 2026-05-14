import React from 'react'
import { motion } from 'framer-motion'

const team = [
  {
    name: 'Dr. [Founder Name]',
    title: 'Executive Director & Co-Founder',
    bio: 'Climate restoration scientist with 15+ years across East and West Africa. Former advisor to UNEP and the African Union Climate Commission.',
    photo: '/team/founder.jpg', // TODO: Replace with real photo path
    initials: 'FN',
  },
  // TODO: Add additional team members here following the same pattern
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function TeamSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#52B788] mb-3">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            The People Behind the Mission
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            ICRA is led by scientists, community organizers, and climate policy experts
            with deep roots across the African continent.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                {member.photo && member.photo !== '/team/founder.jpg' ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-14 h-14 rounded-full object-cover border border-slate-200"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-[#52B788]/10 border border-[#52B788]/20 flex items-center justify-center text-[#52B788] font-bold text-base">
                    {member.initials}
                  </div>
                )}
                <div>
                  <p className="font-bold text-base">{member.name}</p>
                  <p className="text-sm text-[#52B788]">{member.title}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
