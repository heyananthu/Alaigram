import React from 'react';
import Animationview from '../../lib/FadeInWhenVisible';
import AnimationCard from '../../lib/AnimationCard';
import books from '../data/book'


function Newarraival() {

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                <AnimationCard>
                    <h1 className="text-2xl md:text-5xl font-bold text-center text-blue-900 mb-10">
                        ✨ New Arrivals ✨
                    </h1>
                </AnimationCard>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {books.map((item, index) => (
                        <Animationview key={index}>
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 text-center h-[25rem] flex flex-col justify-between">
                                <div className="flex justify-center">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-[18rem] w-[14rem] object-cover border-4 border-blue-200 hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="mt-4 flex flex-col flex-1">
                                    <h2 className="text-md font-semibold text-blue-800">{item["Item Name"]}</h2>
                                    {/* <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.discription}</p> */}
                                    {/* <button className="mt-auto w-full bg-gradient-to-r from-blue-700 to-blue-400 text-white py-2 rounded-lg transition duration-300">
                                        Buy Now
                                    </button> */}
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
