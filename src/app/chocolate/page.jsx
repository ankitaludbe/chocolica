import React from 'react';

const Chocolates = () => {
  const chocolates = [
    { id: 1, name: "Dark Chocolate", price: 500, imageUrl: "url_to_image_1.jpg" },
    { id: 2, name: "Milk Chocolate", price: 400, imageUrl: "url_to_image_2.jpg" },
    { id: 3, name: "White Chocolate", price: 450, imageUrl: "url_to_image_3.jpg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl text-center mb-8">Chocolates</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {chocolates.map(chocolate => (
          <div key={chocolate.id} className="card">
            <img src={chocolate.imageUrl} alt={chocolate.name} />
            <h3>{chocolate.name}</h3>
            <p>₹ {chocolate.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chocolates;
