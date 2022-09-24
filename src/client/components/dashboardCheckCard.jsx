import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

//   background: #293447;

const bgColorChooser = (data) => {

  let background = '#293447';

  if (data.actualCodeResult === 'Pass') background = '#397542';
  if (data.actualTimeResult === 'Fail') background = '#99620f';
  if (data.actualCodeResult === 'Fail') background = '#8e150c';

  return background;
};

const borderColorChooser = (data) => {

  let background = '2px solid #48aff0';

  if (data.actualCodeResult === 'Pass') background = '2.5px solid #58b766';
  if (data.actualTimeResult === 'Fail') background = '2.5px solid #db8c15';
  if (data.actualCodeResult === 'Fail') background = '2.5px solid #d61e11';

  return background;
};

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


  let Card;

  if(!props.actualCodeResult) {
    if(props.actualCodeResult === 'Pass') {
      Card = getPassedStyle();
    } else if ((props.actualTimeResult === 'Fail') && (data.actualCodeResult === 'Pass') ) {
      Card = getFailedSlaStyle();
    } else if (props.actualCodeResult === 'Fail') {
      Card = getFailedStyle();
    } else {
      Card = getInitialStyle();
    }
  } else {
    Card = getInitialStyle();
  }

  return (
    <Card id={props.id}>
      <h4>{props.name}</h4>
    </Card>
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
