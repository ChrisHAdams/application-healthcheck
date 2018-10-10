'use strict';

var _listComponentChecks = require('../listComponentChecks');

var _listComponentChecks2 = _interopRequireDefault(_listComponentChecks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('chai'),
    expect = _require.expect;

var healthCheckItems = [{
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'website',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'some url',
  resolveWithFullResponse: true
}, {
  key: 1,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'website',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'some url',
  resolveWithFullResponse: true
}, {
  key: 3,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'webservice',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'some url',
  resolveWithFullResponse: true
}];

describe('#ListChecks', function () {

  it('should return a list of the healthcheck items', function () {

    var listArray = JSON.parse((0, _listComponentChecks2.default)(healthCheckItems));

    expect(listArray.length).to.equal(3);
  });
});