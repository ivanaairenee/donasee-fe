/**
*
* PaymentPage
*
*/

import React from 'react';
import { PaymentElement } from './style';


class PaymentPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PaymentElement>
          <h1>Donasi Biaya Operasi Cardiac Bypass Bapak Phillip Susanto</h1>
          <h3>Campaign oleh GKI Pengampon</h3>
          <div className="content">
            <div className="form-control">
              <h4>Jumlah Donasi</h4>
              <div className="input">
                <input className="inputText" type="text" />
              </div>
            </div>
            <div className="form-control">
              <h4>Nama Donatur</h4>
              <div className="input">
                <input className="inputText" type="text" />
              </div>
            </div>
            <h2>Informasi Kartu</h2>
          </div>
        </PaymentElement>
      </div>
    );
  }
}

PaymentPage.propTypes = {

};

export default PaymentPage;
