import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";

function Fotter() {
  return (
    <div>
      <div className=" flex md:justify-between flex-col md:flex-row gap-5 bg-blue-900 items-start md:items-center px-10 py-3">
        <div className=" flex  items-center  justify-center gap-3">
            <FaLocationDot className=' text-xl md:text-3xl text-blue-500' />
            <div className="">
              <h1 className=' text-xl md:text-2xl'>Find Us</h1>
              <p>Uttar Predash , Bulandshahar</p>
            </div>
        </div>
        <div className=" flex items-center  justify-center gap-3">
            <MdCall className=' text-xl md:text-3xl text-blue-500' />
            <div className="">
              <h1 className=' text-lg md:text-2xl'>Call Us</h1>
              <p> +91 7881897535</p>
            </div>
        </div>
        <div className=" flex items-center  justify-center gap-3">
            <RiMessage2Fill className=' text-xl md:text-3xl text-blue-500' />
            <div className="">
              <h1 className=' text-xl md:text-2xl'>Message Us</h1>
              <p>himanshusinghbisht0011@gmail.com</p>
            </div>
        </div>
      </div>
      <div className=" flex items-center justify-center py-2">
        <p className=' flex items-center gap-2'>Copyright <MdOutlineCopyright /> 2026 , All Right Reserved <span className=' text-blue-600 font-light'>Himasnhu Singh Bisht</span></p>
      </div>
    </div>
  )
}

export default Fotter
