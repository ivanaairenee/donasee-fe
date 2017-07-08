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
    if(this.props[0]){
    const campaign = this.props[0];
    const donators = campaign.donations ? campaign.donations.map((donations) => (
      <div className='donation'>
        <h3> { donations.name } </h3>
        <h3> { donations.amount } </h3>
      </div>
    )) : '';

    return (
        <CampaignPageElement>
          <div className="campaign">
            <div className="campaign-headers">
              <h1> {campaign.title} </h1>
              <h3>
                { `Campaign oleh Komunitas ${campaign.community_name}` }
              </h3>
              <div className="content">
                <span className="logo">
                  <img src={placeholder1}/>
                </span>
                <h2>
                  { `Rp. ${campaign.money_needed}` }
                </h2>
                <div>
                  <Line percent="70" strokeWidth="7" strokeColor="#94DCD2" className="line"/>
                  <h3> { `Terkumpul Rp. ${campaign.donations.map((donation) => donation.amount).reduce((a, b) => a + b , 0)} `}</h3>
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
                  { campaign.description }
                </h3>
              </div>

              <div className="content">
                <h2>
                  Update
                </h2>
                <h3>
                  { !campaign.update && "Belum terdapat update"}
                </h3>
              </div>
            </div>
          </div>
          <div className="donors">
            <h2>
              Donatur
            </h2>
            <div>
              { donators }
            </div>
          </div>
        </CampaignPageElement>
      );
    }

    return <div> </div>;
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
