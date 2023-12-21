import React from "react";

const Background = () => {
  return (
    <>
      <div className=" w-full h-screen bg-zinc-600 fixed ">
        <div className=" absolute w-full items-center justify-center flex top[5%] py-3 mt-5 font-semibold font-serif bg-slate-400">
          Document
        </div>
        <div className=" absolute top-1/2 right-1/2 text-2xl font-semibold">
          Docs.
        </div>
      </div>
    </>
  );
};

export default Background;
