/**
*
* CampaignPage
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { CampaignPageElement }from './style';


class CampaignPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
	render() {
		return (
			<CampaignPageElement>
				<div className="campaign">
					<div className="campaign-headers">
						<h1> Donasi Biaya Operasi Cardiac Bypass Bapak Phillip Susanto</h1>
						<p> 
							Campaign oleh Gereja GKI Pengampon 
						</p>
						<div className="content">
							<h1>
								OK
							</h1>
						</div>
					</div>
					<div className="campaign-body">
						<div className="content">
							<h1> 
							Deskripsi
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>

						<div className="content">
							<h1> 
								Update
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
				<div className="donors">
					<h1> 
						Donatur
					</h1>
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