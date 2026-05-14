/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Scan @blinkdotnew/ui so its Tailwind classes aren't purged
    "./node_modules/@blinkdotnew/ui/dist/index.mjs",
  ],
  theme: {
    extend: {
      // ── Border radius — must match @blinkdotnew/ui's tailwind.config.ts ──
      borderRadius: {
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        full: 'var(--radius-full)',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        DEFAULT: 'var(--radius-md)',
      },

      // ── Box shadows — must match @blinkdotnew/ui's tailwind.config.ts ────
      boxShadow: {
        sm:      'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md:      'var(--shadow-md)',
        lg:      'var(--shadow-lg)',
        xl:      'var(--shadow-xl)',
        card:    'var(--shadow-card)',
        soft:    '0 2px 20px 0 rgba(30, 27, 22, 0.06)',
        lifted:  '0 8px 48px 0 rgba(30, 27, 22, 0.12)',
      },

      // ── Font families — resolve to per-theme CSS vars ─────────────────────
      fontFamily: {
        sans:    'var(--font-sans)',
        heading: 'var(--font-heading)',
        mono:    'var(--font-mono)',
        serif:   ['Georgia', 'serif'],
        display: 'var(--font-display)',
        body:    'var(--font-body)',
      },

      // ── Font sizes ─────────────────────────────────────────────────────────
      fontSize: {
        xs:   ['var(--font-size-xs)',   { lineHeight: 'var(--line-height-tight)' }],
        sm:   ['var(--font-size-sm)',   { lineHeight: 'var(--line-height-normal)' }],
        base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
        lg:   ['var(--font-size-lg)',   { lineHeight: 'var(--line-height-relaxed)' }],
        xl:   ['var(--font-size-xl)',   { lineHeight: 'var(--line-height-heading)' }],
        '2xl':['var(--font-size-2xl)',  { lineHeight: 'var(--line-height-heading)' }],
      },

      // ── Colors ─────────────────────────────────────────────────────────────
      colors: {
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT:              'hsl(var(--sidebar))',
          foreground:           'hsl(var(--sidebar-foreground))',
          primary:              'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent:               'hsl(var(--sidebar-accent))',
          'accent-foreground':  'hsl(var(--sidebar-accent-foreground))',
          border:               'hsl(var(--sidebar-border))',
          ring:                 'hsl(var(--sidebar-ring))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        /* === NEW DESIGN TOKENS — Brand, Earth, Stone === */
        brand: {
          50:  'var(--brand-50)',
          100: 'var(--brand-100)',
          200: 'var(--brand-200)',
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
        },
        earth: {
          50:  'var(--earth-50)',
          100: 'var(--earth-100)',
          200: 'var(--earth-200)',
          300: 'var(--earth-300)',
          400: 'var(--earth-400)',
          500: 'var(--earth-500)',
          600: 'var(--earth-600)',
          700: 'var(--earth-700)',
          800: 'var(--earth-800)',
          900: 'var(--earth-900)',
        },
        stone: {
          50:  'var(--stone-50)',
          100: 'var(--stone-100)',
          200: 'var(--stone-200)',
          300: 'var(--stone-300)',
          400: 'var(--stone-400)',
          500: 'var(--stone-500)',
          600: 'var(--stone-600)',
          700: 'var(--stone-700)',
          800: 'var(--stone-800)',
          900: 'var(--stone-900)',
        },
      },

      // ── Transitions ────────────────────────────────────────────────────────
      transitionDuration: {
        fast:    'var(--duration-fast)',
        DEFAULT: 'var(--duration-normal)',
        slow:    'var(--duration-slow)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--easing-default)',
        smooth:  'var(--easing-smooth)',
        bounce:  'var(--easing-bounce)',
      },

      // ── Animations ─────────────────────────────────────────────────────────
      animation: {
        'fade-in':       'fade-in 0.5s ease-out',
        'slide-up':      'slide-up 0.5s ease-out',
        'accordion-down':'accordion-down 0.2s ease-out',
        'accordion-up':  'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%':   { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
