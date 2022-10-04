const NotYetCheckedMessage = 'Check not yet executed';

export default class AssetBase {

  key: number;
  name: string;
  description: string;
  checkType: string;
  url: string;
  expectedResponseCode: number;
  expectedResponseTime: number;
  actualResponseCode: number;
  actualResponseTime: number;
  timestamp: number;

  constructor(configObject) {
    this.setKey(configObject.key);
    this.setName(configObject.name);
    this.setUrl(configObject.url);
    this.setDescription(configObject.description);
    this.setExpectedResponseCode(configObject.expectedResponseCode);
    this.setExpectedResponseTime(configObject.expectedResponseTime);
    this.setActualResponseCode(0);
    this.setActualResponseTime(0);
    this.setTimestamp(0);
    this.setCheckType(configObject.checkType);
  }

  getKey():number {
    return this.key;
  }

  setKey(value: number) {
    this.key = value;
  }

  getName():string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getDescription():string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }

  getCheckType():string {
    return this.checkType;
  }

  setCheckType(value: string) {
    this.checkType = value;
  }

  getUrl(): string {
    return this.url;
  }

  setUrl(value: string) {
    this.url = value;
  }

  getExpectedResponseCode():number {
    return this.expectedResponseCode;
  }

  setExpectedResponseCode(value: number) {
    this.expectedResponseCode = value;
  }

  getExpectedResponseTime():number {
    return this.expectedResponseTime;
  }

  setExpectedResponseTime(value: number) {
    this.expectedResponseTime = value;
  }

  getActualResponseCode(): number {
    return this.actualResponseCode;
  }

  setActualResponseCode(value: number) {
    this.actualResponseCode = value;
  }

  getActualResponseTime() :number {
    return this.actualResponseTime;
  }

  setActualResponseTime(value: number) {
    this.actualResponseTime = value;
  }

  checkResponseCodeResult(): string {

    if (this.actualResponseCode === null) {
      return NotYetCheckedMessage;
    }

    return this.getExpectedResponseCode() === this.getActualResponseCode() ? 'Pass' : 'Fail';
  }

  checkResponseTimeResult(): string {

    if (this.actualResponseTime === null) {
      return NotYetCheckedMessage;
    }

    return this.getExpectedResponseTime() >= this.getActualResponseTime() ? 'Pass' : 'Fail';
  }

  getResponseCodeResultMessage(): string {
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

  getResponseTimeResultMessage(): string {
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

  getResponseSummaryMessage(): string {
    let message = '';

    if (this.actualResponseTime === null) {
      message = `${this.getName()} check not yet executed.`;
    } else {
      message = `Called ${this.getName()} check.  Response code ${this.getActualResponseCode()}.  Response time ${this.getActualResponseTime()}ms.`;
    }

    return message;
  }

  setTimestamp(value: number) {
    this.timestamp = value;
  }

  getTimestamp(): number {
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

  }

}
