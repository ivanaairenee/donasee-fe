/**
*
* PaymentPage
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PaymentElement } from './style';
import makeSelectGlobal from '../../globalSelectors';
import { createStructuredSelector } from 'reselect';

class PaymentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      input: {
        jumlahDonasi: '',
        nama: '',
        email: '',
        noKtp: '',
      },
      card: {
        name:'Ricky Putra Nursalim',
        number:'4607529394946450',
        exp:'06/20',
        cvc:'323',
        zip:'11510',
      }
    };
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput = (field, value) => {
    const newInput = this.state.input;
    newInput[field] = value;
    this.setState({ input: newInput });
  }

  changeInputCard = (field, value) => {
    const newCard = this.state.card;
    newInput[field] = value;
    this.setState({ card: newCard });
  }

  render() {
    if (this.props.Global.selectedCampaign)
      return (
        <div>
          <PaymentElement>
            <div className="title">
              <h1>Donasi Biaya Operasi Cardiac Bypass Bapak Phillip Susanto</h1>
              <h3>Campaign oleh GKI Pengampon</h3>
            </div>
            <div>
              <h4>Jumlah Donasi</h4>
              <input className="inputText" type="text" value={this.state.input.jumlahDonasi} onChange={(evt) => this.changeInput('jumlahDonasi', evt.target.value)} />
            </div>
            <div>
              <h4>Nama Donatur</h4>
              <input className="inputText" type="text" value={this.state.input.nama} onChange={(evt) => this.changeInput('nama', evt.target.value)} />
            </div>
            <div>
              <h4>Alamat Email</h4>
              <input className="inputText" type="email" value={this.state.input.email} onChange={(evt) => this.changeInput('email', evt.target.value)} />
            </div>
            <div>
              <h4>No. KTP</h4>
              <input className="inputText" type="text" value={this.state.input.noKtp} onChange={(evt) => this.changeInput('noKtp', evt.target.value)} />
            </div>
            <h2>Informasi Kartu</h2>
            <input className="inputText" type="text" placeholder="Name on Card" value={this.state.card.name} onChange={(evt) => this.changeInputCard('name', evt.target.value)} />
            <input className="inputText" type="text" placeholder="Card Number" value={this.state.card.number} onChange={(evt) => this.changeInputCard('number', evt.target.value)} />
            <input className="inputText" type="text" placeholder="EXP:MM/YY" value={this.state.card.exp} onChange={(evt) => this.changeInputCard('exp', evt.target.value)} />
            <input className="inputText" type="text" placeholder="CVC" value={this.state.card.cvc} onChange={(evt) => this.changeInputCard('cvc', evt.target.value)} />
            <input className="inputText" type="text" placeholder="ZIP/Postal Code" value={this.state.card.zip} onChange={(evt) => this.changeInputCard('zip', evt.target.value)} />
            <div className="donate"><button>DONATE</button></div>
          </PaymentElement>
        </div>
      );
    else
      return (
        <div style={{textAlign: 'center'}}><h1>You must choose campaign from <Link to={'/'}>campaign list</Link></h1></div>
      );
  }
}

PaymentPage.propTypes = {
  Global: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
