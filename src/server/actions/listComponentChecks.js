import ComponentClassFactory from '../classes/componentClassFactory';

function ListComponentChecks(healthcheckItems) {

  const componentArray = ComponentClassFactory.createComponentList(healthcheckItems);
  const outputArray = [];

  for (let i = 0; i < componentArray.length; i += 1) {
    outputArray.push(componentArray[i].toJson());
  }

  return JSON.stringify(outputArray);

}

module.exports = ListComponentChecks;

