"use client"
import React, { useState } from "react";

const OrderForm = ({ cake, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const { name, contact, email, address } = formData;
        const { name: cakeName, selectedSize, selectedPrice } = cake; // Destructure the cake object

        if (!name || !contact || !email || !address) {
            alert("Please fill all fields.");
            return;
        }

        // WhatsApp Message
        const message = `New Cake Order:
*Cake*: ${cakeName}
*Size*: ${selectedSize}
*Price*: ₹${selectedPrice}
*Customer*: ${name}
*Contact*: ${contact}
*Email*: ${email}
*Address*: ${address}
`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918956945036?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
        onClose();

    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Order {cake.name}</h2>
                <p className="text-gray-700">
                    Size: {cake.selectedSize} | Price: ₹{cake.selectedPrice}
                </p>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border p-2 w-full mt-2"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    className="border p-2 w-full mt-2"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border p-2 w-full mt-2"
                    onChange={handleChange}
                />
                <textarea
                    name="address"
                    placeholder="Complete Address"
                    className="border p-2 w-full mt-2"
                    onChange={handleChange}
                />

                <div className="flex justify-between mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-400 text-white rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Send Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;
