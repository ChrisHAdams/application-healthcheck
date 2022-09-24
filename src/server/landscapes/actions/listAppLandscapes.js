import LandscapeListFactory from '../classes/landscapeListFactory.js';
import Config from 'config';


function ListAppLandscapes() {

  return ListAppLandscapesFromArray(Config.get('healthcheck.appLandscapes'));

}

function ListAppLandscapesFromArray(appLandscapes) {

  const landscapesArray = LandscapeListFactory.createLandscapeListFromArray(appLandscapes);
  const outputArray = [];

  for (let i = 0; i < landscapesArray.length; i += 1) {
    outputArray.push(landscapesArray[i]);
  }

  return outputArray;

}

export { ListAppLandscapes, ListAppLandscapesFromArray };
