import React from 'react'

type OverlayVariant = 'left' | 'center' | 'bottom' | 'top' | 'vignette'
type OverlayIntensity = 'light' | 'medium' | 'strong'

const overlayMap: Record<OverlayVariant, Record<OverlayIntensity, string>> = {
  left: {
    light: 'bg-gradient-to-r from-stone-900/35 via-stone-900/15 to-transparent',
    medium: 'bg-gradient-to-r from-stone-900/75 via-stone-900/40 to-stone-900/10',
    strong: 'bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-stone-900/15',
  },
  center: {
    light: 'bg-stone-950/45',
    medium: 'bg-stone-950/65',
    strong: 'bg-stone-950/80',
  },
  bottom: {
    light: 'bg-gradient-to-t from-stone-900/40 via-stone-900/10 to-transparent',
    medium: 'bg-gradient-to-t from-stone-900/65 via-stone-900/20 to-transparent',
    strong: 'bg-gradient-to-t from-stone-900/85 via-stone-900/40 to-transparent',
  },
  top: {
    light: 'bg-gradient-to-b from-stone-900/40 via-stone-900/10 to-transparent',
    medium: 'bg-gradient-to-b from-stone-900/65 via-stone-900/20 to-transparent',
    strong: 'bg-gradient-to-b from-stone-900/85 via-stone-900/40 to-transparent',
  },
  vignette: {
    light: 'bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(28,25,23,0.35)_100%)]',
    medium: 'bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(28,25,23,0.60)_100%)]',
    strong: 'bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(28,25,23,0.80)_100%)]',
  },
}

interface ImageOverlayProps {
  variant?: OverlayVariant
  intensity?: OverlayIntensity
  fadeToPage?: boolean
}

export function ImageOverlay({
  variant = 'left',
  intensity = 'medium',
  fadeToPage = false,
}: ImageOverlayProps) {
  return (
    <>
      <div className={`absolute inset-0 ${overlayMap[variant][intensity]}`} />
      {fadeToPage && (
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            backgroundImage: 'linear-gradient(to top, rgba(250,249,247,1), transparent)',
          }}
        />
      )}
    </>
  )
}
