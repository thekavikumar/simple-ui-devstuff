"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./CoolFooter.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CoolFooter(_ref) {
  let {
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
    madeWith
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("footer", {
    class: "footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "footer__addr"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    class: "footer__logo"
  }, logo), /*#__PURE__*/_react.default.createElement("h2", null, "Contact"), /*#__PURE__*/_react.default.createElement("address", null, contact, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("a", {
    class: "footer__btn",
    href: "mailto:".concat(email)
  }, "Email Us"))), /*#__PURE__*/_react.default.createElement("ul", {
    class: "footer__nav"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "nav__item"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    class: "nav__title"
  }, titleOne), /*#__PURE__*/_react.default.createElement("ul", {
    class: "nav__ul"
  }, colOne.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: item[1]
    }, item[0]));
  }))), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav__item nav__item--extra"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    class: "nav__title"
  }, titleTwo), /*#__PURE__*/_react.default.createElement("ul", {
    class: "nav__ul nav__ul--extra"
  }, colTwo.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: item[1]
    }, item[0]));
  }))), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav__item"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    class: "nav__title"
  }, titleThree), /*#__PURE__*/_react.default.createElement("ul", {
    class: "nav__ul"
  }, colThree.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: item[1]
    }, item[0]));
  })))), /*#__PURE__*/_react.default.createElement("div", {
    class: "legal"
  }, /*#__PURE__*/_react.default.createElement("p", null, copyright), /*#__PURE__*/_react.default.createElement("div", {
    class: "legal__links"
  }, /*#__PURE__*/_react.default.createElement("span", null, madeWith)))));
}
var _default = CoolFooter;
exports.default = _default;