import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  href?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 shadow-soft hover:shadow-card hover:-translate-y-px',
  secondary: 'bg-stone-900 text-white hover:bg-stone-800 shadow-soft hover:-translate-y-px',
  ghost: 'bg-transparent text-stone-700 hover:bg-stone-100',
  outline:
    'border border-stone-300 text-stone-700 hover:border-brand-500 hover:text-brand-600 bg-transparent',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-base rounded-2xl',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 font-body ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    )
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  )
}
