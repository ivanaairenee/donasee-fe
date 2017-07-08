/**
*
* PaymentPage
*
*/

import React from 'react';
import { PaymentElement } from './style';


class PaymentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      input: {
        jumlahDonasi:'',
        nama:'',
        email:'',
        noKtp:''
      }
    }
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput = (field, value) => {
    const newInput = this.state.input;
    newInput[field] = value;
    this.setState({ input: newInput });
  }

  render() {
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
            <input className="inputText" type="text" placeholder="Name on Card" value="Ricky Putra Nursalim"/>
            <input className="inputText" type="text" placeholder="Card Number" value="4607529394946450"/>
            <input className="inputText" type="text" placeholder="EXP:MM/YY" value="06/20" />
            <input className="inputText" type="text" placeholder="CVC" value="323" />
            <input className="inputText" type="text" placeholder="ZIP/Postal Code" value="11510" />
            <div className="campaign"><button>DONATE</button></div>
        </PaymentElement>
      </div>
    );
  }
}

PaymentPage.propTypes = {

};

export default PaymentPage;
