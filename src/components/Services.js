import React from 'react'
import UI from '../images/ux-ui-active.svg'
import web from '../images/web-development-active.svg'
import mobile from '../images/mobile-development-active.svg'
import machineLearning from '../images/machine-learning-active.svg'
import productDesign from '../images/product-management-active.svg'

function Services() {
    return (
        <div className="bg-red-100 mt-32 md:mt-0">    
            <h1 className="text-gray-800 font-semibold md:text-4xl text-2xl leading-9 md:leading-none text-center pt-12">Software Development Services</h1>            
            <div className="md:flex md:item-center grid grid-cols-2 md:justify-between pb-12 pt-6 container mx-auto text-center">
                <div>
                    <img src={UI} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">UX/UI <br />Design</p>
                </div>
                <div>
                    <img src={web} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">Web <br /> Development</p>
                </div>
                <div>
                    <img src={mobile} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">Mobile <br />Development</p>
                </div>
                <div>
                    <img src={machineLearning} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">Augmented <br />Reality</p>
                </div>
                <div>
                    <img src={productDesign} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">Legacy Software <br />Modernization</p>
                </div>
            </div>
        </div>
    )
}

export default Services
