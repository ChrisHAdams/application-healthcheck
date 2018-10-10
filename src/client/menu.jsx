import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { getOptions, getLandscapes } from './common/apiFunctions';

class Menu extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      menutitle: 'Loading...',
      landscapes: [],
      navItems: '',
    };

  }

  componentDidMount() {

    getOptions()
      .then((res) => {
        this.setState({
          menutitle: res.menutitle,
        });
      });

    getLandscapes()
      .then((res) => {
        let navItemsVar = res.map((landscape) =>
        <NavItem key={landscape.key} eventKey={landscape.key+2} href={"#/landscapeMonitor-"+landscape.key}>{landscape.name}</NavItem>
      );
        this.setState({
          landscapes: res,
          navItems: navItemsVar,
        });



      });

  }

  render() {
    return <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{this.state.menutitle}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#/allChecks">
          All Checks
        </NavItem>
        {this.state.navItems}
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
  }
}

export default Menu;
