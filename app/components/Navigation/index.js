/**
 *  Navigation Component
 *
 *  styles are coded on ./style.js
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { NavigationElement } from './style';
import logo from 'assets/logo.png'

class Navigation extends React.Component {
  render() {
    return (
      <NavigationElement>
          <div className="navbar">
            <img src={logo} className="logo" alt="Logo" />
            <div className="menu">
              <div className="campaign">
                <button className="campaign">
                  START A CAMPAIGN
                </button>
              </div>
              <button>
                HOME
              </button>
              <button>
                LOGIN/SIGNUP
              </button>
            </div>
          </div>
      </NavigationElement>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    dispatch,
  };
}
export default connect(null, mapDispatchToProps)(Navigation);