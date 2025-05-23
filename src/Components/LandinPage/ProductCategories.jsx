import React from 'react';
import { useNavigate } from 'react-router-dom';
import book from '../../assets/booksmain.jpg'
const categories = [
    {
        title: "Organic Foods & Beverages",
        image: "https://okcredit-blog-images-prod.storage.googleapis.com/2020/11/shutterstock_566591296.jpg"
    },
    {
        title: "Ayurvedic Products",
        image: "https://t4.ftcdn.net/jpg/07/41/35/67/360_F_741356771_4d4HPQpxdSOKW6E1hfTgPMtWzUIX5C7K.jpg"
    },
    {
        title: "Handcrafted Textiles & Fashion",
        image: "https://img.freepik.com/free-photo/woman-working-fabric-textile_53876-14419.jpg?w=740"
    },
    {
        title: "Sports & Fitness Gear",
        image: "https://img.freepik.com/free-photo/sports-equipment-arrangement_23-2149079721.jpg?w=740"
    },
    {
        title: "Traditional Arts & Crafts",
        image: "https://indian.handicrafts.gov.in/files/scheme_file/g18.jpg"
    },
    {
        title: "Home Décor",
        image: "https://www.latestbuy.com.au/cdn/shop/files/candles_fa74f788-2748-4d66-9c01-4c841ae398fa.png?v=1725625932&width=1000"
    },
    {
        title: "Books & Stationery",
        image: book,
        link: "/books"
    },
    {
        title: "Natural Beauty & Cosmetics",
        image: "https://img.freepik.com/free-photo/natural-organic-cosmetics_23-2148571351.jpg?w=740"
    },
    {
        title: "Handmade Jewelry",
        image: "https://www.thebeadtraders.com/cdn/shop/articles/how-to-calculate-your-profit-margins-for-your-handmade-jewelry-business-517571_460x@2x.jpg?v=1706029816"
    }
];

function ProductCategories() {
    const navigate = useNavigate();

    const handleNavigate = (cat) => {
        if (cat.link) {
            navigate(cat.link);
        }
    };

    return (
        <section className="px-6 py-20 md:px-24 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Key Product Categories</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our extensive product offerings cater to various needs while maintaining a strong emphasis on sustainability.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat, index) => {
                    const isClickable = !!cat.link;

                    return (
                        <div
                            key={index}
                            role={isClickable ? "button" : undefined}
                            tabIndex={isClickable ? 0 : undefined}
                            onClick={isClickable ? () => handleNavigate(cat) : undefined}
                            onTouchEnd={isClickable ? () => handleNavigate(cat) : undefined}
                            onKeyDown={isClickable ? (e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleNavigate(cat);
                                }
                            } : undefined}
                            className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ${isClickable ? "cursor-pointer" : "cursor-default"}`}
                            style={{ outline: 'none' }}
                        >
                            <div className="relative">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="h-48 w-full object-cover"
                                />

                                {/* Show overlay only on hover for non-clickable */}
                                {!isClickable && (
                                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-40 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-semibold">Coming Soon</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-700">{cat.title}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ProductCategories;
