import React from 'react'
import Herosub from './Herosub'
import AnimationCard from '../../lib/AnimationCard'

function Herosection() {
    return (
        <div>
            <div
                className="hero h-[32rem]"
                style={{
                    backgroundImage:
                        "url(https://t4.ftcdn.net/jpg/02/16/47/35/360_F_216473592_NefHePTpMfvYMNjD3UQTUVJy7DFPwqKA.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <AnimationCard>
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-5xl font-extrabold leading-tight">
                                Waves of Change 🌊
                            </h1>
                            <p className="mb-6 text-lg">
                                Empowering rural India by connecting artisans to the global market through sustainable and ethical eCommerce solutions.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="md:px-6 md:py-2 px-2 bg-gradient-to-r from-blue-700 to-blue-400 hover:bg-blue-700 transition rounded-md font-medium">
                                    Shop Now
                                </button>
                                <button className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black transition rounded-md font-medium">
                                    Partner With Us
                                </button>
                            </div>
                        </div>
                    </AnimationCard>
                </div>
            </div>
            <Herosub />
        </div>
    )
}

export default Herosection
