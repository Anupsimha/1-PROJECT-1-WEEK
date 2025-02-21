import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import CompanyList from './Components/CompanyList/CompanyList'
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CompanyList></CompanyList>
      <Hero></Hero>
    </div>
  )
}

export default App
