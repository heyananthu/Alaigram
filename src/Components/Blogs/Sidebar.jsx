import React from 'react'
import { useNavigate } from 'react-router-dom';
function Sidebar() {
    const navigate = useNavigate();
    const relatedPosts = [
        {
            id: 1,
            title: 'From Passion to Purpose: The Heart Behind Alaigram',
            slug: '/crafting-tradition',
        },
        // {
        //     id: 2,
        //     title: 'The Soul of Handmade Art',
        //     slug: '/soul-of-handmade',
        // },
    ];
    return (
        <div>
            {/* Sidebar */}
            <aside className="lg:col-span-1">
                <div className="sticky top-8 bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Stories</h3>
                    <ul className="space-y-4">
                        {relatedPosts.map((post) => (
                            <li key={post.id}>
                                <button
                                    className="text-left text-amber-700 hover:text-amber-800 font-medium transition-colors duration-200"
                                    onClick={() => navigate(post.slug)}
                                >
                                    {post.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-md hover:bg-amber-700 transition-colors duration-200"
                            onClick={() => navigate('/subscribe')}
                        >
                            Subscribe to Our Blog
                        </button>
                    </div>
                </div>
            </aside>

        </div>
    )
}

export default Sidebar
