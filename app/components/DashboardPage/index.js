/**
*
* DashboardPage
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { isEmpty } from 'lodash';

import CampaignProgress from 'components/CampaignProgress';
import placeholder from 'assets/placeholderkid.png';
import placeholder1 from 'assets/placeholdersickman.png';
import { DashboardPageElement } from './style';
import makeSelectGlobal from '../../globalSelectors';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';


class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { user, campaigns } = this.props.Global;
    const userCampaigns = campaigns.filter((campaign) => campaign.user === user.id).map((campaign) => (
                  <CampaignProgress
                      title={ campaign.title }
                      amount={ campaign.money_needed }
                      current={ campaign.donations.map((donation) => donation.amount).reduce((a, b) => a + b , 0) }
                      image={ campaign.image }
                    />
                  )
                );
    if (this.props.Global && !isEmpty(this.props.Global.user))
      return (
        <DashboardPageElement>
          <div className="dashboard">
            <div className="profile">
              <h1>{ user.userprofile.community_name }</h1>
              <h3>{ user.email }</h3>
              <h2>{ user.userprofile.status }</h2>
            </div>
            <div className="content">
              <h1> Progress Campaign </h1>
              { userCampaigns }
            </div>
          </div>
        </DashboardPageElement>
      );
    else
      return (<div style={{textAlign: 'center'}}>You should <Link to={`/login`}>log in</Link></div>);
  }
}


DashboardPage.propTypes = {
  Global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
