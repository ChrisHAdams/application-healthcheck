import { runAllAssetChecks } from '../server/assetChecks/actions/runAssetChecks.js';
import httpshutdown from 'http-shutdown'; //.extend()

import config from 'config';
//const config = require('config');

//const os = require('os');
import os from 'os';

//const express = require('express');
import express from 'express';

//const apiRoutes = require('./routes/apiRoutes.js');
import apiRoutes from './routes/apiRoutes.js';

//const path = require('path');
import path from 'path';

//const settings = require('../../settings');
import settings from '../../settings.js';

//const ioSockets = require('socket.io');
//import ioSockets from 'socket.io';
//import from 'socket.io' as ioSockets;
import { Server as ioSockets } from "socket.io";

const app = express();
const appPort = process.env.PORT || config.get('healthcheck.options.port');

let server;
let state = 'Shutdown';
let io;

//import http from 'http';
import * as http from 'http';

export default class WebServer {

  constructor(){

  }

  init(log) {
    log.info("Initialising Web Server");
  }

  start(log) {

    return new Promise((resolve, reject) => {

      app.use('/', express.static(path.join(settings.PROJECT_DIR, 'dist')));

      app.get('/', (req, res) => {
        res.sendFile('index.html', { root: path.join(settings.PROJECT_DIR, 'dist') });
      });

      app.use('/api', apiRoutes);

      server = http.createServer(app).listen(appPort, () => {

        log.info(`Healthcheck App Started.  Live at http://${os.hostname()}:${appPort}.`);
        log.info(`Get list of items to monitor.  http://${os.hostname()}:${appPort}/api/components/list.`);
        log.info(`Run the monitor.  http://${os.hostname()}:${appPort}/api/runMonitor.`);

        state = 'Started';


        io = new ioSockets(server);

        io.on('connection', function (socket) {
          log.info('Received socket connection.');
          socket.emit('message', 'You are connected!');
          socket.broadcast.emit('message', 'Another client has just connected!');
        });


        let scheduledResult;

        setInterval(function () {
          log.info('Running scheduled checks');

          (async () => {
            scheduledResult = await runAllAssetChecks(log);
            io.emit('data', JSON.stringify(scheduledResult));
          })();


        }, 300000);

        resolve();

      }).on('error', function (e) {
        log.info(e);
        reject();

      });

    });

  }

  shutdown(log) {

    return new Promise((resolve, reject) => {

      state = 'Shutting down';
      log.info('Shutting down.');

      server.shutdown(function () {
        state="Shutdown";
        log.info('Server state : ' + getState());
        resolve();
      });
    });

  }


  getApiRoot() {
    return `http://${os.hostname()}:${appPort}/api`;
  }

  getState() {
    return state;
  }

}


