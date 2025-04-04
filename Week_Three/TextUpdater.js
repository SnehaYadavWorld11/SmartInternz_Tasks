import React, { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-semibold mb-2">Live Text Updater</h2>
      <input
        type="text"
        className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-3 text-gray-700 text-lg font-medium">{text}</p>
    </div>
  );
};

export default TextUpdater;