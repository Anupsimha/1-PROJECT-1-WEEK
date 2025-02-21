import React from 'react'
import './Hero.css'
import profile1 from '../../assets/profile-img1.jpg'
import profile2 from '../../assets/profile-img2.jpg'
import profile3 from '../../assets/profile-img3.jpg'
import profile4 from '../../assets/profile-img4.jpg'
import profile5 from '../../assets/profile-img5.jpg'
import profile6 from '../../assets/profile-img6.jpg'
import profile7 from '../../assets/profile-img7.jpg'
import profile8 from '../../assets/profile-img8.jpg'
import profile9 from '../../assets/profile-img9.jpg'
import profile10 from '../../assets/profile-img10.jpg'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="heading">
        <h2><i class="fa-solid fa-arrow-left"></i> <span>Applicant Details</span></h2>
        <div className="more-action">
            <details>
            <summary>More Actions ▼</summary>
            <div class="dropdown-content">
                <a href="#">Action 1</a>
                <a href="#">Action 2</a>
                <a href="#">Action 3</a>
            </div>
            </details>
        </div>
      </div>

      <div className="applicant">
          <div className="applicant-details">
            <div className="appli">
              <img src={profile1} alt="" />
              <div className="appli-info">
                <span className='name'>Jerome Beroll</span>
                <p>Product Designer</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i><span className='ratings'>4.0</span>
              </div>
            </div>
          <div className="applicant-contact">
            
          </div>
          </div>
    
          <div className="applicant-profile">
    
          </div>
      </div>
    </div>
  )
}

export default Hero
