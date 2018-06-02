import React, { Component } from 'react';
import './Footer.css';

const footerContainerStyle = {
  minHeight: '100%',
  marginBottom: '-50px',
}

const footerStyle = {
  backgroundColor: '#BFEDC1',
  position: 'sticky',
}

export class Footer extends Component {
  render() {
    return (
      <div className='footer-container' style={footerContainerStyle}>
        <div className='footer' style={footerStyle}>
          <div className='footer-title'>Holy Footer</div>
        </div>
      </div>
    );
  }
}
