import React from 'react';
import Animationview from '../../lib/FadeInWhenVisible';
import AnimationCard from '../../lib/AnimationCard';

function Newarraival() {
    const data = [
        {
            title: "Herbal Wellness",
            discription: "Natural remedies for daily health support.",
            img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg"
        },
        {
            title: "Skin Care",
            discription: "Organic solutions for healthy glowing skin.",
            img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg"
        },
        {
            title: "Digestive Health",
            discription: "Boost your gut with powerful herbal blends.",
            img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg"
        },
        {
            title: "Immunity Support",
            discription: "Strengthen your immunity with Ayurvedic care.",
            img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg"
        },
        {
            title: "Heart Health",
            discription: "Support cardiovascular wellness naturally.",
            img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg"
        },
        {
            title: "Mental Calmness",
            discription: "Balance stress and improve sleep cycles.",
            img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg"
        },
        {
            title: "Hair Growth",
            discription: "Strengthen and nourish your hair roots.",
            img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg"
        },
        {
            title: "Women’s Health",
            discription: "Natural care for hormonal balance & energy.",
            img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                <AnimationCard>
                    <h1 className="text-2xl md:text-5xl font-bold text-center text-blue-900 mb-10">
                        ✨ New Arrivals ✨
                    </h1>
                </AnimationCard>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item, index) => (
                        <Animationview key={index}>
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 text-center">
                                <div className="flex justify-center">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-blue-200 hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-semibold text-blue-800">{item.title}</h2>
                                    <p className="text-sm text-gray-600 mt-2">{item.discription}</p>
                                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </Animationview>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Newarraival;
