import CheckClass from './componentClass';

export default class WebsiteComponentClass extends CheckClass {

  constructor(configObject) {
    super(configObject);
    this.url = configObject.url;
  }

  getUrl() {
    return this.url;
  }

  setUrl(value) {
    this.url = value;
  }

}
