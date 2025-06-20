import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import banner from '../../assets/blog-banner.avif'
import AnimationCard from '../../lib/AnimationCard'
function Herosection() {
    return (
        <div>
            <div
                className="hero h-[15rem] bg-cover"
                style={{
                    backgroundImage:
                        `url(${banner})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <AnimationCard>

                        <h1 className="mb-5 text-3xl font-bold lg:text-nowrap">Welcome to Our Blog</h1>
                        </AnimationCard>
                        {/* <p className="mb-5 text-2xl md:text-nowrap">
                            Welcome to Alaigram United Private Limited
                        </p>
                        <p className="mb-5">
                            Waves of Change : Connecting Rural India to the World
                        </p> */}
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <Breadcrumbs />
        </div>
    )
}

export default Herosection
