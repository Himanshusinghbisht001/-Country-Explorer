import React from 'react'
import { useLocation } from 'react-router-dom'

function Details() {

  const location = useLocation()

  const counter = location.state;
  console.log(counter);


  return (
    <div>
      <div className=" px-10 py-10 flex flex-col sm:flex-row  gap-15 items-center justify-center">
        <div className="">
          <img className=' w-60 md:w-120 h-auto rounded-lg' src={counter.flags.png} alt="" />
        </div>
        <div className=" flex flex-col gap-3 ">
          <h1 className=' text-3xl md:text-5xl'>{counter.name}</h1>
          <div className=" text-xl md:text-2xl">
            <p> <span className=' text-gray-400'>Captical</span> : {counter.capital}</p>
            <p> <span className=' text-gray-400'>Region</span> : {counter.region}</p>
            <p> <span className=' text-gray-400'>Population</span> : {counter.population.toLocaleString()}</p>
            <p> <span className=' text-gray-400'>Total Area</span> : {counter.area}</p>
            <p> <span className=' text-gray-400'>Subregion</span> : {counter.subregion}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details

