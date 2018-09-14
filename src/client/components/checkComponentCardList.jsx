import React from 'react';
import PropTypes from 'prop-types';
import CheckComponentCard from './checkComponentCard.jsx';

function CheckComponentCardList(props) {

  let componentList;

  if (props.componentChecks.length > 0) {

    componentList = props.componentChecks.map(component => {
      return <CheckComponentCard
          key={component.key}
          id={component.key}
          name={component.name}
          description={component.description}
          type={component.type}
          expectedResponseCode={component.expectedResponseCode}
          expectedResponseTime={component.expectedResponseTime}
          actualResponseCode={component.actualResponseCode}
          actualResponseTime={component.actualResponseTime}
          actualCodeResult={component.actualCodeResult}
          actualTimeResult={component.actualTimeResult}
        />
      }
    );

  } else {
    componentList = '';
  }


  return (
    <div className="contentGrid">
      {componentList}
    </div>
  );
}

CheckComponentCardList.propTypes = {
  componentChecks: PropTypes.array,
};

export default CheckComponentCardList;
