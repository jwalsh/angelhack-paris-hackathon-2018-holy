import React, { Component } from 'react';
import config from '../../assets/mock.json';

const headerStyle = {
  display: 'none',
  padding: '10px 50px',
  backgroundColor: '#B6C9BB',
};

const userInfo = {
    position: 'relative',
    left: '80%',
}

export class Header extends Component {
  render() {
    const {
      firstName,
      lastName,
      role,
    } = config.Page.profile;

    return (
      <header className='header' style={headerStyle}>
        <div className='header-hero'>
          <div className='header-title'>
            <h1>
              Holy
            </h1>
          </div>
          <div className='header-logo'>
            Icon
          </div>
        </div>
        <div className='header-user' style={userInfo}>
          <div className='header-user-info'>
            <div className='header-user-profile'>
              <strong> {  firstName + lastName } </strong>
            </div>
            <div className='header-user-role'>
              { role }
            </div>
          </div>
        </div>
        </header>
    );
  }
}
