'use strict';

var _runComponentChecks = require('../server/actions/runComponentChecks');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var config = require('config');
var os = require('os');
var express = require('express');
var apiRoutes = require('./routes/apiRoutes.js');
var path = require('path');
var settings = require('../../settings');
var ioSockets = require('socket.io');

var app = express();
var appPort = config.get('healthcheck.options.port');

var server = void 0;
var state = 'Shutdown';
var io = void 0;

var http = require('http');

function start(log) {
  return new Promise(function (resolve, reject) {

    app.use('/', express.static(path.join(settings.PROJECT_DIR, 'dist/public')));

    app.get('/', function (req, res) {
      res.sendFile('index.html');
    });

    app.use('/api', apiRoutes);

    server = http.createServer(app).listen(appPort, function () {

      log.info('Healthcheck App Started.  Live at http://' + os.hostname() + ':' + appPort + '.');
      log.info('Get list of items to monitor.  http://' + os.hostname() + ':' + appPort + '/api/components/list.');
      log.info('Run the monitor.  http://' + os.hostname() + ':' + appPort + '/api/runMonitor.');

      state = 'Started';

      io = ioSockets(server);

      io.on('connection', function (socket) {
        log.info('Received socket connection.');
        socket.emit('message', 'You are connected!');
        socket.broadcast.emit('message', 'Another client has just connected!');
      });

      var scheduledResult = void 0;

      setInterval(function () {
        var _this = this;

        log.info('Running scheduled checks');

        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _runComponentChecks.runAllComponentChecks)(config.get('healthcheck.items'));

                case 2:
                  scheduledResult = _context.sent;

                  io.emit('message', scheduledResult);

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      }, 300000);

      resolve();
    }).on('error', function (e) {
      log.info(e);
      reject();
    });
  });
}

function shutdown(log) {
  return new Promise(function (resolve, reject) {

    state = 'Shutting down';
    log.info('Shutting down.');

    server.close(function () {

      log.info('Shutdown');
      state = 'Shutdown';

      resolve();
    }).on('error', function (e) {
      // Handle your error here
      log.info(e);
      reject();
    });
  });
}

function getApiRoot() {
  return 'http://' + os.hostname() + ':' + appPort + '/api';
}

function getState() {
  return state;
}

module.exports.start = start;
module.exports.shutdown = shutdown;
module.exports.getState = getState;
module.exports.getApiRoot = getApiRoot;