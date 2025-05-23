import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import './App.css'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'

function App() {

  const [ playState, setPlayState ] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' / >
        <Programs/>
        <About setPlayState = {setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos' / >
        <Campus/>
        <Title subTitle='TESTIMONIAL' title='What Student Says' / >
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get in Touch' / >
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
