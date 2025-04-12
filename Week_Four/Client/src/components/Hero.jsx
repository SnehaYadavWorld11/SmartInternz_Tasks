import React from 'react';

function Hero() {
  return (
    <section className="w-full bg-blue-100 py-20 text-center px-4 mt-10">
      <h1 className="text-5xl font-bold text-blue-800">
        Welcome to <span className="underline ">MyShop</span>
      </h1>
      <p className="text-xl text-gray-700 mt-4 max-w-md mx-auto">
        Discover the best products at unbeatable prices. Exclusive deals made just for you!
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-b font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-all">
        Explore Products
      </button>
    </section>
  );
}

export default Hero;
