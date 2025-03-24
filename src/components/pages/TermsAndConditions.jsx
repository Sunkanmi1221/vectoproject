import React from "react";

function TermsAndConditions() {
    return (
        <div className="mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-xl md:text-3xl lg:text-3xl font-bold text-center mb-6">Terms and Conditions</h1>

            <div className="space-y-6 text-sm md:text-l lg:text-xl">
                <section>
                    <h2 className=" font-semibold mb-2">1. Introduction</h2>
                    <p className="text-gray-700 ">
                        Welcome to VECTO App. These
                        Terms and Conditions govern your use of our app and services. By
                        accessing or using our app, you agree to comply with and be bound by
                        these terms. If you do not agree, please do not use our app.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">2. Eligibility</h2>
                    <p className="text-gray-700">
                        To use our app, you must:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Be at least 18 years old.</li>
                        <li>Have the legal capacity to enter into a binding agreement.</li>
                        <li>Provide accurate and complete information during registration.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">3. Account Registration</h2>
                    <p className="text-gray-700">
                        To access certain features, you must create an account. You are
                        responsible for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Maintaining the confidentiality of your account credentials.</li>
                        <li>All activities that occur under your account.</li>
                        <li>Providing accurate and up-to-date information.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">4. Ordering and Payments</h2>
                    <p className="text-gray-700">
                        When placing an order, you agree to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Provide accurate delivery details.</li>
                        <li>Pay for the ordered items and any applicable fees.</li>
                        <li>Comply with the restaurant's terms and conditions.</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                        We use secure payment gateways, but we are not responsible for
                        payment processing errors or fraud.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">5. Cancellations and Refunds</h2>
                    <p className="text-gray-700">
                        Cancellations and refunds are subject to the following:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>You may cancel an order before it is confirmed by the restaurant.</li>
                        <li>Refunds are processed according to the restaurant's policy.</li>
                        <li>We are not responsible for delays or issues caused by third parties.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">6. User Conduct</h2>
                    <p className="text-gray-700">
                        You agree not to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Use the app for any illegal or unauthorized purpose.</li>
                        <li>Harass, abuse, or harm other users or restaurant staff.</li>
                        <li>Attempt to gain unauthorized access to the app or its systems.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">7. Intellectual Property</h2>
                    <p className="text-gray-700">
                        All content on the app, including logos, text, and images, is owned
                        by us or our licensors. You may not use, copy, or distribute any
                        content without our prior written consent.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">8. Limitation of Liability</h2>
                    <p className="text-gray-700">
                        We are not liable for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Any damages arising from the use or inability to use the app.</li>
                        <li>Issues caused by third-party services (e.g., restaurants, delivery partners).</li>
                        <li>Events beyond our control, such as natural disasters or system failures.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">9. Changes to Terms</h2>
                    <p className="text-gray-700">
                        We may update these Terms and Conditions from time to time. Any
                        changes will be posted on this page, and your continued use of the
                        app constitutes acceptance of the updated terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">10. Governing Law</h2>
                    <p className="text-gray-700">
                        These Terms and Conditions are governed by the laws of the United States of America. Any disputes will be resolved in the court.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm md:text-l lg:text-xl font-semibold mb-2">11. Contact Us</h2>
                    <p className="text-gray-700">
                        If you have any questions about these Terms and Conditions, please
                        contact us at:
                    </p>
                    <p className="text-gray-700">
                        Email: <a href="mailto:support@yourapp.com" className="text-pink-600 hover:underline">support@vecto.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default TermsAndConditions;