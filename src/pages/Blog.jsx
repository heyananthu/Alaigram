import React, { useEffect } from 'react';
import Navbar from '../Components/LandinPage/Navbar';
import Footer from '../Components/LandinPage/Footer';
import banner from '../assets/banner.jpeg';
import Herosection from '../Components/Blogs/Herosection';
import { useNavigate } from 'react-router-dom';
import AnimationCard from '../lib/AnimationCard';
import blog2banner from '../assets/blog2-banner.png'
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
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
                            >
                                <div className="relative w-full h-56">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex justify-end">
                                        <button
                                            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
                                            onClick={() => navigate(post.slug)}
                                        >
                                            Read More
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