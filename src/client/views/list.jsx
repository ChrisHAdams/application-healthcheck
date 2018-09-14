import React from 'react';
import Menu from '../menu.jsx';
import CheckComponentCardList from '../components/checkComponentCardList.jsx';

import { getOptions, getAllComponentChecks } from '../common/apiFunctions';

class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Loading Page...',
      subtitle: '',
      menutitle: '',
      footertext: '',
      componentChecks: new Array(0),
    };
  }

  componentDidMount() {

    getOptions()
      .then((res) => {
        this.setState({
          title: res.title,
          subtitle: res.subtitle,
          menutitle: res.menutitle,
          footertext: res.footertext,
        });
      });

    getAllComponentChecks()
      .then((res) => {
        this.setState({
          componentChecks: res,
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
            <h2>{this.state.title}</h2>
            <h3>{this.state.subtitle}</h3>
            <p>A list of the items being monitored.</p>
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

export default List;
