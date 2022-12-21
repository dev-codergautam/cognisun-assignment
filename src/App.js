import React, { createContext } from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Navigation from "./Routing";

export const UserContext = createContext();

function App() {
  const initialState = null;
  return (
      <UserContext.Provider value={{ initialState }}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
