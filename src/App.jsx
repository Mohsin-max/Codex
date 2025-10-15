import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Courses from './components/Courses'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Appointment from './components/Appointment'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import PopupForm from './components/PopupForm'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Courses />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Appointment />
      <Footer />
      <Chatbot />
      <PopupForm />
    </div>
  )
}

export default App