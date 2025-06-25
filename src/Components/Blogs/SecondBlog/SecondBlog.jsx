import React, { useEffect } from 'react'
import Navbar from '../../../Components/LandinPage/Navbar'
import Footer from '../../../Components/LandinPage/Footer'
import AnimationCard from '../../../lib/AnimationCard'
import { useNavigate } from 'react-router-dom'
import banner from '../../../assets/blog2-banner.png'
function SecondBlog() {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top when the component mounts
    }, []);

    return (
        <div >
            <Navbar />
            {/* Hero Section */}
            <div className="relative w-full h-[28rem] md:h-[26rem]">
                <img
                    src={banner}
                    alt="Waves of Change"
                    className="w-full h-full object-center transition-opacity duration-500 "
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
                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">From Passion to Purpose: The Heart Behind Alaigram</h2>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            At the very core of Alaigram lies a story woven with threads of tradition, culture, and an unwavering commitment to uplift communities. Our journey began on a sun-drenched afternoon in a quaint South Indian village, where the scent of wet earth mingled with the colors of hand-dyed fabric. It was there, while speaking with a quiet artisan who worked silently over a loom passed down through generations, that something inside us shifted.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            Their hands moved with grace, their eyes with purpose—but their market, their recognition, their reach? Limited. The world had yet to hear their story. That day, amidst the vibrancy and simplicity of village life, the idea of Alaigram took root—not as a business plan, but as a calling.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            As founders, we carry this memory like a flame. The name Alaigram—a fusion of Alai (waves) and Gramam (village)—symbolizes our dream: to send ripples of change from the heart of India's villages to every corner of the globe. Every product we bring forward is more than just a purchase—it's a wave, a connection, a story made tangible.                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            We've poured our souls into building a platform that doesn't just sell products, but honors the people behind them. Sustainability, fair wages, ethical sourcing—these aren't checkboxes for us, they're sacred promises. We've sat with artisans under the open sky, shared meals with farming families, and heard the hopes they carry for their children. Those moments remind us why we began—and why we must keep going.                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            There have been challenges, of course. Moments of doubt. But the sparkle in an artisan's eye when they see their work being appreciated, the pride in a farmer's voice when his organic produce reaches a distant city—those are the triumphs that keep our hearts anchored and spirits high.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            We envision a world where rural craftsmanship doesn't fade, but flourishes. A world where tradition walks hand-in-hand with innovation. Where you, the conscious consumer, become a co-traveler on this journey—supporting not just products, but people.                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            So come, walk this path with us. Let's make waves of change—rooted in culture, driven by purpose, and guided by the belief that small villages can leave a global imprint.
                        </p>

                        <p className='text-lg text-gray-800 leading-relaxed mt-8'>
                            <span className='font-semibold text-amber-700'>With gratitude and hope,
                            </span><br />
                            <span className='font-normal text-sm text-amber-700 italic'>
                                The Founders of Alaigram
                            </span>
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

export default SecondBlog
