import React from 'react'
import ar from '../images/ar.jpg'

function AboutUs() {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="text-gray-800 font-semibold text-4xl text-center pt-12">About Binta Global Technologies</h1>
                <div className="grid grid-cols-6 gap-4 items-center pt-5">
                    <div className="col-span-3">
                        <p className="text-gray-800 leading-10 mr-2">
                            "We are a global IT and digital transformation champion that supports our customers in realizing technology’s huge potential for a smarter and more sustainable world.
                            We’ve united creativity and innovation with the instant impact and execution power of a large IT solution provider.
                            Customer experience is the new battleground and Binta Global Technologies is your partner to master the challenge"
                        </p>
                    </div>
                    <div className="col-span-3">
                      <img src={ar} alt="augmented reality" className="ml-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
