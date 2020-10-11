import React from 'react'
import ar from '../images/ar.jpg'

function AboutUs() {
    return (
        <div>
            <div className="container mx-auto px-4 md:px-0">
                <h1 className="text-gray-800 font-semibold md:text-4xl text-2xl text-center pt-12">About Binta Global Technologies</h1>
                <div className="md:grid md:grid-cols-6 md:gap-4 items-center pt-5">
                    <div className="col-span-3">
                        <p className="text-gray-800 md:leading-10 md:mr-2">
                            "We are a global IT and digital transformation champion that supports our customers in realizing technology’s huge potential for a smarter and more sustainable world.
                            We’ve united creativity and innovation with the instant impact and execution power of a large IT solution provider.
                            Customer experience is the new battleground and Binta Global Technologies is your partner to master the challenge"
                        </p>
                    </div>
                    <div className="col-span-3 mt-16 md:mt-0">
                      <img src={ar} alt="augmented reality" className="ml-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
