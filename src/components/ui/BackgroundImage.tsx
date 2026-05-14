import React from 'react'

interface BackgroundImageProps {
  src: string
  alt: string
  objectPosition?: string
  priority?: boolean
  className?: string
}

export function BackgroundImage({
  src,
  alt,
  objectPosition = 'center',
  priority = false,
  className = '',
}: BackgroundImageProps) {
  const hasWidthParam = src.includes('w=')
  const optimisedSrc = src.includes('images.unsplash.com') && !hasWidthParam
    ? `${src}${src.includes('?') ? '&' : '?'}auto=format&fit=crop&w=1920&q=85`
    : src

  return (
    <img
      src={optimisedSrc}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none ${className}`}
      style={{ objectPosition }}
    />
  )
}
