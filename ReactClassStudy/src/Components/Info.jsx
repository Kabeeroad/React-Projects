import React from "react";
import { useState } from "react";

const Info = () => {
  const [count, setCount] = useState(0);

  const handelclickadd = () => {
    setCount(count + 1);
  };
  const handelclickrest = () => {
    setCount(0);
  };
  const handelclickremove = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handelclickadd}>increment 😊</button>
      <button onClick={handelclickrest}>reste 😊</button>
      <button onClick={handelclickremove}>decrement 😊</button>
    </div>
  );
};

export default Info;
