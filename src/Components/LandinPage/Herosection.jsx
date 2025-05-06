import React from 'react'
import Herosub from './Herosub'
import AnimationCard from '../../lib/AnimationCard'

function Herosection() {
    return (
        <div>
            <div
                className="hero h-[34rem]"
                style={{
                    backgroundImage:
                        "url(https://static.vecteezy.com/system/resources/thumbnails/052/247/285/small_2x/a-round-of-green-leaves-and-bamboo-bowls-on-a-dark-background-photo.jpeg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <AnimationCard>
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="px-4 py-3 rounded bg-blue-600">Get Started</button>
                        </div>
                    </AnimationCard>
                </div>
            </div>
            <Herosub />
        </div>
    )
}

export default Herosection
