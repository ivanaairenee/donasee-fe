/*
 *
 * Signup Page
 *
 */

import React, { PropTypes } from 'react';
import makeSelectGlobal from '../../globalSelectors';

import { registerRequest } from '../../globalActions';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { SignupPageElement } from './style';
import { Link } from 'react-router';

export class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      community_name: '',
      admin_name: '',
      docs_link: '',
      validation: {
        email: '',
        community_name: '',
        admin_name: '',
        docs_link: '',
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
      this.props.registerRequest(this.state.email, this.state.community_name, this.state.admin_name, this.state.docs_link);
    }
  }

  getCurrentContent() {
    return (
      <div className="currentContent">
        <h4>Nama Gereja / Komunitas</h4>
        <input
          type="text"
          placeholder="Nama Gereja/Komunitas"
          onChange={(evt) => this.onInputChange('community_name', evt.target.value)}
          value={this.state.community_name}
        />
        {this.state.validation.community_name && <h4 style={{ color: 'red' }}>{this.state.validation.community_name}</h4>}
        <br />
        <h4>Nama Lengkap Pendaftar</h4>
        <input
          type="text"
          placeholder="Nama Pendaftar"
          onChange={(evt) => this.onInputChange('admin_name', evt.target.value)}
          value={this.state.admin_name}
        />
        {this.state.validation.admin_name && <h4 style={{ color: 'red' }}>{this.state.validation.admin_name}</h4>}
        <br />
        <h4>Alamat Email</h4>
        <input
          type="text"
          placeholder="Alamat Email"
          onChange={(evt) => this.onInputChange('email', evt.target.value)}
          value={this.state.email}
        />
        {this.state.validation.email && <h4 style={{ color: 'red' }}>{this.state.validation.email}</h4>}
        <br />
        <h4>Link Berkas Pendaftaran</h4>
        <input
          type="text"
          placeholder="Link Berkas Pendaftaran"
          onChange={(evt) => this.onInputChange('docs_link', evt.target.value)}
          value={this.state.docs_link}
        />
        {this.state.validation.docs_link && <h4 style={{ color: 'red' }}>{this.state.validation.docs_link}</h4>}
        <br />
      </div>
    );
  }

  validate() {
    const invalids = {
      email: '',
      community_name: '',
      admin_name: '',
      docs_link: '',
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

    if (!this.state.community_name) {
      invalids.community_name = 'Community Name cannot be empty';
      invalidFlag = true;
    }

    if (!this.state.admin_name) {
      invalids.admin_name = 'Admin Name cannot be empty';
      invalidFlag = true;
    }

    if (!this.state.docs_link) {
      invalids.docs_link = 'Document Link cannot be empty';
      invalidFlag = true;
    } else if (!(this.state.docs_link.indexOf('http://') === 0 || this.state.docs_link.indexOf('https://') === 0)) {
      invalids.docs_link = 'Document Link format is invalid, need to have http:// or https://';
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
      <SignupPageElement>
        <h1>DAFTARKAN GEREJA/KOMUNITAS ANDA</h1>
        <h3>Sudah punya akun? <Link to="/login">Login</Link></h3>
        <br />
        {currentContent}
        <div className="kirim">
          <button onClick={this.onSubmit} style={{ cursor: 'pointer' }}>KIRIM</button>
        </div>
      </SignupPageElement>
    );
  }
}

SignupPage.propTypes = {
  Global: PropTypes.object.isRequired,
  registerRequest: PropTypes.func.isRequired,
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
    registerRequest: (email, community_name, admin_name, docs_link) =>
      dispatch(registerRequest({ email, community_name, admin_name, docs_link })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
