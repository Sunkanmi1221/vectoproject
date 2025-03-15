import React from "react";

function ContactUs() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-xl md:text-3xl lg:text-3xl font-bold text-center mb-6">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <section>
                    <h2 className="md:text-xl lg:text-xl font-semibold mb-4">Send Us a Message</h2>
                    <form className="space-y-4 ">
                        <div>
                            <label htmlFor="name" className="md:text-xl block text-sm font-medium text-gray-700 ">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-950"
                                placeholder="Enter Your Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 md:text-xl">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-950"
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 md:text-xl">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-950"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-950 text-white py-2 px-4 rounded-md hover:bg-pink-950 transition-colors"
                        >
                            Send Your Message
                        </button>
                    </form>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="md:text-lg font-semibold">Email</h3>
                            <p className="text-gray-700">
                                <a href="mailto:support@vecto.com" className="text-pink-950 hover:underline">
                                    support@vecto.com
                                </a>
                            </p>
                        </div>

                        <div>
                            <h3 className="md:text-lg font-semibold">Phone</h3>
                            <p className="text-gray-700">
                                <a href="tel:+44295327794" className="text-pink-600 hover:underline">
                                    +44 (295) 327-794
                                </a>
                            </p>
                        </div>

                        <div>
                            <h3 className="md:text-lg font-semibold">Address</h3>
                            <p className="text-gray-700">
                                28 Sunkanmi Street,<br />
                                Atlas, Texas, 100123,<br />
                                USA
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <iframe
                            title="Restaurant Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2aabc5e2c1a!2s123%20Foodie%20St%2C%20City%2C%20State%2C%20Country!5e0!3m2!1sen!2sus!4v1633023226784!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ContactUs;