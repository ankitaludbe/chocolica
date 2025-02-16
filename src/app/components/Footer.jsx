"use client";
import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-[#56423e] text-white py-12">
            <div className="max-w-7xl mx-auto px-6 text-center sm:text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 1: Logo/Brand */}
                    <div>
                        <h2 className="text-3xl text-[#737d63] font-bold  ">Chocolica Cakes</h2>
                        <p className="mt-2 text-sm sm:text-base text-gray-400">
                            We serve in Mumbai! Make an order, and we’ll contact you within 12 hours. Please place your order at least 24 hours in advance to ensure timely delivery.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#737d63]">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-[#737d63]">Home</a></li>
                            <li><a href="/cakes" className="text-gray-300 hover:text-[#737d63]">Cakes</a></li>
                            <li><a href="/cakes" className="text-gray-300 hover:text-[#737d63]">Cheesecakes</a></li>
                            <li><a href="/cakes" className="text-gray-300 hover:text-[#737d63]">Chocolates</a></li>
                            <li><a href="/contact" className="text-gray-300 hover:text-[#737d63]">Contact Us</a></li>
                            <li><a href="/about" className="text-gray-300 hover:ttext-[#737d63]">About Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Us & Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#737d63]">Contact Us</h3>
                        <div className="mt-4 flex justify-center sm:justify-start space-x-4">
                            <a href="https://www.instagram.com" className="text-gray-300 hover:text-[#737d63]">
                                <i className="fab fa-instagram"></i> {/* Font Awesome icon */}
                            </a>
                            <a href="mailto:your-email@example.com" className="text-gray-300 hover:text-[#737d63] flex items-center">
                                <i className="fas fa-envelope mr-2"></i> {/* Font Awesome envelope icon */}
                                persisengieer@gmail.com
                            </a>
                        </div>

                        <div className="mt-4">
                            <a href="tel:+1234567890" className="text-gray-300 hover:text-yellow-300 flex items-center mb-4">
                                <i className="fas fa-phone-alt mr-2"></i> {/* Phone icon */}
                                +1 234 567 890
                            </a>
                        </div>

                        <p className="text-gray-300 flex items-center">
                            <i className="fas fa-map-marker-alt mr-2"></i> {/* Location icon */}
                            Mira Road, Mumbai
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-600 pt-4 text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Chocolica Cakes. All rights reserved.</p>
                    <p className="mt-2 text-gray-500 text-xs">Made with ❤️ by <a href="https://www.linkedin.com/in/ankitaludbe" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Ankita Ludbe</a></p>
                </div>
            </div>
        </footer>
    );
};
