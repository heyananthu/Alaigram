import { useState, useEffect } from 'react';
import BookModal from './BookModal';
import { FaRupeeSign } from 'react-icons/fa';

export default function BookCard({ book }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="group h-[500px] bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer border border-blue-200"
            >
                {/* Image */}
                <div className="relative h-80 bg-white flex items-center justify-center overflow-hidden">
                    <img
                        src={book.img}
                        alt={book["Item Name"]}
                        className="pointer-events-none object-contain w-full h-full p-6 transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-5 space-y-2 h-[calc(100%-20rem)] flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
                            {book["Item Name"]}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Author: <span className="text-gray-700 font-medium">{book["CF.Author"]}</span>
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex flex-col text-blue-700">
                            <span className="flex items-center gap-1 text-sm line-through text-gray-400">
                                <FaRupeeSign className="text-xs" />
                                {book.Rate.replace("INR", "").trim()}
                            </span>
                            <span className="flex items-center gap-1 font-bold text-lg">
                                <FaRupeeSign className="text-base" />
                                {book["Final Price"].replace("INR", "").trim()}
                            </span>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {book["CF.Category"]}
                        </span>
                    </div>
                </div>
            </div>

            {open && <BookModal book={book} onClose={() => setOpen(false)} />}
        </>
    );
}
