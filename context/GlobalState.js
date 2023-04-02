import React, { useState } from "react";
import { AppContext } from "./AppContext";

const GlobalState = ({ children }) => {
  const [cursorStyle, setCursorStyle] = useState("");
  return (
    <AppContext.Provider value={{ cursorStyle, setCursorStyle }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
