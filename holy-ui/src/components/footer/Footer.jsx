import React, { Component } from 'react';

const footerContainerStyle = {
  position: 'fixed',
  minHeight: '100%',
  width: '86%',
  left: '250px',
  top: '98%',
  bottom: 0,
  right: 0,
};

const footerStyle = {
  backgroundColor: '#BFEDC1',
  position: 'sticky',
  bottom: 0,
};

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
