import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Navbar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container content">
          <Navbar />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
