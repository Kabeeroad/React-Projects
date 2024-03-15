import React from "react";
import { useState } from "react";

const Userinfo = () => {
  const [name, setname] = useState("type here");

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  return (
    <>
      <input onChange={handleNameChange} />
      <h1>Name: {name}</h1>
    </>
  );
};

export default Userinfo;
