import React from 'react'
import Logo from '../images/qbright.png'

function Navbar() {
    return (
    <div>
        <nav className="flex items-center container mx-auto justify-between flex-wrap p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <img className="h-24" src={Logo} alt="Logo" />
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto uppercase text-gray-800 font-semibold">
                <div className="text-sm lg:flex-grow text-right">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-6">
                        Home
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-6">
                        Services
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
                        About
                    </a>
                </div>
                <div className="lg:ml-6">
                    <button className="inline-block uppercase px-4 py-2 leading-none border rounded text-white border-red-600 shadow bg-red-600 hover:bg-red-700 mt-4 lg:mt-0">Get Quote</button>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
