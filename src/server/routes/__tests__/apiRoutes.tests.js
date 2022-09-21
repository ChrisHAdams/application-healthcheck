const App = require('../../app');
const Log = require('../../mocks/mockLogger');
const axios = require('axios');

describe('#API Routes', function () {

  let log;
  let address;

  beforeAll(async function (done) {

    log = new Log();
    log.info("In beforeAll, starting app");

    await App.start(log);

    expect(App.getState()).toEqual('Started');

    done();

  });

  afterAll(async function (done) {

    log.info("In afterAll calling shutdown");

    if(App.getState() === 'Shutdown') {

      log.info("App already down.  No need to shutdown");
      done();

    } else {

      await App.shutdown(log);
      log.info("In afterAll after calling shutdown");
      expect(App.getState()).toEqual('Shutdown');

      done();
    }
  });

  it('should return a 200 after calling Get API root function in App', () =>  {
    expect(App.getState()).toEqual('Started');
    address = App.getApiRoot();
    expect(address).toContain(':5251/api');
  });

  it('should be started after start up', async () => {
    expect(App.getState()).toEqual('Started');

  });

  it('should return a 200 after calling API root', async () =>  {
    expect(App.getState()).toEqual('Started');
    const response = await axios.get("http://localhost:5251/api");
    expect(response.status).toEqual(200);
    expect(response.data).toEqual('This is the API Root.');
  });

  it('should return a 200 and all assets after calling assets/list', async () =>  {
    expect(App.getState()).toEqual('Started');
    const response = await axios.get("http://localhost:5251/api/assets/list");
    expect(response.status).toEqual(200);

    expect(response.data[0].key).toEqual(0);
    expect(response.data[0].description).toEqual("Ping BBC's website");

    expect(response.data[7].key).toEqual(7);
    expect(response.data[7].description).toEqual("Ping Google's server");

  });

  it('should return a 200 and info after calling API dashboard', async () =>  {
    expect(App.getState()).toEqual('Started');
    const response = await axios.get("http://localhost:5251/api/dashboard");
    expect(response.status).toEqual(200);
    let responseString = JSON.stringify(response.data)
    expect(responseString).toContain('dashboardTitle');
  });

  it('should return a 200 and info after calling API list landscapes', async () =>  {
    expect(App.getState()).toEqual('Started');
    const response = await axios.get("http://localhost:5251/api/landscapes/list");
    expect(response.status).toEqual(200);
    let responseString = JSON.stringify(response.data)
    expect(responseString).toContain('layoutElements');
    expect(responseString).toContain('itemsToCheck');
  });

  it('should return a 200 and info after requesting an app landscape by id', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/landscapes/id/0");

    expect(response.status).toEqual(200);
    expect(response.data.name).toEqual('Room 101');

    let responseString = JSON.stringify(response.data)
    expect(responseString).toContain('layoutElements');
    expect(responseString).toContain('itemsToCheck');
  });

  it('should return a 200 and info after requesting an app landscape by name', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/landscapes/name/Room 101");

    expect(response.status).toEqual(200);
    expect(response.data.name).toEqual('Room 101');

    let responseString = JSON.stringify(response.data)
    expect(responseString).toContain('layoutElements');
    expect(responseString).toContain('itemsToCheck');
  });

  it('should return a 200 and assets for a specified landscape id', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/landscapes/id/1/assets/list");

    expect(response.status).toEqual(200);
    expect(response.data.landscape).toEqual(1);
    expect(response.data.itemsToCheck.length).toEqual(3);

    expect(response.data.itemsToCheck[0].key).toEqual(0);
    expect(response.data.itemsToCheck[0].name).toEqual('BBC');

    expect(response.data.itemsToCheck[1].key).toEqual(1);
    expect(response.data.itemsToCheck[1].name).toEqual('Google Website');

    expect(response.data.itemsToCheck[2].key).toEqual(4);
    expect(response.data.itemsToCheck[2].name).toEqual('Google Website');

  });

  it('should return a 200 and error obj for an invalid landscape id', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/landscapes/id/100/assets/list");

    expect(response.status).toEqual(200);
    expect(response.data.landscape).toEqual(100);
    expect(response.data.itemsToCheck.length).toEqual(0);

    expect(response.data.errors.length).toEqual(1);
    expect(response.data.errors[0].error).toEqual('No landscape found for id 100.');


  });

  it('should return a 200 and asset for a specified id', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/assets/id/1");

    expect(response.status).toEqual(200);

    expect(response.data.key).toEqual(1);
    expect(response.data.name).toEqual('Google Website');


  });

  it('should return a 200 and asset for a specified name', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/assets/name/Sky%20Website");

    expect(response.status).toEqual(200);

    expect(response.data.key).toEqual(2);
    expect(response.data.name).toEqual('Sky Website');

  });

  it('should return a 200 and asset details for a specified asset type', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/assets/type/website");
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data.type).toEqual('website');
    expect(response.data.itemsToCheck.length).toEqual(6);

    response.data.itemsToCheck.forEach(function(check){
      expect(check.checkType).toEqual('website');
    })

  });

  it('should return a 200 and check all assets', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/assets/check/all/");

    expect(response.status).toEqual(200);

    response.data.forEach(function(check){
      expect(check.actualResponseCode).toBeGreaterThan(0);
      expect(check.actualResponseTime).toBeGreaterThan(0);

    })

  });

  it('should return a 200 and check an asset by id', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/assets/check/id/0");

    expect(response.status).toEqual(200);

    expect(response.data.actualResponseCode).toBeGreaterThan(0);
    expect(response.data.actualResponseTime).toBeGreaterThan(0);

  });

  it('should return a 200 and return config details', async () =>  {

    expect(App.getState()).toEqual('Started');

    const response = await axios.get("http://localhost:5251/api/options");

    expect(response.status).toEqual(200);

    expect(response.data.port).toEqual(5251);

  });

})

