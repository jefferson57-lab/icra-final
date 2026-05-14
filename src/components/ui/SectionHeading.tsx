import React from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <div className="w-8 h-px bg-earth-400 flex-shrink-0" />
          <span
            className={`text-xs font-semibold tracking-widest uppercase font-body ${
              light ? 'text-earth-300' : 'text-earth-500'
            }`}
          >
            {eyebrow}
          </span>
          {align === 'center' && <div className="w-8 h-px bg-earth-400 flex-shrink-0" />}
        </div>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl font-bold leading-tight mb-5 ${
          light ? 'text-white' : 'text-stone-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lg leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/65' : 'text-stone-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
