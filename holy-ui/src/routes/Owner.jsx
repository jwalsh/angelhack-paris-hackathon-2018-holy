import React, { Component } from 'react';
import { Header } from '../components/header/Header.jsx';
import { Footer } from '../components/footer/Footer.jsx';


export class Owner extends Component {
  render() {
    return (
      <div>
        <Header />
      Page content
        <Footer />
      </div>
    );
  }
}
