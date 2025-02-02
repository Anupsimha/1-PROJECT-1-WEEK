import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
// import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'

const App = () => {

  const [playState , setPlayState] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What we Offer'></Title>
        <Programs></Programs>
        <About setPlayState={setPlayState}></About>
        <Title subtitle='Gallery' title='Campus Photos'></Title>
        <Campus></Campus>
        <Title subtitle='TESTIMONIALS' title='What STUDENT Says'></Title>
        <Testimonials></Testimonials>
        <Title subtitle='Contact Us' title='Get in Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      {/* <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer> */}
    </div>
  )
}

export default App
