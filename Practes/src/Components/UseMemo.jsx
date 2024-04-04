import React from "react";
import { useState } from "react";

const UseMemo = () => {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({}); //what is this doing
  const handleChange = (e) => {
    const { name, value } = e.target; //what is this doing
    setFormData({ ...formdata, [name]: value }); //what is this doing
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //what is this doing
    //validation
    const newErrors = {};
    if (!formdata.username) {
      newErrors.username = "name is required";
    }
    if (!formdata.email) {
      newErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      //what is this doing
      newErrors.email = "invalide eamil";
    }
    if (!formdata.password) {
      newErrors.password = "password is requird";
    }
    if (Object.keys(newErrors).length === 0) {
      //what is this doing
      console.log("Form submitted successfully:", formdata);
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username:</label>
          <input
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">submite</button>
      </form>
    </div>
  );
};

export default UseMemo;
