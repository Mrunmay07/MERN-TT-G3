import { useState } from "react";
import Parent from "./components/Parent";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Parent />
    </ContextProvider>
  );
}

export default App;
