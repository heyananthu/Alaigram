import React from 'react'
import mission from '../../assets/Mission & Vision.jpg'
import whoweare from '../../assets/who we are.jpg'
import whychooseus from '../../assets/why choose us.jpg'
import ourstory from '../../assets/ourstory2.avif'
import whatweoffer from '../../assets/whatweoffer.jpg'
function Section2() {
    return (
        <div>
            <section>
                <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div class="grid gap-5 row-gap-8 lg:grid-cols-2 md:space-x-8">
                        <div>
                            <img class="object-cover w-full h-90 md:h-80 rounded shadow-lg sm:h-100" src={whoweare}
                                alt="" />
                        </div>
                        <div class="flex flex-col justify-center">
                            <div class="max-w-xl mb-6 ">
                                <h4 class="mb-2 font-semibold text-2xl md:text-5xl">
                                    Who We Are</h4>
                                <p class="text-base text-gray-700 mt-4">
                                    Alaigram, inspired by the Tamil words Alai (waves) and Gramam (village), is a transformative initiative dedicated to empowering rural artisans, farmers, and small-scale manufacturers. Our mission is rooted in sustainability, inclusivity, and the belief that every village has the potential to thrive in a global market.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div>
                                <h4 class="mb-2 font-semibold text-2xl md:text-5xl">
                                    Mission & Vision
                                </h4>
                                <p class="text-base text-gray-700 mt-4 ">
                                    Our mission is clear: to create innovative platforms for marketing and distributing rural India’s finest products while preserving our rich cultural heritage. We envision a future where rural creativity meets urban and global demand, fostering a self-reliant and sustainable India that celebrates its diversity.
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col justify-center">
                            <div class="max-w-xl mb-6">
                                <img class="object-cover w-85 h-85 md:h-80 w-full rounded shadow-lg sm:h-96"
                                    src={mission} alt="" />
                            </div>
                        </div>
                        <div>
                            <img class="object-cover w-full h-90 md:h-80 rounded shadow-lg sm:h-100" src={ourstory}
                                alt="" />
                        </div>

                        <div class="flex flex-col justify-center">
                            <div class="max-w-xl mb-6">
                                <h4 class="mb-2 font-semibold text-2xl md:text-5xl">
                                    Our Story</h4>
                                <p class="text-base text-gray-700 mt-4 ">
                                    The journey of Alaigram began with a deep appreciation for India's rich heritage and the pressing need to uplift rural economies. By leveraging modern business strategies, we amplify the voices of artisans and create pathways for their exceptional products to reach global markets.


                                </p>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div>
                                <h4 class="mb-2 font-semibold text-2xl md:text-5xl">
                                    What We Offer
                                </h4>
                                <p class="text-base text-gray-700 mt-4">
                                    Alaigram presents a diverse portfolio that showcases the best of rural craftsmanship. From organic foods and handwoven textiles to Ayurvedic wellness products and handcrafted decor, we integrate traditional skills with contemporary business models. Our eco-friendly packaging solutions further enhance our commitment to sustainability.

                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center">
                            <div class="max-w-xl mb-6">
                                <img class="object-cover w-85 h-85 md:h-80 w-full rounded shadow-lg sm:h-96"
                                    src={whatweoffer} alt="" />
                            </div>
                        </div>

                        <div>
                            <img class="object-cover w-full h-90 md:h-80 rounded shadow-lg sm:h-100" src={whychooseus}
                                alt="" />
                        </div>

                        <div class="flex flex-col justify-center">
                            <div class="max-w-xl mb-6">
                                <h4 class="mb-2 font-semibold text-2xl md:text-5xl">
                                    Why Choose Us?</h4>
                                <p class="text-base text-gray-700 mt-4">
                                    What sets Alaigram apart is our unwavering commitment to ethical sourcing, sustainability, fair pricing, and social impact. We actively support rural entrepreneurship while promoting eco-conscious products that reflect authenticity and quality. By choosing us, you’re not just purchasing goods; you’re contributing to a movement that empowers communities.

                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default Section2
