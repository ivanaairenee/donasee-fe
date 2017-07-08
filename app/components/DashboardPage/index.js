/**
*
* DashboardPage
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import CampaignProgress from 'components/CampaignProgress';
import placeholder from 'assets/placeholderkid.png';
import placeholder1 from 'assets/placeholdersickman.png';
import { DashboardPageElement } from './style';

class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let campaign1 = {
      title: 'Donasi Biaya Operasi Cardiac Bypass Bapak Phillip Susanto',
      amount: 'Rp. 50.000.000',
      current: 'Rp. 35.000.000',
      image: placeholder,
    }
    return (
      <DashboardPageElement>
        <div className="dashboard">
          <div className="profile">
            <h1> Gereja GBI Pengampon </h1>
            <h3> gbi_pengampon@gmail.com </h3>
            <h3> 084671936820 </h3>
            <h2> Verified </h2>
          </div>
          <div className="content">
            <h1> Progress Campaign </h1>
            <CampaignProgress 
              title='Donasi Biaya Operasi Cardiac Bypass Bapak Phillip Susanto'
              amount='Rp. 50.000.000'
              current='Rp. 35.000.000'
              image={placeholder}
            />
            <CampaignProgress 
              title='Donasi Sumbangan Uang Sekolah Laurentia Ronda'
              amount='Rp. 60.000.000'
              current='Rp. 30.000.000'
              image={placeholder1}/>
          </div>
        </div>
      </DashboardPageElement>
    );
  }
}

DashboardPage.propTypes = {

};


function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DashboardPage);
