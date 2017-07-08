/**
*
* CampaignProgress
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { CampaignProgressElement } from './style';

import { Line } from 'rc-progress';

class CampaignProgress extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CampaignProgressElement>
        <div className="campaign">
          <span className="campaign-logo">
            <img src = {this.props.image} alt="Campaign Logo" />
          </span>
          <div className="campaign-progress">
            <h2> {this.props.title} </h2>
            <div className="campaign-status">
              <div className="status">
                <h3> {this.props.amount} </h3>
                <Line percent="70" strokeWidth="3" strokeColor="#94DCD2" className="line"/>
                <div className="status-text">
                  <p className="collected"> Terkumpul {this.props.current}</p>
                  <div className="action">
                    <button className="green">
                      EDIT
                    </button>
                    <button className="red">
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CampaignProgressElement>
    );
  }
}

CampaignProgress.defaultProps = {
  current: '0',
}

CampaignProgress.propTypes = {
  title: React.PropTypes.string.isRequired,
  amount: React.PropTypes.string.isRequired,
  current: React.PropTypes.string,
  image: React.PropTypes.function,
};

export default connect(null, null)(CampaignProgress);
