import React, { useEffect } from 'react';
import Navbar from '../Components/LandinPage/Navbar';
import Footer from '../Components/LandinPage/Footer';
import banner from '../assets/banner.jpeg';
import Herosection from '../Components/Blogs/Herosection';
import { useNavigate } from 'react-router-dom';
import AnimationCard from '../lib/AnimationCard';
import blog2banner from '../assets/blog2-banner.png'
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4-banner.jpg';
import blog5 from '../assets/blog5.jpg';
function Blog() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts = [
        {
            id: 1,
            title: 'Waves of Change Begin Here',
            excerpt: 'As the sun rises over the horizon, gentle waves lap against the shores of our dreams, carrying with them the whispers of creativity and craftsmanship from rural villages.',
            image: banner,
            slug: '/wave-of-change',
        },
        {
            id: 2,
            title: 'The Heart Behind Alaigram',
            excerpt: 'At the very core of Alaigram lies a story woven with threads of tradition, culture, and an unwavering commitment to uplift communities.',
            image: blog2banner,
            slug: '/heart-behind-alaigram',
        },
        {
            id: 3,
            title: 'Explore Our World',
            excerpt: 'At Alaigram, we believe in more than products — we believe in preserving a way of life. A life where every object has a story, every ingredient has a history, and every choice honors both the wisdom of our past and the needs of our future.',
            image: blog3,
            slug: '/explore-our-world',
        },
        {
            id: 4,
            title: 'For the Love of Reading',
            excerpt: 'In the gentle hush of early morning or the quiet pause between daily routines, there’s a certain kind of magic that only a good book can bring. At Alaigram, we...',
            image: blog4,
            slug: '/for-the-love-of-reading',
        },
        {
            id: 5,
            title: 'Why Malayalam Translations of Global Bestsellers Matter More Than Ever',
            excerpt: 'In today’s interconnected world, literature stands as one of the most potent vessels for cultural exchange and personal transformation',
            image: blog5,
            slug: '/global-bestsellers-in-malayalam',
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <Herosection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
                    Our Stories
                </h1> */}
                <AnimationCard>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {blogPosts.slice().reverse().map((post) => (
                            <div
                                key={`blog-${post.id}`}
                                className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 flex flex-col h-full"
                            >
                                <div className="relative w-full h-56 flex-shrink-0">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex justify-end mt-auto">
                                        <button
                                            className="inline-flex items-center cursor-pointer px-2 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                                            onClick={() => navigate(post.slug)}
                                        >
                                            Read More
                                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimationCard>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;