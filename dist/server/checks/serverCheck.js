'use strict';

var makeServerRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(requestObj, log) {
    var start, response, end, status, _end;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = Date.now();
            _context.prev = 1;
            _context.next = 4;
            return ping.promise.probe(requestObj.url, { timeout: 1.5 });

          case 4:
            response = _context.sent;
            end = Date.now() - start;
            status = response.alive ? 200 : 500;


            if (status === 'Alive') {
              log.info('    Called ' + requestObj.name + '.  Response Code : ' + status + '.  Response Time : ' + response.max + '.');
              requestObj.setActualResponseCode(status);
              requestObj.setActualResponseTime(response.max);
              requestObj.setTimestamp(Date.now());
            } else {
              log.info('    Called ' + requestObj.name + '.  Response Code : ' + status + '.  Response Time : ' + end + '.');
              requestObj.setActualResponseCode(status);
              requestObj.setActualResponseTime(end);
              requestObj.setTimestamp(Date.now());
            }

            log.info(requestObj.getResponseSummaryMessage());

            return _context.abrupt('return', requestObj);

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](1);
            _end = Date.now() - start;


            requestObj.setActualResponseCode(_context.t0.message);
            requestObj.setActualResponseTime(_end);

            log.error('Error - ' + requestObj.getResponseSummaryMessage());

            return _context.abrupt('return', requestObj);

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 12]]);
  }));

  return function makeServerRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var ping = require('ping');

module.exports = { makeServerRequest: makeServerRequest };