'use strict';

var runSingleCheck = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(checkToRun) {
    var response, websiteComponent, webServiceComponent, serverComponent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = {};

            if (!(String(checkToRun.type).valueOf() === String('website').valueOf())) {
              _context.next = 8;
              break;
            }

            websiteComponent = new _websiteComponentClass2.default(checkToRun);
            _context.next = 5;
            return (0, _websiteCheck.makeHttpRequest)(websiteComponent, _logger2.default);

          case 5:
            response = _context.sent;
            _context.next = 20;
            break;

          case 8:
            if (!(checkToRun.type === 'webservice')) {
              _context.next = 15;
              break;
            }

            webServiceComponent = new _webServiceComponentClass2.default(checkToRun);
            _context.next = 12;
            return (0, _webServiceCheck.makeWebServiceRequest)(webServiceComponent, _logger2.default);

          case 12:
            response = _context.sent;
            _context.next = 20;
            break;

          case 15:
            if (!(checkToRun.type === 'server')) {
              _context.next = 20;
              break;
            }

            serverComponent = new _serverComponentClass2.default(checkToRun);
            _context.next = 19;
            return (0, _serverCheck.makeServerRequest)(serverComponent, _logger2.default);

          case 19:
            response = _context.sent;

          case 20:
            return _context.abrupt('return', response.toJson());

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function runSingleCheck(_x) {
    return _ref.apply(this, arguments);
  };
}();

var runAllComponentChecks = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(healthcheckItems) {
    var componentArray, promiseArray, results;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            componentArray = _componentClassFactory2.default.createComponentList(healthcheckItems);
            promiseArray = componentArray.map(function (item) {
              return runSingleCheck(item.toJson());
            });
            _context2.next = 5;
            return Promise.all(promiseArray);

          case 5:
            results = _context2.sent;

            _resultsLogger2.default.info(JSON.stringify(results));

            return _context2.abrupt('return', results);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](0);

            _logger2.default.info(_context2.t0);
            return _context2.abrupt('return', _context2.t0);

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function runAllComponentChecks(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var runComponentCheckById = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(healthcheckItems, id) {
    var checkToRun, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            checkToRun = (0, _getComponentCheck.GetComponentCheckById)(healthcheckItems, id);
            response = {};

            if (!checkToRun) {
              _context3.next = 6;
              break;
            }

            _context3.next = 5;
            return runSingleCheck(checkToRun);

          case 5:
            response = _context3.sent;

          case 6:
            return _context3.abrupt('return', response);

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function runComponentCheckById(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var runComponentCheckByName = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(healthcheckItems, name) {
    var checkToRun, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            checkToRun = (0, _getComponentCheck.GetComponentCheckByName)(healthcheckItems, name);
            response = {};

            if (!checkToRun) {
              _context4.next = 6;
              break;
            }

            _context4.next = 5;
            return runSingleCheck(checkToRun);

          case 5:
            response = _context4.sent;

          case 6:
            return _context4.abrupt('return', response);

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function runComponentCheckByName(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var _componentClassFactory = require('../classes/componentClassFactory');

var _componentClassFactory2 = _interopRequireDefault(_componentClassFactory);

var _websiteComponentClass = require('../classes/websiteComponentClass');

var _websiteComponentClass2 = _interopRequireDefault(_websiteComponentClass);

var _webServiceComponentClass = require('../classes/webServiceComponentClass');

var _webServiceComponentClass2 = _interopRequireDefault(_webServiceComponentClass);

var _serverComponentClass = require('../classes/serverComponentClass');

var _serverComponentClass2 = _interopRequireDefault(_serverComponentClass);

var _getComponentCheck = require('../actions/getComponentCheck');

var _websiteCheck = require('../checks/websiteCheck');

var _webServiceCheck = require('../checks/webServiceCheck');

var _serverCheck = require('../checks/serverCheck');

var _logger = require('../common/logger');

var _logger2 = _interopRequireDefault(_logger);

var _resultsLogger = require('../common/resultsLogger');

var _resultsLogger2 = _interopRequireDefault(_resultsLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = { runComponentCheckById: runComponentCheckById, runComponentCheckByName: runComponentCheckByName, runAllComponentChecks: runAllComponentChecks };