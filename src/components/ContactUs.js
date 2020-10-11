import React from 'react'

function ContactUs() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-0">
            <h1 className="text-gray-800 font-semibold md:text-4xl text-2xl text-center pt-12">Request a Quotation</h1>    
            <div className="mt-5">
                <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                        <input className="border px-2 py-3 text-lg w-full" placeholder="First Name" />
                    </div>
                    <div>
                        <input className="border px-2 py-3 text-lg w-full" placeholder="Last Name" />
                    </div>
                </div>
                <div className="mb-3">
                    <input className="border px-2 py-3 text-lg w-full" placeholder="Email"/>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                        <input className="border px-2 py-3 text-lg w-full" placeholder="Phone Number" />
                    </div>
                    <div>
                        <input className="border px-2 py-3 text-lg w-full" placeholder="Company" />
                    </div>
                </div>
                <div className="w-full border border-gray-400 rounded p-2">
                    <p className="text-gray-500 text-lg py-2 mx-1">Describe your idea</p>
                    <textarea className="w-full resize-none px-2 text-gray-800 focus:outline-none" rows="5" cols="50">
                    
                    </textarea>
                    <div className="flex items-center">
                        <div className="bg-grey-lighter mx-3">
                            <label className="flex items-center px-4 py-2 text-gray-100 bg-gray-700 rounded cursor-pointer">
                                <svg className="w-6 h-6 text-gray-100" fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="text-base leading-normal mx-2">Attach File</span>
                                <input type='file' className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="my-5 text-right">
                    <button className="px-12 py-2 rounded uppercase font-semibold text-white bg-red-600">Send Message</button>
                </div>
            </div>  
        </div>
    )
}

export default ContactUs
