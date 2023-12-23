import React from "react";

const Background = () => {
  return (
    <>
      <div className=" z-[2] w-full h-screen bg-zinc-600 fixed ">
        <div className=" absolute w-full items-center justify-center flex top[5%] py-3 mt-5 font-semibold  text-zinc-400">
          Document
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vh] leading-none tracking-tighter font-semibold text-zinc-900 ">
          Docs.
        </div>
      </div>
    </>
  );
};

export default Background;
