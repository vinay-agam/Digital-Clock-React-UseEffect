import React, { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function hourFormat(hour) {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  }

  function numberFormatZero(num) {
    return num < 10 ? `0${num}` : num;
  }

   const formatDate = (date) => {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString(undefined, options);
    };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="bg-gray-800 rounded-lg p-10 shadow-lg text-center">
          <h1 className="text-white text-6xl font-mono">
            {numberFormatZero(hourFormat(time.getHours()))}:
            {numberFormatZero(time.getMinutes())}:
            {numberFormatZero(time.getSeconds())}
            {time.getHours >= 12 ? " AM" : " PM"}
          </h1>
          <p className="text-gray-400 text-xl mt-4">{formatDate(time)}</p>
        </div>
      </div>
    </>
  );
};

export default App;
