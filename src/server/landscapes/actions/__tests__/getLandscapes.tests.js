import { GetLandscapeById, GetLandscapeByName, GetLandscapeByIdFromArray, GetLandscapeByNameFromArray } from '../getLandscapes';

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

it('should be possible to return a landscape object by key value using an array', function () {

  let landscapeListObj = GetLandscapeByIdFromArray(severalLandscapes, 0);
  expect(landscapeListObj).toEqual(severalLandscapes[0]);

  landscapeListObj = GetLandscapeByIdFromArray(severalLandscapes, 3);
  expect(landscapeListObj).toEqual(severalLandscapes[3]);

});

it('should be possible to return a landscape object by key value using landscapes in config', function () {

  let landscapeListObj = GetLandscapeById(1);
  expect(landscapeListObj.name).toEqual('Area 51');

  landscapeListObj = GetLandscapeById(2);
  expect(landscapeListObj.name).toEqual("Some Other");

});

it('should be possible to return a landscape object by name using an array', function () {

  let landscapeListObj = GetLandscapeByNameFromArray(severalLandscapes, "Room 101");
  expect(landscapeListObj).toEqual(severalLandscapes[0]);

  landscapeListObj = GetLandscapeByNameFromArray(severalLandscapes, "Room 104");
  expect(landscapeListObj).toEqual(severalLandscapes[3]);

});

it('should be possible to return a landscape object by name using landscapes in config', function () {

  let landscapeListObj = GetLandscapeByName("Room 101");
  expect(landscapeListObj.name).toEqual("Room 101");

  landscapeListObj = GetLandscapeByName("Area 51");
  expect(landscapeListObj.name).toEqual("Area 51");

});