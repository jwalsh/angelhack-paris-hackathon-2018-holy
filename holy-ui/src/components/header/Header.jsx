import React, { Component } from 'react';

const headerStyle = {
  padding: '10px 16px',
  backgroundColor: '#B6C9BB',
};

export class Header extends Component {
  render() {
    return (
      <header className='header' style={headerStyle}>
        <div className='header-title'>
          <h1>
            Holy
          </h1>
        </div>
        <div className='header-logo'>
          Icon
        </div>
      </header>
    );
  }
}
