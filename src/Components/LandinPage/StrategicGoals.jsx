import React from 'react'
import { FaRocket, FaChartLine, FaGlobe } from 'react-icons/fa'
import Animation from '../../lib/AnimationCard'
function StrategicGoals() {
    const goals = [
        {
            title: "Short-Term Goals",
            icon: <FaRocket className="text-white text-3xl" />,
            bg: "bg-blue-600",
            points: [
                "Establish a strong retail presence both offline and online.",
                "Partner with local artisans and small manufacturers.",
                "Launch pilot products focusing on Ayurveda and traditional crafts.",
            ]
        },
        {
            title: "Medium-Term Goals",
            icon: <FaChartLine className="text-white text-3xl" />,
            bg: "bg-yellow-600",
            points: [
                "Expand into urban retail markets while diversifying product offerings into textiles and fitness gear.",
                "Strengthen e-commerce capabilities to increase global market penetration.",
                "Set up rural business hubs to streamline sourcing and production.",
            ]
        },
        {
            title: "Long-Term Goals",
            icon: <FaGlobe className="text-white text-3xl" />,
            bg: "bg-green-600",
            points: [
                "Position Alaigram as a global leader in rural entrepreneurship.",
                "Scale distribution networks internationally while promoting cultural heritage through artisanal goods.",
                "Collaborate with government and NGOs for larger rural development projects.",
            ]
        },
    ]

    return (
        <section className="px-6 py-20 md:px-24 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Strategic Goals</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Our roadmap is designed to grow Alaigram from a grassroots initiative to a global platform for rural empowerment and sustainable commerce.
                </p>
            </div>

            <Animation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {goals.map((goal, index) => (
                        <div key={index} className="bg-gray-50 shadow hover:shadow-xl rounded-xl p-6 transition">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${goal.bg}`}>
                                {goal.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{goal.title}</h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                {goal.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Animation>
        </section>
    )
}

export default StrategicGoals
