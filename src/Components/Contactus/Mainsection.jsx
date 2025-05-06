import React from 'react'
import Address from '../../assets/address.jpeg'
function Mainsection() {
    return (
        <div>
            <section className=" py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-6xl font-bold text-gray-800 text-center bg-white">Get in Touch</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
                        <p className="text-gray-600">
                            We'd love to hear from you! Fill out the form or reach us at the contact details below.
                        </p>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                            <p className="text-gray-600">123 Herbal Lane, Ayur City, IN 123456</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                            <p className="text-gray-600">+91 98765 43210</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                            <p className="text-gray-600">support@alaigram.com</p>
                        </div> */}
                        <img src={Address} />
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows="4"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Mainsection
