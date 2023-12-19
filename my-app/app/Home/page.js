"use client";
import React, { useState } from "react";
import axios from "axios";
const page = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;

      console.log(data);
      setImages(data);
    } catch (err) {
      console.error("Error getting images");
    }
  };
  return (
    <div>
      <button
        onClick={getImages}
        className="px-5 py-4 rounded-md p-t-5 bg-green-600 text-white font-serif"
      >
        Get Images
      </button>
      <div className="p-10">
        {Images.map((elem, i) => {
          return (
            <img
              key={i}
              src={elem.download_url}
              width={300}
              height={300}
              className="m-10 rounded inline-block"
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
