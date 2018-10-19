import React from 'react';
import io from 'socket.io-client';
import Menu from '../menu.jsx';
import { getTimeStamp } from '../common/dateAndTimeFunctions';
import { runComponentChecksByIds } from '../common/apiFunctions';
import { filterResults } from '../common/common';
import { getOptions, getAllComponentChecks, runAllComponentChecks } from '../common/apiFunctions';
import CheckComponentCardList from '../components/checkComponentCardList.jsx';
import '../css/coreStyles.css';
import PropTypes from 'prop-types';
import { getSocketUrl } from '../common/common';

class LandscapeMonitor extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      componentChecks: [],
      lastCheckedTime: 'Not yet checked...',
    };

  }

  componentDidMount() {

    getOptions()
      .then((res) => {
        this.setState({
          menutitle: res.menutitle,
          footertext: res.footertext,
          port: res.port,
        });

        const socketUrl = getSocketUrl(res.port);

        console.log(`Attempting to connect to sockets at ${socketUrl}.`);

        const socket = io(socketUrl, { path: `${res.basePath}socket.io` });
        socket.on('connect', function () { console.log(`Connected to ${socketUrl}`); });

        socket.on('message', (result) => {
          console.log(result);
        });

        socket.on('data', (result) => {
          const timeStamp = getTimeStamp();
          console.log(`${timeStamp} - Receiving next batch of healtchcheck results.`);

          const filteredResults = filterResults(this.props.landscape.items, JSON.parse(result));

          this.setState({
            componentChecks: filteredResults,
            lastCheckedTime: timeStamp,
          });

        });

    });

    runComponentChecksByIds(this.props.landscape.items)
      .then((res) => {

        const timeStamp = getTimeStamp();
        this.setState({
          componentChecks: res,
          lastCheckedTime: timeStamp,
        });
      });

  }

  render() {
    return (
      <div>
        <div className="wrapper">

          <header className="main-head">
            <Menu/>
          </header>

          <div className="leftside" />

          <div className="rightside" />

          <div className="content">
            <h2>{this.props.landscape.layoutElements.title}</h2>
            <h3>{this.props.landscape.layoutElements.subtitle}</h3>
            <p>Last checked at {this.state.lastCheckedTime}.</p>
            <CheckComponentCardList componentChecks={this.state.componentChecks}/>
          </div>

          <footer className="main-footer">
            <div className="smallText">{this.state.footertext}</div>
          </footer>

        </div>
      </div>
    );
  }
}

LandscapeMonitor.propTypes = {
  landscape: PropTypes.object,
};

export default LandscapeMonitor;
