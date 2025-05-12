import React from 'react';
import AnimationCard from '../../../lib/AnimationCard';
import BookCard from './BookCard';
import books from '../../data/book';

const Books = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6">Children's Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book, index) => (
                    <AnimationCard key={index}>
                        <BookCard book={book} />
                    </AnimationCard>
                ))}
            </div>
        </div>
    );
};

export default Books;
