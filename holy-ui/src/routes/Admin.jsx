import React, { Component } from 'react';
import { Header } from '../components/header/Header.jsx';
import { Footer } from '../components/footer/Footer.jsx';
import { HolySideNav } from '../components/sideNav/SideNav.jsx';
import axios from 'axios';
import config from '../assets/mock.json';
// import Iframe from 'react-iframe';

const defaultStyle = {
    paddingLeft: '260px',
  background: '#fff',
  color: '#888'
    };
export class Admin extends Component {
  ownerURL = 'https://p.strikingly.com/sites/11789050/preview?mode=iframe&amp;token=aSt5cWthMHlEaWlmd0JIdzJCMmI1azBxMzJ6eVd1WkFLOUdWU1B6b3g1ajVTZkNWQnlKUlpVaXY0NXNwaXdxREN0ZmJ4dExpaGdxZGRncHNtMDhEN1BOaDBYQjBZOHNNNVdGMGNsWGdROGc9LS1RcVc2N1Qwb1VqNzBWSWlxdUpmbkJRPT0%3D--3b762a8e169f24851b39c1a3f98fa7fe2fbf9ae9&amp;v4=1';
  ownerURLSource = 'view-source:https://p.strikingly.com/sites/11789050/preview?token=aSt5cWthMHlEaWlmd0JIdzJCMmI1azBxMzJ6eVd1WkFLOUdWU1B6b3g1ajVTZkNWQnlKUlpVaXY0NXNwaXdxREN0ZmJ4dExpaGdxZGRncHNtMDhEN1BOaDBYQjBZOHNNNVdGMGNsWGdROGc9LS1RcVc2N1Qwb1VqNzBWSWlxdUpmbkJRPT0%3D--3b762a8e169f24851b39c1a3f98fa7fe2fbf9ae9';

  componentDidMount() {
    axios.get(this.ownerURL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then(response => console.log(response))
    .catch(error => error.reponse);
  }

  renderEvent = (event) => {
      return (


        <tr>
          <td><pre>{ event.timestamp}</pre></td>
          <td><b>{ event.property.id}</b></td>
          <td>{ event.insuranceCompany} </td>
          <td>{ event.ownerGroup} </td>
          <td>{ event.source} </td>
          <td>{ event.type} </td>
          <td>{ event.value} </td>
        </tr>
    );
  }

    render() {
    return (
      <div style={defaultStyle}>
        <Header />
        <HolySideNav />
        <h2>Events</h2>
        <table>
        <tr>
        <th>timestamp </th>
        <th>Property Identifier</th>
        <th>Estimated Cost</th>
        <th>Owner Group</th>
        <th>Source</th>
        <th>Type</th>
        <th>Value</th>
        </tr>
        { config.Page.events.map(event => this.renderEvent(event)) }
        </table>

        <Footer />
      </div>
    );
  }
}

{/* <div>
  <Header />
  <HolySideNav />
  Events
  <Footer />
</div>
   */}
