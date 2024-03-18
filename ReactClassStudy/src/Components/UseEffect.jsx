import React, { useEffect, useState } from "react";

const UseEffect = () => {
  //   const [str, setStr] = useState("");
  var str = "";
  const [urlstr, changeurl] = useState("");

  async function data() {
    const respones = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );

    const data = await respones.json();

    str = data.joke;
  }

  const changeUrl = () => {
    data();
    changeUrl(str);
  };

  return (
    <div>
      <h1>{urlstr}</h1>
      <button onClick={changeUrl}>click</button>
    </div>
  );
};

export default UseEffect;
