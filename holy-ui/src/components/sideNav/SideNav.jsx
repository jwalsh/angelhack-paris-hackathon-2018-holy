import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

const sideNavStyle = {
  height: '100%', /* 100% Full-height */
  color: '#FFF',
  width: '220px',
  position: 'fixed', /* Stay in place */
  zIndex: 1, /* Stay on top */
  top: 0, /* Stay at the top */
  left: 0,
  backgroundColor: '#111', /* Black*/
  paddingTop: '60px', /* Place content 60px from the top */
  transition: '0.5s',
  background: '#2c3e50',
}

export class HolySideNav extends Component {
  render() {
    return (
      <div className='sideNav' style={sideNavStyle}>
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4'>
          <h1> Properties </h1>
      </SideNav>
      </div>
    );
  }
}
