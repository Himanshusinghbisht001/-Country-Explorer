import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Country from './Pages/Country';
import Navbar from './Components/Navbar';
import Main from './Pages/Main';
import Fotter from './Components/Fotter';
import Details from './Components/Details';

function App() {
    return (
        <div>
            <div className=" min-h-screen w-full overflow-x-hidden bg-gray-950 text-white">
                <BrowserRouter>
                   <Navbar />
                    <Routes>
                        <Route path='/' element={ <Main /> } />
                        <Route path='/About' element={<About />} />
                        <Route path='/Contact' element={<Contact />} />
                        <Route path='/Country' element={<Country />} />
                        <Route path='/Details' element={<Details />} />
                        
                    </Routes>
                    <Fotter />
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
