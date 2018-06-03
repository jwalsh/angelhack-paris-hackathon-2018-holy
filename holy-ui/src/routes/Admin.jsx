import React, {Component} from 'react';
import {Header} from '../components/header/Header.jsx';
import {Footer} from '../components/footer/Footer.jsx';
import SideNav, { Nav, NavText } from 'react-sidenav';

import config from '../assets/mock.json';

const defaultStyle = {
  paddingLeft: '260px',
  background: '#fff',
  color: '#888'
};

const sideNavStyle = {
  height: '100%', /* 100% Full-height */
  position: 'fixed', /* Stay in place */
  background: '#fff',
  color: '#888',
  width: '250px',
  zIndex: 1, /* Stay on top */
  top: 0, /* Stay at the top */
  left: 0,
  paddingTop: '60px', /* Place content 60px from the top */
  textAlign: 'center',
};

const { events } = config.Page;

let properties = events.reduce((p, c) => {
  p[c.property.id] = c.property;
  return p;
}, {})
let uniq = Object.keys(properties).map(e => properties[e]);

export class Admin extends Component {
  ownerURL = 'https://p.strikingly.com/sites/11789050/preview?mode=iframe&amp;token=aSt5cWthMHlEaWlmd0JIdzJCMmI1azBxMzJ6eVd1WkFLOUdWU1B6b3g1ajVTZkNWQnlKUlpVaXY0NXNwaXdxREN0ZmJ4dExpaGdxZGRncHNtMDhEN1BOaDBYQjBZOHNNNVdGMGNsWGdROGc9LS1RcVc2N1Qwb1VqNzBWSWlxdUpmbkJRPT0%3D--3b762a8e169f24851b39c1a3f98fa7fe2fbf9ae9&amp;v4=1';

  constructor(props) {
      super(props);
      this.state = {
        id: 0,
      }
      this.renderEvent = this.renderEvent.bind(this);
      this.getEvent = this.getEvent.bind(this);
      this.renderProperty = this.renderProperty.bind(this);
      this.onNavChange = this.onNavChange.bind(this);
  }

  renderEvent = (event, i) => {
      return (
        <tr key={i}>
          <td><pre>{ event.timestamp}</pre></td>
          <td><b>{ event.property.name}</b></td>
          <td>{ event.estimatedCost} </td>
          <td>{ event.ownerGroup} </td>
          <td>{ event.key} </td>
          <td>{ event.value} </td>
        </tr>
    );
  }

  getEvent(propertyId) {
    let event;
    config.Page.events.forEach((ev) => {
      if(ev.property.id === propertyId) {
        event = ev;
      }
    });
    return event;
  }

  renderProperty = (property) => {
    return (
      <Nav className='property-info' key={property.id} id={property.id}>
        <NavText className='property-name'>
          {property.name}
        </NavText>
      </Nav>
    );
  }

  onNavChange(id) {
    return this.setState({id: id});
  }
  render() {
    return (
      <div style={defaultStyle}>
          <div className='sideNav' style={sideNavStyle}>
            <SideNav highlightColor='#888' highlightBgColor='#fff' onItemSelection={ (id) => {
                this.onNavChange(id);
              }}>
              <h1> Properties </h1>
            { uniq.map(property => this.renderProperty(property)) }
          </SideNav>
          </div>
        <h2>Events</h2>
        <table>
          <thead>
            <tr>
              <th>timestamp </th>
              <th>Property Identifier</th>
              <th>Estimated Cost</th>
              <th>Owner Group</th>
              <th>Source</th>
              <th>Type</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            { this.state.id ? events.filter(e => e.property.id === this.state.id).map(event => this.renderEvent(event)) : events.map(event => this.renderEvent(event)) }
          </tbody>
        </table>
    </div>
    );
  }
}
