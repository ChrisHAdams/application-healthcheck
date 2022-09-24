import axios from 'axios';

export async function getOptions() {

  try {
    const response = await axios.get('/api/options');

    return response.data;
  } catch (error) {
    console.error(error);
  }

}

export async function getLandscapes() {

  try {
    const response = await axios.get('/api/landscapes/list');
console.log (response);
    return response.data;
  } catch (error) {
    console.error(error);
  }

}

export async function getDashboard() {

  try {
    const response = await axios.get('/api/dashboard');

    return response.data;
  } catch (error) {
    console.error(error);
  }

}

export async function getAllComponentChecks() {

  try {

    const response = await axios.get('/api/assets/list');

    return response.data;

  } catch (error) {
    console.error(error);
  }

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

  const res = await axios.get(`/api/assets/check/id/${id}`);

  return res.data;

}

export async function runComponentChecksByIds(idArray) {

  const promiseArray = idArray.map(id => (runComponentCheckById(id)));
  const results = await Promise.all(promiseArray);

  return results;

}

export async function runAllComponentChecks() {

  const res = await axios.get('/api/assets/check/all');

  return res.data;

}
