import axios from 'axios';

export async function getOptions() {

  const res = await axios.get('/api/options');
  return res.data;

}

export async function getLandscapes() {

  const res = await axios.get('/api/landscapes/list');

  return res.data;

}

export async function getDashboard() {

  const res = await axios.get('/api/dashboard');

  return res.data;

}

export async function getAllComponentChecks() {

  const res = await axios.get('/api/components/list');

  return res.data;

}

export async function getComponentCheckById(id) {

  const res = await axios.get(`/api/components/id/${id}`);

  return res.data;

}

export async function getComponentCheckByName(name) {

  const res = await axios.get(`/api/components/componentName/${name}`);

  return res.data;

}

export async function getComponentCheckByType(type) {

  const res = await axios.get(`/api/components/type/${type}`);

  return res.data;

}

export async function runComponentCheckById(id) {

  const res = await axios.get(`/api/components/check/id/${id}`);

  return res.data;

}

export async function runComponentChecksByIds(idArray) {

  const promiseArray = idArray.map(id => (runComponentCheckById(id)));
  const results = await Promise.all(promiseArray);

  return results;

}

export async function runAllComponentChecks() {

  const res = await axios.get('/api/components/check/all');

  return res.data;

}
