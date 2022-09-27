import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const DefaultStyle = "border-2 rounded-md pr-1 pl-1 pt-2 pb-1 m-4 border-sky-500 text-center";
const PassedStyle = "border-2 rounded-md pr-1 pl-1 pt-2 pb-1 m-4 bg-green-600 border-green-400 text-center";
const PassedSlaStyle = "border-2 rounded-md pr-1 pl-2 pt-1 pb-1 m-4 bg-orange-600 border-orange-400 text-center";
const FailedStyle = "border-2 rounded-md pr-1 pl-1 pt-2 pb-1 m-4 bg-rose-600 border-rose-400 text-center";

function getPassedStyle() {

  return Styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  background-color: #293447;
  border: 2px solid #48aff0;

  background-color: '#397542';
  border: '2.5px solid #58b766';
  align-items: center;
  justify-content: center;
  text-align: center;
`;

}

function getFailedSlaStyle() {

  return Styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  background-color: #293447;
  border: 2px solid #48aff0;

  background-color: '#99620f';
  border: '2.5px solid #db8c15';
  align-items: center;
  justify-content: center;
  text-align: center;
`;

}

function getFailedStyle() {

  return Styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  background-color:'#8e150c';
  border: '2.5px solid #d61e11';
  align-items: center;
  justify-content: center;
  text-align: center;
`;

}

function getInitialStyle() {

  return Styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  background-color: #293447;
  border: 2px solid #48aff0;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

}

const Span = Styled.span`

`;

function DashboardCheckCard(props) {


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
      <h4>{props.name}</h4>
    </div>
  );
}

DashboardCheckCard.propTypes = {
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

export default DashboardCheckCard;
