import LandscapeListFactory from '../landscapeListFactory';
import Config from 'config';

const singleLandscape = [{
  "key":0,
  "name":"Room 101",
  "layoutElements": {
    "title": "Room 101",
    "subtitle": "Monitoring Room 101"
  },
  "itemsToCheck" : [0, 1, 2, 3, 4, 5, 6, 7]
}];

const severalLandscapes = [
  {"key":0,
  "name":"Room 101",
  "layoutElements": {
    "title": "Room 101",
    "subtitle": "Monitoring Room 101"
  },
  "itemsToCheck" : [0, 1, 2, 3, 4, 5, 6, 7]},
  {"key":1,
  "name":"Room 102",
  "layoutElements": {
    "title": "Room 102",
    "subtitle": "Monitoring Room 102"
  },
  "itemsToCheck" : [0, 1,  6, 7]},
  {"key":2,
  "name":"Room 103",
  "layoutElements": {
    "title": "Room 103",
    "subtitle": "Monitoring Room 103"
  },
  "itemsToCheck" : [ 3, 4, 5, 6, 7]},
  {"key":3,
  "name":"Room 104",
  "layoutElements": {
    "title": "Room 104",
    "subtitle": "Monitoring Room 104"
  },
  "itemsToCheck" : [6, 7]},
];

describe('#LandscapeClass', function () {

  it('should be able to create a new landscape list from config', function () {

    const landscapeListObj = LandscapeListFactory.createLandscapeListFromArray(singleLandscape);

    expect(landscapeListObj[0].key).toEqual(singleLandscape[0].key);
    expect(landscapeListObj[0].name).toEqual(singleLandscape[0].name);
    expect(landscapeListObj[0].layoutElements).toEqual(singleLandscape[0].layoutElements);
    expect(landscapeListObj[0].itemsToCheck).toEqual(singleLandscape[0].itemsToCheck);

  });

  it('should be able to create a new landscape list from config and use getters to access values', function () {

    const landscapeListObj = LandscapeListFactory.createLandscapeListFromArray(singleLandscape);

    expect(landscapeListObj[0].getKey()).toEqual(singleLandscape[0].key);
    expect(landscapeListObj[0].getName()).toEqual(singleLandscape[0].name);
    expect(landscapeListObj[0].getLayoutElements()).toEqual(singleLandscape[0].layoutElements);
    expect(landscapeListObj[0].getItemsToCheck()).toEqual(singleLandscape[0].itemsToCheck);
    expect(landscapeListObj[0].toJson()).toEqual(singleLandscape[0]);

  });

  it('should be able to create a new landscape list, with several items, from config', function () {

    const landscapeListObj = LandscapeListFactory.createLandscapeList();
    const configLandscapes = Config.get('healthcheck.appLandscapes');

    expect(landscapeListObj.length).toEqual(3);
    expect(landscapeListObj[0]).toEqual(configLandscapes[0]);
    expect(landscapeListObj[2]).toEqual(configLandscapes[2]);

  });


});

