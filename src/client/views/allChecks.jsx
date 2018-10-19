import React from 'react';
import io from 'socket.io-client';
import Menu from '../menu.jsx';
import { getTimeStamp } from '../common/dateAndTimeFunctions';
import { getOptions, getAllComponentChecks, runAllComponentChecks } from '../common/apiFunctions';
import CheckComponentCardList from '../components/checkComponentCardList.jsx';
import '../css/coreStyles.css';
import { getSocketUrl } from '../common/common';

class AllChecks extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      title: 'Loading Page...',
      subtitle: '',
      menutitle: '',
      footertext: '',
      componentChecks: [],
      lastCheckedTime: 'Checking',
    };

  }

  componentDidMount() {

    getOptions()
      .then((res) => {
        this.setState({
          footertext: res.footertext,
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

          this.setState({
            componentChecks: JSON.parse(result),
            lastCheckedTime: timeStamp,
          });

        });

      });

    getAllComponentChecks()
      .then((res) => {
        this.setState({
          componentChecks: res,
        });
        runAllComponentChecks()
          .then((checkResult) => {
            const timeStamp = getTimeStamp();
            console.log(checkResult);
            this.setState({
              componentChecks: checkResult,
              lastCheckedTime: timeStamp,
            });
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
            <h2>All Checks</h2>
            <h3>List of All Configured Checks</h3>
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

export default AllChecks;
