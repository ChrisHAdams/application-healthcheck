'use strict';

var _componentClassFactory = require('../classes/componentClassFactory');

var _componentClassFactory2 = _interopRequireDefault(_componentClassFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListComponentChecks(healthcheckItems) {

  var componentArray = _componentClassFactory2.default.createComponentList(healthcheckItems);
  var outputArray = [];

  for (var i = 0; i < componentArray.length; i += 1) {
    outputArray.push(componentArray[i].toJson());
  }

  return JSON.stringify(outputArray);
}

module.exports = ListComponentChecks;