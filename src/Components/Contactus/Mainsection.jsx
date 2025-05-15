import React, { useState } from 'react'
import Address from '../../assets/address.jpeg'
import { ToastContainer, toast } from 'react-toastify';
import Success from '../../assets/lottie/Success.json'
import Loading from '../../assets/lottie/LoadingSpinner.json'
import Lottie from 'lottie-react';

function Mainsection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setSuccess(false);

        const formData = new FormData(event.target);
        formData.append("access_key", "f87ed089-97ea-4b2d-9a7e-e53973dd44fd");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            setLoading(false);

            if (res.success) {
                // toast.success("Message Sent!");
                setSuccess(true);
                setName('');
                setEmail('');
                setMessage('');

                // Hide success after 2 seconds
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            setLoading(false);
            toast.error("An error occurred. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="relative">
            <ToastContainer />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-6xl font-bold text-gray-800 text-center bg-white">Get in Touch</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <img src={Address} alt="Address" />
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Name"
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="you@example.com"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows="4"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your message..."
                                name='message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200 flex items-center justify-center"
                            disabled={loading}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Success Overlay */}
            {success && (
                <div className="fixed inset-0 bg-black opacity-92 flex flex-col items-center justify-center z-50">
                    <div className=" rounded-lg p-8 flex flex-col items-center shadow-lg max-w-xs mx-4">
                        <Lottie animationData={Success} style={{ width: 180, height: 180 }} />
                        <p className="mt-4 text-lg font-semibold text-green-700">Message Sent!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mainsection;
