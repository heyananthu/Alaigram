import React, { useEffect } from 'react'
import Navbar from '../../../Components/LandinPage/Navbar'
import Footer from '../../../Components/LandinPage/Footer'
import AnimationCard from '../../../lib/AnimationCard'
import { useNavigate } from 'react-router-dom'
import banner from '../../../assets/blog3.jpg' // Replace with your third blog banner

function ThirdBlog() {
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
                    alt="Explore Our World"
                    className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent flex items-center justify-center">
                    <div className="text-center px-4 animate-fade-in">
                        <AnimationCard>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                                Explore Our World: The Alaigram Product Categories
                            </h1>
                            <p className="text-lg md:text-2xl text-amber-100 mt-4 max-w-2xl mx-auto">
                                Where Tradition Meets Innovation
                            </p>
                        </AnimationCard>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <article className="lg:col-span-2 prose prose-lg prose-gray mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">
                            Explore Our World: The Alaigram Product Categories
                        </h2>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            At Alaigram, we believe in more than products — we believe in <span className="font-semibold">preserving a way of life</span>. A life where every object has a story, every ingredient has a history, and every choice honors both <span className="font-semibold">the wisdom of our past and the needs of our future.</span>
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            Our product categories are a celebration — a tribute to India’s timeless soul and her vibrant spirit. Rooted in authenticity and blooming with innovation, Alaigram brings you treasures crafted for today’s mindful world.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">Let’s explore the heart of what we offer:</p>

                        <h3 className="text-2xl font-semibold text-amber-700 mt-10 mb-2">Food & Beverages</h3>
                        <p>
                            Indulge in a soulful journey through India’s culinary traditions. Our selection of <span className="font-semibold">organic food and beverages</span> is curated with care, sourced from local farms that nurture both land and labor. Each bite carries the flavor of heritage, and each sip tells the story of sustainable living. It’s nourishment that feeds your body — and honors your conscience.                        </p>

                        <h3 className="text-2xl font-semibold text-amber-700 mt-10 mb-2">Ayurvedic Products</h3>
                        <p className='mb-2'>
                            Rediscover balance in a chaotic world. Our <span className="font-semibold">Ayurvedic collection</span> is rooted in ancient wisdom passed down through generations. From herbal elixirs to soothing skincare, these products are more than remedies — they are rituals. Crafted from nature, steeped in tradition, and shaped for modern wellness, they offer a quiet, grounded way to care for your whole self.
                        </p>

                        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700">
                            What are the benefits of Ayurvedic products?<br />
                            They gently restore harmony within, nurturing both body and mind — the holistic way India has done for centuries.                        </blockquote>

                        <h3 className="text-2xl font-semibold text-amber-700 mt-10 mb-2">Books Rooted in Culture</h3>
                        <p>
                            In a world of fast swipes and fleeting scrolls, we bring you stories that linger. Our books are portals — into old myths, lost languages, village tales, and sacred philosophies. These are not just books. They are <span className="font-semibold">keepers of tradition, guardians of memory, and mirrors to our collective soul.</span>
                        </p>
                        <p className='mb-2'>
                            Whether you're drawn to timeless epics or modern reflections woven from the Indian fabric, our books invite you to pause, listen, and reconnect with who we are — and who we’ve always been.
                        </p>

                        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700">
                            Why are culturally rooted books important today?<br />
                            Because they preserve what progress often forgets — identity, legacy, and belonging.
                        </blockquote>

                        <h3 className="text-2xl font-semibold text-amber-700 mt-10 mb-2">Toys</h3>
                        <p className='mb-2'>
                            Let children play — not just with toys, but with tradition. Our <span className="font-semibold">heritage Indian toys</span> are handcrafted with joy, intention, and ancestral wisdom. They teach, entertain, and spark imagination while gently passing on values from generation to generation.                        </p>


                        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700">
                            How do Indian toys support traditional storytelling?<br />
                            They are shaped around tales we heard on our grandmother’s lap — turning playtime into memory-making and culture-sharing.                        </blockquote>
                        <h3 className="text-2xl font-semibold text-amber-700 mt-10">Crafts</h3>
                        <p className='mb-2'>
                            Each handcrafted piece in our collection is a love letter from an artisan to the world. From vibrant textiles to graceful pottery, these <span className="font-semibold">handmade crafts from India</span> bring warmth, depth, and soul into your home. Every stitch and stroke reflects stories untold — a quiet pride that only handmade art can offer.                        </p>

                        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700">
                            Why choose handmade Indian crafts?<br />
                            Because you’re not just buying an object — you’re preserving a skill, a story, and someone’s lifelong passion.                        </blockquote>

                        <h3 className="text-2xl font-semibold text-amber-700 mt-10">Packaging</h3>
                        <p className='mb-2'>
                            Even our packaging speaks to our values. Our <span className="font-semibold">eco-friendly packaging</span> ensures your products arrive not just safely, but <span className="font-semibold">sustainably</span>. Made from biodegradable materials, these solutions reduce your footprint while aligning with a global movement toward mindful consumption.                        </p>

                        <h2 className="text-2xl font-semibold text-amber-700 mt-10 mb-2">
                            Why Choose Alaigram?
                        </h2>
                        <ul className="list-disc pl-6">
                            <li><span className='font-semibold'>Authentic Experiences:</span> Every item whispers a piece of India’s past into your modern life.</li>
                            <li><span className='font-semibold'>Conscious Living:</span> Your choices align with both sustainability and soul.</li>
                            <li><span className='font-semibold'>Support Local Artisans:</span> Your purchase sustains entire communities and crafts on the brink of being forgotten.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-amber-700 mt-10 mb-2">
                            Are you curious about how tradition can enrich your everyday life?
                        </h2>
                        <p>Let us guide you through it.</p>
                        <ul className="list-disc pl-6">
                            <li>What are the benefits of Ayurvedic products?</li>
                            <li>Why choose handmade Indian crafts?</li>
                            <li>Where can I buy eco-friendly packaging in India?</li>
                            <li>How do Indian toys support traditional storytelling?</li>
                            <li>What makes books rooted in culture so vital today?</li>
                        </ul>

                        <h3 className="text-3xl font-semibold text-black mt-10 mb-2">Come Explore Alaigram</h3>
                        <p className='mb-2'>
                            We invite you to journey through a marketplace where every product has purpose and every purchase makes a difference.
                            Come find the stories, the wisdom, and the warmth hidden in our shelves.</p>

                        <p className='text-lg text-gray-800 leading-relaxed mt-8'>
                            <span className='font-semibold text-amber-700'>Shop with heart.</span><br />
                            <span className='font-semibold text-amber-700'>Live with meaning.</span><br />
                            <span className='italic text-sm text-amber-600'>Welcome to Alaigram.</span>
                        </p>
                    </article>
                </div>

                {/* CTA */}
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

export default ThirdBlog
