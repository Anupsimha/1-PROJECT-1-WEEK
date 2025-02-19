import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import CompanyList from './Components/CompanyList/CompanyList'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CompanyList></CompanyList>
    </div>
  )
}

export default App
