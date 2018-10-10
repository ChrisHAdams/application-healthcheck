import LandscapeClass from './landscapeClass';

export default class LandscapeClassFactory {

  static createLandscapeObject(landscape) {
    const obj = new LandscapeClass(landscape);
    return obj;
  }

  static createLandscapeList(landscapeArray) {

    const landscapeSize = landscapeArray.length;
    const landscapeList = [];

    for (let i = 0; i < landscapeSize; i += 1) {
      landscapeList.push(LandscapeClassFactory.createLandscapeObject(landscapeArray[i]));
    }

    return landscapeList;
  }

}
