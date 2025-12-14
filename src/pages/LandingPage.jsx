import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function LandingPage() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Footer />

        </>
    )
}

export default LandingPage