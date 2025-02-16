"use client"
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [address, setAddress] = useState('');
  const [cakeDate, setCakeDate] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailSubject = 'Cake Order Request';
    const emailBody = `
      Name: ${name}
      WhatsApp: ${whatsApp}
      Address: ${address}
      Cake Date: ${cakeDate}
      Requirements: ${requirements}
    `;

    // Create a mailto link
    const mailtoLink = `mailto:ludbeankita2002@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // You can also display a message after submission
    alert('Thank you for your order! We will get back to you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="mb-4 p-2 border border-gray-300"
      />
      <input 
        type="text" 
        placeholder="WhatsApp Number" 
        value={whatsApp} 
        onChange={(e) => setWhatsApp(e.target.value)} 
        className="mb-4 p-2 border border-gray-300"
      />
      <textarea 
        placeholder="Address" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        className="mb-4 p-2 border border-gray-300"
      />
      <input 
        type="date" 
        value={cakeDate} 
        onChange={(e) => setCakeDate(e.target.value)} 
        className="mb-4 p-2 border border-gray-300"
      />
      <textarea 
        placeholder="Cake Requirements" 
        value={requirements} 
        onChange={(e) => setRequirements(e.target.value)} 
        className="mb-4 p-2 border border-gray-300"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
