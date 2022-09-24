import AssetBase from './assetBase.js';

export default class WebsiteComponentClass extends AssetBase{

  constructor(configObject) {
    super(configObject);
    this.url = configObject.url;
  }

}
