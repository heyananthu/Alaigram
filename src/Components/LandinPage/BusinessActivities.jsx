import React from 'react'

const activities = [
    {
        title: 'Distribution Services',
        image: 'https://img.freepik.com/free-photo/warehouse-workers-checking-shipping-delivery_23-2148888777.jpg?w=740',
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
        image: 'https://img.freepik.com/free-photo/artisan-hands-carving-wood-artwork-workshop_53876-137129.jpg?t=st=1715169034~exp=1715172634~hmac=b9c17beff3e27b7c7d51b481bf8f5ed60b36199d223ad6d15d6826a0d1e7d552&w=740',
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
        <section className="py-20 px-6 md:px-24 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800">Our Business Activities</h2>
                <p className="text-lg text-blue-600 mt-2">Two Pillars of Growth</p>
            </div>

            <div className="space-y-24">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${
                            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        } items-center gap-10`}
                    >
                        <div className="md:w-1/2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto rounded-xl shadow-md"
                            />
                        </div>
                        <div className="md:w-1/2">
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
