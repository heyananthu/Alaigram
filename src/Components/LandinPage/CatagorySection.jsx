import React from 'react';
import prd1 from '../../assets/sail1.webp';
import AnimatedInView from '../../lib/AnimationCard'; // Import the generic animation component

function CatagorySection() {
    const data = [
        { img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg", title: "New Product" },
        { img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg", title: "New Product" },
        { img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg", title: "New Product" },
        { img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg", title: "New Product" },
    ];

    return (
        <div className="max-w-screen mx-auto lg:p-12 p-5 flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Heading and Button */}
            <div className="w-full lg:w-1/2 flex flex-col lg:grid lg:grid-cols-1 lg:gap-12 items-center lg:items-start">
                <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl text-center lg:text-left">
                    Our Exclusive <br /> Categories
                </h1>
                <button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-700 to-blue-400 lg:w-[8rem] w-28 px-5 lg:h-12 h-10 rounded-md text-white cursor-pointer whitespace-nowrap">
                    Shop All
                </button>
            </div>


            {/* Category Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                {data.map((item, index) => (
                    <AnimatedInView key={index} index={index}>
                        <div className="text-center space-y-2">
                            <img
                                src={item.img}
                                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full object-cover transition-all duration-300 border-2 border-gray-300"
                                alt={item.title}
                            />
                            <p className="text-sm sm:text-base">{item.title}</p>
                        </div>

                    </AnimatedInView>
                ))}
            </div>
        </div>
    );
}

export default CatagorySection;
