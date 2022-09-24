import express from 'express';
import config from 'config';
import { ListAppLandscapes } from '../landscapes/actions/listAppLandscapes.js';
import { GetLandscapeById, GetLandscapeByName } from '../landscapes/actions/getLandscapes.js';
import { getAllAssets, getAssetsByLandscapeId, getAssetById, getAssetByName, getAssetsByType } from '../assets/actions/getAssets.js';
import { runAllAssetChecks, runAssetCheckById } from '../assetChecks/actions/runAssetChecks.js';

//import { runComponentCheckById, runComponentCheckByName, runAllComponentChecks } from '../actions/runComponentChecks';

//import ListChecks from '../actions/listComponentChecks';

import Log from '../common/logger.js';
let apiRoutes;

export default apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => {
  res.status(200).send('This is the API Root.');
});

apiRoutes.get('/dashboard', (req, res) => {
  Log.info('Received request for dashboard.');
  res.status(200).send(JSON.stringify(config.get('healthcheck.dashboardConfig')));
});

apiRoutes.get('/assets/list', (req, res) => {
  Log.info('Received request for assets/list.');
  res.status(200).send(JSON.stringify(getAllAssets()));
});

apiRoutes.get('/landscapes/list', (req, res) => {
  Log.info('Received request for landscapes/list.');
  res.status(200).send(JSON.stringify(ListAppLandscapes(config.get('healthcheck.appLandscapes'))));
});

apiRoutes.get('/landscapes/id/:id', (req, res) => {
  Log.info(`Received request for landscapes/id/${req.params.id}.`);
  res.status(200).send(JSON.stringify(GetLandscapeById(req.params.id)));
});

apiRoutes.get('/landscapes/name/:name', (req, res) => {
  Log.info(`Received request for landscapes/name/${req.params.name}.`);
  res.status(200).send(JSON.stringify(GetLandscapeByName(req.params.name)));
});

apiRoutes.get('/landscapes/id/:id/assets/list', (req, res) => {

  Log.info(`Received request for /landscapes/id/${req.params.id}/assets/list.`);

  const response = getAssetsByLandscapeId(req.params.id);

  res.status(200).send(JSON.stringify(response));

});

apiRoutes.get('/assets/id/:id', (req, res) => {
  Log.info(`Received request for /assets/id/${req.params.id}.`);
  res.status(200).send(getAssetById(req.params.id));
});

apiRoutes.get('/assets/name/:name', (req, res) => {
  Log.info(`Received request for /assets/name/${req.params.name}.`);
  res.status(200).send(getAssetByName(req.params.name));
});

apiRoutes.get('/assets/type/:typeName', (req, res) => {
  Log.info(`Received request for assets/type/${req.params.typeName}.`);
  res.status(200).send(getAssetsByType(req.params.typeName));
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


apiRoutes.get('/assets/check/all/', (req, res) => {

  Log.info('Received request to check all assets.');

  runAllAssetChecks().then((result) => {
    res.status(200).send(JSON.stringify(result));
  });

});

apiRoutes.get('/assets/check/id/:id', (req, res) => {

  const id = req.params.id;
  Log.info(`Received request to check asset, id ${id}.`);

  runAssetCheckById(id).then((result) => {
    res.status(200).send(JSON.stringify(result));
  });

});

