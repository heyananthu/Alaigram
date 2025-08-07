import React, { useEffect } from 'react'
import Navbar from '../../../Components/LandinPage/Navbar'
import Footer from '../../../Components/LandinPage/Footer'
import AnimationCard from '../../../lib/AnimationCard'
import { useNavigate } from 'react-router-dom'
import banner from '../../../assets/blog5.jpg'

function FifthBlog() {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className="relative w-full h-[28rem] md:h-[26rem]">
                <img
                    src={banner}
                    alt="Malayalam Translations of Global Bestsellers"
                    className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent flex items-center justify-center">
                    <div className="text-center px-4 animate-fade-in">
                        <AnimationCard>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                                Why Malayalam Translations of Global Bestsellers Matter More Than Ever
                            </h1>
                            <p className="text-lg md:text-2xl text-amber-100 mt-4 max-w-2xl mx-auto">
                                Bridging Cultures Through Literature
                            </p>
                        </AnimationCard>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <article className="lg:col-span-2 prose prose-lg prose-gray mx-auto">
                        <div className="mb-6">
                            <p className="text-gray-500 text-sm flex items-center mb-4">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Published on August 6, 2025
                            </p>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">
                            Why Malayalam Translations of Global Bestsellers Matter More Than Ever
                        </h2>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            In today's interconnected world, literature stands as one of the most potent vessels for cultural exchange and personal transformation. However, for countless individuals, language can act as a formidable barrier that prevents them from engaging with the profound insights embedded in global bestsellers.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            This is precisely why Malayalam translations of celebrated works such as <span className="font-semibold text-amber-700">Ikigai</span>, <span className="font-semibold text-amber-700">The Vegetarian</span>, and <span className="font-semibold text-amber-700">The Alchemist</span> hold unprecedented significance—they serve not only to unlock access to universal wisdom but also to pay homage to the rich subtleties and warmth of one's mother tongue. By embracing these translations, readers can embark on journeys of self-discovery while remaining rooted in their linguistic heritage.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-10">
                            Take <span className="font-semibold">Ikigai</span>, for instance—a gentle yet profound guide rooted in Japanese philosophy that encourages us to find purpose in the everyday. Its Malayalam translation brings this soul-stirring concept closer to home, allowing readers to absorb its meaning in a language that speaks directly to the heart. Much like Ikigai, Vaikom Muhammad Basheer's <em>Ente uppuppak oru Aana Indarnu</em> (My Granddad Had an Elephant) explores life's quiet joys and philosophical undertones with simplicity and wisdom—reminding us that purpose often lies in the ordinary.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-10">
                            Han Kang's <span className="font-semibold">The Vegetarian</span> confronts themes of identity, autonomy, and social conformity through a striking and unsettling narrative. In Malayalam, the emotional complexity and cultural tension of this story remain intact, proving that great literature can cross oceans without losing its power. It brings to mind works like <em>Agnisakshi</em> by Lalithambika Antharjanam, which also dives deep into a woman's inner world and the societal structures that confine her, offering powerful commentary on personal rebellion and liberation.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-10">
                            Then there's <span className="font-semibold">The Alchemist</span> by Paulo Coelho—a story that needs no introduction. A journey of dreams, omens, and destiny, it's a book that inspires readers to listen to their hearts. When available in Malayalam, it becomes not just a story, but a deeply personal mirror for readers navigating their own paths in life. Malayalam literature too has its dreamers—O.V. Vijayan's <em>Khasakkinte Itihasam</em> (The Legends of Khasak) takes us on a mystical, existential journey through the eyes of a seeker, blurring the lines between fate, choice, and destiny.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-10">
                            At Alaigram, we believe in the power of stories—and more importantly, in the power of accessibility. Inspired by the Tamil words <em>Alai</em> (waves) and <em>Gramam</em> (village), Alaigram was born from a vision to connect rural India with the rest of the world, to create a wave of transformation that uplifts, includes, and empowers.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            While we primarily work to amplify the voices and work of artisans, farmers, and rural entrepreneurs, we know that true empowerment is also intellectual and emotional. That's why we support and promote translated literature—because everyone deserves to engage with the world's best ideas in the language they understand best.
                        </p>

                        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 mt-8 mb-8">
                            "Alaigram – Waves of Change. One story at a time."
                        </blockquote>

                        <p className="text-lg text-gray-800 leading-relaxed">
                            Whether it's through handcrafted products or meaningful <span className='font-semibold text-blue-700 cursor-pointer' onClick={() => { navigate('/books') }}>books</span>, Alaigram is building bridges—between tradition and innovation, between local and global, between story and soul.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            These translated titles are now available at our store—not just as books on a shelf, but as gateways to introspection, change, and connection.<br /> <span className="font-semibold text-amber-700">Alaigram – Waves of Change. One story at a time.</span>
                        </p>

                    </article>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <button
                        className="inline-flex items-center px-6 py-2 bg-amber-600 text-white text-lg font-medium rounded-md hover:bg-amber-700 transition-colors duration-200 transform hover:scale-105"
                        onClick={() => navigate('/blogs')}
                    >
                        Back to Blog
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FifthBlog
