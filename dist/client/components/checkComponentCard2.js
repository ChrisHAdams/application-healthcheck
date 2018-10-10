'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 3px;\n  padding: 0.25em 1em;\n  margin: 0 1em;\n  background: #293447;\n  color: palevioletred;\n  border: 2px solid #48aff0;\n'], ['\n  border-radius: 3px;\n  padding: 0.25em 1em;\n  margin: 0 1em;\n  background: #293447;\n  color: palevioletred;\n  border: 2px solid #48aff0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Card = _styledComponents2.default.div(_templateObject);

function CheckComponentCard2(props) {
  return _react2.default.createElement(
    Card,
    null,
    _react2.default.createElement(
      'h2',
      null,
      props.name
    ),
    _react2.default.createElement(
      'h3',
      { id: 'description' },
      props.description
    ),
    _react2.default.createElement(
      'p',
      { id: 'type' },
      'Check Type: ',
      props.type
    ),
    _react2.default.createElement(
      'p',
      { id: 'expectedResponseTime' },
      'Expected Response Time: ',
      props.expectedResponseTime
    ),
    _react2.default.createElement(
      'p',
      { id: 'expectedResponseCode' },
      'Expected Response Code: ',
      props.expectedResponseCode
    )
  );
}

CheckComponentCard2.propTypes = {
  name: _propTypes2.default.string,
  description: _propTypes2.default.string,
  type: _propTypes2.default.string,
  expectedResponseTime: _propTypes2.default.number,
  expectedResponseCode: _propTypes2.default.number
};

exports.default = CheckComponentCard2;