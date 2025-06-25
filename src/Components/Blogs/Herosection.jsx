import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import banner from '../../assets/blog-banner.avif'
import AnimationCard from '../../lib/AnimationCard'
function Herosection() {
    return (
        <div>
            <div
                className="hero h-[10rem] bg-cover"
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
                    </div>
                </div>
            </div>
            <Breadcrumbs />
        </div>
    )
}

export default Herosection
