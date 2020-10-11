import React from 'react'
import Typewriter from 'typewriter-effect'
import Watch from '../images/watch.svg'

function Hero() {
    return (
        <div className="container mx-auto my-12">
            <div className="md:grid md:grid-cols-12 md:mx-0 mx-3 gap-4">
                <div className="text-gray-800 col-span-5">
                    <h1 className="md:text-6xl text-5xl font-bold leading-none">Software <br /> Development <br /> Agency</h1>
                    <div className="mt-16 text-2xl">We are a team of professionals focused on the innovation of 
                        <span className="font-semibold text-indigo-800 md:ml-2 md:inline-block block">
                        <Typewriter
                            options={{
                                strings: ['web application', 'mobile application', 'software', 'technology', 'virtual reality', 'augmented reality'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </span>
                        <p>design and development.</p>
                        <button className="bg-red-600 block mt-6 text-base uppercase px-3 py-2 text-gray-100 font-semibold rounded shadow">Let's discuss your project</button>

                    </div>
                </div>
                <div className="col-span-7 text-right md:my-0 my-10">
                    <img src={Watch} alt="Watch" />
                </div>
            </div>
        </div>
    )
}

export default Hero
