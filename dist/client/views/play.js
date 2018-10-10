'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _checkComponentCard = require('../components/checkComponentCard.jsx');

var _checkComponentCard2 = _interopRequireDefault(_checkComponentCard);

var _menu = require('../menu.jsx');

var _menu2 = _interopRequireDefault(_menu);

var _apiFunctions = require('../common/apiFunctions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var responseCode = 200;
var responseTime = 500;

var Play = function (_React$Component) {
  _inherits(Play, _React$Component);

  function Play(props) {
    _classCallCheck(this, Play);

    var _this = _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).call(this, props));

    _this.state = {
      title: 'Loading Page...',
      subtitle: '',
      menutitle: '',
      footertext: ''
    };

    return _this;
  }

  _createClass(Play, [{
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

      var socket = (0, _socket2.default)();
      socket.on('connect', function () {
        console.log('Connecting...');
      });
      socket.on('message', function (data) {
        console.log('Message Received ' + data);
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
              'div',
              { className: 'contentGrid' },
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'BBC',
                description: 'Check the BBC Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Sky',
                description: 'Check the Sky Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'BBC',
                description: 'Check the BBC Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Sky',
                description: 'Check the Sky Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode }),
              _react2.default.createElement(_checkComponentCard2.default, {
                name: 'Google',
                description: 'Check the Google Website',
                type: 'website',
                expectedResponseTime: responseTime,
                expectedResponseCode: responseCode })
            )
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

  return Play;
}(_react2.default.Component);

exports.default = Play;