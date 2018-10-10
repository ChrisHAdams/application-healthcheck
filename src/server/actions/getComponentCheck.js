import ComponentClassFactory from '../classes/componentClassFactory';

function GetComponentCheckById(healthcheckItems, id) {

  const componentArray = ComponentClassFactory.createComponentList(healthcheckItems);
  const intId = parseInt(id, 10);
  let outputObj = {};

  for (let i = 0; i < componentArray.length; i += 1) {

    if (intId === componentArray[i].getKey()) {
      outputObj = componentArray[i].toJson();

      break;
    }
  }

  return outputObj;

}

function GetComponentCheckByIdJsonString(healthcheckItems, id) {

  return JSON.stringify(GetComponentCheckById(healthcheckItems, id));

}

function GetComponentCheckByName(healthcheckItems, name) {

  const componentArray = ComponentClassFactory.createComponentList(healthcheckItems);

  let outputObj = {};

  for (let i = 0; i < componentArray.length; i += 1) {

    if (name === componentArray[i].getName()) {
      outputObj = componentArray[i].toJson();
      break;
    }
  }

  return outputObj;

}

function GetComponentCheckByNameJsonString(healthcheckItems, name) {

  return JSON.stringify(GetComponentCheckByName(healthcheckItems, name));

}

function GetComponentCheckByType(healthcheckItems, type) {

  const componentArray = ComponentClassFactory.createComponentList(healthcheckItems);

  const outputArray = [];

  for (let i = 0; i < componentArray.length; i += 1) {

    if (type === componentArray[i].getCheckType()) {
      outputArray.push(componentArray[i].toJson());
    }
  }

  //  return JSON.stringify(outputArray);
  return outputArray;
}

module.exports =
{
  GetComponentCheckById,
  GetComponentCheckByName,
  GetComponentCheckByType,
  GetComponentCheckByIdJsonString,
  GetComponentCheckByNameJsonString,
};
