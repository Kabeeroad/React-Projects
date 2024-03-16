import React from "react";
import { useState } from "react";

const Userinfo = () => {
  const [name, setname] = useState("type here");
  const [number, setnumber] = useState(1);
  const [message, setMessage] = useState("");
  const [payment, setpayment] = useState("");
  const [develvery, setdevelvery] = useState("");
  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  function onchangenumber(event) {
    setnumber(event.target.value);
  }

  const onchamgetextarea = (event) => {
    setMessage(event.target.value);
  };

  const onchangepayment = (event) => {
    setpayment(event.target.value);
  };

  const ondevelverychange = (event) => {
    setdevelvery(event.target.value);
  };
  return (
    <>
      <input onChange={handleNameChange} />
      <h1>Name: {name}</h1>

      <input onChange={onchangenumber} type="number" />
      <p>quntite: {number}</p>
      <br />
      <textarea
        onChange={onchamgetextarea}
        placeholder="inter your message here?"
      />

      <p>message: {message}</p>
      <br />
      <select onChange={onchangepayment} name="select">
        <option value="easypassa">easypassa</option>
        <option value="jazzcash">jazzcash</option>
        <option value="sadapy">sadapay</option>
      </select>
      <p>Payment: {payment}</p>
      <br />

      <label>
        <input
          type="radio"
          value="pikup"
          checked={develvery == "pikup"}
          onChange={ondevelverychange}
        />
        pikup
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="dropit"
          checked={develvery == "dropit"}
          onChange={ondevelverychange}
        />
        dropit
      </label>
      <p>delevery methods: {develvery}</p>
    </>
  );
};

export default Userinfo;
