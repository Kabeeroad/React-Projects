import React from "react";
import axios from "axios";
const page = () => {
  const getImages = async () => {
    const response =await axios.get("https://picsum.photos/v2/list");
    console.log(response.data)
  };
  return (
    <div>
      <button onClick={()=>{}} 
      className="px-5 py-4 rounded-md p-t-5 bg-green-600 text-white font-serif">Get Images</button>
      <div className="p-10">div</div>
    </div>
  );
};

export default page;
