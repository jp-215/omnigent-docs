import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatIsOmnigent from './components/WhatIsOmnigent'
import Features from './components/Features'
import Tutorial from './components/Tutorial'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)
  const closeSidebar = () => setSidebarOpen(false)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const observers: IntersectionObserver[] = []

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.25, rootMargin: '-62px 0px -40% 0px' },
      )
      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className={`overlay${sidebarOpen ? ' open' : ''}`} onClick={closeSidebar} />
      <div className="wrap">
        <Sidebar isOpen={sidebarOpen} activeSection={activeSection} onClose={closeSidebar} />
        <main className="main">
          <Hero />
          <Problem />
          <WhatIsOmnigent />
          <Features />
          <Tutorial />
          <Testimonials />
          <CTABanner />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
