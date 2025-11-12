import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <section className='pt-[150px] container relative px-6 md:px-8 lg:px-6'>
            <div className="min-h-screen rounded-2xl bg-linear-to-br from-orange-50 to-yellow-50 flex flex-col items-center justify-center px-6 py-16">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-amber-600">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 mt-3 max-w-md mx-auto">
                        Have a question, feedback, or craving? We’d love to hear from you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                        <h2 className="text-2xl font-semibold text-amber-600">
                            Contact Information
                        </h2>
                        <p className="text-gray-600">
                            Reach out to us anytime — our team is here to help and serve you the
                            best meals in town.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-amber-500 text-xl" />
                                <span className="text-gray-700">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-amber-500 text-xl" />
                                <span className="text-gray-700">contact@tastydine.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaLocationDot className="text-amber-500 text-xl" />
                                <span className="text-gray-700">
                                    45 Food Street, New Delhi, India
                                </span>
                            </div>
                        </div>

                        <div className="w-full h-56 rounded-xl overflow-hidden mt-6 shadow-lg">
                            <iframe
                                title="location"
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1078445629175!2d77.20902197497734!3d28.59366497569219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e3134e2fdf%3A0x7d032e80b89c6c7!2sDelhi!5e0!3m2!1sen!2sin!4v1676628179376!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
                        <h2 className="text-2xl font-semibold text-amber-600">
                            Send a Message
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
                            required
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none resize-none"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-amber-500 text-white py-3 rounded-xl font-semibold hover:bg-amber-600 transition duration-300 shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
