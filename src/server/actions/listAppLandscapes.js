import LandscapeClassFactory from '../classes/landscapeClassFactory';

function ListAppLandscapes(appLandscapes) {

  const landscapesArray = LandscapeClassFactory.createLandscapeList(appLandscapes);
  const outputArray = [];

  for (let i = 0; i < landscapesArray.length; i += 1) {
    outputArray.push(landscapesArray[i]);
  }

  return outputArray;

}

module.exports = ListAppLandscapes;
