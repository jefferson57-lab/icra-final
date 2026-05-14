import { createRootRoute, createRoute, Outlet, RouterProvider, createRouter } from '@tanstack/react-router'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RestorationPage from './pages/RestorationPage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'
import PartnerWithUs from './pages/PartnerWithUs'

// Define routes
const rootRoute = createRootRoute({
  component: () => (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden bg-stone-50 text-stone-900">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

const restorationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/restoration',
  component: RestorationPage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
})

const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/team',
  component: TeamPage,
})

const partnerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/partner',
  component: PartnerWithUs,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  restorationRoute,
  contactRoute,
  teamRoute,
  partnerRoute,
])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function App() {
  return <RouterProvider router={router} />
}

export default App