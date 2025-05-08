import React from 'react';
import Pottery from '../../assets/poettry.jpg'
function AboutSection() {
    return (
        <section className="bg-[#f1f2e9] py-20 px-4 md:px-20">
            <h2 className="text-3xl md:text-7xl font-bold uppercase  leading-tight mb-8 text-center">
                Waves of Change: Connecting Rural India to Global Markets
            </h2>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Text Section */}
                <div>

                    <p className="text-lg text-gray-700 mb-6">
                        At <strong>Alaigram</strong> we believe in the power of transformation. Inspired by the Tamil words Alai (waves) and Gramam (village), our mission is to create a progressive wave that connects rural India with expansive national and global markets. We are dedicated to empowering artisans, farmers, and small-scale manufacturers, fostering an ecosystem where indigenous products flourish and thrive.

                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Rooted in the principles of sustainability and inclusivity, Alaigram acts as a catalyst for economic upliftment while preserving the rich cultural heritage of rural craftsmanship. By merging traditional skills with contemporary marketing strategies, we aim to elevate Indian rural products on both national and international stages, aligning with initiatives like Make in India and Vocal for Local. </p>
                    <p className="text-lg text-gray-700">
                        Alaigram is not just a business; it’s a movement dedicated to meaningful change. We harness the potential of rural India to meet modern demands, building bridges between tradition and innovation. Join us as we embark on this journey—because at Alaigram                    </p>
                    <h3 className="text-xl font-semibold mt-6">Alaigram, <span className="text-[#2a9d8f]">Waves of Change</span> is more than just a tagline;</h3>
                </div>

                {/* Right Image Section */}
                <div className="flex justify-center">
                    <img
                        src={Pottery} // Make sure to place your image in the right directory
                        alt="Pottery Hand"
                        className="rounded-lg  max-h-[600px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
