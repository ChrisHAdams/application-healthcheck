import express from 'express';
import config from 'config';
import ListAppLandscapes from '../actions/listAppLandscapes';
import ListChecks from '../actions/listComponentChecks';
import { GetLandscapeById, GetLandscapeByName } from '../actions/getLandscapes';
import { GetComponentCheckById, GetComponentCheckByName, GetComponentCheckByType } from '../actions/getComponentCheck';
import { runComponentCheckById, runComponentCheckByName, runAllComponentChecks } from '../actions/runComponentChecks';

import Log from '../common/logger';


const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => {
  res.status(200).send('API Root');
});

apiRoutes.get('/dashboard', (req, res) => {
  Log.info('Received request for dashboard.');
  res.status(200).send(JSON.stringify(config.get('healthcheck.dashboardConfig')));
});

apiRoutes.get('/landscapes/list', (req, res) => {
  Log.info('Received request for landscapes/list.');
  res.status(200).send(JSON.stringify(ListAppLandscapes(config.get('healthcheck.appLandscapes'))));
});

apiRoutes.get('/landscapes/id/:id', (req, res) => {
  Log.info(`Received request for landscapes/id/${req.params.id}.`);
  res.status(200).send(JSON.stringify(GetLandscapeById(config.get('healthcheck.appLandscapes'), req.params.id)));
});

apiRoutes.get('/landscapes/name/:name', (req, res) => {
  Log.info(`Received request for landscapes/name/${req.params.name}.`);
  res.status(200).send(JSON.stringify(GetLandscapeByName(config.get('healthcheck.appLandscapes'), req.params.name)));
});

apiRoutes.get('/landscapes/:id/components/list', (req, res) => {
  Log.info(`Received request for /landscapes/${req.params.id}/components/list.`);
  res.status(200).send(ListChecks(config.get('healthcheck.items')));
});

apiRoutes.get('/landscapes/:landscapeId/components/id/:id', (req, res) => {
  Log.info(`Received request for /landscapes/${req.params.landscapeId}/components/id/${req.params.id}.`);
  res.status(200).send(GetComponentCheckById(config.get('healthcheck.items'), req.params.id));
});

apiRoutes.get('/components/list', (req, res) => {
  Log.info('Received request for /components/list.');
  res.status(200).send(ListChecks(config.get('healthcheck.items')));
});

apiRoutes.get('/components/name/:componentName', (req, res) => {
  Log.info(`Received request for components/name/${req.params.componentName}.`);
  res.status(200).send(GetComponentCheckByName(config.get('healthcheck.items'), req.params.componentName));
});

apiRoutes.get('/components/type/:typeName', (req, res) => {
  Log.info(`Received request for components/type/${req.params.typeName}.`);
  res.status(200).send(GetComponentCheckByType(config.get('healthcheck.items'), req.params.typeName));
});

apiRoutes.get('/options', (req, res) => {
  Log.info('Received request for app options.');

  let options = JSON.parse(JSON.stringify(config.get('healthcheck.options')));

  if ((process.env.PORT !== options.port) && (process.env.PORT > 0)) {
    options.port = process.env.PORT;
  }

  var internalUri = req.originalUrl;
  var externalUri = req.get('X-Real-URI') || internalUri;
  options.basePath = externalUri.substr(0, externalUri.length - internalUri.length + 1);

  res.status(200).send(JSON.stringify(options));
});

apiRoutes.get('/components/check/all/', (req, res) => {
  Log.info('Received request to check all components.');

  runAllComponentChecks(config.get('healthcheck.items')).then((result) => {
    res.status(200).send(JSON.stringify(result));
  });
});

apiRoutes.get('/components/check/id/:id', (req, res) => {
  Log.info(`Received request to run check components/id/${req.params.id}.`);
  // res.status(200).send(runComponentCheckById(config.get('healthcheck.items'), req.params.id));
  runComponentCheckById(config.get('healthcheck.items'), req.params.id).then((result) => {
    res.status(200).send(JSON.stringify(result));
  });
});

apiRoutes.get('/components/check/name/:name', (req, res) => {
  Log.info(`Received request to run check components/name/${req.params.name}.`);

  runComponentCheckByName(config.get('healthcheck.items'), req.params.name).then((result) => {
    res.status(200).send(JSON.stringify(result));
  });

});

module.exports = apiRoutes;
