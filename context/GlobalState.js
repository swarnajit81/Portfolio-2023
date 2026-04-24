import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "./AppContext";

const GlobalState = ({ children }) => {
  const [cursorStyle, setCursorStyle] = useState("");
  const [shaderReady, setShaderReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const reset = () => setCursorStyle("");
    router.events.on("routeChangeStart", reset);
    return () => router.events.off("routeChangeStart", reset);
  }, [router.events]);

  return (
    <AppContext.Provider
      value={{ cursorStyle, setCursorStyle, shaderReady, setShaderReady }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
