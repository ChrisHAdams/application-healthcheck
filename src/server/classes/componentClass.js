const NotYetCheckedMessage = 'Check not yet executed';

export default class ComponentClass {

  constructor(configObject) {
    this.setKey(configObject.key);
    this.setName(configObject.name);
    this.setDescription(configObject.description);
    this.setExpectedResponseCode(configObject.expectedResponseCode);
    this.setExpectedResponseTime(configObject.expectedResponseTime);
    this.setActualResponseCode(null);
    this.setActualResponseTime(null);
    this.setTimestamp(null);

    if (configObject.checkType) {
      this.setCheckType(configObject.checkType);
    } else {
      this.setCheckType(configObject.type);
    }
  }

  getKey() {
    return this.key;
  }

  setKey(value) {
    this.key = value;
  }

  getName() {
    return this.name;
  }

  setName(value) {
    this.name = value;
  }

  getDescription() {
    return this.description;
  }

  setDescription(value) {
    this.description = value;
  }

  getCheckType() {
    return this.checkType;
  }

  setCheckType(value) {
    this.checkType = value;
  }

  getExpectedResponseCode() {
    return this.expectedResponseCode;
  }

  setExpectedResponseCode(value) {
    this.expectedResponseCode = value;
  }

  getExpectedResponseTime() {
    return this.expectedResponseTime;
  }

  setExpectedResponseTime(value) {
    this.expectedResponseTime = value;
  }

  getActualResponseCode() {
    return this.actualResponseCode;
  }

  setActualResponseCode(value) {
    this.actualResponseCode = value;
  }

  getActualResponseTime() {
    return this.actualResponseTime;
  }

  setActualResponseTime(value) {
    this.actualResponseTime = value;
  }

  checkResponseCodeResult() {

    if (this.actualResponseCode === null) {
      return NotYetCheckedMessage;
    }

    return this.getExpectedResponseCode() === this.getActualResponseCode() ? 'Pass' : 'Fail';
  }

  checkResponseTimeResult() {

    if (this.actualResponseTime === null) {
      return NotYetCheckedMessage;
    }

    return this.getExpectedResponseTime() >= this.getActualResponseTime() ? 'Pass' : 'Fail';
  }

  getResponseCodeResultMessage() {
    let message = '';

    if (this.checkResponseCodeResult() === NotYetCheckedMessage) {
      message = NotYetCheckedMessage;
    } else {
      message = `Expected Response Code is ${this.getExpectedResponseCode()}.
                  Actual Response Code is ${this.getActualResponseCode()}.
                  Result is a ${this.checkResponseCodeResult()}.`;
    }

    return message;
  }

  getResponseTimeResultMessage() {
    let message = NotYetCheckedMessage;

    if (this.checkResponseTimeResult() === NotYetCheckedMessage) {
      message = NotYetCheckedMessage;
    } else {
      message = `Expected Response Time is ${this.getExpectedResponseTime()}.
                  Actual Response Time is ${this.getActualResponseTime()}.
                  Result is a ${this.checkResponseTimeResult()}.`;
    }

    return message;
  }

  getResponseSummaryMessage() {
    let message = '';

    if (this.actualResponseTime === null) {
      message = `${this.getName()} check not yet executed.`;
    } else {
      message = `Called ${this.getName()} check.  Response code ${this.getActualResponseCode()}.  Response time ${this.getActualResponseTime()}ms.`;
    }

    return message;
  }

  setTimestamp(value) {
    this.timestamp = value;
  }

  getTimestamp() {
    return this.timestamp;
  }

  toJson() {

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
      actualResponseTime: this.getActualResponseTime(),
      actualResponseCode: this.getActualResponseCode(),
    };


/*     return {
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
      actualResponseCode: this.getActualResponseCode(),
    }; */

  }

}
