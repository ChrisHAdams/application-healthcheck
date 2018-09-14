import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Menu extends React.Component {

  render() {
    return <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{this.props.menuTitle}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#/list">
          List
        </NavItem>
        <NavItem eventKey={2} href="#/play">
          Play
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
  }
}

Menu.propTypes = {
  menuTitle: PropTypes.string,
};

export default Menu;
