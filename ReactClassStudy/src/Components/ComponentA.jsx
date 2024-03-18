import React, { createContext, useState } from "react";

import ComponentB from "./ComponentB";

export const UseContext = createContext();

const ComponentA = () => {
  const [user, setuser] = useState("Devs");

  return (
    <div>
      ComponentA
      <h1>hello {user}</h1>
      <UseContext.Provider value={user}>
        <ComponentB user={user} />
      </UseContext.Provider>
    </div>
  );
};

export default ComponentA;
