/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import messages from './messages';
import CampaignPage from 'components/CampaignPage';

import { createStructuredSelector } from 'reselect';
import makeSelectGlobal from 'globalSelectors';
import { fetchAllCampaigns, mustnotReload } from 'globalActions';
import Loading from 'assets/loading.gif';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.Global.campaigns)
      this.props.getAllCampaigns();
    if (this.props.Global.mustReload) {
      this.props.dispatch(mustnotReload());
      window.location.reload();
    }
  }

  render() {
    if (this.props.Global.campaigns)
      return <CampaignPage campaigns={this.props.Global.campaigns}/>;
    else
      return <div style={{textAlign: 'center'}}><img src={Loading} /></div>;
  }
}

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

HomePage.propTypes = {
  Global: React.PropTypes.object.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCampaigns: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(fetchAllCampaigns());
    },
    dispatch,
    mustnotReload: () => dispatch(mustnotReload())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);