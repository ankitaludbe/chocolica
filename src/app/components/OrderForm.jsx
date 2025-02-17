'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaStickyNote, FaBirthdayCake, FaCity, FaMapPin } from "react-icons/fa";

const OrderForm = ({ cake, selectedPrice, selectedSize, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        street: "",
        city: "",
        zip: "",
        instructions: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.contact.match(/^\d{10}$/)) newErrors.contact = "Enter a valid 10-digit phone number";
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Enter a valid email";
        if (!formData.street.trim()) newErrors.street = "Street address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.zip.match(/^\d{6}$/)) newErrors.zip = "Enter a valid 6-digit ZIP code";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        const { name, contact, email, street, city, zip, instructions } = formData;
        const message = `New Cake Order:\n
        *Cake*: ${cake.name}\n
        *Size*: ${selectedSize}\n
        *Price*: ₹${selectedPrice}\n
        *Customer*: ${name}\n
        *Contact*: ${contact}\n
        *Email*: ${email}\n
        *Address*: ${street}, ${city} - ${zip}\n
        *Instructions*: ${instructions || "None"}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918956945036?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div 
                className="bg-white p-6 rounded-2xl shadow-lg w-96 border border-pink-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-center text-pink-600 flex items-center justify-center mb-4">
                    <FaBirthdayCake className="mr-2" /> Order {cake.name}
                </h2>
                <p className="text-gray-700 text-center">Size: {selectedSize} | Price: ₹{selectedPrice}</p>
                
                <div className="space-y-3 mt-4">
                    {Object.keys(errors).map((key) => (
                        <p key={key} className="text-red-500 text-sm">{errors[key]}</p>
                    ))}
                    
                    {[ 
                        { icon: <FaUser />, name: "name", placeholder: "Your Name" },
                        { icon: <FaPhone />, name: "contact", placeholder: "Contact Number" },
                        { icon: <FaEnvelope />, name: "email", placeholder: "Email" }
                    ].map(({ icon, name, placeholder }) => (
                        <div key={name} className="flex items-center bg-pink-50 rounded-lg p-2 shadow">
                            <span className="text-pink-400 mr-2">{icon}</span>
                            <input
                                type={name === "email" ? "email" : "text"}
                                name={name}
                                placeholder={placeholder}
                                className="w-full bg-transparent focus:outline-none"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                    
                    {[ 
                        { icon: <FaMapMarkerAlt />, name: "street", placeholder: "Street Address" },
                        { icon: <FaCity />, name: "city", placeholder: "City" },
                        { icon: <FaMapPin />, name: "zip", placeholder: "ZIP Code" }
                    ].map(({ icon, name, placeholder }) => (
                        <div key={name} className="flex items-center bg-pink-50 rounded-lg p-2 shadow">
                            <span className="text-pink-400 mr-2">{icon}</span>
                            <input
                                type="text"
                                name={name}
                                placeholder={placeholder}
                                className="w-full bg-transparent focus:outline-none"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                    
                    <div className="flex items-center bg-pink-50 rounded-lg p-2 shadow">
                        <FaStickyNote className="text-pink-400 mr-2" />
                        <textarea
                            name="instructions"
                            placeholder="Any special instructions (optional)"
                            className="w-full bg-transparent focus:outline-none"
                            onChange={handleChange}
                            rows="2"
                        ></textarea>
                    </div>
                </div>
                
                <div className="flex justify-between mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-400 text-white font-bold rounded-lg shadow-lg hover:bg-gray-500 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all"
                    >
                        Send Order 🎉
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default OrderForm;