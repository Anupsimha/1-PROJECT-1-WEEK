import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>Our Cutting edge curriculum is designed to empower students with the 
            Knowledge, Skills and experiences needed to excel in the dynamic
            feild of Education.
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </p>
      </div>
    </div>
  )
}

export default Hero
