import React, { Component } from 'react';
import View from '../view'
import Footer from '../footer';

import Credits from '../credits';
import Name from '../Name';


export default class Starter extends Component {
  render() {
    return (
    <div className="hello-world">
      <Name />
      <h1>Hello World!</h1>
      <Credits />
      <View/>
      <Footer />
    </div>
    );
  }
}