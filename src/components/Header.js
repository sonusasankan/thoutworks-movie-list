import React, { Component } from 'react'

import './Header.css';

 class Header extends Component {
  render() {
    return (
        <nav className="navbar  navbar--custom fixed-top navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">Your Movies</a> 
            </div>
        </nav>
    )
  }
}

export default Header;