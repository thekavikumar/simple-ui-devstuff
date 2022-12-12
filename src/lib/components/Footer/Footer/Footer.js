import React from "react";
import "./Footer.css";

function Footer({ titleOne, colOne, titleTwo, colTwo, titleThree, colThree }) {
  return (
    <>
      <footer class={`footer`}>
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>{titleOne}</h4>
              <ul>
                {colOne.map((item) => (
                  <li>
                    <a href={item[1]}>{item[0]}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="footer-col">
              <h4>{titleTwo}</h4>
              <ul>
                {colTwo.map((item) => (
                  <li>
                    <a href={item[1]}>{item[0]}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="footer-col">
              <h4>{titleThree}</h4>
              <ul>
                {colThree.map((item) => (
                  <li>
                    <a href={item[1]}>{item[0]}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
