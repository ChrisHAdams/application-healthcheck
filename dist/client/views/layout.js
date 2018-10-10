"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "wrapper" },
          _react2.default.createElement(
            "header",
            { className: "main-head" },
            "The header"
          ),
          _react2.default.createElement(
            "div",
            { className: "leftside" },
            _react2.default.createElement(
              "h3",
              null,
              "Left Sidebar"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Stuff in left side bar"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "content" },
            _react2.default.createElement(
              "h1",
              null,
              "Main article area"
            ),
            _react2.default.createElement(
              "p",
              null,
              "In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid."
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "rightside" },
            _react2.default.createElement(
              "h3",
              null,
              "Right Sidebar"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Stuff in right side bar"
            )
          ),
          _react2.default.createElement(
            "footer",
            { className: "main-footer" },
            _react2.default.createElement(
              "h3",
              null,
              "The footer"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Footer Text"
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;