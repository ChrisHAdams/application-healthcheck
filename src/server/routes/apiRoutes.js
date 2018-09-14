import express from 'express';
import config from 'config';
import ListChecks from '../actions/listComponentChecks';
import { GetComponentCheckById, GetComponentCheckByName, GetComponentCheckByType } from '../actions/getComponentCheck';
import { runComponentCheckById, runComponentCheckByName, runAllComponentChecks } from '../actions/runComponentChecks';

import Log from '../common/logger';


const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => {
  res.status(200).send('API Root');
});

apiRoutes.get('/components/list', (req, res) => {
  Log.info('Received request for components/list.');
  res.status(200).send(ListChecks(config.get('healthcheck.items')));
});

apiRoutes.get('/components/id/:id', (req, res) => {
  Log.info(`Received request for components/id/${req.params.id}.`);
  res.status(200).send(GetComponentCheckById(config.get('healthcheck.items'), req.params.id));
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
  res.status(200).send(config.get('healthcheck.layoutElements'));
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
