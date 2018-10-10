'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runAllComponentChecks = exports.runComponentCheckById = exports.getComponentCheckByType = exports.getComponentCheckByName = exports.getComponentCheckById = exports.getAllComponentChecks = exports.getOptions = undefined;

var getOptions = exports.getOptions = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.get('http://' + window.location.host + '/api/options');

          case 2:
            res = _context.sent;
            return _context.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getOptions() {
    return _ref.apply(this, arguments);
  };
}();

var getAllComponentChecks = exports.getAllComponentChecks = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios2.default.get('http://' + window.location.host + '/api/components/list');

          case 2:
            res = _context2.sent;
            return _context2.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getAllComponentChecks() {
    return _ref2.apply(this, arguments);
  };
}();

var getComponentCheckById = exports.getComponentCheckById = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _axios2.default.get('http://' + window.location.host + '/api/components/id/' + id);

          case 2:
            res = _context3.sent;
            return _context3.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getComponentCheckById(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var getComponentCheckByName = exports.getComponentCheckByName = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(name) {
    var res;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _axios2.default.get('http://' + window.location.host + '/api/components/componentName/' + name);

          case 2:
            res = _context4.sent;
            return _context4.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getComponentCheckByName(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

var getComponentCheckByType = exports.getComponentCheckByType = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(type) {
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _axios2.default.get('http://' + window.location.host + '/api/components/type/' + type);

          case 2:
            res = _context5.sent;
            return _context5.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getComponentCheckByType(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var runComponentCheckById = exports.runComponentCheckById = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
    var res;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _axios2.default.get('http://' + window.location.host + '/api/check/id/' + id);

          case 2:
            res = _context6.sent;
            return _context6.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function runComponentCheckById(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

var runAllComponentChecks = exports.runAllComponentChecks = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var res;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _axios2.default.get('http://' + window.location.host + '/api/components/check/all');

          case 2:
            res = _context7.sent;
            return _context7.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function runAllComponentChecks() {
    return _ref7.apply(this, arguments);
  };
}();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }