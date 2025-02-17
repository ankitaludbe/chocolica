'use client';

import React, { useState } from "react";
import { FaCakeCandles, FaEnvelope, FaUser, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Thank you! We’ll get back to you soon. 🎂");
  //   setFormData({ name: "", email: "", phone: "", message: "" });
  //   const message = `New Cake Order:\n
  //       *Cake*: ${cake.name}\n
  //       Name:${name}
  //       email:${email}
  //       phone:${phone}
  //       mesaage:${message}
  //       const encodedMessage = encodeURIComponent(message);
  //       const whatsappUrl = `https://wa.me/918956945036?text=${encodedMessage}`;
  //       window.open(whatsappUrl, "_blank");
  //       onClose();

  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming formData holds the user inputs
    const { name, email, phone, message } = formData;

    alert("Thank you! We’ll get back to you soon. 🎂");

    // Clear the form data after submit
    setFormData({ name: "", email: "", phone: "", message: "" });

    const messageText = `New Enquiry:\n
          
          Name: ${name}\n
          Email: ${email}\n
          Phone: ${phone}\n
          Message: ${message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/918956945036?text=${encodedMessage}`;

    // Open WhatsApp URL
    window.open(whatsappUrl, "_blank");

    // Close the form or modal if onClose is defined
    if (onClose) onClose();
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg w-96 border border-pink-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4 flex items-center justify-center">
          <FaCakeCandles className="mr-2" /> Looking for Something Special?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Tell us your dream cake details, and we’ll make it happen! 🎂✨
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-pink-50 rounded-lg p-2 shadow">
            <FaUser className="text-pink-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center bg-pink-50 rounded-lg p-2 shadow">
            <FaEnvelope className="text-pink-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center bg-pink-50 rounded-lg p-2 shadow">
            <FaPhone className="text-pink-400 mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Tell us about your dream cake! 🎂✨"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-pink-50 rounded-lg p-2 shadow focus:outline-none"
            rows="4"
            required
          ></textarea>
          <div className="flex justify-between mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white font-bold rounded-lg shadow-lg hover:bg-gray-500 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-pink-600 transition-all"
            >
              Send Request 🎉
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;