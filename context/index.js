import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [username, setusername] = useState("");
  const [secret, setsecret] = useState("");

  const value = {
    username,
    setusername,
    secret,
    setsecret,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
