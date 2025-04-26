import React from "react"
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>We ensure better education for better world.</h1>
                <p>We offers comprehensive resources on learning, covering subjects, courses, tutorials, and skill development. It supports students, teachers, and lifelong learners with interactive content, assessments, and certifications. Designed to enhance knowledge and accessibility, it fosters academic growth, critical thinking, and continuous personal and professional development.</p>
                <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero;