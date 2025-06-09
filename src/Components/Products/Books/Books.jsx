import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AnimationCard from '../../../lib/AnimationCard';
import BookCard from './BookCard';
import books from '../../data/bookData';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Books = () => {
    const navigate = useNavigate();
    const query = useQuery();
    const category = query.get("category");

    const categories = useMemo(() => {
        const cats = books.map(book => book["CF.Category"] || "Uncategorized");
        return ["All", ...Array.from(new Set(cats))];
    }, []);

    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        if (category && categories.includes(category)) {
            setSelectedCategory(category);
        } else {
            setSelectedCategory("All");
        }
    }, [category, categories]);

    const filteredBooks = useMemo(() => {
        if (selectedCategory === "All") return books;
        return books.filter(book => book["CF.Category"] === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Books</h1>

            <div className="flex flex-wrap gap-3 mb-6 justify-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setSelectedCategory(cat);
                            navigate(`?category=${encodeURIComponent(cat)}`);
                        }}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition-all duration-200 
                            ${selectedCategory === cat
                                ? "bg-blue-600 text-white ring-2 ring-blue-300"
                                : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50"}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book, index) => (
                    <AnimationCard key={index}>
                        <BookCard book={book} />
                    </AnimationCard>
                ))}
            </div>
        </div>
    );
};

export default Books;
