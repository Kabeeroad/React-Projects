import React from "react";

const page = () => {
  return (
    <>
      <h1 className="bg-black text-white text-center font-serif p-5 font-bold text-3xl">
        React-ToDo-App
      </h1>
      <form>
        <input
          type="text"
          className="border-4 border-zinc-800 n-8 m-5  px-4 py-2 text-2xl"
          placeholder="Enter Your Task"
        />
        <input
          type="text"
          className="border-4 border-zinc-800 n-8 m-5 px-4 py-2 text-2xl"
          placeholder="Enter Your Task"
        />
        <button className="bg-blue-600 text-white p-3 rounded font-bold">
          AddTask
        </button>
        <h1>hello</h1>
      </form>
    </>
  );
};

export default page;
