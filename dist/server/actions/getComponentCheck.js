'use strict';

var _componentClassFactory = require('../classes/componentClassFactory');

var _componentClassFactory2 = _interopRequireDefault(_componentClassFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GetComponentCheckById(healthcheckItems, id) {

  var componentArray = _componentClassFactory2.default.createComponentList(healthcheckItems);
  var intId = parseInt(id, 10);
  var outputObj = {};

  for (var i = 0; i < componentArray.length; i += 1) {

    if (intId === componentArray[i].getKey()) {
      outputObj = componentArray[i].toJson();
      break;
    }
  }

  return outputObj;
}

function GetComponentCheckByIdJsonString(healthcheckItems, id) {

  return JSON.stringify(GetComponentCheckById(healthcheckItems, id));
}

function GetComponentCheckByName(healthcheckItems, name) {

  var componentArray = _componentClassFactory2.default.createComponentList(healthcheckItems);

  var outputObj = {};

  for (var i = 0; i < componentArray.length; i += 1) {

    if (name === componentArray[i].getName()) {
      outputObj = componentArray[i].toJson();
      break;
    }
  }

  return outputObj;
}

function GetComponentCheckByNameJsonString(healthcheckItems, name) {

  return JSON.stringify(GetComponentCheckByNameJsonString(healthcheckItems, name));
}

function GetComponentCheckByType(healthcheckItems, type) {

  var componentArray = _componentClassFactory2.default.createComponentList(healthcheckItems);

  var outputArray = [];

  for (var i = 0; i < componentArray.length; i += 1) {

    if (type === componentArray[i].getCheckType()) {
      outputArray.push(componentArray[i].toJson());
    }
  }

  return JSON.stringify(outputArray);
}

module.exports = { GetComponentCheckById: GetComponentCheckById, GetComponentCheckByName: GetComponentCheckByName, GetComponentCheckByType: GetComponentCheckByType };