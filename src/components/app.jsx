import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Header from './header'
import About from './about'
import Contact from './contact'
import Footer from './footer'

function App() {
    return (
        <div className="app">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
