import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

function Home() {

  
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 items-center px-10 py-5 ">
        {/* Left side   */}
        <div className=" flex items-start flex-col gap-5">
          <h1 className=' lg:text-6xl text-2xl font-medium'>Explore The World , One Country at a Time</h1>
          <p className='  text-lg'>Discover the History , culture and beauty of every return nation. Sart , search and filter through
            countres to find the details need.
          </p>
          <div className=" flex border px-6 py-2 w-fit items-center gap-3 rounded-2xl">
            <button >Start Exploring </button>
            <FaArrowRightLong />
          </div>
        </div>
        <div className=" w-60 sm:100  md:w-160 h-auto">
          <img src="/public/world.png" alt=" world Image" />
        </div>
      </div>
    </div>
  )
}

export default Home
