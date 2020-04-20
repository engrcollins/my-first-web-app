import React, { Component } from 'react'
class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <p>Hello, you can actually delete me by clicking the button below</p>
    );
  }
}

export default Child