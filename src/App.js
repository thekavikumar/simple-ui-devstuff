import React from "react";
import "./App.css";
import ShoppingCard from "./lib/components/Cards/ShoppingCard";

function App() {
  const click = () => {
    alert("You clicked the button!");
  };
  return (
    <div className="App">
      <ShoppingCard
        title="Christmas Tree"
        rate="4"
        price="50"
        image="https://www.therange.co.uk/_m3/1/9/1630896289_12_4310.jpg"
        btnTitle="Buy Now"
        btnOnClick={click}
        description="Looking for the perfect Christmas tree? Look no further! 
        Our cool tree is adorned with beautiful ornaments, sparkling lights, and a star on top.
        Standing tall at 7 feet, it's the perfect addition to any holiday decor. 
        Don't wait, add some cheer to your home today!"
      />
    </div>
  );
}

export default App;
