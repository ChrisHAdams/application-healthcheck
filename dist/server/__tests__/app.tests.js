'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('chai'),
    expect = _require.expect;

var App = require('../app');
var Log = require('../common/__tests__/mockLogger');
var axios = require('axios');

var log = new Log();
var address = null;

describe('#App', function () {

  beforeEach(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            log = new Log();
            _context.next = 3;
            return App.start(log);

          case 3:
            expect(App.getState()).to.equal('Started');
            address = App.getApiRoot();

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  })));

  afterEach(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return App.shutdown(log);

          case 2:
            expect(App.getState()).to.equal('Shutdown');

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));

  it('should be started after start up', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            expect(App.getState()).to.equal('Started');

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));

  it('should return a 200 after calling API root', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            expect(App.getState()).to.equal('Started');
            _context4.next = 3;
            return axios.get(address);

          case 3:
            response = _context4.sent;

            expect(response.status).to.equal(200);
            expect(response.data).to.equal('API Root');

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));

  it('should return a 200 after calling api/components/list', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            expect(App.getState()).to.equal('Started');
            _context5.next = 3;
            return axios.get(address + '/components/list');

          case 3:
            response = _context5.sent;

            expect(response.status).to.equal(200);

          case 5:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
});