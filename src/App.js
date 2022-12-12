import React from "react";
import "./App.css";
import CoolFooter from "./lib/components/Footer/CoolFooter/CoolFooter";

function App() {
  let colOne = [
    ["Online", "#"],
    ["Print", "#"],
    ["Alternative Ads", "#"],
  ];
  let colTwo = [
    ["Hardware Design", "#"],
    ["Software Design", "#"],
    ["Web Development", "#"],
    ["Mobile Development", "#"],
    ["UI/UX Design", "#"],
    ["Data Science", "#"],
  ];
  let colThree = [
    ["Terms of Use", "#"],
    ["Privacy Policy", "#"],
    ["Cookie Policy", "#"],
  ];
  return (
    <div className="App">
      <CoolFooter
        logo="something"
        titleOne="Media"
        titleTwo="Technology"
        titleThree="Legal"
        copyright="© 2020 Something. All rights reserved."
        madeWith="Made with ❤️ in the India"
        colOne={colOne}
        colTwo={colTwo}
        colThree={colThree}
        contact="5534 Somewhere In. The World 22193-10212"
        email="kavikumarceo@gmail.com"
      />
    </div>
  );
}

export default App;
