export default function Contact() {
    return (
        <section className="p-4">
            <h2 className="text-center text-4xl font-bold pt-4 text-orange-600">Contact Us</h2>
            <p className="p-4 text-center">We would love to hear from you! Please fill out the form below.</p>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* Contact Information Section */}
                    <div className="bg-white p-6 shadow-lg rounded-lg space-y-4">
                        <h2 className="text-2xl font-bold text-orange-600">Contact Details</h2>
                        <p className="text-gray-700"><strong>Email :</strong> contact@example.com</p>
                        <p className="text-gray-700"><strong>Phone :</strong> +123 456 7890</p>
                        <p className="text-gray-700"><strong>Address :</strong> 123 Street, City, Country</p>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact" className="block text-gray-700 font-semibold mb-1">Contact</label>
                                <input
                                    type="number"
                                    id="contact"
                                    placeholder="Enter your contact"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Enter your message"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-28 resize-none"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-orange-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-700 transition duration-300"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}
