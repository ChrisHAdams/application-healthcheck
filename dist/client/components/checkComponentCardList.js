'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _checkComponentCard = require('./checkComponentCard.jsx');

var _checkComponentCard2 = _interopRequireDefault(_checkComponentCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckComponentCardList(props) {

  var componentList = void 0;

  if (props.componentChecks.length > 0) {
    console.log("YO");
    componentList = props.componentChecks.map(function (component) {
      return _react2.default.createElement(_checkComponentCard2.default, {
        key: component.key,
        id: component.key,
        name: component.name,
        description: component.description,
        type: component.type,
        website: component.type,
        expectedResponseCode: component.expectedResponseCode,
        expectedResponseTime: component.expectedResponseCode
      });
    });
    console.log(componentList);
  } else {
    componentList = '';
  }

  return _react2.default.createElement(
    'div',
    { className: 'contentGrid' },
    componentList
  );
}

CheckComponentCardList.propTypes = {
  componentChecks: _propTypes2.default.array
};

exports.default = CheckComponentCardList;