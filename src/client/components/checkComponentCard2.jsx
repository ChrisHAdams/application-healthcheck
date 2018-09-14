import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Card = Styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: #293447;
  color: palevioletred;
  border: 2px solid #48aff0;
`;

function CheckComponentCard2(props) {
  return <Card>

      <h2>{props.name}</h2>

      <h3 id='description'>{props.description}</h3>
      <p id='type'>Check Type: {props.type}</p>
      <p id='expectedResponseTime'>Expected Response Time: {props.expectedResponseTime}</p>
      <p id='expectedResponseCode'>Expected Response Code: {props.expectedResponseCode}</p>

    </Card>;

}

CheckComponentCard2.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  expectedResponseTime: PropTypes.number,
  expectedResponseCode: PropTypes.number,
};

export default CheckComponentCard2;
