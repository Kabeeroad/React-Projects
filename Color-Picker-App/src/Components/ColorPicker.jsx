import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setcolor] = useState("");

  const onchangecolorpick = (e) => {
    setcolor(e.target.value);
  };
  return (
    <div>
      <h1>Colo-Picker-App</h1>
      <p>Selected Clor: {color}</p>
      <label>
        select a color: &nbsp;
        <input type="color" onChange={onchangecolorpick} />
      </label>
    </div>
  );
};

export default ColorPicker;
