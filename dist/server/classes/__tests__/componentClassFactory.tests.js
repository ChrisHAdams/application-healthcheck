'use strict';

var _componentClassFactory = require('../componentClassFactory');

var _componentClassFactory2 = _interopRequireDefault(_componentClassFactory);

var _websiteComponentClass = require('../websiteComponentClass');

var _websiteComponentClass2 = _interopRequireDefault(_websiteComponentClass);

var _webServiceComponentClass = require('../webServiceComponentClass');

var _webServiceComponentClass2 = _interopRequireDefault(_webServiceComponentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('chai'),
    expect = _require.expect;

describe('#ComponentClassFactory', function () {

  it('should return a website check where checkType property is website', function () {

    var mockCheck = {
      key: 0,
      name: 'Name of the check',
      description: 'The description',
      checkType: 'website',
      url: 'www.someurl.co.uk',
      expectedStatusCode: 200,
      expectedResponseTime: 500
    };

    var checkObject = _componentClassFactory2.default.createComponentObject(mockCheck);

    expect(Object.getPrototypeOf(checkObject)).to.equal(_websiteComponentClass2.default.prototype);
  });

  it('should return a webservice check where checkType property is webservice', function () {

    var mockExpectedResults = {
      expectedStatusCode: 200,
      expectedResponseTime: 500
    };

    var mockCheck = {
      key: 0,
      name: 'Name of the service',
      description: 'The description',
      checkType: 'webservice',
      url: 'www.someurl.co.uk',
      payload: 'some payload',
      method: 'method',
      expectedResults: mockExpectedResults
    };

    var checkObject = _componentClassFactory2.default.createComponentObject(mockCheck);

    expect(Object.getPrototypeOf(checkObject)).to.equal(_webServiceComponentClass2.default.prototype);
  });

  it('should return an array of component objects', function () {

    var mockExpectedResults = {
      expectedStatusCode: 200,
      expectedResponseTime: 500
    };

    var mockChecks = [{
      key: 0,
      name: 'Check 1',
      description: 'The description',
      checkType: 'website',
      url: 'www.someurl.co.uk',
      expectedResults: mockExpectedResults
    }, {
      key: 1,
      name: 'Check 2',
      description: 'The description',
      checkType: 'website',
      url: 'www.someurl.co.uk',
      expectedResults: mockExpectedResults
    }, {
      key: 2,
      name: 'Check 3',
      description: 'The description',
      checkType: 'website',
      url: 'www.someurl.co.uk',
      expectedResults: mockExpectedResults
    }];

    expect(mockChecks.length).to.equal(3);

    var checkObjectArray = _componentClassFactory2.default.createComponentList(mockChecks);

    expect(checkObjectArray.length).to.equal(3);
    expect(checkObjectArray[0].name).to.equal('Check 1');
    expect(checkObjectArray[1].name).to.equal('Check 2');
    expect(checkObjectArray[2].name).to.equal('Check 3');
  });
});