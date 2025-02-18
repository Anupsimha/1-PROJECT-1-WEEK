import React from 'react'
import './Navbar.css'
import web_logo from '../../assets/web-logo.webp'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='nav'>
        <div className="about-web">
            <img src={web_logo} alt="" />
            <h2>Job'<span>Ly</span></h2>
        </div>

        <ul className="nav-feild">
            <li>Dashboard</li>
            <li>Messages</li>
            <li>Company Profile</li>
            <li>All Applicants</li>
            <li>Job Listing</li>
            <li>My Schedule</li>
        </ul>

        <div className='border'></div>

        <div className="settings">
            <h3>SETTINGS</h3>
            <div className="settings-section">
                <i class="fa-solid fa-gear"></i>
                <span>Settings</span>
            </div>
            <div className="settings-section2">
                <i class="fa-solid fa-question"></i>
                <span>Help Center</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
