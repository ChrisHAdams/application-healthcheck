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

var ServerComponentClass = function (_CheckClass) {
  _inherits(ServerComponentClass, _CheckClass);

  function ServerComponentClass(configObject) {
    _classCallCheck(this, ServerComponentClass);

    var _this = _possibleConstructorReturn(this, (ServerComponentClass.__proto__ || Object.getPrototypeOf(ServerComponentClass)).call(this, configObject));

    _this.url = configObject.url;
    return _this;
  }

  _createClass(ServerComponentClass, [{
    key: 'getUrl',
    value: function getUrl() {
      return this.url;
    }
  }, {
    key: 'setUrl',
    value: function setUrl(value) {
      this.url = value;
    }
  }]);

  return ServerComponentClass;
}(_componentClass2.default);

exports.default = ServerComponentClass;