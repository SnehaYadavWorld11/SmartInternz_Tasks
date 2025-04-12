import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "$999", description: "Powerful laptop", image: "https://images.pexels.com/photos/18104/pexels-photo.jpg" },
  { id: 2, name: "Phone", price: "$499", description: "Sleek smartphone", image: "./assets/phone.jpg" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones", image: "./assets/headphone.jpg" },
  { id: 4, name: "Smartwatch", price: "$299", description: "Stylish smartwatch", image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg" },
];

function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product for "View Details"

  const location = useLocation();

  // Reset the product list when navigating back to the home page
  useEffect(() => {
    if (location.pathname === "/") {
      setSearchResults(products); // Restore the full product list
      setSearchQuery(""); // Clear the search input
      setSelectedProduct(null); // Clear selected product
    }
  }, [location.pathname]);

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredProducts);
  };

  return (
    <section className="w-full px-6 py-12 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">Our Products</h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-300 focus:outline-none transition w-1/3"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Products */}
      <div
        className={`${
          searchResults.length === 1
            ? "flex justify-center"
            : "flex flex-wrap justify-center gap-8"
        }`}
      >
        {searchResults.length > 0 ? (
          searchResults.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
              <img src={product.image} alt={product.name} className="w-full h-64 object-contain mb-4" />
              <h3 className="text-xl font-bold text-blue-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.price}</p>
              <p className="text-gray-500 mt-2">{product.description}</p>
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setSelectedProduct(product)} // Set selected product
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-xl">No products found.</p>
        )}
      </div>

      {/* Selected Product Details */}
      {selectedProduct && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold text-blue-800">{selectedProduct.name}</h2>
          <p className="text-gray-600">{selectedProduct.price}</p>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-64 object-contain mt-4 mb-4"
          />
          <p className="text-gray-500">{selectedProduct.description}</p>
          <button
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => setSelectedProduct(null)} // Clear selected product
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductList;
