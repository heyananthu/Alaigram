import React from 'react'
import Animation from '../../lib/AnimationCard'
function CallToAction() {
    return (
        <section className="px-6 py-12 md:px-20 bg-blue-50 text-gray-800 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-3xl font-bold mb-4">Join Us in Making an Impact!</h2>
                <p className="mb-6">
                    By choosing Alaigram Private Limited, you are not just purchasing premium quality products; you are investing in the future of rural excellence—where tradition meets innovation for holistic wellness.                </p>
                <p className='font-bold'>Explore our collection today or partner with us to support ethical trade practices that empower rural artisans!
                </p>
                <p>🌊 Alaigram – Waves of Change, Strengthening Rural India! 🌿</p>
                <div className="space-x-4 space-y-3 md:flex justify-center">
                    <Animation>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Discover Our Products</button>
                    </Animation>
                    <Animation>
                        <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">Partner With Us</button>
                    </Animation>
                    <Animation>
                        <button className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Join Our Mission</button>
                    </Animation>
                </div>
            </div>
        </section>
    )
}

export default CallToAction

