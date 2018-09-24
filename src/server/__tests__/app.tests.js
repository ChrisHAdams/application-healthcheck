const { expect } = require('chai');
const App = require('../app');
const Log = require('../common/__tests__/mockLogger');
const axios = require('axios');


let log = new Log();
let address = null;

describe('#App', function () {

  beforeEach(async function () {
    log = new Log();
    await App.start(log);
    expect(App.getState()).to.equal('Started');
    address = App.getApiRoot();
  });

  afterEach(async function () {
    await App.shutdown(log);
    expect(App.getState()).to.equal('Shutdown');
  });

  it('should be started after start up', async function () {
    expect(App.getState()).to.equal('Started');
  });

  it('should return a 200 after calling API root', async function () {
    expect(App.getState()).to.equal('Started');
    const response = await axios.get(address);
    expect(response.status).to.equal(200);
    expect(response.data).to.equal('API Root');
  });

});
