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

function CheckComponentCard(props) {

  const Card = Styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  background-color: #293447;
  border: 2px solid #48aff0;

  background-color: ${bgColorChooser(props)};
  border: ${borderColorChooser(props)};

`;
  return (
    <Card id={props.id}>
    <h3>{props.name}</h3>
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
    </Card>
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
  actualResponseTime: PropTypes.number,
  actualCodeResult: PropTypes.string,
  actuaTimeResult: PropTypes.string,
};

export default CheckComponentCard;
