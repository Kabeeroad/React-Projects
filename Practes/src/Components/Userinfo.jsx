import React from "react";

const Userinfo = () => {
  const ImgUrl = // "https://media.vogue.in/wp-content/uploads/2018/07/kiyara-in.jpg";
    "https://st4.depositphotos.com/6903990/31458/i/450/depositphotos_314585930-stock-photo-beauty-girl-long-shiny-wavy.jpg";

  const handelclick = (e) => (e.target.style.display = "none");
  return (
    <div>
      <img onClick={handelclick} src={ImgUrl} alt="" />
    </div>
  );
};

export default Userinfo;
