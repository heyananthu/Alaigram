import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Logo from "../assets/Logo.png"; // update path if needed

const WhatsappChat = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const phoneNumber = "9289100797";

    const handleSend = () => {
        if (message.trim() === "") return;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
        setMessage("");
    };

    return (
        <>
            {open && (
                <div className="fixed bottom-20 right-6 z-50 w-80 h-[460px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="bg-green-600 px-4 py-3 flex items-center text-white">
                        <img
                            src={Logo}
                            alt="Support"
                            className="w-10 h-10 rounded-full border-2 object-cover border-white mr-3"
                        />
                        <div className="flex-1">
                            <div className="font-semibold text-sm">Alaigram Support Team</div>
                            <div className="text-xs text-white/90">Online</div>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-white text-xl"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover px-4 py-3 flex-1 overflow-y-auto text-sm">
                        <div className="bg-white max-w-[75%] px-3 py-2 rounded-lg shadow text-gray-800">
                            <p>Hi there 👋</p>
                            <p>How can I help you?</p>
                            <div className="text-right text-[10px] text-gray-400 mt-1">
                                12:46
                            </div>
                        </div>
                    </div>

                    {/* Input */}
                    <div className="flex items-center px-2 py-1 bg-white">
                        <input
                            type="text"
                            placeholder="Enter your message..."
                            className="flex-1 text-sm px-3 py-2 outline-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            onClick={handleSend}
                            className="text-green-600 text-2xl p-2"
                        >
                            <IoSend />
                        </button>
                    </div>
                </div>
            )}

            {/* Floating WhatsApp Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl"
                aria-label="Chat with us on WhatsApp"
            >
                <FaWhatsapp />
            </button>
        </>
    );
};

export default WhatsappChat;
