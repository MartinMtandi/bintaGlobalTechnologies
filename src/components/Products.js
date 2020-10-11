import React from 'react'
import Work from '../images/work.svg'

function Products() {
    return (
        <div className="py-16 text-gray-800">
            <div className="md:grid md:grid-cols-2 md:gap-3 container mx-auto px-4 md:px-4">
                <div>
                    <h1 className="text-2xl text-gray-800 font-medium mb-3 text-center md:text-left">Custom Software Development Services</h1>
                    <p className="mb-8">
                        Need help bringing a new digital product to market? Need to rebuild an existing product that isn't scaling? Or, may be you have a legacy application that needs to be re-platformed - We can help.
                    </p>
                    <div className="mt-3 mb-8 md:mt-0 md:mb-0">
                        <img src={Work} alt="work-svg"/>
                    </div>
                </div>
                <div>
                    <div className="flex mb-3">
                        <div>
                            <div className="bg-indigo-200 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
                            </div>
                        </div>
                        <div className="mx-5">
                            <h2 className="text-lg font-medium">UI/UX Design</h2>
                            <p className="my-2">UX/UI Design is what makes everything look and feel good. It brings the users on an enchanting journey through the website or the app and gives the optimistic perception, which everybody need for their web platforms.</p>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div>
                            <div className="bg-red-200 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                        </div>
                        <div className="mx-5">
                            <h2 className="text-lg font-medium">Web Application Development</h2>
                            <p className="my-2">We are experts at designing and building state-of-the art single-page, API-first web applications.</p>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div>
                            <div className="bg-orange-200 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ecc94b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>
                        </div>
                        <div className="mx-5">
                            <h2 className="text-lg font-medium">Mobile Application Development</h2>
                            <p className="my-2">We can help you design and build fully responsive web apps, progressive-web apps and native mobile apps for both iOS and Android.</p>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div>
                            <div className="bg-green-200 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48bb78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                            </div>
                        </div>
                        <div className="mx-5">
                            <h2 className="text-lg font-medium">Augmented Reality</h2>
                            <p className="my-2">At Binta Global Technologies, we develop cutting edge VR/AR applications across sectors and application use cases. From real-estate to education and business communications, we've got the experience to build you an augmented reality experience that will blow your mind.</p>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div>
                            <div className="bg-purple-200 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#805ad5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            </div>
                        </div>
                        <div className="mx-5">
                            <h2 className="text-lg font-medium">Legacy Software Modernization</h2>
                            <p className="my-2">Companies have hundreds or thousands of applications they've used for years that are outdated, unsupported and expensive to maintain. We can help migrate them to the Binta Global Technologies platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
