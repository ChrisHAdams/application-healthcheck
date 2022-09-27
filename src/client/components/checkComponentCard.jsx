import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const DefaultStyle = "border-2 rounded-md pr-1 pl-1 pt-2 pb-1 m-2 border-sky-500";
const PassedStyle = "border-2 rounded-md pr-1 pl-1 pt-2 pb-1 m-2 bg-green-600 border-green-400";
const PassedSlaStyle = "border-2 rounded-md pr-1 pl-2 pt-1 pb-1 m-2 bg-orange-600 border-orange-400";
const FailedStyle = "border-2 rounded-md pr-1 pl-1 pt-2 pb-1 m-2 bg-rose-600 border-rose-400";

function CheckComponentCard(props) {


  const newTo = {
    pathname: "/singleCheckMonitor",
    checkId: props.id
  };

  console.log(props);

  let styleToUse;

  if(props.actualCodeResult) {
    if(props.actualCodeResult === 'Pass') {
      styleToUse = PassedStyle;
    } else if ((props.actualTimeResult === 'Fail') && (props.actualCodeResult === 'Pass') ) {
      styleToUse = PassedSlaStyle;
    } else if (props.actualCodeResult === 'Fail') {
      styleToUse = FailedStyle;
    } else {
      styleToUse = DefaultStyle;
    }
  } else {
    styleToUse = DefaultStyle;
  }

  return (
    <div id={props.id} className={styleToUse}>
      <Link to={newTo}><h3>{props.name}</h3></Link>
      <h4 id='description'>{props.description}</h4>
      <p id='type'>Check Type: {props.type}</p>
      <p id='expectedResponseCode'>Expected Response Code: {props.expectedResponseCode}</p>
      {props.actualResponseCode !== null &&
        <p id='actualResponseCode'>Actual Response Code: {props.actualResponseCode}</p>
      }
      <p id='expectedResponseTime'>Expected Response Time: {props.expectedResponseTime}ms</p>
      {props.actualResponseTime !== null &&
        <p id='actualResponseTime'>Actual Response Time: {props.actualResponseTime}</p>
      }
    </div>
  );
}

CheckComponentCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  expectedResponseTime: PropTypes.number,
  expectedResponseCode: PropTypes.number,
  actualResponseCode: PropTypes.number,
  actualResponseTime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  actualCodeResult: PropTypes.string,
  actuaTimeResult: PropTypes.string,
};

export default CheckComponentCard;
