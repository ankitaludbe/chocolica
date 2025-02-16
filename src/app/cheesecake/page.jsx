// src/app/cheesecakes/page.js
const Cheesecakes = () => {
    const cheesecakes = [
      { id: 1, name: "Classic Cheesecake", price: 1200, imageUrl: "/homepage.jpg" },
      { id: 2, name: "Blueberry Cheesecake", price: 1350, imageUrl: "/homepage.jpg" },
      { id: 3, name: "Chocolate Cheesecake", price: 1450, imageUrl: "/homepage.jpg" },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-4xl text-center mb-8">Cheesecakes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cheesecakes.map(cheesecake => (
            <div key={cheesecake.id} className="card">
              <img src={cheesecake.imageUrl} alt={cheesecake.name} />
              <h3>{cheesecake.name}</h3>
              <p>₹ {cheesecake.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cheesecakes;
  