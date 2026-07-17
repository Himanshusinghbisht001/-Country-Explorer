import React from 'react'

function About() {

  const countries = [
    {
      id: 1,
      country: "India",
      capital: "New Delhi",
      population: "1.43 Billion",
      fact: "India is the world's largest democracy."
    },
    {
      id: 2,
      country: "Japan",
      capital: "Tokyo",
      population: "123 Million",
      fact: "Japan has more than 6,800 islands."
    },
    {
      id: 3,
      country: "United States",
      capital: "Washington, D.C.",
      population: "340 Million",
      fact: "The United States has 50 states."
    },
    {
      id: 4,
      country: "Canada",
      capital: "Ottawa",
      population: "41 Million",
      fact: "Canada has the longest coastline in the world."
    },
    {
      id: 5,
      country: "Australia",
      capital: "Canberra",
      population: "27 Million",
      fact: "Australia is the only country that is also a continent."
    },
    {
      id: 6,
      country: "Brazil",
      capital: "Brasília",
      population: "212 Million",
      fact: "The Amazon Rainforest covers a large part of Brazil."
    },
    {
      id: 7,
      country: "France",
      capital: "Paris",
      population: "68 Million",
      fact: "France is the most visited country in the world."
    },
    {
      id: 8,
      country: "Germany",
      capital: "Berlin",
      population: "84 Million",
      fact: "Germany is famous for the Autobahn, where some highways have no speed limit."
    },
    {
      id: 9,
      country: "China",
      capital: "Beijing",
      population: "1.41 Billion",
      fact: "China is home to the Great Wall."
    },
    {
      id: 10,
      country: "South Africa",
      capital: "Pretoria",
      population: "63 Million",
      fact: "South Africa has three capital cities."
    }
  ];

  return (
    <div>
      <div className="  flex flex-col gap-10 justify-center mt-15 mb-10  items-cente">
        <div className="text-3xl md:text-5xl text-center px-4 ">
          <h1>Here are the Interesting Facts we'er Proud of </h1>
        </div>
        <div className=" flex flex-wrap justify-center pb-10 px-4   gap-10 ">
          {
            countries.map(( elem , index) => {
              return (
                <div key={index} className=" flex flex-col gap-2 border  w-70  h-auto border-gray-600 px-5  py-3 rounded-lg bg-gray-600 ">
                  {/* country name */}
                  <h1 className=' text-2xl font-medium'>{elem.country}</h1>
                  <p className=' text-xl'> <span className=' text-gray-400'>Capital</span> - {elem.capital} </p>
                  <p className=' text-xl'> <span className=' text-gray-400'>Population</span> - {elem.population}</p>
                  <div className=" text-xl">
                    <p className=' text-gray-400'>Interesting Fact - </p>
                    <p>{elem.fact}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About
