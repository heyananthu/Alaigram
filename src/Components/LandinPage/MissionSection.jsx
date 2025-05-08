import React from 'react';

function MissionSection() {
    return (
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        Bridging Tradition and Innovation
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Alaigram United Private Limited is on a mission to transform rural enterprises by blending traditional craftsmanship with modern market demands. Our commitment to sustainable business practices empowers rural artisans, enriches communities, and ensures the cultural heritage of rural India thrives. Through robust distribution networks and increased market access, we create a future where every artisan has the opportunity to shine.
                    </p>
                </div>

                {/* Image */}
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1604998103929-0d6f62f97e14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Artisan working"
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default MissionSection;
