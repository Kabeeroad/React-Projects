import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, SetTime] = useState(new Date());

  useEffect(() => {
    const newtime = setInterval(() => {
      SetTime(new Date());
    }, 1000);
    return () => clearInterval(newtime); //clean function
  }, []);
  function formatime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const AMPM = hours >= 12 ? "PM" : "AM";

    return `${hours}: ${minutes}: ${seconds} ${AMPM}`;
  }
  return (
    <div className="clock-contianer">
      <div className="clock">
        <span>{formatime()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
