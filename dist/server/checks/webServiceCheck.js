'use strict';

var makeWebServiceRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(requestObj, log) {
    var options, start, responseObject, end, _end;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = {
              uri: requestObj.url,
              headers: requestObj.headers,
              timeout: 10000,
              resolveWithFullResponse: true,
              method: requestObj.method,
              body: requestObj.payload
            };
            start = Date.now();
            _context.prev = 2;


            log.info('Running WebService check ' + requestObj.name + '.');
            _context.next = 6;
            return rp(options);

          case 6:
            responseObject = _context.sent;
            end = Date.now() - start;


            requestObj.setActualResponseCode(responseObject.statusCode);
            requestObj.setActualResponseTime(end);

            log.info(requestObj.getResponseSummaryMessage());

            return _context.abrupt('return', requestObj);

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](2);
            _end = Date.now() - start;


            requestObj.setActualResponseCode(_context.t0.message);
            requestObj.setActualResponseTime(_end);

            log.error('Error - ' + requestObj.getResponseSummaryMessage());

            return _context.abrupt('return', requestObj);

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 14]]);
  }));

  return function makeWebServiceRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var rp = require('request-promise');

module.exports = { makeWebServiceRequest: makeWebServiceRequest };