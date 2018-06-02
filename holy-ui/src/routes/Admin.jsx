import React, { Component } from 'react';
import { Header } from '../components/header/Header.jsx';
import { Footer } from '../components/footer/Footer.jsx';
import { HolySideNav } from '../components/sideNav/SideNav.jsx';

export class Admin extends Component {
  render() {
    return (
      <div>
        <Header />
        <HolySideNav />
      Page content
        <Footer />
      </div>
    );
  }
}
