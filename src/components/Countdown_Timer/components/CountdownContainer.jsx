import { useState } from "react";

function CountdownContainer() {
  const [startTimer, setStartTimer] = useState(false);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const handleReset = () => {
    setStartTimer(false);
  };

  const handleStart = () => {
    setStartTimer(true);
  };

  return (
    <div className="bg-cyan-600 h-[100vh]">
      <div className="py-4">
        <h1 className="font-bold text-5xl text-center">Countdown Timer</h1>
      </div>

      {!startTimer ? (
        <div className="text-center m-6">
          <div>
            <input
              type="text"
              placeholder="HH"
              className="bg-white h-18 w-18 border text-center text-2xl"
            />
            <input
              type="text"
              placeholder="MM"
              className="bg-white h-18 w-18 border text-center ml-2 text-2xl"
            />
            <input
              type="text"
              placeholder="SS"
              className="bg-white h-18 w-18 border text-center ml-2 text-2xl"
            />
          </div>
          <button
            className="bg-yellow-700 text-white py-3 px-6 my-4 cursor-pointer border border-black rounded-lg active:bg-yellow-800"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      ) : (
        <div className="text-center m-6">
          <div>
            <span className="text-6xl">{hours}</span>
            <span className="text-6xl">:</span>
            <span className="text-6xl">{mins}</span>
            <span className="text-6xl">:</span>
            <span className="text-6xl">{secs}</span>
          </div>
          <div className="m-6">
            <button className="bg-red-700 py-3 px-6 rounded-lg active:bg-red-800 cursor-pointer border">
              Pause
            </button>
            <button
              className="bg-black py-3 px-6 rounded-lg text-white active:bg-gray-400 cursor-pointer border mx-2"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownContainer;
