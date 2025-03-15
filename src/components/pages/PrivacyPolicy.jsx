import React from "react";

function PrivacyPolicy() {
    return (
        <div className="mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-xl  md:text-3xl lg:text-3xl font-bold text-center mb-6">Privacy Policy</h1>

            <div className="space-y-6">
                <section>
                    <h2 className="md:text-xl lg:text-2xl font-semibold mb-2">1. Introduction</h2>
                    <p className="text-gray-700 text-sm md:text-l lg:text-xl">
                        Welcome to the VECTO App. We are
                        committed to protecting your privacy and ensuring that your personal
                        information is handled in a safe and responsible manner. This Privacy
                        Policy outlines how we collect, use, and protect your information
                        when you use our app.
                    </p>
                </section>

                <section>
                    <h2 className="md:text-xl lg:text-2xl font-semibold mb-2">2. Informations We Collect</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        We may collect the following types of information:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-l lg:text-xl">
                        <li>Personal Information: Name, email address, phone number, and delivery address.</li>
                        <li>Payment Information: Credit card details, billing address, and transaction history.</li>
                        <li>Usage Data: IP address, device information, and browsing behavior.</li>
                    </ul>
                </section>

               
                <section>
                    <h2 className="md:text-xl lg:text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        We use your information for the following purposes:
                    </p>
                    <ul className="text-sm md:text-l lg:text-xl list-disc list-inside text-gray-700">
                        <li>To process and fulfill your food orders.</li>
                        <li>To communicate with you about your orders and provide customer support.</li>
                        <li>To improve our app and services.</li>
                        <li>To send promotional offers and updates (with your consent).</li>
                    </ul>
                </section>

                
                <section>
                    <h2 className="md:text-xl lg:text-2xl font-semibold mb-2">4. Data Sharing and Disclosure</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        We do not sell your personal information. However, we may share your
                        information with:
                    </p>
                    <ul className="text-sm md:text-l lg:text-xl list-disc list-inside text-gray-700">
                        <li>Restaurants and delivery partners to fulfill your orders.</li>
                        <li>Payment processors to complete transactions.</li>
                        <li>Legal authorities if required by law.</li>
                    </ul>
                </section>

                
                <section>
                    <h2 className="md:text-xl lg:text-2xl font-semibold mb-2">5. Data Security</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        We implement industry-standard security measures to protect your
                        information, including encryption and secure servers. However, no
                        method of transmission over the internet is 100% secure.
                    </p>
                </section>

                
                <section>
                    <h2 className="md:text-xl lg:text-2xl font-semibold mb-2">6. Your Rights</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        You have the right to:
                    </p>
                    <ul className="text-sm md:text-l lg:text-xl list-disc list-inside text-gray-700">
                        <li>Access and update your personal information.</li>
                        <li>Request deletion of your data.</li>
                        <li>Opt-out of marketing communications.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="md:text-xl lg:text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        We may update this Privacy Policy from time to time. Any changes will
                        be posted on this page, and we will notify you via email or in-app
                        notifications if significant changes occur.
                    </p>
                </section>

               
                <section>
                    <h2 className="md:text-xl lg:text-2xl font-semibold mb-2">8. Contact Us</h2>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        If you have any questions about this Privacy Policy, please contact
                        us at:
                    </p>
                    <p className="text-sm md:text-l lg:text-xl text-gray-700">
                        Email: <a href="mailto:privacy@vecto.com" className="text-pink-600 hover:underline">privacy@vecto.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default PrivacyPolicy;