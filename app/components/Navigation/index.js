/**
 *  Navigation Component
 *
 *  styles are coded on ./style.js
 */
import React, { PropTypes } from 'react';
import logo from 'assets/logo.png';
import navIcon from 'assets/navigation.png'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { NavigationElement } from './style';
import makeSelectGlobal from '../../globalSelectors';
import { createStructuredSelector } from 'reselect';
import { logout } from '../../globalActions';

class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      nav: false,
    };

    this.navToggle = this.navToggle.bind(this);
  }

  navToggle = () => {
    const newValue= this.state.nav ? false : true;
    this.setState({nav:newValue})
  }

  render() {
    return (
      <NavigationElement>
        <div className="navbar">
          <img src={logo} className="logo" alt="Logo" />
          <div className="menu">
            <div className="campaign">
              <button className="campaign" onClick={() => this.props.dispatch(push('/dashboard/new'))}>
                START A CAMPAIGN
              </button>
            </div>
            <button onClick={() => this.props.dispatch(push('/'))}>
              HOME
            </button>
            {
              this.props.Global.loggedIn && <button onClick={() => this.props.dispatch(push('/dashboard'))}>
                DASHBOARD
              </button>
            }
            {
              !this.props.Global.loggedIn && <button onClick={() => this.props.dispatch(push('/login'))}>
                LOGIN/SIGNUP
              </button>
            }
            {
              this.props.Global.loggedIn && <button onClick={() => this.props.logout()}>
                LOGOUT
              </button>
            }
          </div>
          <button onClick={this.navToggle} className="navIcon"><img className="navIcon" src={navIcon} /></button>
        </div>
        {
          !this.state.nav ? null :
          (
            <div className="mobile">
              <button className="campaign">START A CAMPAIGN</button>
              <button className="menu">
              <Link to={`/`}>HOME</Link>
              </button>
              {
                this.props.Global.loggedIn && <button className="menu" onClick={() => this.props.dispatch(push('/dashboard'))}>
                  DASHBOARD
                </button>
              }
              {
                this.props.Global.loggedIn && <button className="menu" onClick={() => this.props.logout()}>
                  LOGOUT
                </button>
              }
              {
                !this.props.Global.loggedIn && <button className="menu" onClick={() => this.props.dispatch(push('/login'))}>
                  LOGIN/SIGNUP
                </button>
              }
            </div>
          )
        }
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
