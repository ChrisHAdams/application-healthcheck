import React from 'react';
import io from 'socket.io-client';
import Menu from '../menu.jsx';
import { getTimeStamp } from '../common/dateAndTimeFunctions';
import { getOptions, getDashboard, getAllComponentChecks, runAllComponentChecks } from '../common/apiFunctions';
import CheckComponentCardList from '../components/checkComponentCardList.jsx';
import '../css/coreStyles.css';


class Home extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      title: 'Loading Page...',
      subtitle: '',
      menutitle: '',
      footertext: '',
      componentChecks: [],
      lastCheckedTime: '',
    };

  }

  componentDidMount() {

    getOptions()
      .then((res) => {
        this.setState({
          menutitle: res.menutitle,
          footertext: res.footertext,
        });
      });

    getDashboard()
      .then((res) => {
        this.setState({
          dashboardTitle: res.dashboardTitle,
          dashboardSubTitle: res.dashboardSubTitle,
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
            this.setState({
              componentChecks: checkResult,
              lastCheckedTime: timeStamp,
            });
          });
      });

    const socket = io();
    socket.on('connect', function () { console.log('Connecting...'); });

    socket.on('message', (result) => {
      console.log(result);
    });

    socket.on('data', (result) => {
      const timeStamp = getTimeStamp();
      this.setState({
        componentChecks: JSON.parse(result),
        lastCheckedTime: timeStamp,
      });

    });

  }

  render() {
    return (
      <div>
        <div className="wrapper">

          <header className="main-head">
            <Menu menuTitle={this.state.menutitle}/>
          </header>

          <div className="leftside" />

          <div className="rightside" />

          <div className="content">
            <h2>{this.state.dashboardTitle}</h2>
            <h3>{this.state.dashboardSubTitle}</h3>
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

export default Home;
