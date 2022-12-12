import React from "react";
import "./CoolNavbar.css";

function CoolNavbar({ title, navItems, btnTitle }) {
  return (
    <>
      <div className="nav">
        <h1>{title}</h1>
        <div className="links">
          {navItems.map((key, item) => {
            return <a href={key[1]}>{key[0]}</a>;
          })}
        </div>
        <button className="loginBtn">{btnTitle}</button>
      </div>
    </>
  );
}

export default CoolNavbar;
