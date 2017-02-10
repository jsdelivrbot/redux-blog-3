import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* App's only job is to render child components for react-router */}
        {this.props.children}
      </div>
    );
  }
}
