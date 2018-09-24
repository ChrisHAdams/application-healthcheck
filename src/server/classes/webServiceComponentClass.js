import ComponentClass from './componentClass';

export default class WebServiceComponentClass extends ComponentClass {

  constructor(configObject) {
    super(configObject);
    this.setUrl(configObject.url);
    this.setPayload(configObject.payload);
    this.setMethod(configObject.method);
    this.setHeaders(configObject.headers);
  }

  getUrl() {
    return this.url;
  }

  setUrl(value) {
    this.url = value;
  }

  getHeaders() {
    return this.headers;
  }

  setHeaders(value) {
    this.headers = value;
  }

  getPayload() {
    return this.payload;
  }

  setPayload(value) {
    this.payload = value;
  }

  getMethod() {
    return this.method;
  }

  setMethod(value) {
    this.method = value;
  }

  toJson() {

    return {
      key: this.getKey(),
      name: this.getName(),
      description: this.getDescription(),
      type: this.getCheckType(),
      url: this.getUrl(),
      headers: this.getHeaders(),
      method: this.getMethod(),
      payload: this.getPayload(),
      expectedResponseCode: this.getExpectedResponseCode(),
      expectedResponseTime: this.getExpectedResponseTime(),
      actualCodeResult: this.checkResponseCodeResult(),
      actualTimeResult: this.checkResponseTimeResult(),
      actualResponseTime: this.getActualResponseTime(),
      actualResponseCode: this.getActualResponseCode(),
    };
  }
}
