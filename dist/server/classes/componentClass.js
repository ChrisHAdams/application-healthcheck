'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentClass = function () {
  function ComponentClass(configObject) {
    _classCallCheck(this, ComponentClass);

    this.setKey(configObject.key);
    this.setName(configObject.name);
    this.setDescription(configObject.description);
    this.setCheckType(configObject.checkType);
    this.setExpectedResponseCode(configObject.expectedResponseCode);
    this.setExpectedResponseTime(configObject.expectedResponseTime);
    this.setActualResponseCode(null);
    this.setActualResponseTime(null);
    this.setTimestamp(null);
  }

  _createClass(ComponentClass, [{
    key: 'getKey',
    value: function getKey() {
      return this.key;
    }
  }, {
    key: 'setKey',
    value: function setKey(value) {
      this.key = value;
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'setName',
    value: function setName(value) {
      this.name = value;
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this.description;
    }
  }, {
    key: 'setDescription',
    value: function setDescription(value) {
      this.description = value;
    }
  }, {
    key: 'getCheckType',
    value: function getCheckType() {
      return this.checkType;
    }
  }, {
    key: 'setCheckType',
    value: function setCheckType(value) {
      this.checkType = value;
    }
  }, {
    key: 'getExpectedResponseCode',
    value: function getExpectedResponseCode() {
      return this.expectedResponseCode;
    }
  }, {
    key: 'setExpectedResponseCode',
    value: function setExpectedResponseCode(value) {
      this.expectedResponseCode = value;
    }
  }, {
    key: 'getExpectedResponseTime',
    value: function getExpectedResponseTime() {
      return this.expectedResponseTime;
    }
  }, {
    key: 'setExpectedResponseTime',
    value: function setExpectedResponseTime(value) {
      this.expectedResponseTime = value;
    }
  }, {
    key: 'getActualResponseCode',
    value: function getActualResponseCode() {
      return this.actualResponseCode;
    }
  }, {
    key: 'setActualResponseCode',
    value: function setActualResponseCode(value) {
      this.actualResponseCode = value;
    }
  }, {
    key: 'getActualResponseTime',
    value: function getActualResponseTime() {
      return this.actualResponseTime;
    }
  }, {
    key: 'setActualResponseTime',
    value: function setActualResponseTime(value) {
      this.actualResponseTime = value;
    }
  }, {
    key: 'checkResponseCodeResult',
    value: function checkResponseCodeResult() {

      if (this.actualResponseCode == null) {
        return 'Not yet checked.';
      }

      return this.getExpectedResponseCode() === this.getActualResponseCode() ? 'Pass' : 'Fail';
    }
  }, {
    key: 'checkResponseTimeResult',
    value: function checkResponseTimeResult() {

      if (this.actualResponseTime == null) {
        return 'Not yet checked.';
      }

      return this.getExpectedResponseTime() >= this.getActualResponseTime() ? 'Pass' : 'Fail';
    }
  }, {
    key: 'getResponseCodeResultMessage',
    value: function getResponseCodeResultMessage() {
      var message = '';

      if (this.checkResponseCodeResult() == null) {
        message = 'Check not yet executed.';
      } else {
        message = 'Expected Response Code is ' + this.getExpectedResponseCode() + '.\n                  Actual Response Code is ' + this.getActualResponseCode() + '.\n                  Result is a ' + this.checkResponseCodeResult() + '.';
      }

      return message;
    }
  }, {
    key: 'getResponseTimeResultMessage',
    value: function getResponseTimeResultMessage() {
      var message = '';

      if (this.checkResponseTimeResult() == null) {
        message = 'Check not yet executed.';
      } else {
        message = 'Expected Response Time is ' + this.getExpectedResponseTime() + '.\n                  Actual Response Time is ' + this.getActualResponseTime() + '.\n                  Result is a ' + this.checkResponseTimeResult() + '.';
      }

      return message;
    }
  }, {
    key: 'getResponseSummaryMessage',
    value: function getResponseSummaryMessage() {
      var message = '';

      if (this.checkResponseTimeResult() == null) {
        message = this.getName() + ' check not yet executed.';
      } else {
        message = 'Called ' + this.getName() + ' check.  Response code ' + this.getActualResponseCode() + '.  Response time ' + this.getActualResponseTime() + 'ms.';
      }

      return message;
    }
  }, {
    key: 'setTimestamp',
    value: function setTimestamp(value) {
      this.timestamp = value;
    }
  }, {
    key: 'getTimestamp',
    value: function getTimestamp() {
      return this.timestamp;
    }
  }, {
    key: 'toJson',
    value: function toJson() {

      return {
        key: this.getKey(),
        name: this.getName(),
        description: this.getDescription(),
        type: this.getCheckType(),
        url: this.getUrl(),
        expectedResponseCode: this.getExpectedResponseCode(),
        expectedResponseTime: this.getExpectedResponseTime(),
        actualCodeResult: this.checkResponseCodeResult(),
        actualTimeResult: this.checkResponseTimeResult(),
        responseTimeMessage: this.getResponseTimeResultMessage(),
        responseCodeMessage: this.getResponseCodeResultMessage(),
        actualResponseTime: this.getActualResponseTime(),
        actualResponseCode: this.getActualResponseCode()
      };
    }
  }]);

  return ComponentClass;
}();

exports.default = ComponentClass;