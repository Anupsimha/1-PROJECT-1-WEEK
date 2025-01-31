import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What we Offer'></Title>
        <Programs></Programs>
        <About></About>
        <Title subtitle='Gallery' title='Campus Photos'></Title>
        <Campus></Campus>
        <Title subtitle='TESTIMONIALS' title='What STUDENT Says'></Title>
        <Testimonials></Testimonials>
      </div>
    </div>
  )
}

export default App
