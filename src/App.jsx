import { useState } from "react";
import "./App.css";
import { GrPowerReset } from "react-icons/gr";
import { HiPlus } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";
import { HiMiniLightBulb } from "react-icons/hi2";
import Tasbih from "./assets/Tasbih.png";

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
      <div>
        <img
          src={Tasbih}
          alt="Tasbeeh"
          className="mx-auto w-60 h-52 "
          style={{ backgroundColor: "transparent" }} // Inline style as a last resort
        />
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="w-52 h-52 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex flex-col justify-center items-center shadow-lg">
          <div className="py-2 ml-20">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full overflow-hidden cursor-pointer ${
                isGreen ? "border border-green-400" : "border border-white"
              }`}
              onClick={toggleScreenColor}>
              {isGreen ? (
                <HiLightBulb className="w-6 h-6 text-green-400" />
              ) : (
                <HiMiniLightBulb className="w-6 h-6 text-white" />
              )}
            </div>
          </div>

          <div
            className={`w-36 h-18 rounded-md flex justify-center items-center border mb-2 shadow-md ${
              isGreen ? "bg-green-400 text-black" : "bg-gray-400"
            }`}>
            <span className="font-mono text-4xl">{count}</span>
          </div>
          <div className="flex space-x-2 mt-2">
            <button
              className="bg-green-600 text-white w-14 h-14 rounded-full shadow-md border border-green-700 hover:bg-green-700 transition duration-200 flex items-center justify-center"
              onClick={incrementCount}>
              <HiPlus />
            </button>
            <button
              className="bg-red-600 text-white w-14 h-14 rounded-full shadow-md border border-red-700 hover:bg-red-700 transition duration-200 flex items-center justify-center"
              onClick={resetCount}>
              <GrPowerReset />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
