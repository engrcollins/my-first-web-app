import React, { Component } from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header grid-header" onload="setDate()"> 
          <div className="item1 logo1"></div>
            <h2>WEB ARCHIVE</h2>
          <div align="right" className="item4 cub"></div>
        </div>
        <div className="item1">
          <h3 align="center" id="welcome"><p className="date"></p></h3>
        </div>
    </div>
    );
  }
}


export default Header