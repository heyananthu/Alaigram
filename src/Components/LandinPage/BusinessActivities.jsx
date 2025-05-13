import React from 'react'
import whychooseus from '../../assets/why choose us.jpg'
import ourstory from '../../assets/Our Story.jpg'
import distribution from '../../assets/Distribution Services2.webp'

const activities = [
    {
        title: 'Distribution Services',
        image: distribution,
        description: [
            {
                subtitle: 'Comprehensive Retail Partnerships',
                text: 'We establish offline and online retail networks that connect rural artisans with urban consumers. By partnering with retailers, wholesalers, and e-commerce platforms, we ensure ethical trade practices and fair pricing for all.'
            },
            {
                subtitle: 'E-commerce Expansion',
                text: 'Our e-commerce platform allows consumers worldwide to access premium quality products directly from rural producers. This enhances market access for our artisans while fostering global outreach.'
            },
            {
                subtitle: 'Consultancy Services',
                text: 'We offer tailored consultancy services, including market analysis, branding, packaging, and digital marketing strategies designed for small-scale manufacturers. Our training programs focus on quality control and consumer trends to help rural producers thrive.'
            }
        ]
    },
    {
        title: 'Product Innovation',
        image: ourstory,
        description: [
            {
                subtitle: 'Organic Foods & Beverages',
                text: 'Traditional snacks and herbal drinks made from organic ingredients.'
            },
            {
                subtitle: 'Ayurvedic Wellness',
                text: 'Herbal oils, wellness supplements, and skincare products rooted in ancient Ayurvedic traditions.'
            },
            {
                subtitle: 'Handcrafted Textiles & Artisanal Fashion',
                text: 'Handwoven garments made from sustainable materials like khadi and silk.'
            },
            {
                subtitle: 'Sports & Fitness Gear',
                text: 'Affordable and durable fitness equipment designed for active lifestyles.'
            },
            {
                subtitle: 'Traditional Arts & Crafts',
                text: 'Handcrafted decor items that reflect India’s rich cultural heritage.'
            },
            {
                subtitle: 'Eco-Friendly Packaging Solutions',
                text: 'Biodegradable and recyclable packaging options supporting eco-conscious living.'
            },
            {
                subtitle: 'Sustainable Drinking Water Solutions',
                text: 'Safe and responsibly sourced drinking water solutions.'
            }
        ]
    }
]

function BusinessActivities() {
    return (
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-800">Our Business Activities</h2>
                <p className="text-lg text-blue-600 mt-2">Two Pillars of Growth</p>
            </div>

            <div className="space-y-24">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row ${
                            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                        } items-center gap-10`}
                    >
                        <div className="lg:w-1/2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto lg:h-[35rem] rounded-xl shadow-lg object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                                {item.title}
                            </h3>
                            <div className="space-y-5 text-gray-700 text-[17px] leading-relaxed">
                                {item.description.map((section, i) => (
                                    <div key={i}>
                                        <p className="font-semibold text-gray-800">
                                            {section.subtitle}
                                        </p>
                                        <p>{section.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BusinessActivities
