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
                className="group bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer border border-gray-200"
            >
                {/* Image Section */}
                <div className="relative h-80 bg-white flex items-center justify-center overflow-hidden">
                    <img
                        src={book.img}
                        alt={book["Item Name"]}
                        className="pointer-events-none object-contain w-full h-full p-5 transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                    <h2 className="text-lg font-bold text-gray-800 truncate">
                        {book["Item Name"]}
                    </h2>
                    <p className="text-gray-500 text-sm truncate">
                        Author: <span className="text-gray-700 font-medium">{book["CF.Author"]}</span>
                    </p>
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1 text-indigo-600 font-bold text-base">
                            <FaRupeeSign className="text-sm" />
                            <span>{book.Rate}</span>
                        </div>
                        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                            Book
                        </span>
                    </div>
                </div>
            </div>

            {open && <BookModal book={book} onClose={() => setOpen(false)} />}
        </>
    );
}
