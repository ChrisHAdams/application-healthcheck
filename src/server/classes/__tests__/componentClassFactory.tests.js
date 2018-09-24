import ComponentClassFactory from '../componentClassFactory';
import WebsiteComponentClass from '../websiteComponentClass';
import WebServiceComponentClass from '../webServiceComponentClass';
import ServerComponentClass from '../serverComponentClass';

const { expect } = require('chai');

describe('#ComponentClassFactory', function () {

  it('should return a website check where checkType property is website', function () {

    const mockCheck = {
      key: 0,
      name: 'Name of the check',
      description: 'The description',
      checkType: 'website',
      url: 'www.someurl.co.uk',
      expectedStatusCode: 200,
      expectedResponseTime: 500,
    };

    const checkObject = ComponentClassFactory.createComponentObject(mockCheck);

    expect(Object.getPrototypeOf(checkObject)).to.equal(WebsiteComponentClass.prototype);

  });

  it('should return a webservice check where checkType property is webservice', function () {

    const mockExpectedResults = {
      expectedStatusCode: 200,
      expectedResponseTime: 500,
    };

    const mockCheck = {
      key: 0,
      name: 'Name of the service',
      description: 'The description',
      checkType: 'webservice',
      url: 'www.someurl.co.uk',
      payload: 'some payload',
      method: 'method',
      expectedResults: mockExpectedResults,
    };

    const checkObject = ComponentClassFactory.createComponentObject(mockCheck);

    expect(Object.getPrototypeOf(checkObject)).to.equal(WebServiceComponentClass.prototype);

  });

  it('should return a server check where checkType property is server', function () {

    const mockExpectedResults = {
      expectedStatusCode: 200,
      expectedResponseTime: 500,
    };

    const mockCheck = {
      key: 0,
      name: 'Name of the service',
      description: 'The description',
      checkType: 'server',
      url: 'www.someurl.co.uk',
      payload: 'some payload',
      method: 'method',
      expectedResults: mockExpectedResults,
    };

    const checkObject = ComponentClassFactory.createComponentObject(mockCheck);

    expect(Object.getPrototypeOf(checkObject)).to.equal(ServerComponentClass.prototype);

  });


  it('should return null where checkType property is not know by factory', function () {

    const mockExpectedResults = {
      expectedStatusCode: 200,
      expectedResponseTime: 500,
    };

    const mockCheck = {
      key: 0,
      name: 'Name of the service',
      description: 'The description',
      checkType: 'nonsense',
      url: 'www.someurl.co.uk',
      payload: 'some payload',
      method: 'method',
      expectedResults: mockExpectedResults,
    };

    const checkObject = ComponentClassFactory.createComponentObject(mockCheck);

    expect(checkObject).to.equal(null);

  });


  it('should return an array of component objects', function () {

    const mockExpectedResults = {
      expectedStatusCode: 200,
      expectedResponseTime: 500,
    };

    const mockChecks = [
      {
        key: 0,
        name: 'Check 1',
        description: 'The description',
        checkType: 'website',
        url: 'www.someurl.co.uk',
        expectedResults: mockExpectedResults,
      },
      {
        key: 1,
        name: 'Check 2',
        description: 'The description',
        checkType: 'website',
        url: 'www.someurl.co.uk',
        expectedResults: mockExpectedResults,
      },
      {
        key: 2,
        name: 'Check 3',
        description: 'The description',
        checkType: 'website',
        url: 'www.someurl.co.uk',
        expectedResults: mockExpectedResults,
      },
    ];


    expect(mockChecks.length).to.equal(3);

    const checkObjectArray = ComponentClassFactory.createComponentList(mockChecks);

    expect(checkObjectArray.length).to.equal(3);
    expect(checkObjectArray[0].name).to.equal('Check 1');
    expect(checkObjectArray[1].name).to.equal('Check 2');
    expect(checkObjectArray[2].name).to.equal('Check 3');

  });

});
