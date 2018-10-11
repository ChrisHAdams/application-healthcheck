const { expect } = require('chai');
const App = require('../../app');
const Log = require('../../common/__tests__/mockLogger');
const axios = require('axios');


let log = new Log();
let address = null;

describe('#API Routes', function () {

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

  it('should return a 200 after calling api/components/list', async function () {
    expect(App.getState()).to.equal('Started');
    const response = await axios.get(`${address}/components/list`);
    expect(response.status).to.equal(200);
  });

  it('should return a 200 after calling api/components/id/0', async function () {
    expect(App.getState()).to.equal('Started');
    const response = await axios.get(`${address}/components/check/id/0`);
    expect(response.status).to.equal(200);
    expect(response.data.key).to.equal(0);
  });

  it('should return a 200 after calling api/components/id/0', async function () {
    expect(App.getState()).to.equal('Started');
    const response = await axios.get(`${address}/components/name/BBC`);
    expect(response.status).to.equal(200);
    expect(response.data.key).to.equal(0);
  });

  it('should return a 200 after calling api/components/type/website', async function () {
    expect(App.getState()).to.equal('Started');
    const response = await axios.get(`${address}/components/type/website`);
    expect(response.status).to.equal(200);
    expect(response.data[0].type).to.equal('website');
  });

  it('should return a 200 after calling api/options', async function () {
    expect(App.getState()).to.equal('Started');
    const response = await axios.get(`${address}/options`);
    expect(response.status).to.equal(200);
  });

  it('should return a 200 after calling components/check/all', async function () {
    this.timeout(0);
    expect(App.getState()).to.equal('Started');
    const response = await axios.get(`${address}/components/check/all`);
    expect(response.status).to.equal(200);
  });

  it('should return a 200 after calling components/check/id', async function () {
    this.timeout(0);
    expect(App.getState()).to.equal('Started');
    const response = await axios.get(`${address}/components/check/id/0`);
    expect(response.status).to.equal(200);
  });

  it('should return a 200 after calling components/check/name', async function () {
    this.timeout(0);
    expect(App.getState()).to.equal('Started');
    const response = await axios.get(`${address}/components/check/name/BBC`);
    expect(response.status).to.equal(200);
  });

});
