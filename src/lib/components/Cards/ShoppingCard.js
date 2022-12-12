import React from "react";
import "./ShoppingCard.css";

function ShoppingCard({ title, rate, price, image, btnTitle, description }) {
  let items = [];
  for (let i = 0; i < rate; i++) {
    items.push(<i class="fa fa-star" aria-hidden="true"></i>);
  }
  for (let i = 0; i < 5 - rate; i++) {
    items.push(<i class="fa fa-star-o" aria-hidden="true"></i>);
  }
  return (
    <>
      <div id="container">
        <div className="product-details">
          <h1>{title}</h1>
          <span className="hint-star star">
            {items.map((key, item) => {
              return item;
            })}
          </span>

          <p className="information">{description}</p>

          <div className="control">
            <button className="btn">
              <span className="price">${price}</span>
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span className="buy">{btnTitle}</span>
            </button>
          </div>
        </div>

        <div className="product-image">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default ShoppingCard;
