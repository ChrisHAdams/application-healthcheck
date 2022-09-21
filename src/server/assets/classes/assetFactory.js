import WebsiteAssetClass from './websiteAsset';
import WebServiceAssetClass from './webServiceAsset';
import ServerAssetClass from './serverAsset';

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
