import React from "react";

function AboutUs() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-xl md:text-3xl lg:text-3xl font-bold text-center mb-6">About Us</h1>
            <div className="space-y-6">
                <section>
                    <h2 className="md:text-xl lg:text-xl font-semibold mb-2">Our Story</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        At VECTO, we believe that great food should
                        be just a tap away. Founded in 2024, our mission is to connect
                        food lovers with their favorite local restaurants and deliver
                        delicious meals right to their doorstep. Whether you're craving
                        pizza, sushi, or a hearty burger, we've got you covered.
                    </p>
                </section>

                <section>
                    <h2 className="md:text-xl lg:text-xl font-semibold mb-2">Our Mission</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        Our mission is simple: to make food ordering fast, easy, and
                        enjoyable. We strive to support local businesses while providing
                        our users with a seamless dining experience. From browsing menus
                        to tracking deliveries, we're here to make every step effortless.
                    </p>
                </section>

                <section>
                    <h2 className="md:text-xl lg:text-xl font-semibold mb-2">Why Choose Us?</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        Here's what sets us apart:
                    </p>
                    <ul className="text-sm md:text-l lg:text-xl list-disc list-inside text-gray-700">
                        <li>
                            <strong>Fast Delivery:</strong> Get your food delivered quickly
                            and reliably.
                        </li>
                        <li>
                            <strong>Easy to Use:</strong> Our app is designed with you in
                            mind, making ordering a breeze.
                        </li>
                        <li>
                            <strong>Support Local:</strong> We partner with local
                            restaurants to help them thrive.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="md:text-xl lg:text-xl font-semibold mb-2">Our Team</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        Behind VECTO is a passionate team of food
                        enthusiasts, tech experts, and customer service professionals. We're
                        dedicated to delivering the best experience for our users and
                        restaurant partners alike.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Join Us</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                         Interested in joining our team? Check out
                        our <a href="/careers" className="text-pink-600 hover:underline">careers page</a> for
                        opportunities.
                    </p>
                </section>

                <section>
                    <h2 className="md:text-xl lg:text-xl font-semibold mb-2">Contact Us</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        We'd love to hear from you! Whether you have feedback, questions, or
                        just want to say hello, reach out to us at:
                    </p>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        Email: <a href="mailto:hello@vecto.com" className="text-pink-600 hover:underline">hello@vecto.com</a>
                    </p>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        Phone: <a href="tel:+44295327794" className="text-pink-600 hover:underline">+44 (295) 327-794</a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default AboutUs;