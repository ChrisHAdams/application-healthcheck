'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _listComponentChecks = require('../actions/listComponentChecks');

var _listComponentChecks2 = _interopRequireDefault(_listComponentChecks);

var _getComponentCheck = require('../actions/getComponentCheck');

var _runComponentChecks = require('../actions/runComponentChecks');

var _logger = require('../common/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiRoutes = _express2.default.Router();

apiRoutes.get('/', function (req, res) {
  res.status(200).send('API Root');
});

apiRoutes.get('/components/list', function (req, res) {
  _logger2.default.info('Received request for components/list.');
  res.status(200).send((0, _listComponentChecks2.default)(_config2.default.get('healthcheck.items')));
});

apiRoutes.get('/components/id/:id', function (req, res) {
  _logger2.default.info('Received request for components/id/' + req.params.id + '.');
  res.status(200).send((0, _getComponentCheck.GetComponentCheckById)(_config2.default.get('healthcheck.items'), req.params.id));
});

apiRoutes.get('/components/name/:componentName', function (req, res) {
  _logger2.default.info('Received request for components/name/' + req.params.componentName + '.');
  res.status(200).send((0, _getComponentCheck.GetComponentCheckByName)(_config2.default.get('healthcheck.items'), req.params.componentName));
});

apiRoutes.get('/components/type/:typeName', function (req, res) {
  _logger2.default.info('Received request for components/type/' + req.params.typeName + '.');
  res.status(200).send((0, _getComponentCheck.GetComponentCheckByType)(_config2.default.get('healthcheck.items'), req.params.typeName));
});

apiRoutes.get('/options', function (req, res) {
  _logger2.default.info('Received request for app options.');
  res.status(200).send(_config2.default.get('healthcheck.layoutElements'));
});

apiRoutes.get('/components/check/all/', function (req, res) {
  _logger2.default.info('Received request to check all components.');

  (0, _runComponentChecks.runAllComponentChecks)(_config2.default.get('healthcheck.items')).then(function (result) {
    res.status(200).send(JSON.stringify(result));
  });
});

apiRoutes.get('/components/check/id/:id', function (req, res) {
  _logger2.default.info('Received request to run check components/id/' + req.params.id + '.');
  // res.status(200).send(runComponentCheckById(config.get('healthcheck.items'), req.params.id));
  (0, _runComponentChecks.runComponentCheckById)(_config2.default.get('healthcheck.items'), req.params.id).then(function (result) {
    res.status(200).send(JSON.stringify(result));
  });
});

apiRoutes.get('/components/check/name/:name', function (req, res) {
  _logger2.default.info('Received request to run check components/name/' + req.params.name + '.');

  (0, _runComponentChecks.runComponentCheckByName)(_config2.default.get('healthcheck.items'), req.params.name).then(function (result) {
    res.status(200).send(JSON.stringify(result));
  });
});

module.exports = apiRoutes;