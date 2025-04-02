import React from 'react'

import { assets } from '../../assets/assets.js'

const Home = () => {
  return (
    <div className='w-full  flex flex-col justify-center items-center h-screen'>
      <div className='w-[100%] justify-between bg-red-500 flex items-center '>
        <div className='flex flex-col w-[65%] h-72'>
          <p className=''>M.N. Anupsimha</p>
          <p>UNIQ<span>FLARE.</span></p>
          <div className='flex'>
            <p>Software Developer</p>
            <p>Web Developer</p>
            <p>App Developer</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className='bg-black h-72 w-[35%] rounded-3xl flex justify-center items-center'>
          <img className='h-96 w-96' src= {assets.heroImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
