import { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";

function App() {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [pos, setPos] = useState(0);
  const [state, setState] = useState(data.slice(0, 2));

  return (
    <div className="h-screen w-screen bg-gray-800">
      <main className="flex flex-col">
        <img
          src={logo}
          className="w-80 h-80 mx-auto animate-spin-slow"
          alt="logo"
        />
        <div className="relative mx-auto grid grid-cols-1 grid-rows-1 w-1/3 h-44 bg-gray-50">
          {state.map((_, key) => (
            <Slide
              key={key}
              pos={state.length > 2 ? key - 1 : key}
              value={state[key]}
            >
              {state[key]}
            </Slide>
          ))}
        </div>
        <div className="flex space-x-5 py-6 justify-center">
          <button
            className={`px-4 rounded ${
              pos === 0 ? "bg-blue-400" : "bg-sky-400"
            }`}
            onClick={() => {
              setState([1, 2]);
              setTimeout(() => {
                setPos(pos - 1);
                setState(data.slice(pos - 2, pos + 1));
              }, 500);
            }}
          >
            PREV
          </button>
          <button
            className={`px-4 rounded ${
              pos === 5 ? "bg-blue-400" : "bg-sky-400 "
            }`}
            onClick={() => {
              setState([0, 1]);
              setPos(pos + 1);
              setTimeout(() => {
                setState(data.slice(pos, pos + 3));
              }, 500);
            }}
          >
            NEXT
          </button>
        </div>
      </main>
    </div>
  );
}

function Slide({ children, pos, value }) {
  const bgs = [
    "bg-violet-400",
    "bg-green-400",
    "bg-red-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-white",
    "bg-sky-400",
  ];

  return (
    <div
      data-position={pos}
      className={`row-start-1 col-start-1 w-full h-full ${bgs[value]} trending-slide transition-transform duration-1000`}
    >
      {children}
    </div>
  );
}

export default App;
