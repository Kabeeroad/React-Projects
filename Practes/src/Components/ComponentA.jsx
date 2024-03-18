import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = (props) => {
  const [user, setuser] = useState("Devs");
  return (
    <div className="A">
      <h1>ComponentA</h1>
      <h2>Hello {user}</h2>

      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
