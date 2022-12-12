"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./CoolNavbar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CoolNavbar(_ref) {
  let {
    title,
    navItems,
    btnTitle
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "links"
  }, navItems.map((key, item) => {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: key[1]
    }, key[0]);
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "loginBtn"
  }, btnTitle)));
}
var _default = CoolNavbar;
exports.default = _default;