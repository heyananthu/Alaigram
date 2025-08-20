import React, { useEffect } from 'react'
import Navbar from '../../../Components/LandinPage/Navbar'
import Footer from '../../../Components/LandinPage/Footer'
import { useNavigate } from 'react-router-dom'
import banner from '../../../assets/blog7.jpg'
import AnimationCard from '../../../lib/AnimationCard'

function SeventhBlog() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[28rem] md:h-[32rem]">
                <img
                    src={banner}
                    alt="Alaigram Blog Banner"
                    className="w-full h-full object-fill transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent flex items-center justify-center">
                    <div className="text-center px-4 animate-fade-in">
                        {/* <AnimationCard>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
                                A mother’s love, a child’s resilience, a story for us all.
                            </h1>
                        </AnimationCard> */}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Article */}
                    <article className="lg:col-span-2 prose prose-lg prose-gray mx-auto">
                        <div className="mb-6">
                            <p className="text-gray-500 text-sm flex items-center mb-4">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Published on August 20, 2025
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">
                            Top Reasons to Read “Kambilikandathe Kalbharanikal” from Alaigram’s Collection
                        </h2>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            A mother’s love, a child’s resilience, a story for us all. In a world often overshadowed by adversity, <em>Kambilikandathe Kalbharanikal</em> emerges as a beacon of resilience and hope. This remarkable book from Alaigram’s Collection is not merely a memoir; it is a heartfelt reflection of life’s struggles, illuminated by the transformative power of maternal love and an indomitable spirit that refuses to surrender.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            One of the strongest reasons to immerse yourself in this narrative is its unflinching portrayal of resilience. The author invites us into their lived reality, where challenges arrive in unrelenting waves — yet each setback is met with quiet courage. As the story unfolds, readers feel as though every page beats with the pulse of survival, pain, and hard-earned triumph.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            At the heart of this book lies a luminous celebration of maternal love. The author’s bond with their mother is depicted not simply as background but as the anchor that steadies every storm. Her faith, her sacrifices, and her unwavering belief become a guiding light, reminding us of the immeasurable strength that comes from those who nurture us. It is impossible to read these passages without recalling our own ties of love, care, and sacrifice.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            Equally powerful is the book’s embrace of hardship as a source of strength. Instead of turning away from grief, the author allows it to be seen in full, transforming sorrow into resilience and despair into growth. Through these pages, we learn that wounds can become lessons, and lessons can lead us toward healing and empowerment.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            More than a memoir, <em>Kambilikandathe Kalbharanikal</em> is also a mirror held to society, reflecting compassion, faith, and the resilience of entire communities. It speaks not only to the individual reader but to the human experience we all share.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            This is not just a book to be read — it is a journey to be lived. Pick up <em>Kambilikandathe Kalbharanikal</em> today from Alaigram’s store, and let its words remind you that even amidst life’s fiercest storms, there is always an unyielding light waiting to guide us home.
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

export default SeventhBlog