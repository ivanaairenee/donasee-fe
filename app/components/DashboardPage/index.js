/**
*
* DashboardPage
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { DashboardPageElement } from './style';


class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DashboardPageElement>
        <div className="content">
          <div className="dashboard-nav">
            <button>
              <p>Campaign Progress</p>
            </button>
            <button>
              <p>Create New </p>
            </button>
          </div>
          <div className="campaign-list">
            lorem
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
