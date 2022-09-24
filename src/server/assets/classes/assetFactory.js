import WebsiteAssetClass from './websiteAsset.js';
import WebServiceAssetClass from './webServiceAsset.js';
import ServerAssetClass from './serverAsset.js';

export default class AssetCheckFactory {

  static createAssetObject(configObject) {

    let object;

    if (configObject.checkType === 'website') {
      object = new WebsiteAssetClass(configObject);
    } else if (configObject.checkType === 'webservice') {
      object = new WebServiceAssetClass(configObject);
    } else if (configObject.checkType === 'server') {
      object = new ServerAssetClass(configObject);
    } else {
      object = {};
    }

    return object;
  }

  static createAssetList(configObjectArray) {

    const componentSize = configObjectArray.length;
    const componentList = [];

    for (let i = 0; i < componentSize; i += 1) {
      componentList.push(AssetCheckFactory.createAssetObject(configObjectArray[i]));
    }
    return componentList;
  }
}
