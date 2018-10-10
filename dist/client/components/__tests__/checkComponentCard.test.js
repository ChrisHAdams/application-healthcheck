'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _checkComponentCard = require('../checkComponentCard.jsx');

var _checkComponentCard2 = _interopRequireDefault(_checkComponentCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { Expect as expect } from 'jest';

test('Check Component Card Snapshot Test', function () {

  var responseTime = 500;
  var responseCode = 200;

  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_checkComponentCard2.default, {
    name: 'BBC',
    description: 'Check the BBC Website',
    type: 'website',
    expectedResponseTime: responseTime,
    expectedResponseCode: responseCode
  }), null);

  var tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Check Component Card DOM test', function () {
  var responseTime = 500;
  var responseCode = 200;

  var card = (0, _enzyme.shallow)(_react2.default.createElement(_checkComponentCard2.default, {
    name: 'BBC',
    description: 'Check the BBC Website',
    type: 'website',
    expectedResponseTime: responseTime,
    expectedResponseCode: responseCode
  }));

  expect(card.find('h3').text()).toEqual('BBC');
  expect(card.find({ id: 'description' }).text()).toEqual('Check the BBC Website');
  expect(card.find({ id: 'type' }).text()).toContain('website');
  expect(card.find({ id: 'expectedResponseTime' }).text()).toContain(responseTime);
  expect(card.find({ id: 'expectedResponseCode' }).text()).toContain(responseCode);
});