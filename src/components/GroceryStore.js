import React from "react";

const GroceryStore = () => {
  const categories = [
    {
      id: 1,
      name: "Fresh Fruits",
      items: [
        { id: 1, name: "Apples", price: "$3.99 / lb", image: "https://www.freepik.com/free-photo/flat-lay-blackboard-with-fruit-vegetables-rehttps://www.freepik.com/premium-photo/healthy-organic-products-with-paper-bag_4245984.htm#fromView=search&page=1&position=8&uuid=3a211bbf-54de-497c-b546-f6fa7407d676&query=grocery+imagesusable-bags_7451752.htm#fromView=search&page=1&position=1&uuid=3a211bbf-54de-497c-b546-f6fa7407d676&query=grocery+images&source=unsplash" },
        { id: 2, name: "Bananas", price: "$1.29 / lb", image: "https://via.placeholder.com/150" },
      ],
    },
    {
      id: 2,
      name: "Dairy & Bakery",
      items: [
        { id: 3, name: "Organic Milk", price: "$4.50", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Brown Bread", price: "$2.50", image: "https://via.placeholder.com/150" },
      ],
    },
    {
      id: 3,
      name: "Snacks & Beverages",
      items: [
        { id: 5, name: "Potato Chips", price: "$1.99", image: "https://via.placeholder.com/150" },
        { id: 6, name: "Orange Juice", price: "$3.20", image: "https://via.placeholder.com/150" },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800">🛒 Grocery Store</h1>
        <p className="text-gray-600 mt-1">
          Get groceries delivered at your doorstep – fast, fresh, and easy.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for groceries..."
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      {/* Categories */}
      {categories.map((category) => (
        <div key={category.id} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {category.name}
          </h2>

          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-3">{item.price}</p>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default GroceryStore;
