import LandscapeClassFactory from '../server/classes/landscapeClassFactory';
import { runAllComponentChecks } from '../server/actions/runComponentChecks';

const config = require('config');
const os = require('os');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const path = require('path');
const settings = require('../../settings');
const ioSockets = require('socket.io');

const app = express();
const appPort = process.env.PORT || config.get('healthcheck.options.port');

let server;
let state = 'Shutdown';
let io;

const http = require('http');

function start(log) {
  return new Promise((resolve, reject) => {

    app.use('/', express.static(path.join(settings.PROJECT_DIR, 'dist/public')));

    app.get('/', (req, res) => {
      res.sendFile('index.html', { root: path.join(settings.PROJECT_DIR, 'dist/public') });
    });

    app.use('/api', apiRoutes);

    server = http.createServer(app).listen(appPort, () => {

      log.info(`Healthcheck App Started.  Live at http://${os.hostname()}:${appPort}.`);
      log.info(`Get list of items to monitor.  http://${os.hostname()}:${appPort}/api/components/list.`);
      log.info(`Run the monitor.  http://${os.hostname()}:${appPort}/api/runMonitor.`);

      state = 'Started';

      io = ioSockets(server);

      io.on('connection', function (socket) {
        log.info('Received socket connection.');
        socket.emit('message', 'You are connected!');
        socket.broadcast.emit('message', 'Another client has just connected!');
      });

      let scheduledResult;

      setInterval(function () {
        log.info('Running scheduled checks');

        (async () => {
          scheduledResult = await runAllComponentChecks(config.get('healthcheck.items'), log);
          //log.info(JSON.stringify(scheduledResult));
          io.emit('data', JSON.stringify(scheduledResult));
        })();

      }, 600000);

      resolve();

    }).on('error', function (e) {
      log.info(e);
      reject();

    });

  });

}

function shutdown(log) {
  return new Promise((resolve, reject) => {

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
  return `http://${os.hostname()}:${appPort}/api`;
}

function getState() {
  return state;
}

module.exports.start = start;
module.exports.shutdown = shutdown;
module.exports.getState = getState;
module.exports.getApiRoot = getApiRoot;
