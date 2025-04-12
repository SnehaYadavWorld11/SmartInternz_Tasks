import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const { state } = useLocation();

  if (!state) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="border rounded-xl p-6 shadow-lg text-center">
        <img src={state.image} alt={state.name} className="mx-auto mb-4 rounded-lg" />
        <h2 className="text-2xl font-bold mb-2">{state.name}</h2>
        <p className="text-gray-600 text-lg mb-4">${state.price.toFixed(2)}</p>
        <p className="text-gray-500">This is a detailed view of the {state.name}. Add your custom product description here.</p>
      </div>
    </div>
  );
};

export default ProductDetails;
