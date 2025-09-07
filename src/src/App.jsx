import React, { useState } from "react";

export default function App() {
  const [captcha, setCaptcha] = useState("AB12C");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(0);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleSubmit = () => {
    if (input === captcha) {
      setBalance(balance + 0.00015);
      setMessage("✅ Captcha correct! $0.00015 added.");
      setCaptcha(generateCaptcha());
      setInput("");
      setTimeout(() => {
        window.open("https://www.revenuecpmgate.com/yc4zy360?key=668ce693eb60fa7cc11dd002b6a3adab", "_blank");
      }, 500);
    } else {
      setMessage("❌ Wrong captcha. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Trype by Panda Technic</h1>
      <p className="mb-2">Your Balance: ${balance.toFixed(5)}</p>
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <p className="text-lg font-bold mb-2">{captcha}</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded w-full mb-3"
          placeholder="Enter captcha"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        <p className="mt-3 text-sm">{message}</p>
      </div>
    </div>
  );
}
