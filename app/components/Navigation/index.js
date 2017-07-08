/**
 *  Navigation Component
 *
 *  styles are coded on ./style.js
 */
import React, { PropTypes } from 'react';
import logo from 'assets/logo.png';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { NavigationElement } from './style';
import makeSelectGlobal from '../../globalSelectors';
import { createStructuredSelector } from 'reselect';
import { logout } from '../../globalActions';


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
              <Link to={`/`} className="home">HOME</Link>
            </button>
            <button onClick={() => this.props.dispatch(push('/login'))}>
              LOGIN/SIGNUP
            </button>
            {
              this.props.Global.loggedIn && <button onClick={() => this.props.logout()}>
                LOGOUT
              </button>
            }
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
    logout: () => dispatch(logout()),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
