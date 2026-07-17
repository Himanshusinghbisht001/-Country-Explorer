import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className=" ">
        <div className=" flex relative justify-between items-center px-12 py-3 bg-gray-800">
          <div className=" text-xl md:text-3xl font-bold ">
            <h1 >WorldAtlas</h1>
          </div>
          <div className={`${isOpen ? " block absolute top-10 right-15  bg-gray-600 rounded-2xl py-3 px-3 " : "hidden text-lg font-medium"} md:block `}>
              <div className=" flex  flex-col gap-2  md:flex-row md:gap-8 ">
                <NavLink to='/' className={({ isActive }) =>
                  isActive ? " text-blue-500 " : " text-white"
                } >Home</NavLink>
                <NavLink to='/About' className={({ isActive }) =>
                  isActive ? " text-blue-500 " : " text-white"
                }>About</NavLink>
                <NavLink to='/Country' className={({ isActive }) =>
                  isActive ? " text-blue-500 " : " text-white"
                } >Country</NavLink>
                <NavLink to='/Contact' className={({ isActive }) =>
                  isActive ? " text-blue-500 " : " text-white"
                } >Contact</NavLink>
              </div>
          </div>
          <div className=" md:hidden ">
            <AiOutlineMenu onClick={() => {
              setIsOpen(!isOpen);
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
