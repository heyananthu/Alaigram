import React from 'react'
import { FaLeaf, FaBalanceScale, FaHandsHelping, FaGlobeAsia } from 'react-icons/fa'
import Animation from '../../lib/FadeInWhenVisible'
const values = [
    {
        title: "Sustainability",
        description: "We prioritize eco-friendly operations that ensure minimal impact on the environment.",
        icon: <FaLeaf className="text-green-600 text-4xl mb-4" />
    },
    {
        title: "Fair Pricing",
        description: "Our ethical sourcing guarantees fair compensation for artisans while providing consumers with high-quality products at reasonable prices.",
        icon: <FaBalanceScale className="text-yellow-600 text-4xl mb-4" />
    },
    {
        title: "Empowerment of Rural Communities",
        description: "Through skill empowerment initiatives and job creation programs, we support women entrepreneurs and drive socio-economic development in rural areas.",
        icon: <FaHandsHelping className="text-pink-600 text-4xl mb-4" />
    },
    {
        title: "Global Expansion of Indian Heritage Products",
        description: "We position Indian handicrafts as premium offerings in international markets through strategic partnerships and innovative marketing strategies.",
        icon: <FaGlobeAsia className="text-blue-600 text-4xl mb-4" />
    },
]

function ValuePropositions() {
    return (
        <section className="px-6 py-20 md:px-24 bg-gray-50 text-gray-800">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Unique Value Propositions</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Alaigram stands out in the marketplace due to our unwavering commitment to these principles:
                </p>
            </div>

            <Animation>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((val, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
                        >
                            {val.icon}
                            <h3 className="text-xl font-semibold mb-2 text-blue-800">{val.title}</h3>
                            <p className="text-gray-600 text-sm">{val.description}</p>
                        </div>
                    ))}
                </div>
            </Animation>
        </section>
    )
}

export default ValuePropositions
