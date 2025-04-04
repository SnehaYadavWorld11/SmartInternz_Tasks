import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", inputValue);
  };

  return (
    <form className="p-6 border rounded-lg shadow-lg bg-white" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-2">Submit Form</h2>
      <input
        type="text"
        className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter text..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-lg w-full transition-all">Submit</button>
    </form>
  );
};

export default Form;