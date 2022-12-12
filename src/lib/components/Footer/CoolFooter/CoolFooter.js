import React from "react";
import "./CoolFooter.css";

function CoolFooter({
  logo,
  titleOne,
  titleTwo,
  titleThree,
  colOne,
  colTwo,
  colThree,
  email,
  contact,
  copyright,
  madeWith,
}) {
  return (
    <>
      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">{logo}</h1>

          <h2>Contact</h2>

          <address>
            {contact}
            <br />
            <a class="footer__btn" href={`mailto:${email}`}>
              Email Us
            </a>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">{titleOne}</h2>

            <ul class="nav__ul">
              {colOne.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item[1]}>{item[0]}</a>
                  </li>
                );
              })}
            </ul>
          </li>

          <li class="nav__item nav__item--extra">
            <h2 class="nav__title">{titleTwo}</h2>

            <ul class="nav__ul nav__ul--extra">
              {colTwo.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item[1]}>{item[0]}</a>
                  </li>
                );
              })}
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title">{titleThree}</h2>

            <ul class="nav__ul">
              {colThree.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item[1]}>{item[0]}</a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p>{copyright}</p>

          <div class="legal__links">
            <span>{madeWith}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default CoolFooter;
