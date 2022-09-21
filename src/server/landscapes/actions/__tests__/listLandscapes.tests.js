import { ListAppLandscapes, ListAppLandscapesFromArray } from '../listAppLandscapes';
import Config from 'config';

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
  "itemsToCheck" : [6, 7]}
];

it('should be possible to return a landscape list using an array', function () {

  let landscapeListObj = ListAppLandscapesFromArray(severalLandscapes);
  expect(landscapeListObj).toEqual(severalLandscapes);

});

it('should be possible to return a landscape list using config', function () {

  let landscapeListObj = ListAppLandscapes();
  expect(landscapeListObj).toEqual(Config.get('healthcheck.appLandscapes'));

});