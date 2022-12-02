import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={`btn ${props.size} ${props.type}`}>{props.label}</button>
  );
}

export default Button;
