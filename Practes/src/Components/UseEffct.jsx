import React, { useEffect, useState } from "react";

const UseEffct = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);
  const handleclick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Count: &nbsp; {count}</h2>

      <button onClick={handleclick} style={{ padding: "10px 30px" }}>
        Add
      </button>
      <button onClick={handleclick} style={{ padding: "10px 30px" }}>
        Add
      </button>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6YYx0Zio8w2elwmnUT1aIA.png"
        alt=""
      />
    </div>
  );
};

export default UseEffct;
