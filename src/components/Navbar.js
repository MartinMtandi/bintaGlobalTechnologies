import React, {useState} from 'react'
import Logo from '../images/qbright.png'

function Navbar() {
    const [toggleOpen, setToggleOpen] = useState(false);

    return (
    <div>
        <nav className="flex items-center container mx-auto justify-between flex-wrap p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <img className="h-24" src={Logo} alt="Logo" />
            </div>
            <div className="block md:hidden">
                <button onClick={() => setToggleOpen(!toggleOpen)} className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`w-full ${(toggleOpen) ? "block" : "md:block hidden"} flex-grow md:flex md:items-center md:w-auto uppercase text-gray-800 font-semibold`}>
                <div className="text-sm md:flex-grow text-right">
                    <a href="#home" className="block mt-4 md:inline-block md:mt-0 md:mr-6">
                        Home
                    </a>
                    <a href="#services" className="block mt-4 md:inline-block md:mt-0 md:mr-6">
                        Services
                    </a>
                    <a href="#about" className="block mt-4 md:inline-block md:mt-0">
                        About
                    </a>
                </div>
                <div className="md:ml-6 text-right md:text-left">
                    <a href="#contact-us" className="inline-block uppercase px-4 py-2 leading-none border rounded text-white border-red-600 shadow bg-red-600 hover:bg-red-700 mt-4 md:mt-0">Get Quote</a>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
