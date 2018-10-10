import WebsiteComponentClass from './websiteComponentClass';
import WebServiceComponentClass from './webServiceComponentClass';
import ServerComponentClass from './serverComponentClass';

export default class ComponentClassFactory {

  static createComponentObject(configObject) {

    let object;

    if (configObject.checkType === 'website') {
      object = new WebsiteComponentClass(configObject);
    } else if (configObject.checkType === 'webservice') {
      object = new WebServiceComponentClass(configObject);
    } else if (configObject.checkType === 'server') {
      object = new ServerComponentClass(configObject);
    } else {
      object = null;
    }

    return object;
  }

  static createComponentList(configObjectArray) {

    const componentSize = configObjectArray.length;
    const componentList = [];

    for (let i = 0; i < componentSize; i += 1) {
      componentList.push(ComponentClassFactory.createComponentObject(configObjectArray[i]));
    }
    return componentList;
  }
}
