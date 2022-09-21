import Config from 'config';
import AssetFactory from '../classes/AssetFactory';
import { GetLandscapeById } from '../../landscapes/actions/getLandscapes';

function getAssetById(id) {

  return getAssetByIdFromArray(Config.get('healthcheck.items'), id);

}

function getAssetByIdFromArray(assetArray, id) {

  const componentArray = AssetFactory.createAssetList(assetArray);
  const intId = parseInt(id, 10);
  let outputObj = {};

  for (let i = 0; i < componentArray.length; i += 1) {

    if (intId === componentArray[i].getKey()) {
      outputObj = componentArray[i];

      break;
    }
  }

  return outputObj;

}

function getAssetByName(name) {

  return getAssetByNameFromArray(Config.get('healthcheck.items'), name);

}

function getAssetByNameFromArray(assetArray, name) {

  const componentArray = AssetFactory.createAssetList(assetArray);

  let outputObj = {};

  for (let i = 0; i < componentArray.length; i += 1) {

    if (name === componentArray[i].getName()) {
      outputObj = componentArray[i];

      break;
    }
  }

  return outputObj;

}

function getAssetsByType(name) {

  return getAssetsByTypeFromArray(Config.get('healthcheck.items'), name);

}

function getAssetsByTypeFromArray(assetArray, name) {

  const componentArray = AssetFactory.createAssetList(assetArray);
  let returnArray = [];
  let errorArray = [];

  for (let i = 0; i < componentArray.length; i += 1) {

    if (name === componentArray[i].getCheckType()) {
      returnArray.push(componentArray[i]);
    }

  }

  if (returnArray.length == 0 ) {

    const errorMessage = `No assets found for type ${name}.`;
    errorArray.push({error: errorMessage});

  }

  let obj = {
    type: name,
    itemsToCheck: returnArray,
    errors: errorArray
  }

  return obj;

}

function getAllAssets() {

  return getAllAssetsFromArray(Config.get('healthcheck.items'));

}

function getAllAssetsFromArray(assetArray) {

  const componentArray = AssetFactory.createAssetList(assetArray);
  let returnArray = [];

  for (let i = 0; i < componentArray.length; i += 1) {

    returnArray.push(componentArray[i]);

  }

  return returnArray;

}

function getAssetsByLandscapeId(landscapeId) {

  const landscapeObj = GetLandscapeById(landscapeId);
  let assetArray = [];
  let errorArray = [];

  if (landscapeObj !== null){

    for (let i = 0; i < landscapeObj.itemsToCheck.length; i += 1) {

      assetArray.push(getAssetById(landscapeObj.itemsToCheck[i]));

    }

  } else {
    const errorMessage = `No landscape found for id ${landscapeId}.`;
    errorArray.push({error: errorMessage})
  }

  let obj = {
    landscape: parseInt(landscapeId),
    itemsToCheck: assetArray,
    errors: errorArray
  }

  return obj;

}

module.exports =
{
  getAssetById,
  getAssetByIdFromArray,
  getAssetByName,
  getAssetByNameFromArray,
  getAssetsByType,
  getAssetsByTypeFromArray,
  getAllAssets,
  getAllAssetsFromArray,
  getAssetsByLandscapeId
};