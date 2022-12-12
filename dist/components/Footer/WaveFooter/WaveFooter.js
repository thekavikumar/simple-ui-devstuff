"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./WaveFooter.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function WaveFooter(_ref) {
  let {
    copyright
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("footer", {
    class: "footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "waves"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "wave",
    id: "wave1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "wave",
    id: "wave2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "wave",
    id: "wave3"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "wave",
    id: "wave4"
  })), /*#__PURE__*/_react.default.createElement("ul", {
    class: "social-icon"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "social-icon__item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "social-icon__link",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("ion-icon", {
    name: "logo-facebook"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    class: "social-icon__item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "social-icon__link",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("ion-icon", {
    name: "logo-twitter"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    class: "social-icon__item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "social-icon__link",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("ion-icon", {
    name: "logo-linkedin"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    class: "social-icon__item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "social-icon__link",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("ion-icon", {
    name: "logo-instagram"
  })))), /*#__PURE__*/_react.default.createElement("ul", {
    class: "menu"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "menu__item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "menu__link",
    href: "#"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    class: "menu__item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "menu__link",
    href: "#"
  }, "About")), /*#__PURE__*/_react.default.createElement("li", {
    class: "menu__item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "menu__link",
    href: "#"
  }, "Services")), /*#__PURE__*/_react.default.createElement("li", {
    class: "menu__item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "menu__link",
    href: "#"
  }, "Team")), /*#__PURE__*/_react.default.createElement("li", {
    class: "menu__item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "menu__link",
    href: "#"
  }, "Contact"))), /*#__PURE__*/_react.default.createElement("p", null, copyright)));
}
var _default = WaveFooter;
exports.default = _default;