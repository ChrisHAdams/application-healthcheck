'use strict';

var makeOldWebServiceRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(requestObj, log) {
    var options, start, responseObject;
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
            _context.next = 4;
            return rp(options).then(function (response) {
              var end = Date.now() - start;
              log.info('    Called ' + requestObj.name + '.  Response Code : ' + response.statusCode + '.  Response Time : ' + end + 'ms.');
              var responseObj = JSON.parse('{"responseCode": ' + response.statusCode + ', "responseTime": ' + end + '}');
              return responseObj;
            }).catch(function (error) {
              var end = Date.now() - start;
              var responseObj = {};
              if (error.response) {
                log.info('    Called ' + requestObj.name + '.  Response Code : ' + error.statusCode + '.  Response Message ' + error.response.statusMessage + '.  Response Time : ' + end + 'ms.');
                responseObj = JSON.parse('{"responseCode": ' + error.statusCode + ', "responseMessage": "' + error.response.statusMessage + '", "responseTime": ' + end + '}');
              } else {
                log.info('    Called ' + requestObj.name + '.  Response Code : 500.  Response Message N/A - Monitor timeout reached.  Response Time : ' + end + 'ms.');
                responseObj = JSON.parse('{"responseCode": 500, "responseMessage": "Monitor timeout reached", "responseTime": ' + end + '}');
              }
              return responseObj;
            });

          case 4:
            responseObject = _context.sent;
            return _context.abrupt('return', responseObject);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function makeOldWebServiceRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var rp = require('request-promise');

module.exports = { makeOldWebServiceRequest: makeOldWebServiceRequest };