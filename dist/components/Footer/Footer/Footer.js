"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Footer.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Footer(_ref) {
  let {
    titleOne,
    colOne,
    titleTwo,
    colTwo,
    titleThree,
    colThree
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("footer", {
    class: "footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "footer-col"
  }, /*#__PURE__*/_react.default.createElement("h4", null, titleOne), /*#__PURE__*/_react.default.createElement("ul", null, colOne.map(item => /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: item[1]
  }, item[0]))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "footer-col"
  }, /*#__PURE__*/_react.default.createElement("h4", null, titleTwo), /*#__PURE__*/_react.default.createElement("ul", null, colTwo.map(item => /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: item[1]
  }, item[0]))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "footer-col"
  }, /*#__PURE__*/_react.default.createElement("h4", null, titleThree), /*#__PURE__*/_react.default.createElement("ul", null, colThree.map(item => /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: item[1]
  }, item[0]))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "footer-col"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "follow us"), /*#__PURE__*/_react.default.createElement("div", {
    class: "social-links"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fa fa-facebook"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fa fa-twitter"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fa fa-instagram"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fa fa-linkedin"
  }))))))));
}
var _default = Footer;
exports.default = _default;