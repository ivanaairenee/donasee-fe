/**
 *  Navigation Component
 *
 *  styles are coded on ./style.js
 */
import React, { PropTypes } from 'react';
import logo from 'assets/logo.png';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { NavigationElement } from './style';
import makeSelectGlobal from '../../globalSelectors';
import { createStructuredSelector } from 'reselect';


class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
            <button>
              LOGOUT
            </button>
          </div>
        </div>
      </NavigationElement>
    );
  }
}

Navigation.propTypes = {
  Global: PropTypes.object,
  params: PropTypes.object,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    dispatch,
  };
}
export default connect(null, mapDispatchToProps)(Navigation);
