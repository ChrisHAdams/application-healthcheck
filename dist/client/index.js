'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _home = require('./views/home.jsx');

var _home2 = _interopRequireDefault(_home);

var _play = require('./views/play.jsx');

var _play2 = _interopRequireDefault(_play);

var _list = require('./views/list.jsx');

var _list2 = _interopRequireDefault(_list);

var _layout = require('./views/layout.jsx');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouterDom.HashRouter,
  null,
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/list', component: _list2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/play', component: _play2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/layout', component: _layout2.default })
  )
), document.getElementById('index'));