'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _websiteComponentClass = require('./websiteComponentClass');

var _websiteComponentClass2 = _interopRequireDefault(_websiteComponentClass);

var _webServiceComponentClass = require('./webServiceComponentClass');

var _webServiceComponentClass2 = _interopRequireDefault(_webServiceComponentClass);

var _serverComponentClass = require('./serverComponentClass');

var _serverComponentClass2 = _interopRequireDefault(_serverComponentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentClassFactory = function () {
  function ComponentClassFactory() {
    _classCallCheck(this, ComponentClassFactory);
  }

  _createClass(ComponentClassFactory, null, [{
    key: 'createComponentObject',
    value: function createComponentObject(configObject) {

      var object = void 0;

      if (configObject.checkType === 'website') {
        object = new _websiteComponentClass2.default(configObject);
      } else if (configObject.checkType === 'webservice') {
        object = new _webServiceComponentClass2.default(configObject);
      } else if (configObject.checkType === 'server') {
        object = new _serverComponentClass2.default(configObject);
      }

      return object;
    }
  }, {
    key: 'createComponentList',
    value: function createComponentList(configObjectArray) {

      var componentSize = configObjectArray.length;
      var componentList = [];

      for (var i = 0; i < componentSize; i += 1) {
        componentList.push(ComponentClassFactory.createComponentObject(configObjectArray[i]));
      }

      return componentList;
    }
  }]);

  return ComponentClassFactory;
}();

exports.default = ComponentClassFactory;