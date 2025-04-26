import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import './App.css'
import About from './components/About/About.jsx'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' / >
        <Programs/>
        <About/>
      </div>
    </div>
  )
}

export default App
