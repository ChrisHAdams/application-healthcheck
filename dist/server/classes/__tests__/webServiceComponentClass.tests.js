'use strict';

var _webServiceComponentClass = require('../webServiceComponentClass');

var _webServiceComponentClass2 = _interopRequireDefault(_webServiceComponentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('chai'),
    expect = _require.expect;

var mockCheck = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'website',
  url: 'www.someurl.co.uk',
  expectedStatusCode: 200,
  expectedResponseTime: 500,
  payload: 'somepayloadvalue',
  method: 'post'
};

describe('#WebServiceComponentClass', function () {

  it('should allow a Web Service check to be defined', function () {

    var result = new _webServiceComponentClass2.default(mockCheck);
    expect(result.key).to.equal(mockCheck.key);
    expect(result.name).to.equal(mockCheck.name);
    expect(result.description).to.equal(mockCheck.description);
    expect(result.checkType).to.equal(mockCheck.checkType);
    expect(result.url).to.equal(mockCheck.url);
    expect(result.payload).to.equal(mockCheck.payload);
    expect(result.method).to.equal(mockCheck.method);

    expect(result.getKey()).to.equal(mockCheck.key);
    expect(result.getName()).to.equal(mockCheck.name);
    expect(result.getDescription()).to.equal(mockCheck.description);
    expect(result.getCheckType()).to.equal(mockCheck.checkType);
    expect(result.getUrl()).to.equal(mockCheck.url);
    expect(result.getPayload()).to.equal(mockCheck.payload);
    expect(result.getMethod()).to.equal(mockCheck.method);

    expect(result.expectedResponseCode).to.equal(mockCheck.expectedResponseCode);
    expect(result.expectedResponseTime).to.equal(mockCheck.expectedResponseTime);
    expect(result.getExpectedResponseCode()).to.equal(mockCheck.expectedResponseCode);
    expect(result.getExpectedResponseTime()).to.equal(mockCheck.expectedResponseTime);
  });

  it('should allow the URL to be updated using getters and setters', function () {

    var result = new _webServiceComponentClass2.default(mockCheck);
    expect(result.getUrl()).to.equal(mockCheck.url);

    result.setUrl('New Url');
    expect(result.getUrl()).to.equal('New Url');
    expect(result.url).to.equal('New Url');
  });

  it('should allow the payload to be updated using getters and setters', function () {

    var result = new _webServiceComponentClass2.default(mockCheck);
    expect(result.getPayload()).to.equal(mockCheck.payload);

    result.setPayload('newpayload');
    expect(result.getPayload()).to.equal('newpayload');
    expect(result.payload).to.equal('newpayload');
  });

  it('should allow the method to be updated using getters and setters', function () {

    var result = new _webServiceComponentClass2.default(mockCheck);
    expect(result.getMethod()).to.equal(mockCheck.method);

    result.setMethod('get');
    expect(result.getMethod()).to.equal('get');
    expect(result.method).to.equal('get');
  });
});