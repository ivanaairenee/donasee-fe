/**
*
* CampaignPage
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Line } from 'rc-progress';
import { CampaignPageElement } from './style';
import placeholder1 from 'assets/placeholdersickman.png';

class CampaignPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CampaignPageElement>
        <div className="campaign">
          <div className="campaign-headers">
            <h1> Donasi Biaya Operasi Cardiac Bypass Bapak Phillip Susanto</h1>
            <h3>
              Campaign oleh Gereja GKI Pengampon
            </h3>
            <div className="content">
              <span className="logo">
                <img src={placeholder1}/>
              </span>
              <h2>
                Rp. 50.000.000
              </h2>
              <div>
                <Line percent="70" strokeWidth="7" strokeColor="#94DCD2" className="line"/>  
                <h3> Terkumpul Rp. 35.000.000 </h3>
              </div>

              <button className="donate">
                DONASI SEKARANG
              </button>
            </div>
          </div>
          <div className="campaign-body">
            <div className="content">
              <h2>
              Deskripsi
              </h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h3>
            </div>

            <div className="content">
              <h2>
                Update
              </h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h3>
            </div>
          </div>
        </div>
        <div className="donors">
          <h2>
            Donatur
          </h2>
        </div>
      </CampaignPageElement>
    );
  }
}

CampaignPage.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(CampaignPage);
