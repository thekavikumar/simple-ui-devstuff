import React from "react";
import "./App.css";
import Button from "./lib/components/Button";
// import { Button } from "simple-ui-devstuff";

function App() {
  return (
    <div className="App">
      {/* <Button label="Kavi" /> */}
      <Button label="Submit" size="text-sm" type="alert" />
    </div>
  );
}

export default App;
