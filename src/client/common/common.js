function filterResults(keyArray, resultsArray) {

  const filteredResults = [];
  let i = 0;

  for (i = 0; i < resultsArray.length; i += 1) {
    if (keyArray.includes(resultsArray[i].key)) {
      filteredResults.push(resultsArray[i]);
    }
  }

  return filteredResults;
}

function getSocketUrl(port) {
  return `http://${window.location.hostname}:${port}`;
}

export { filterResults, getSocketUrl };
