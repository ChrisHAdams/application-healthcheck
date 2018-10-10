'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('../menu.jsx');

var _menu2 = _interopRequireDefault(_menu);

var _checkComponentCardList = require('../components/checkComponentCardList.jsx');

var _checkComponentCardList2 = _interopRequireDefault(_checkComponentCardList);

var _apiFunctions = require('../common/apiFunctions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.state = {
      title: 'Loading Page...',
      subtitle: '',
      menutitle: '',
      footertext: '',
      componentChecks: new Array(0)
    };
    return _this;
  }

  _createClass(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _apiFunctions.getOptions)().then(function (res) {
        _this2.setState({
          title: res.title,
          subtitle: res.subtitle,
          menutitle: res.menutitle,
          footertext: res.footertext
        });
      });

      (0, _apiFunctions.getAllComponentChecks)().then(function (res) {
        _this2.setState({
          componentChecks: res
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            'header',
            { className: 'main-head' },
            _react2.default.createElement(_menu2.default, { menuTitle: this.state.menutitle })
          ),
          _react2.default.createElement('div', { className: 'leftside' }),
          _react2.default.createElement('div', { className: 'rightside' }),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h2',
              null,
              this.state.title
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.state.subtitle
            ),
            _react2.default.createElement(
              'p',
              null,
              'A list of the items being monitored.'
            ),
            _react2.default.createElement(_checkComponentCardList2.default, { componentChecks: this.state.componentChecks })
          ),
          _react2.default.createElement(
            'footer',
            { className: 'main-footer' },
            _react2.default.createElement(
              'div',
              { className: 'smallText' },
              this.state.footertext
            )
          )
        )
      );
    }
  }]);

  return List;
}(_react2.default.Component);

exports.default = List;