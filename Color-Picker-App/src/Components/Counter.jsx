import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleclickadd = () => {
    setCount(count + 1);
  };

  const handleclickrest = () => {
    setCount(count == 0);
  };
  const handleclickremove = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counting: {count}</h1>
      <button onClick={handleclickadd}>increment</button>
      <button onClick={handleclickrest}>rest</button>
      <button onClick={handleclickremove}>decrement</button>
    </>
  );
};

export default Counter;
