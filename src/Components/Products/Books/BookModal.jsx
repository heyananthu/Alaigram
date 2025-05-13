import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ Add WhatsApp icon

export default function BookModal({ book, onClose }) {
    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // ✅ Function to handle Buy button
    const handleBuy = () => {
        const phoneNumber = '9289100797'; // Replace with your WhatsApp number (only digits)
        const message = `

Title: ${book["Item Name"]}
Author: ${book["CF.Author"]}
Language: ${book["CF.Language"]}
Rate: ₹${book.Rate}

I am interested in buying this book.
        `;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <AnimatePresence>
            <motion.div
                key="modal"
                className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
                onClick={handleClickOutside}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="bg-white rounded-3xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <AiOutlineClose />
                    </button>

                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/3 h-44 md:h-full bg-gray-100 rounded-lg overflow-hidden mb-4 sm:mb-0">
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
                                <li><strong>Rate:</strong> ₹{book.Rate}</li>
                            </ul>

                            {/* ✅ WhatsApp Buy Button */}
                            <button
                                onClick={handleBuy}
                                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                            >
                                <FaWhatsapp />
                                Buy on WhatsApp
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
