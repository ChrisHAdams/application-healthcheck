import LandscapeClass from '../landscapeClass';

const mockLandscape = {
  "key":0,
  "name":"Room 101",
  "layoutElements": {
    "title": "Room 101",
    "subtitle": "Monitoring Room 101"
  },
  "itemsToCheck" : [0, 1, 2, 3, 4, 5, 6, 7]
}

describe('#LandscapeClass', function () {

  it('should be able to create a new landscape object from config', async function () {

    const landscapeObj = new LandscapeClass(mockLandscape);

    expect(landscapeObj.key).toEqual(mockLandscape.key);
    expect(landscapeObj.name).toEqual(mockLandscape.name);
    expect(landscapeObj.layoutElements.title).toEqual(mockLandscape.layoutElements.title);
    expect(landscapeObj.layoutElements.subtitle).toEqual(mockLandscape.layoutElements.subtitle);
    expect(landscapeObj.itemsToCheck).toEqual(mockLandscape.itemsToCheck);

  });

  it('should be able to use getters to access values in a landscape object', async function () {

    const landscapeObj = new LandscapeClass(mockLandscape);

    expect(landscapeObj.getKey()).toEqual(mockLandscape.key);
    expect(landscapeObj.getName()).toEqual(mockLandscape.name);
    expect(landscapeObj.getLayoutElements()).toEqual(mockLandscape.layoutElements);
    expect(landscapeObj.getItemsToCheck()).toEqual(mockLandscape.itemsToCheck);

  });

  it('should be able to use getters and setters to access and update values in a landscape object', async function () {

    const landscapeObj = new LandscapeClass(mockLandscape);

    expect(landscapeObj.getKey()).toEqual(mockLandscape.key);
    expect(landscapeObj.getName()).toEqual(mockLandscape.name);
    expect(landscapeObj.getLayoutElements()).toEqual(mockLandscape.layoutElements);
    expect(landscapeObj.getItemsToCheck()).toEqual(mockLandscape.itemsToCheck);

    landscapeObj.setKey(100);
    landscapeObj.setName("New Name");
    landscapeObj.setLayoutElements({
      "title": "Room 102",
      "subtitle": "Monitoring Room 102"
    });
    landscapeObj.setItemsToCheck([0,1,2]);

    expect(landscapeObj.getKey()).toEqual(100);
    expect(landscapeObj.getName()).toEqual("New Name");
    expect(landscapeObj.getLayoutElements()).toEqual({"title": "Room 102", "subtitle": "Monitoring Room 102"});
    expect(landscapeObj.getItemsToCheck()).toEqual([0,1,2]);

  });

  it('should be able to get a JSON object of the landscape.', function () {

    const landscapeObj = new LandscapeClass(mockLandscape);

    expect(landscapeObj.toJson()).toEqual(mockLandscape);

  });

});