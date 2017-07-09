/**
*
* CampaignPage
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Line } from 'rc-progress';
import { CampaignPageElement } from './style';
import placeholder1 from 'assets/placeholdersickman.png';
import { chooseCampaign } from '../../globalActions';

class CampaignPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.renderDonations = this.renderDonations.bind(this);
    this.chooseCampaign = this.chooseCampaign.bind(this);
  }

  chooseCampaign(idx) {
    this.props.chooseCampaign(idx);
    this.props.dispatch(push('/donate'));
  }

  renderDonations(donations) {
    if (donations) {
      return (
        <div>
          {
            donations.map((donation, idx) => (
              <div className='donation' key={ idx }>
                <h3>{ donation.name }</h3>
                <h3>{ donation.amount }</h3>
              </div>
            ))
          }
        </div>
      );
    }
    return '';
  }
  render() {
    const { campaigns } = this.props;
    return (
        <div>
        {
          campaigns.map((campaign, index) => (
            <CampaignPageElement key={ index }>
              <div className="campaign">
                <div className="campaign-headers">
                  <h1> {campaign.title} </h1>
                  <h3>
                    { `Campaign oleh ${campaign.community_name}` }
                  </h3>
                  <div className="content">
                    <span className="logo">
                      <img src={campaign.image}/>
                    </span>
                    <h2>
                      { `Rp. ${campaign.money_needed}` }
                    </h2>
                    <div>
                      <Line percent= {(campaign.donations.map((donation) => donation.amount).reduce((a, b) => a + b , 0) / campaign.money_needed) * 100} strokeWidth="7" strokeColor="#94DCD2" className="line"/>
                      <h3> { `Terkumpul Rp. ${campaign.donations.map((donation) => donation.amount).reduce((a, b) => a + b , 0)} `}</h3>
                    </div>

                    <button className="donate" onClick={() => this.chooseCampaign(index)}>
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
                  {
                    this.renderDonations(campaign.donations)
                  }
                </div>
              </div>
            </CampaignPageElement>
            )
          )
        }
        </div>
    )
  };
}

CampaignPage.propTypes = {
  campaigns: PropTypes.array.isRequired,
  chooseCampaign: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    chooseCampaign: (idx) => dispatch(chooseCampaign(idx)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(CampaignPage);
