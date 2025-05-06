import React from 'react';
import {Link} from 'react-router-dom'
function Contact() {
    return (
        <div className="relative overflow-hidden rounded-md border border-gray-100 backdrop-blur-sm">
            {/* Background Image with Mirror Effect */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center scale-x-[-1]"
                style={{
                    backgroundImage:
                        "url('https://jantayu.co.in/public/main-banner/1636757198_dea8ddc639153ed37e1f.jpg')",
                }}
            ></div>

            {/* Overlay to dim the image (optional) */}
            <div className="absolute inset-0 z-10 bg-blue-400/10"></div>

            {/* Content */}
            <div className="relative z-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white rounded shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/035/978/179/small/ai-generated-indian-ayurveda-herbal-medicine-free-photo.jpg"
                            alt="call_now"
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="#fff"
                        >
                            <polygon points="17.3 0 20 0 20 104 0.82 104"></polygon>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2">
                        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                            Get in Touch
                        </h5>
                        <p className="mb-5 text-gray-800">
                            <span className="font-bold">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC looked up one of the more obscure Latin words, consectetur,
                            </span>
                        </p>
                        <div className="flex items-center">
                            <Link
                                to='/contactus'
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-blue-600 to-blue-400 hover:bg-sec focus:shadow-outline focus:outline-none"
                            >
                                Contact Us Now
                                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
