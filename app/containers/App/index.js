/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import gtmParts from 'react-google-tag-manager';
import Navigation from 'components/Navigation';
import HomePage from 'containers/HomePage';
import CreateCampaign from 'components/CreateCampaign';
import {
  fetchLogin,
  fetchAllCampaigns ,
} from 'globalActions';

import makeSelectGlobal from 'globalSelectors';
import { createStructuredSelector } from 'reselect';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentDidMount() {
    if (this.props.Global.loggedIn) {
      this.props.fetchLogin();
    }
    this.props.fetchAllCampaigns();
  }

  render() {
    return (
      <div>
        <GoogleTagManager />
        <Navigation />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchLogin: () => dispatch(fetchLogin()),
    dispatch,
    fetchAllCampaigns: () => dispatch(fetchAllCampaigns()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



export class GoogleTagManager extends React.Component {
  render() {
    const gtm = gtmParts({
      id: 'GTM-KMM7S6R',
      dataLayerName: 'dataLayer',
    });

    return gtm.scriptAsReact();
  }
}
