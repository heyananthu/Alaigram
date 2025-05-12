import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon from react-icons
import { motion } from 'framer-motion'; // Import framer motion for animations

export default function BookModal({ book, onClose }) {
    // Close modal on clicking outside
    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleModalClick} // Close on outside click
        >
            <motion.div
                className="bg-white p-6 rounded-3xl max-w-3xl w-full overflow-y-auto max-h-[90vh] relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
                    onClick={onClose}
                >
                    <AiOutlineClose />
                </button>

                {/* Book Details */}
                <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3 h-48 bg-gray-100 rounded-lg overflow-hidden mb-4 sm:mb-0">
                        <img
                            src={book.img}
                            alt={book["Item Name"]}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="sm:ml-6 flex-1">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">{book["Item Name"]}</h2>
                        <p className="text-sm text-gray-600 mb-2">{book.Description}</p>
                        <ul className="text-sm text-gray-600 space-y-1 mt-4">
                            <li><strong>Author:</strong> {book["CF.Author"]}</li>
                            <li><strong>Language:</strong> {book["CF.Language"]}</li>
                            <li><strong>Publisher:</strong> {book["CF.Publisher"]}</li>
                            <li><strong>Pages:</strong> {book["CF.No of Pages"]}</li>
                            <li><strong>Edition:</strong> {book["CF.Edition"]}</li>
                            <li><strong>Binding:</strong> {book["CF.Binding"]}</li>
                            <li><strong>Publishing Date:</strong> {book["CF.Publishing Date"]}</li>
                            <li><strong>Rate:</strong> {book.Rate}</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
