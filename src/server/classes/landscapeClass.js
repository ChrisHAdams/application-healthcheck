
export default class LandscapeClass {

  constructor(landscapeObject) {
    this.setKey(landscapeObject.key);
    this.setName(landscapeObject.name);
    this.setLayoutElements(landscapeObject.layoutElements);
    this.setItems(landscapeObject.itemsToCheck);
  }

  setKey(value) {
    this.key = value;
  }

  getKey() {
    return this.key;
  }

  setName(value) {
    this.name = value;
  }

  getName() {
    return this.name;
  }

  setLayoutElements(value) {
    this.layoutElements = value;
  }

  getLayoutElements() {
    return this.layoutElements;
  }

  setItems(value) {
    this.items = value;
  }

  getItems() {
    return this.itemsToCheck;
  }

  toJson() {

    return {
      key: this.getKey(),
      name: this.getName(),
      itemsToCheck: this.getItems(),
    };

  }
}
