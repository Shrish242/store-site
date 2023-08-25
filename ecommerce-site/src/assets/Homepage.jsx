import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <div className='h-[40%] w-[40%] absolute rounded-lg bg-slate-300 top-[40%] left-[30%]'>
        <h1 className='top-[40%] left-[40%] absolute'>Hello world</h1>
        <Link to="/"><button className='h-[15%] w-[15%] rounded-lg bg-[#2F7074] top-[55%] left-[40%] absolute '>Logout</button></Link>
        </div>
      
    </div>
  )
}

export default Homepage
