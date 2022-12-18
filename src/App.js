import React from "react";
import "./App.css";
import Button from "../src/lib/components/Button/Button";

function App() {
  const Click = () => {
    alert("Button clicked");
  };

  return (
    <div className="App">
      <Button label="Submit" btnOnClick={Click} />
    </div>
  );
}

export default App;
