import LandscapeClass from './landscapeClass.js';
import Config from 'config';

export default class LandscapeListFactory {

  static createLandscapeList() {

    return this.createLandscapeListFromArray(Config.get('healthcheck.appLandscapes'));

  }

  static createLandscapeListFromArray(landscapeArray) {

    const landscapeSize = landscapeArray.length;
    const landscapeList = [];

    for (let i = 0; i < landscapeSize; i += 1) {
      landscapeList.push(new LandscapeClass(landscapeArray[i]));
    }

    return landscapeList;
  }

}
