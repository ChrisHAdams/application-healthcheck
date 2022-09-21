import { getAssetByIdFromArray,
         getAssetById,
         getAssetByNameFromArray,
         getAssetByName,
         getAssetsByTypeFromArray,
         getAssetsByType,
         getAllAssetsFromArray,
         getAllAssets } from '../actions/getAssets';

import WebsiteAsset from '../classes/websiteAsset';
import WebServiceAsset from '../classes/webServiceAsset';
import ServerAsset from '../classes/serverAsset';

const mockAssetArray = [
  {
    key: 0,
    name: 'First Item',
    description: 'First Item description',
    checkType: 'website',
    url: 'www.someurl.co.uk',
    expectedStatusCode: 200,
    expectedResponseTime: 500
  },
  {
    key: 1,
    name: 'Second Item',
    description: 'Second Item description',
    checkType: 'website',
    url: 'www.someotherurl.co.uk',
    expectedResponseCode: 200,
    expectedResponseTime: 500
  },
  {
    key: 2,
    name: 'Third Item',
    description: 'Third Item description',
    checkType: 'webservice',
    url: 'www.someotherurl.co.uk',
    expectedResponseCode: 200,
    expectedResponseTime: 500
  },
  {
    key: 3,
    name: 'Fourth Item',
    description: 'Fourth Item description',
    checkType: 'webservice',
    url: 'www.somenewurl.co.uk',
    expectedResponseCode: 200,
    expectedResponseTime: 500
  },
  {
    key: 4,
    name: 'Fifth Item',
    description: 'Fifth Item description',
    checkType: 'server',
    url: 'www.somenewerurl.co.uk',
    expectedResponseCode: 200,
    expectedResponseTime: 500
  },
  {
    key: 5,
    name: 'Sixth Item',
    description: 'Sixth Item description',
    checkType: 'server',
    url: 'www.somenewerurl.co.uk',
    expectedResponseCode: 200,
    expectedResponseTime: 500
  },
];

describe('#Get Assets module', function () {

  it('should return an asset by id from a passed in array', function () {

    const assetObject = getAssetByIdFromArray(mockAssetArray, 0);


    expect(Object.getPrototypeOf(assetObject)).toEqual(WebsiteAsset.prototype);
    expect(assetObject.getKey()).toEqual(0);
    expect(assetObject.getName()).toEqual(mockAssetArray[0].name);
    expect(assetObject.getDescription()).toEqual(mockAssetArray[0].description);

  });

  it('should return an empty object where id does not exist in the passed-in array', function () {

    const assetObject = getAssetByIdFromArray(mockAssetArray, 100);

    expect(assetObject).toEqual({});

  });

  it('should return an asset by id using assets in config', function () {

    const assetObject = getAssetById(0);


    expect(Object.getPrototypeOf(assetObject)).toEqual(WebsiteAsset.prototype);
    expect(assetObject.getKey()).toEqual(0);
    expect(assetObject.getName()).toEqual("BBC");
    expect(assetObject.getDescription()).toEqual("Ping BBC's website");

  });

  it('should return an empty object where id does not exist in assets in config', function () {

    const assetObject = getAssetById(100);

    expect(assetObject).toEqual({});

  });

  //

  it('should return an asset by name from a passed in array', function () {

    const assetObject = getAssetByNameFromArray(mockAssetArray, 'First Item');

    expect(Object.getPrototypeOf(assetObject)).toEqual(WebsiteAsset.prototype);
    expect(assetObject.getKey()).toEqual(0);
    expect(assetObject.getName()).toEqual(mockAssetArray[0].name);
    expect(assetObject.getDescription()).toEqual(mockAssetArray[0].description);

  });

  it('should return an empty object where name does not exist in the passed-in array', function () {

    const assetObject = getAssetByNameFromArray(mockAssetArray, 'Nonsense');

    expect(assetObject).toEqual({});

  });

  it('should return an asset by name using assets in config', function () {

    const assetObject = getAssetByName("BBC");


    expect(Object.getPrototypeOf(assetObject)).toEqual(WebsiteAsset.prototype);
    expect(assetObject.getKey()).toEqual(0);
    expect(assetObject.getName()).toEqual("BBC");
    expect(assetObject.getDescription()).toEqual("Ping BBC's website");

  });

  it('should return an empty object where name does not exist in assets in config', function () {

    const assetObject = getAssetByName("Nonsense");

    expect(assetObject).toEqual({});

  });

  //

  it('should return all assets by website type from a passed in array', function () {

    const response = getAssetsByTypeFromArray(mockAssetArray, 'website');

    expect(response.type).toEqual('website')

    const assetObject = response.itemsToCheck[0];
    expect(Object.getPrototypeOf(assetObject)).toEqual(WebsiteAsset.prototype);

    expect(response.itemsToCheck.length).toEqual(2);
    expect(assetObject.getKey()).toEqual(0);
    expect(response.itemsToCheck[0].getName()).toEqual(mockAssetArray[0].name);
    expect(response.itemsToCheck[0].getDescription()).toEqual(mockAssetArray[0].description);

  });

  it('should return all assets by webservice type from a passed in array', function () {

    const response = getAssetsByTypeFromArray(mockAssetArray, 'webservice');

    expect(response.type).toEqual('webservice')

    const assetObject = response.itemsToCheck[0];
    expect(Object.getPrototypeOf(assetObject)).toEqual(WebServiceAsset.prototype);

    expect(response.itemsToCheck.length).toEqual(2);
    expect(assetObject.getKey()).toEqual(2);
    expect(response.itemsToCheck[0].getName()).toEqual(mockAssetArray[2].name);
    expect(response.itemsToCheck[0].getDescription()).toEqual(mockAssetArray[2].description);

  });

  it('should return all assets by server type from a passed in array', function () {

    const response = getAssetsByTypeFromArray(mockAssetArray, 'server');

    expect(response.type).toEqual('server')

    const assetObject = response.itemsToCheck[0];
    expect(Object.getPrototypeOf(assetObject)).toEqual(ServerAsset.prototype);

    expect(response.itemsToCheck.length).toEqual(2);
    expect(assetObject.getKey()).toEqual(4);
    expect(response.itemsToCheck[0].getName()).toEqual(mockAssetArray[4].name);
    expect(response.itemsToCheck[0].getDescription()).toEqual(mockAssetArray[4].description);

  });

  it('should return an empty array for a nonsense asset type from a passed in array', function () {

    const response = getAssetsByTypeFromArray(mockAssetArray, 'nonsense');

    expect(response.type).toEqual('nonsense')
    expect(response.itemsToCheck.length).toEqual(0);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0].error).toEqual(`No assets found for type nonsense.`);

  });

  it('should return all assets by website type from config', function () {

    const response = getAssetsByType('website');

    expect(response.type).toEqual('website')

    const assetObject = response.itemsToCheck[0];
    expect(Object.getPrototypeOf(assetObject)).toEqual(WebsiteAsset.prototype);

    expect(response.itemsToCheck.length).toEqual(6);

    expect(assetObject.getKey()).toEqual(0);
    expect(assetObject.getName()).toEqual('BBC');
    expect(assetObject.getDescription()).toEqual("Ping BBC's website");

  });

  it('should return all assets by webservice type from config', function () {

    const response = getAssetsByType('webservice');

    expect(response.type).toEqual('webservice')

    const assetObject = response.itemsToCheck[0];
    expect(Object.getPrototypeOf(assetObject)).toEqual(WebServiceAsset.prototype);

    expect(response.itemsToCheck.length).toEqual(1);

    expect(assetObject.getKey()).toEqual(6);
    expect(assetObject.getName()).toEqual('Penguin');
    expect(assetObject.getDescription()).toEqual("Check Penguin Books API.");

  });

  it('should return all assets by server type from config', function () {


    const response = getAssetsByType('server');

    expect(response.type).toEqual('server')

    const assetObject = response.itemsToCheck[0];
    expect(Object.getPrototypeOf(assetObject)).toEqual(ServerAsset.prototype);

    expect(response.itemsToCheck.length).toEqual(1);

    expect(assetObject.getKey()).toEqual(7);
    expect(assetObject.getName()).toEqual('Google Server');
    expect(assetObject.getDescription()).toEqual("Ping Google's server");

  });

  it('should return an empty array where asset type does not exist in assets in config', function () {

    const response = getAssetsByType('nonsense');

    expect(response.itemsToCheck.length).toEqual(0);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0].error).toEqual(`No assets found for type nonsense.`);

  });

  it('should return all assets from a passed in array', function () {

    const assetArray = getAllAssetsFromArray(mockAssetArray);

    expect(assetArray.length).toEqual(6);
    expect(assetArray[0].getKey()).toEqual(0);
    expect(assetArray[0].getName()).toEqual(mockAssetArray[0].name);
    expect(assetArray[0].getDescription()).toEqual(mockAssetArray[0].description);


    expect(assetArray[5].getKey()).toEqual(5);
    expect(assetArray[5].getName()).toEqual(mockAssetArray[5].name);
    expect(assetArray[5].getDescription()).toEqual(mockAssetArray[5].description);

  });

  it('should return all assets from config', function () {

    const assetArray = getAllAssets();

    expect(assetArray.length).toEqual(8);
    expect(assetArray[0].getKey()).toEqual(0);
    expect(assetArray[0].getName()).toEqual('BBC');
    expect(assetArray[0].getDescription()).toEqual("Ping BBC's website");


    expect(assetArray[7].getKey()).toEqual(7);
    expect(assetArray[7].getName()).toEqual('Google Server');
    expect(assetArray[7].getDescription()).toEqual("Ping Google's server");

  });

});

