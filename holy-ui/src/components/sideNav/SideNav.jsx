import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import config from '../../assets/mock.json';

const sideNavStyle = {
  height: '100%', /* 100% Full-height */
  position: 'fixed', /* Stay in place */
  background: '#2c3e50',
  color: '#FFF',
  width: '250px',
  zIndex: 1, /* Stay on top */
  top: 0, /* Stay at the top */
  left: 0,
  paddingTop: '60px', /* Place content 60px from the top */
  textAlign: 'center',
};

const sideNavTitleStyle = {};
const sideNavPropertiesStyle = {
  marginRight: '20px',
};

export class HolySideNav extends Component {

  renderProperty = (property ,i) => {
    return (
      <Nav className='property-info' key={i.toString()}>
        <NavText className='property-name'>
          {property.name}
        </NavText>
      </Nav>
    );
  }

  render() {
    const { properties } = config.Page;

    return (
      <div className='sideNav' style={sideNavStyle}>
        <SideNav highlightColor='#E91E63' highlightBgColor='#2c3e50'>
          <h1 className='sideNav-title' style={sideNavTitleStyle}> Properties </h1>
          <div className='sideNav-properties' style={sideNavPropertiesStyle}>
            { properties.map((property, i) => this.renderProperty(property, i)) }
          </div>
      </SideNav>
      </div>
    );
  }
}