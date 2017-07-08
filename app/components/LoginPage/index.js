/*
 *
 * Login Page
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { loginRequest } from '../../globalActions';
import makeSelectGlobal from '../../globalSelectors';
import { LoginPageElement } from './style';
import { Link } from 'react-router';

export class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validation: {
        email: '',
        password: '',
      },
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getCurrentContent = this.getCurrentContent.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    if (this.props.Global.loggedIn) {
      this.props.push('/dashboard');
    }
  }

  onInputChange(field, value) {
    const newState = this.state;

    newState[field] = value;

    this.setState(newState);
  }

  onSubmit() {
    const invalid = this.validate();
    if (!invalid) {
      this.props.loginRequest(this.state.email, this.state.password);
    }
  }

  getCurrentContent() {
    return (
      <div className="currentContent">
        <div>Email</div>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(evt) => this.onInputChange('email', evt.target.value)}
          value={this.state.email}
        />
        {this.state.validation.email && <h3 style={{color: 'red'}}>{this.state.validation.email}</h3>}
        <br/>
        <div>Password</div>
        <input
          type="password"
          placeholder="Password"
          onChange={(evt) => this.onInputChange('password', evt.target.value)}
          value={this.state.password}
        />
        {this.state.validation.password && <h3 style={{color: 'red'}}>{this.state.validation.password}</h3>}
      </div>
    );
  }

  validate() {
    const invalids = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    };
    let invalidFlag = false;

    // eslint-disable-next-line no-useless-escape
    const emailREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!this.state.email) {
      invalids.email = 'Email cannot be empty';
      invalidFlag = true;
    } else if (!emailREGEX.test(this.state.email)) {
      invalids.email = 'Email format is invalid';
      invalidFlag = true;
    }

    if (!this.state.password) {
      invalids.password = 'Password cannot be empty';
      invalidFlag = true;
    } else if (this.state.password.length < 8) {
      invalids.password = 'Password cannot be shorter than 8 characters';
      invalidFlag = true;
    }

    if (invalidFlag) {
      this.onInputChange('validation', invalids);
    }

    return invalidFlag;
  }

  render() {
    const currentContent = this.getCurrentContent();

    return (
      <LoginPageElement>
        <div className="content">
          <div style={{display: 'block', justifyContent: 'center', 'textAlign': 'center'}}>Belum punya akun? <Link to="/signup">Signup</Link></div>
          <br/>
          {currentContent}
          <br/>
          <div style={{justifyContent: 'center', 'textAlign': 'center'}}>
            <button onClick={this.onSubmit} style={{cursor: 'pointer'}}>Login</button>
          </div>
        </div>
      </LoginPageElement>
    );
  }
}

LoginPage.propTypes = {
  Global: PropTypes.object.isRequired,
  loginRequest: PropTypes.func.isRequired,
  params: PropTypes.object,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    push: (url) => dispatch(push(url)),
    loginRequest: (email, password) =>
      dispatch(loginRequest({ email, password })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
