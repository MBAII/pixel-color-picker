import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div style={{textAlign:'center', fontFamily: 'SANS-SERIF'}}>
        <p style={{
          fontFamily: 'SANS-SERIF',
          color: '#4caf4f',
          fontWeight: '100',
          fontSize: '50px',
          margin: '0px'
        }}>mend</p>
        <div style={{textAlign:'right'}}>
          <Link to="/Home" style={menuItemStyle}>Home</Link>
      		<Link to="/About" style={menuItemStyle}>About</Link>
        </div>
      </div>
    );
  }

}

const menuItemStyle={
  'margin': '10px',
  'textDecoration': 'none',
  'color': 'black',
}

export default Header;
