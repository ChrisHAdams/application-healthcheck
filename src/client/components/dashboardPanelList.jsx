import React from 'react';
import PropTypes from 'prop-types';
import DashboardPanel from './dashboardPanel.jsx';

function DashboardPanelList(props) {

  let landscapeList = '';

  if (props.landscapes.length > 0) {

    landscapeList = props.landscapes.map(landscape => {
      return <DashboardPanel
      key={landscape.key}
          landscape={landscape}
          componentChecks={props.componentChecks}
        />
      }
    );

  } //else {
    //landscapeList = '';
 // }


  return (
    <div className="contentGrid">
      {landscapeList}
    </div>
  );
}

DashboardPanelList.propTypes = {
  landscapes: PropTypes.array,
  componentChecks: PropTypes.array,
};

export default DashboardPanelList;
