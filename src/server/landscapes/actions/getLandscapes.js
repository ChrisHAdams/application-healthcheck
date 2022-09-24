import LandscapeClassFactory from '../classes/landscapeListFactory.js';
import Config from 'config';

function GetLandscapeById(id) {

  return GetLandscapeByIdFromArray(Config.get('healthcheck.appLandscapes'), id);

}

function GetLandscapeByIdFromArray(landscapes, id) {

  const landscapesArray = LandscapeClassFactory.createLandscapeListFromArray(landscapes);
  const intId = parseInt(id, 10);

  let outputObj = null;

  for (let i = 0; i < landscapesArray.length; i += 1) {

    if (intId === landscapesArray[i].getKey()) {
      outputObj = landscapesArray[i];
      break;
    }

  }

  return outputObj;

}

function GetLandscapeByName(name) {

  return GetLandscapeByNameFromArray(Config.get('healthcheck.appLandscapes'), name)

}

function GetLandscapeByNameFromArray(landscapes, name) {

  const landscapesArray = LandscapeClassFactory.createLandscapeListFromArray(landscapes);

  let outputObj = null;

  for (let i = 0; i < landscapesArray.length; i += 1) {

    // console.log(`Count ${i}.  Search val '${name}'.  Curr Name ${landscapesArray[i].getName()}`);

    if (name === landscapesArray[i].getName()) {
      outputObj = landscapesArray[i];
      break;
    }
  }

  return outputObj;

}

export
{
  GetLandscapeById,
  GetLandscapeByName,
  GetLandscapeByIdFromArray,
  GetLandscapeByNameFromArray,
};
