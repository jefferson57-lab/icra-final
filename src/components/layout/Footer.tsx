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
      <Container className="py-12">
        <Stack direction="column" gap={8}>
          {/* Main footer content */}
          <Stack direction="column" gap={8} className="md:flex-row md:justify-between">
            {/* Brand section */}
            <VStack align="start" gap={4} className="max-w-sm">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg">ICRA Climate</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Working to combat climate change through community action, 
                sustainable practices, and environmental restoration.
              </p>
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
              <p className="text-sm font-semibold">Contact Us</p>
              <HStack gap={2} className="text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>ICRA House, Ngong Road<br />Nairobi, Kenya</span>
              </HStack>
              <HStack gap={2} className="text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </HStack>
              <HStack gap={2} className="text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hq@icra-africa.org</span>
              </HStack>
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
