import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form className="p-6 border rounded-lg shadow-lg bg-white" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-2">Login</h2>
      <input
        type="email"
        className="border p-3 w-full rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-3 w-full rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-green-500 hover:bg-green-700 text-white p-3 rounded-lg w-full transition-all">Login</button>
    </form>
  );
};

export default LoginForm;