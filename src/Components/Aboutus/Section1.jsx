import React from 'react'
import Breadcrumbs from './Breadcrumbs'

function Section1() {
    return (
        <div>
            <div
                className="hero h-[20rem]"
                style={{
                    backgroundImage:
                        "url(https://static.vecteezy.com/system/resources/thumbnails/023/029/264/small/group-of-traditional-medicine-top-view-with-aesthetic-arrangement-on-concrete-background-photo.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">ABOUT US</h1>
                        <p className="mb-5 text-2xl md:text-nowrap">
                            Welcome to Alaigram United Private Limited
                        </p>
                        <p className="mb-5">
                            Waves of Change:Connecting Rural India to the World
                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <Breadcrumbs />

        </div>
    )
}

export default Section1
