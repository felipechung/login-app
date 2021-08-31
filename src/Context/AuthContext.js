import { useState, createContext } from "react";

const Context = createContext();

function AuthProvider(props) {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Context.Provider value={{ authenticated, setAuthenticated }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
