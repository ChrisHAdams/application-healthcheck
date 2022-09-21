
export default class LandscapeClass {

  constructor(landscapeObject) {
    this.setKey(landscapeObject.key);
    this.setName(landscapeObject.name);
    this.setLayoutElements(landscapeObject.layoutElements);
    this.setItemsToCheck(landscapeObject.itemsToCheck);
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

  setItemsToCheck(value) {
    this.itemsToCheck = value;
  }

  getItemsToCheck() {
    return this.itemsToCheck;
  }

  toJson() {

    return {
      key: this.getKey(),
      name: this.getName(),
      layoutElements: this.getLayoutElements(),
      itemsToCheck: this.getItemsToCheck(),
    };

  }
}
