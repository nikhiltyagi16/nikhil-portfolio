import React from 'react'
import Skills from './skills'
import Projects from './projects'
import Header from './header'
import About from './about'
import Contact from './contact'
import Footer from './footer'
import Hero from './hero'

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
