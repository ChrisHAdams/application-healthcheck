"use strict";

var makeValidHttpRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(requestObj, log) {
    var options, start, responseObject, end;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = {
              uri: requestObj.url,
              resolveWithFullResponse: true
            };
            start = Date.now();
            responseObject = { statusCode: 200 };
            end = Date.now() - start;


            requestObj.setActualResponseCode(responseObject.statusCode);
            requestObj.setActualResponseTime(end);

            log.info("Called " + options.uri + ".  Response code " + responseObject.statusCode + ".  Response time " + end + "ms.");

            return _context.abrupt("return", requestObj);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function makeValidHttpRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var makePageNotFoundHttpRequest = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(requestObj, log) {
    var options, start, responseObject, end;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = {
              uri: requestObj.url,
              resolveWithFullResponse: true
            };
            start = Date.now();
            responseObject = { statusCode: 404 };
            end = Date.now() - start;


            requestObj.setActualResponseCode(responseObject.statusCode);
            requestObj.setActualResponseTime(end);

            log.info("Called " + options.uri + ".  Response code " + responseObject.statusCode + ".  Response time " + end + "ms.");

            return _context2.abrupt("return", requestObj);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function makePageNotFoundHttpRequest(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var makeServerErrorHttpRequest = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(requestObj, log) {
    var options, start, responseObject, end;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = {
              uri: requestObj.url,
              resolveWithFullResponse: true
            };
            start = Date.now();
            responseObject = { statusCode: 500 };
            end = Date.now() - start;


            requestObj.setActualResponseCode(responseObject.statusCode);
            requestObj.setActualResponseTime(end);

            log.info("Called " + options.uri + ".  Response code " + responseObject.statusCode + ".  Response time " + end + "ms.");

            return _context3.abrupt("return", requestObj);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function makeServerErrorHttpRequest(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = { makeValidHttpRequest: makeValidHttpRequest, makePageNotFoundHttpRequest: makePageNotFoundHttpRequest, makeServerErrorHttpRequest: makeServerErrorHttpRequest };