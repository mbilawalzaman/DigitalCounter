import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi"; // Importing icons
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isGreen, setIsGreen] = useState(false);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const toggleScreenColor = () => {
    setIsGreen((prev) => !prev);
  };

  return (
    <>
      <div className="font-mono">
        <h1 className="text-green-600 text-center text-4xl font-bold mb-4">
          Digital Tasbeeh Counter
        </h1>
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex flex-col justify-center items-center shadow-lg">
          <div className="py-2 ml-20">
            <button
              className={`px-2 py-1 w-4 h-4 rounded-full ${
                isGreen
                  ? "bg-green-500 border-white"
                  : "bg-gray-400 border-white"
              }`}
              onClick={toggleScreenColor}></button>
          </div>

          <div
            className={`w-24 h-12 rounded-md flex justify-center items-center border mb-2 shadow-md ${
              isGreen ? "bg-green-400 text-black" : "bg-gray-400"
            }`}>
            <span className="font-mono text-4xl">{count}</span>
          </div>
          <div className="flex space-x-2">
            <button
              className="bg-green-600 text-white w-8 h-8 rounded-full shadow-md border border-green-700 hover:bg-green-700 transition duration-200 flex items-center justify-center"
              onClick={incrementCount}>
              +
            </button>
            <button
              className="bg-red-600 text-white w-8 h-8 rounded-full shadow-md border border-red-700 hover:bg-red-700 transition duration-200 flex items-center justify-center"
              onClick={resetCount}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
