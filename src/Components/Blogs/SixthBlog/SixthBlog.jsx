import React, { useEffect } from 'react'
import Navbar from '../../../Components/LandinPage/Navbar'
import Footer from '../../../Components/LandinPage/Footer'
import AnimationCard from '../../../lib/AnimationCard'
import { useNavigate } from 'react-router-dom'
import banner from '../../../assets/blog6.jpg'

function SixthBlog() {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top when the component mounts
    }, []);

    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className="relative w-full h-[28rem] md:h-[26rem]">
                <img
                    src={banner}
                    alt="Malayalam Literature Journey"
                    className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent flex items-center justify-center">
                    <div className="text-center px-4 animate-fade-in">
                        <AnimationCard>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                                A Beginner's Guide to Malayalam Literature
                            </h1>
                            <p className="text-lg md:text-2xl text-amber-100 mt-4 max-w-2xl mx-auto">
                                Your First Steps into Kerala's Literary Soul
                            </p>
                        </AnimationCard>
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
                                Published on August 13, 2025
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">A Beginner's Guide to Malayalam Literature: Your First Steps into Kerala's Literary Soul</h2>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            Stepping into Malayalam literature is like opening a window to Kerala's soul. Each book carries the rhythm of monsoon rains, the scent of coconut groves, and the warmth of familiar conversations over evening tea.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            It is a world where myths walk alongside everyday life, where laughter mingles with longing, and where the wisdom of generations is tucked between lines of poetry and prose.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            For the beginner, it's less about "studying" literature and more about being gently welcomed into a living tradition—one that has been whispered, sung, and written across centuries.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            And in this journey, <span className="font-semibold text-amber-700">Alaigram</span> stands as your friendly guidepost, curating treasures old and new, ensuring that every reader—whether taking their very first step or returning after many years—feels right at home in the pages of Malayalam storytelling.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            If you're just beginning, the secret is to start with <span className='text-blue-600 font-semibold cursor-pointer' onClick={() => navigate('/books')}>books</span> that feel light yet memorable—stories that invite you in without overwhelming you. Once you've found your rhythm, you can move naturally toward richer, more layered works. Let's chart that path together.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Begin with the Gentle Magic of Children's Books</h2>

                        <div className=" p-6 rounded-lg mt-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Unnikuttante Lokam</h3>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                A charming tale that introduces young readers to the whimsical world of Unnikuttan—a little boy with big dreams! This book is perfect for beginners as it captures childhood innocence with humor and warmth. Its relatable themes will resonate with both children and adults alike, making it a sweet first step into Malayalam literature.
                            </p>
                        </div>

                        <div className=" p-6 rounded-lg mt-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mittayipothi</h3>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                This delightful story revolves around a mischievous little boy who finds joy in simple pleasures. The lyrical prose makes it an enjoyable read for parents reading aloud or children exploring on their own. It's a beautiful reminder that sometimes happiness lies in everyday adventures—and that even the smallest of moments can become the sweetest of memories.
                            </p>
                        </div>

                        <div className=" p-6 rounded-lg mt-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mayalokathile Nooni</h3>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                Dive into this imaginative book filled with fantastical creatures and enchanting tales. With its vivid illustrations and engaging narrative, it's an excellent choice for sparking creativity in young minds while introducing them to the beauty of Malayalam storytelling.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Move to Playful, Thoughtful Children's Literature</h2>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            Once you've tasted the charm of simple tales, you can move to slightly longer stories that carry both entertainment and insight.
                        </p>

                        <div className=" p-6 rounded-lg mt-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Paper Rocket</h3>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                A heartwarming story about friendship and dreams taking flight! This book encourages readers to believe in themselves while providing an entertaining narrative that keeps them engaged from start to finish.
                            </p>
                        </div>

                        <div className=" p-6 rounded-lg mt-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kinnaranum Thathakalum</h3>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                This playful tale showcases the bond between a mythical creature called Kinnara and his human friend. It blends folklore with life lessons seamlessly, making it an ideal read for anyone wanting to explore themes of companionship through humor.
                            </p>
                        </div>

                        <div className=" p-6 rounded-lg mt-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">O Kaamiyude Katha</h3>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                This captivating story dives deep into moral dilemmas faced by its protagonist—perfect for sparking discussions among families about values and choices while enjoying a good laugh along the way!
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Step into Real Lives with Autobiography</h2>

                        <div className=" p-6 rounded-lg mt-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ente Kadha (My Story)</h3>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                An inspiring autobiography that offers insight into personal struggles intertwined with cultural reflections. Beginners will appreciate its authenticity as it serves as both a personal account and a window into Kerala's social fabric. Moving into autobiography after lighter works helps you connect literature to lived experience.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Deepen Your Reading with Memoirs</h2>

                        <div className=" p-6 rounded-lg mt-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Neermathalam Pootha Kalam (The Time When Neermathalam Blooms)</h3>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                An evocative memoir capturing nostalgia like no other! Its rich descriptions transport readers back in time while offering valuable life lessons woven throughout personal experiences—a must-read for those looking to connect deeply with Kerala's past.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Engage the Mind with Essays</h2>

                        <div className=" p-6 rounded-lg mt-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Vaadaka Udumbukal (Debate Groups)</h3>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                A collection of essays discussing various societal issues through witty observations—ideal for beginners who enjoy thought-provoking content sprinkled with clever humor. Essays are a natural next step once you're comfortable with narrative works, as they help you think critically while appreciating literary style.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">Your Path Forward</h2>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            The beauty of Malayalam literature lies in how naturally one book leads you to another. You might start with <em>Mittayipothi</em> on a quiet afternoon, find yourself reaching for <em>Paper Rocket</em> the next week, then slowly wander into <em>Ente Kadha</em> and <em>Neermathalam Pootha Kalam</em> as your appetite for depth grows. Each step enriches your understanding—not just of the language and its literature, but of Kerala itself.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            And through it all, <span className="font-semibold text-blue-600 cursor-pointer" onClick={() => navigate('/')}>Alaigram</span> is here to light your path—bringing together timeless classics and modern gems, so your reading journey feels less like a task and more like coming home.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            So take that first step. The river of Malayalam literature is wide and deep, but its waters are warm. Once you step in, you'll never want to leave.
                        </p>

                        {/* <div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border-l-4 border-amber-600">
                            <p className="text-lg text-gray-800 leading-relaxed font-medium">
                                <span className="font-semibold text-amber-700">Ready to begin your Malayalam literature journey?</span><br />
                                <span className="text-base text-gray-700 italic">
                                    Explore our curated collection at Alaigram and discover the perfect book to start your adventure into Kerala's literary treasures.
                                </span>
                            </p>
                        </div> */}

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

export default SixthBlog
