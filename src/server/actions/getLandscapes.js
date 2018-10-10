import LandscapeClassFactory from '../classes/landscapeClassFactory';

function GetLandscapeById(landscapes, id) {

  const landscapesArray = LandscapeClassFactory.createLandscapeList(landscapes);
  const intId = parseInt(id, 10);
  let outputObj = {};

  for (let i = 0; i < landscapesArray.length; i += 1) {

    if (intId === landscapesArray[i].getKey()) {
      outputObj = landscapesArray[i];
      break;
    }
  }

  return outputObj;

}

function GetLandscapeByName(landscapes, name) {

  const landscapesArray = LandscapeClassFactory.createLandscapeList(landscapes);

  let outputObj = {};

  for (let i = 0; i < landscapesArray.length; i += 1) {

    if (name === landscapesArray[i].getName()) {
      outputObj = landscapesArray[i].toJson();
      break;
    }
  }

  return outputObj;

}

module.exports =
{
  GetLandscapeById,
  GetLandscapeByName,
};
