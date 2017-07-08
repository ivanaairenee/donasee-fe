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

import React from 'react';
import gtmParts from 'react-google-tag-manager';
import Navigation from 'components/Navigation';
import PaymentPage from 'components/PaymentPage';
import CreateCampaign from 'components/CreateCampaign';


export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

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


export class GoogleTagManager extends React.Component {
  render() {
    const gtm = gtmParts({
      id: 'GTM-KMM7S6R',
      dataLayerName: 'dataLayer',
    });

    return gtm.scriptAsReact();
  }
}
