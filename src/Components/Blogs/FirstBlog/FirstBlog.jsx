import React, { useEffect } from 'react'
import Navbar from '../../../Components/LandinPage/Navbar';
import Footer from '../../../Components/LandinPage/Footer';
import banner from '../../../assets/banner.jpeg'
import { useNavigate } from 'react-router-dom';
import AnimationCard from '../../../lib/AnimationCard';
import Sidebar from '../Sidebar';
function FirstBlog() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top when the component mounts
    }, []);

    return (
        <div className="">
            <Navbar />
            {/* Hero Section */}
            <div className="relative w-full h-[28rem] md:h-[26rem]">
                <img
                    src={banner}
                    alt="Waves of Change"
                    className="w-full h-full object-cover transition-opacity duration-500 "
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent flex items-center justify-center">
                    <div className="text-center px-4 animate-fade-in">
                        <AnimationCard>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                                Our Blog                            </h1>
                            <p className="text-lg md:text-2xl text-amber-100 mt-4 max-w-2xl mx-auto">
                                Explore. Inspire. Empower.
                            </p></AnimationCard>
                    </div>
                </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Article */}
                    <article className="lg:col-span-2 prose prose-lg prose-gray mx-auto">
                        <div className="mb-6">
                            <p className="text-gray-500 text-sm flex items-center mb-4">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Published on June 04, 2025
                            </p>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Welcome to Alaigram: Waves of Change Begin Here</h2>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            As the sun rises over the horizon, gentle waves lap against the shores of our dreams, carrying with them the whispers of creativity and craftsmanship from rural villages. Welcome to <span className="font-semibold text-amber-700">Alaigram</span>—a place where tradition meets innovation, where hands that craft stories are celebrated, and where every wave signifies a step toward empowerment and sustainability. Here, we invite you to journey with us through tales woven by artisans who transform their rich heritage into beautiful creations that resonate far beyond their villages.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">What is Alaigram?</h2>
                        <p className="text-gray-800 leading-relaxed">
                            Alaigram derives its name from Tamil: <em>“Alai”</em> meaning wave and <em>“Gramam”</em> meaning village. It embodies our core mission—to empower rural artisans, farmers, and small manufacturers by bridging the gap between their extraordinary talents and the global marketplace. Our tagline, <span className="italic text-amber-700">"Waves of Change,"</span> reflects our commitment to creating ripples of positive impact in communities while fostering a deeper appreciation for their artistry.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Our Values</h2>
                        <p className="text-gray-800 leading-relaxed">
                            At Alaigram, we believe in celebrating rural creativity as a powerful force for change. Our values are rooted in sustainability, fair trade practices, empowerment of local craftspeople, and cultural pride. We understand that each product carries a story—of hands that have worked tirelessly for generations—and it is this narrative that we cherish and promote.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Why This Blog?</h2>
                        <p className="text-gray-800 leading-relaxed">
                            This blog exists as a vibrant platform to share those stories from the heart of rural India with you. We aim to showcase product journeys that highlight the craftsmanship behind each piece while offering sustainable living tips for conscious consumers like you. Our hope is to inspire meaningful choices that support local artisans while preserving age-old skills amid modern challenges.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Join the Movement!</h2>
                        <p className="text-gray-800 leading-relaxed">
                            Join us on this transformative journey! Subscribe to our blog and be part of the movement as we ride these waves of change together—celebrating tradition while paving new paths toward sustainability and empowerment. Your support can help elevate voices from rural India into a global conversation about creativity, culture, and conscious living. <span className="font-semibold text-amber-700">Let’s create waves together!</span>
                        </p>
                    </article>
                    {/* <Sidebar /> */}
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

export default FirstBlog
