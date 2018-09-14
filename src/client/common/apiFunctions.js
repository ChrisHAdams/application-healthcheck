import axios from 'axios';

export async function getOptions() {

  const res = await axios.get(`http://${window.location.host}/api/options`);

  return res.data;

}

export async function getAllComponentChecks() {

  const res = await axios.get(`http://${window.location.host}/api/components/list`);

  return res.data;

}

export async function getComponentCheckById(id) {

  const res = await axios.get(`http://${window.location.host}/api/components/id/${id}`);

  return res.data;

}

export async function getComponentCheckByName(name) {

  const res = await axios.get(`http://${window.location.host}/api/components/componentName/${name}`);

  return res.data;

}

export async function getComponentCheckByType(type) {

  const res = await axios.get(`http://${window.location.host}/api/components/type/${type}`);

  return res.data;

}

export async function runComponentCheckById(id) {

  const res = await axios.get(`http://${window.location.host}/api/check/id/${id}`);

  return res.data;

}

export async function runAllComponentChecks() {

  const res = await axios.get(`http://${window.location.host}/api/components/check/all`);

  return res.data;

}
