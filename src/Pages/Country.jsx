import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'


function Country() {

  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const responce = await axios.get(`https://countries.dev/countries`)
    console.log(responce.data);
    setCountries(responce.data)
  }

  useEffect(() => {
    getCountries()
  }, [])

  const navigation = useNavigate();

  const [searchCountries, setSearchCountries] = useState("");


  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchCountries.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);

  const countryPerPage = 9;

  const indexOfLastCountry = currentPage * countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry,
  )

  const totalPage = Math.ceil(filteredCountries.length / countryPerPage);


  useEffect(() => {
    setCurrentPage(1);
  }, [searchCountries]);


  return (
    <div>
      <div className="flex justify-center my-4 md:my-6">
        <input
          type="text"
          placeholder="Search Country..."
          value={searchCountries}
          onChange={(e) => setSearchCountries(e.target.value)}
          className="border px-4 py-2 rounded-lg w-50 md:w-80"
        />
      </div>

      <div className=" w-full px-5 py-5 sm:px-10 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-8">

        {
          currentCountries.map((elem) => {
            return (
              <div key={elem.alpha3Code} className=" w-40 md:w-60 lg:w-70 h-auto flex items-center justify-center flex-col gap-3 border px-5 py-2 rounded-2xl ">
                <div className="">
                  <img className=' w-30 h-auto sm:w-auto md:h-full' src={elem.flags.png} alt="" />
                </div>
                <h1 className=' text-lg md:text-2xl font-medium'>{elem.name}</h1>
                <div className=" flex items-center flex-col gap-1 text-sm md:text-xl">
                  <p> <span className=' text-gray-400'>Population</span> : {elem.population.toLocaleString()}</p>
                  <p> <span className=' text-gray-400'>Region</span> : {elem.region}</p>
                  <p> <span className=' text-gray-400'>Capital</span> : {elem.capital}</p>
                </div>
                <button onClick={(() => {
                  navigation("/Details", {
                    state: elem,
                  })
                })} className=' w-fit flex gap-2 items-center border-none rounded-lg text-sm md:text-xl px-3 py-1 cursor-pointer bg-blue-700 active:bg-blue-900'>Read More <FaArrowRightLong /></button>
              </div>
            )
          })
        }
      </div>

      <div className=" flex justify-center gap-5 md:gap-10 my-8">
        <button onClick={() => setCurrentPage(currentPage - 1)} className=' text-lg md:text-2xl font-medium border-none py-1 px-3 md:px-6 md:py-2 bg-blue-600 rounded-xl cursor-pointer'>Prev</button>
        <p className=' text-3xl md:text-4xl'> {currentPage}/{totalPage}</p>
        <button onClick={() => { setCurrentPage(currentPage + 1) }} className=' text-lg md:text-2xl font-medium border-none py-1 px-3 md:px-6 md:py-2 bg-blue-600 rounded-xl cursor-pointer'>Next</button>
      </div>


    </div>
  )
}

export default Country
