import React from 'react'
import model2 from '../image/model2.png'
import home from '../image/home.png'
import profile from '../image/profile.png'
import line from '../image/line.png'

const explore = () => {
  return (
    <div>
      <div className="relative">
        <img className="z-10 absolute top-[3vh] left-[5vw] w-[2.4vw] h-[5vh]" src={home} alt="" />
        <img className="w-full h-[100vh] top-[-13vh] absolute  z-1" src={model2} alt="" />
        <img className="z-10 absolute top-[3vh] left-[90vw] w-[2.4vw] h-[5vh]" src={profile} alt="" />
        <p className="z-10 absolute text-5xl font-jude text-white top-[19vh] left-[7vw] text-center">Explore <br /> Our <br /> Wardrobe.</p>
        <p className='z-10 absolute text-5xl font-jude text-white top-[27vh] left-[67vw]'>30% on New Arrivals.</p>
      </div>

      <div className='relative h-[70vh]'>
      <img className='absolute left-[60%] top-[105vh]' src={line} alt="" />
        <p className='absolute left-[48%] top-[102vh] mont text-2xl text-[#003366] '>New Arrivals</p>
        <img className='absolute left-[30%] top-[105vh]'  src={line} alt="" />
      </div>


    </div>
  )
}

export default explore
