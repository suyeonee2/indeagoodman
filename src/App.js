import Blog from 'components/Blog'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import Home from 'components/Home'
import Milestone from 'components/Milestone'
import Portfliio from 'components/Portfliio'
import Pricing from 'components/Pricing'
import ScrollToTop from 'components/ScrollToTop'
import Services from 'components/Services'
import Skills from 'components/Skills'
import Testmonials from 'components/Testmonials'
import Video from 'components/Video'
import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Home />
      <Services />
      <Portfliio />
      <Milestone />
      <Blog />
      <Video />
      <Pricing />
      <Testmonials />
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  )
}
