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
                className="group bg-white rounded-3xl shadow-md overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
                <div className="relative h-60 overflow-hidden">
                    <img
                        src={book.img}
                        alt={book["Item Name"]}
                        className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 pointer-events-none">
                        <h2 className="text-white text-lg font-bold line-clamp-1">
                            {book["Item Name"]}
                        </h2>
                    </div>
                </div>

                <div className="p-4 space-y-2">
                    <p className="text-gray-600 text-sm line-clamp-1">
                        Author: <span className="text-gray-800 font-medium">{book["CF.Author"]}</span>
                    </p>
                    <div className="flex items-center gap-1 text-indigo-600 font-semibold text-sm">
                        <FaRupeeSign className="text-sm" />
                        <span>{book.Rate}</span>
                    </div>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 z-50">
                    <BookModal book={book} onClose={() => setOpen(false)} />
                </div>
            )}
        </>
    );
}
