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
            <img src = {this.props.image} alt="Campaign Logo" className="img-circle"/>
          </span>
          <div className="campaign-progress">
            <h2> {this.props.title} </h2>
            <div className="campaign-status">
              <div className="status">
                <h3> { `Rp. ${this.props.amount}`} </h3>
                <Line percent={`${this.props.current / this.props.amount * 100}`} strokeWidth="3" strokeColor="#94DCD2" className="line"/>
                <div className="status-text">
                  <p className="collected"> Terkumpul { `Rp. ${this.props.current}` }</p>
                  <div className="action">
                    <button className="green">
                      Edit
                    </button>
                    <button className="red">
                      Delete
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

CampaignProgress.propTypes = {
  title: React.PropTypes.string.isRequired,
  amount: React.PropTypes.number.isRequired,
  current: React.PropTypes.number.isRequired,
  image: React.PropTypes.string,
};

export default connect(null, null)(CampaignProgress);
