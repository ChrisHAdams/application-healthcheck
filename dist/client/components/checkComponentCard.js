'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 3px;\n  padding: 0.25em 1em;\n  margin: 1em;\n  background: #293447;\n  border: 2px solid #48aff0;\n'], ['\n  border-radius: 3px;\n  padding: 0.25em 1em;\n  margin: 1em;\n  background: #293447;\n  border: 2px solid #48aff0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Card = _styledComponents2.default.div(_templateObject);

function CheckComponentCard(props) {
  return _react2.default.createElement(
    Card,
    { id: props.id },
    _react2.default.createElement(
      'h3',
      null,
      props.name
    ),
    _react2.default.createElement(
      'h4',
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
      props.expectedResponseTime,
      'ms'
    ),
    _react2.default.createElement(
      'p',
      { id: 'expectedResponseCode' },
      'Expected Response Code: ',
      props.expectedResponseCode
    )
  );
}

// class CheckComponentCard extends React.Component {

//  render() {
//    return (
//      <Card>
//        <h3>{this.props.name}</h3>
//        <h4 id='description'>{this.props.description}</h4>
//        <p id='type'>Check Type: {this.props.type}</p>
//     <p id='expectedResponseTime'>Expected Response Time: {this.props.expectedResponseTime}ms</p>
//        <p id='expectedResponseCode'>Expected Response Code: {this.props.expectedResponseCode}</p>
//      </Card>
//    );
//  }
// }


CheckComponentCard.propTypes = {
  id: _propTypes2.default.number,
  name: _propTypes2.default.string,
  description: _propTypes2.default.string,
  type: _propTypes2.default.string,
  expectedResponseTime: _propTypes2.default.number,
  expectedResponseCode: _propTypes2.default.number
};

exports.default = CheckComponentCard;