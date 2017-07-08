/**
*
* CreateCampaign
*
*/

import React from 'react';
// import styled from 'styled-components';
import { CreateCampaignElement } from './style';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { createCampaign } from 'globalActions';
import makeSelectGlobal from 'globalSelectors';

class CreateCampaign extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      input: {
        title: '',
        moneyNeeded: '',
        description: '',
        image: '',
      },
    };
    this.changeInput = this.changeInput.bind(this);
  }

  onSubmit() {
    const data = {title: this.state.input.title,
                  money_needed: this.state.input.moneyNeeded,
                  description: this.state.input.description,
                  image: this.state.input.image,
                  user: this.props.Global.user.id
                }
    this.props.createCampaign(data);
  }

  changeInput = (field, value) => {
    const newInput = this.state.input;
    newInput[field] = value;
    this.setState({ input: newInput });
  }

  render() {
    return (
      <CreateCampaignElement>
        <h1>Create Campaign</h1>
        <div>
          <h4>Judul Campaign</h4>
          <input type="text" value={this.state.input.title} placeholder="Contoh: Donasi untuk Ricky" onChange={(evt) => this.changeInput('title', evt.target.value)} />
        </div>
        <div>
          <h4>Jumlah Donasi yang Diperlukan</h4>
          <input type="text" value={this.state.input.moneyNeeded} placeholder="Contoh: 12000000" onChange={(evt) => this.changeInput('moneyNeeded', evt.target.value)} />
        </div>
        <div>
          <h4>Deskripsi</h4>
          <textarea value={this.state.input.description} onChange={(evt) => this.changeInput('description', evt.target.value)} />
        </div>
        <div>
          <h4>Link Picture</h4>
          <input type="text" value={this.state.input.image} onChange={(evt) => this.changeInput('image', evt.target.value)} />
        </div>
        <div className="create"><button onClick={() => this.onSubmit()}>CREATE CAMPAIGN</button></div>
      </CreateCampaignElement>
    );
  }
}

CreateCampaign.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    push: (url) => dispatch(push(url)),
    createCampaign: (data) =>
      dispatch(createCampaign(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaign);
