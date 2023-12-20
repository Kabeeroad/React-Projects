"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [dese, setdese] = useState("");
  const [maintask, setmaintask] = useState([]); //for every taske
  const submithandelar = (e) => {
    e.preventDefault(); //for stoping data
    setmaintask([...maintask, { title, dese }]);

    settitle("");
    setdese("");
  };
  let randertask = <h2>No Available Taske</h2>;
  if (maintask.length > 0) {
    randertask = maintask.map((t, i) => {
      //t= maines partictular taske the t  and i= inddex of element
      return (
        <li>
          <div className="flex mb-3 justify-between">
            <h4 className="text-2xl font-mono font-bold">{t.title}</h4>
            <h5 className="text-xl font-thin"> {t.dese} </h5>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-center font-serif p-5 font-bold text-3xl">
        React-ToDo-App
      </h1>
      <form onSubmit={submithandelar}>
        <input
          type="text"
          className="border-4 border-zinc-800 n-8 m-5  px-4 py-2 text-2xl"
          placeholder="Enter Your Task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-4 border-zinc-800 n-8 m-5 px-4 py-2 text-2xl"
          placeholder="Enter Your Description"
          value={dese}
          onChange={(e) => {
            setdese(e.target.value);
            // console.log(x.target.value);
          }}
        />
        <button className="bg-blue-600 text-white p-3 rounded font-bold">
          AddTask
        </button>
      </form>
      <hr />
      <div className="p-5 bg-slate-200 font-bold font-mono">
        <ul>{randertask}</ul>
      </div>
    </>
  );
};

export default page;
