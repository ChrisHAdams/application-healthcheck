import ComponentClass from './componentClass';

export default class WebServiceComponentClass extends ComponentClass {

  constructor(configObject) {
    super(configObject);
    this.setUrl(configObject.url);
    this.setPayload(configObject.payload);
    this.setMethod(configObject.method);
  }

  getUrl() {
    return this.url;
  }

  setUrl(value) {
    this.url = value;
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

}
