import React from "react";
import "./Button.css";

function Button({ label, btnOnClick }) {
  return (
    <div className="">
      <button class="button-29" role="button" onClick={btnOnClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
