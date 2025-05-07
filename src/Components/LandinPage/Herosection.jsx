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
                        "url(https://img.freepik.com/premium-photo/composition-with-smartphone-used-digital-shopping-online-ordering_23-2151380469.jpg?semt=ais_hybrid&w=740)",
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
