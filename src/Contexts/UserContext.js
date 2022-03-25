import React, { useState, createContext } from "react";
import { userData } from "./User";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[c=user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
