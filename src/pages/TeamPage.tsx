import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
}

const fallback = 'https://picsum.photos/400/600'

const teamMembers = [
  {
    image: 'images/dr-stella.jpg',
    name: 'Dr. Stella Wanjala',
    role: 'Founder & Lead Researcher',
    tag: 'Leadership',
    bio: 'Dr. Stella Wanjala brings over 25 years of experience in community development, climate action, and the intersections between environmental health and human well-being. She is a Lecturer in Environmental Conservation at Masinde Muliro University and Project Lead for the world\'s first women-led water fund, The River Yala Water Fund, in partnership with The Nature Conservancy. She is also Co-Founder and Director of Women in Water and Natural Resources Conservation (WWANC).',
    expertise: ['Community Development', 'Water Security', 'Gender Justice', 'Nature-based Solutions'],
  },
  {
    image: 'images/dr-paul.jpg',
    name: 'Dr. Paul Mutebi',
    role: 'Director of Field Programs',
    tag: 'Programs',
    bio: 'Dr. Paul Mutebi leads on-the-ground restoration initiatives across East Africa. With deep expertise in agroforestry and soil rehabilitation, he oversees ICRA\'s field teams and ensures that community-led implementation remains at the core of every project.',
    expertise: ['Agroforestry', 'Soil Rehabilitation', 'Field Operations', 'East Africa'],
  },
  {
    image: 'images/mr-omuya.jpg',
    name: 'Mr. Benard Omuya',
    role: 'Head of Citizen Science',
    tag: 'Research',
    bio: 'Benard is a senior water resources governance and climate resilience expert with over 35 years of leadership experience in Kenya’s public sector. At ICRA, he provides strategic and technical guidance on integrated water resources management, climate adaptation, and institutional strengthening. He brings deep expertise in catchment-based planning, policy, and community-led water governance, with a proven track record in delivering large-scale, multi-stakeholder programmes that advance sustainable and resilient water systems across Africa.',
    expertise: ['Participatory Research', 'Data Collection', 'Training & Capacity', 'West Africa'],
  },
  {
    image: 'images/jonesku.jpeg',
    name: 'Mr. Jones Mutebi',
    role: 'Climate Policy Advisor',
    tag: 'Policy',
    bio: 'Mr. Jones Mutebi bridges the gap between ground-level research and high-level policy, working directly with African governments to embed restoration science into national climate frameworks and pan-continental governance structures.',
    expertise: ['Climate Policy', 'Government Relations', 'Pan-African Governance', 'Advocacy'],
  },
  {
    image: 'images/joy-ashioya.jpg',
    name: 'Joy Ashioya',
    role: 'Water Security Lead',
    tag: 'Research',
    bio: 'Joy is a specialist in watershed management and blue carbon ecosystems. She drives ICRA\'s water security portfolio across 10 African countries, developing frameworks that link ecosystem health with community water access and food production.',
    expertise: ['Watershed Management', 'Blue Carbon', 'Food Security', 'North & East Africa'],
  },
  {
    image: 'images/william-tolbert.jpg',
    name: 'William Tolbert',
    role: 'Community Partnerships Manager',
    tag: 'Partnerships',
    bio: 'William serves as a technical lead and advisor at ICRA, combining over 15 years of experience in community development, civic engagement, and participatory programming. He cultivates and manages ICRA’s growing network of community organizations, NGOs, and local government partners, using a relationship-driven approach that has been instrumental in expanding ICRA’s presence across 18 African countries. His expertise spans inclusive facilitation, MEL, advocacy, and capacity building, with a strong focus on equity and community-led solutions.',
    expertise: ['Partnership Development', 'NGO Relations', 'Community Engagement', 'East Africa'],
  },
  {
    image: 'images/jeff-wafula.jpg',
    name: 'Mr. Jeff Wafula',
    role: 'Research & Data Systems',
    tag: 'Research',
    bio: 'Mr. Jeff Wafula oversees ICRA\'s data infrastructure and impact measurement frameworks. He ensures scientific integrity across all programs and leads the development of open-access tools that allow communities to track and share restoration outcomes.',
    expertise: ['Data Systems', 'Impact Measurement', 'Scientific Integrity', 'Open Science'],
  },
]


const tagColors = {
  Leadership: 'bg-emerald-100 text-emerald-800',
  Programs: 'bg-teal-100 text-teal-800',
}

function SafeImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={(e) => {
        e.currentTarget.src = fallback
      }}
      className={className}
    />
  )
}

export default function TeamPage() {
  const [selected, setSelected] = useState(null)

  const active = selected !== null ? teamMembers[selected] : null

  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* HERO
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage
            src="images/image.png"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
      </section> */}

      {/* GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden border cursor-pointer"
                onClick={() => setSelected(i)}
              >

                <div className="relative h-[420px] w-full overflow-hidden">
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm opacity-70">{member.role}</p>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70"
              onClick={() => setSelected(null)}
            />

            <motion.div className="fixed right-0 top-0 h-full w-full max-w-md bg-white">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4">
                <X />
              </button>

              <div className="h-[300px]">
                <SafeImage
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold">{active.name}</h2>
                <p className="text-sm opacity-70">{active.role}</p>
                <p className="mt-4">{active.bio}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 text-center">
        <Link to="/contact" className="inline-flex items-center gap-2">
          Contact Us <ArrowRight />
        </Link>
      </section>

    </div>
  )
}
