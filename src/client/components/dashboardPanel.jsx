import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import DashboardCheckCard from './dashboardCheckCard.jsx';
import { filterResults } from '../common/common';

function DashboardPanel(props) {

  const Panel = Styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  background-color: #293447;
  border: 2px solid #48aff0;
`;

  const panelChecks = filterResults(props.landscape.items, props.componentChecks);

  const dashboardCards = panelChecks.map(component => {
    return <DashboardCheckCard
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

  return (
    <Panel id={props.landscape.id}>
      <h3>{props.landscape.layoutElements.title}</h3>
      <h4 id='description'>{props.landscape.layoutElements.subtitle}</h4>
      {dashboardCards}
    </Panel>
  );
}

DashboardPanel.propTypes = {
  landscape: PropTypes.object,
  componentChecks: PropTypes.array,
};

export default DashboardPanel;
