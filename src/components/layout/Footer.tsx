import { Link } from '@tanstack/react-router'
import { 
  Container, 
  Stack, 
  VStack, 
  HStack,
  Separator,
} from '@blinkdotnew/ui'
import { Leaf, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/restoration', label: 'Our Work' },
    { path: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
  ]

  return (
    <footer className="border-t bg-muted/30">
      <Container className="py-16">
        <Stack direction="column" gap={10}>
          {/* Main footer content */}
          <Stack direction="column" gap={10} className="md:flex-row md:justify-between md:items-start">
            {/* Brand + intro section */}
            <VStack align="start" gap={4} className="max-w-sm">
              <p className="text-base font-bold uppercase tracking-widest text-primary">ICRA Center</p>
              <h3 className="text-2xl font-extrabold">Premier African hub for climate restoration research</h3>
              <p className="text-sm text-muted-foreground">General inquiries & partnerships | Pan-African Operations</p>
              <p className="text-sm text-muted-foreground">Active field offices and research centres across the continent</p>
            </VStack>

            {/* Quick Links */}
            <VStack align="start" gap={3}>
              <p className="text-sm font-semibold">Quick Links</p>
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </VStack>

            {/* Contact Info */}
            <VStack align="start" gap={3}>
              <p className="text-sm font-semibold">Contact & Hours</p>
              <HStack gap={2} className="text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </HStack>
              <HStack gap={2} className="text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+254 (0) 725 216 292</span>
              </HStack>
              <HStack gap={2} className="text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>climaterestorationafrica@gmail.com</span>
              </HStack>
              <p className="text-xs text-muted-foreground">Mon–Fri, 9am–5pm EAT</p>
            </VStack>
          </Stack>

          <Separator />

          {/* Bottom section */}
          <Stack 
            direction="column" 
            gap={4} 
            className="md:flex-row md:justify-between md:items-center"
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear} ICRA Climate. All rights reserved.
            </p>
            
            <HStack gap={6}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </footer>
  )
}

export default Footer
