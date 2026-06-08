import { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Seo } from './components/Seo'
import { ChatbotWidget } from './components/ChatbotWidget'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
// Code-split secondary pages for faster initial load
const Projects = lazy(() =>
  import('./pages/Projects').then((m) => ({
    default: m.Projects,
  })),
)
const About = lazy(() =>
  import('./pages/About').then((m) => ({
    default: m.About,
  })),
)
const Contact = lazy(() =>
  import('./pages/Contact').then((m) => ({
    default: m.Contact,
  })),
)
const Donate = lazy(() =>
  import('./pages/Donate').then((m) => ({
    default: m.Donate,
  })),
)
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
export function App() {
  return (
    <Router>
      <Seo />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-on-surface">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </Router>
  )
}
