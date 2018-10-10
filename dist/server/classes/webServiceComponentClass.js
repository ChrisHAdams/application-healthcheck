'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentClass = require('./componentClass');

var _componentClass2 = _interopRequireDefault(_componentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebServiceComponentClass = function (_ComponentClass) {
  _inherits(WebServiceComponentClass, _ComponentClass);

  function WebServiceComponentClass(configObject) {
    _classCallCheck(this, WebServiceComponentClass);

    var _this = _possibleConstructorReturn(this, (WebServiceComponentClass.__proto__ || Object.getPrototypeOf(WebServiceComponentClass)).call(this, configObject));

    _this.setUrl(configObject.url);
    _this.setPayload(configObject.payload);
    _this.setMethod(configObject.method);
    return _this;
  }

  _createClass(WebServiceComponentClass, [{
    key: 'getUrl',
    value: function getUrl() {
      return this.url;
    }
  }, {
    key: 'setUrl',
    value: function setUrl(value) {
      this.url = value;
    }
  }, {
    key: 'getPayload',
    value: function getPayload() {
      return this.payload;
    }
  }, {
    key: 'setPayload',
    value: function setPayload(value) {
      this.payload = value;
    }
  }, {
    key: 'getMethod',
    value: function getMethod() {
      return this.method;
    }
  }, {
    key: 'setMethod',
    value: function setMethod(value) {
      this.method = value;
    }
  }]);

  return WebServiceComponentClass;
}(_componentClass2.default);

exports.default = WebServiceComponentClass;