"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
require("./ShoppingCard.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ShoppingCard(_ref) {
  let {
    title,
    rate,
    price,
    image,
    btnTitle,
    description
  } = _ref;
  let items = [];
  for (let i = 0; i < rate; i++) {
    items.push( /*#__PURE__*/_react.default.createElement("i", {
      class: "fa fa-star",
      "aria-hidden": "true"
    }));
  }
  for (let i = 0; i < 5 - rate; i++) {
    items.push( /*#__PURE__*/_react.default.createElement("i", {
      class: "fa fa-star-o",
      "aria-hidden": "true"
    }));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details"
  }, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("span", {
    className: "hint-star star"
  }, items.map((key, item) => {
    return key;
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "information"
  }, description), /*#__PURE__*/_react.default.createElement("div", {
    className: "control"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "price"
  }, "$", price), /*#__PURE__*/_react.default.createElement("span", {
    className: "shopping-cart"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shopping-cart",
    "aria-hidden": "true"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "buy"
  }, btnTitle)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: ""
  }))));
}
var _default = ShoppingCard;
exports.default = _default;