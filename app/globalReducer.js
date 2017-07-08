/*
 *
 * Global reducer
 *
 */

import { fromJS } from 'immutable';
import { isEmpty } from 'lodash';
import auth from 'auth';
import {
  SET_AUTH,
  SET_USER,
  SET_USER_ACCOUNT,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
  FETCH_CAMPAIGNS,
  CHOOSE_CAMPAIGN,
  CREATE_CAMPAIGN_SUCCESS,
  MAKE_DONATIONS,
} from 'globalConstants';

const initialState = fromJS({
  user: {
    account: fromJS({}),
  },
  error: '',
  currentlySending: false,
  userLoaded: false,
  loggedIn: auth.loggedIn(),
  user: null,
  isLoading: false,
  isLoaded: false,
  isError: null,
  selectedCampaign: null,
  campaigns: null,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_DONATIONS:
      let upd = action.data;
      upd['amount'] = parseInt(upd['amount']);
      const list = state.get('campaigns');
      const index = list.findIndex(c => c.id === action.data.campaign);
      const currCampaign = list[index];
      currCampaign.donations.push(upd);
      list.splice(index, 1, currCampaign);
      return state.set('campaigns', list);
    case CHOOSE_CAMPAIGN:
      return state.set('selectedCampaign', action.campaignIndex);
    case SET_AUTH:
      return state.set('loggedIn', action.newAuthState);
    case SET_USER:
      return state.set('user', action.data).set('userLoaded', !isEmpty(action.data));
    // eslint-disable-next-line no-case-declarations
    case SET_USER_ACCOUNT:
      const newUser = state.toJS().user;
      newUser.account = action.data;
      return state.set('user', fromJS(newUser));
    case SENDING_REQUEST:
      return state.set('currentlySending', action.sending);
    case REQUEST_ERROR:
      return state.set('error', action.error);
    case CLEAR_ERROR:
      return state.set('error', '');
    case FETCH_CAMPAIGNS:
      return state.set('campaigns', action.data);
    case CREATE_CAMPAIGN_SUCCESS:
      let newCampaigns = state.get('campaigns');
      console.log(newCampaigns);
      if(newCampaigns === null){
        newCampaigns = [];
      }
      newCampaigns.push(action.data);
      return state.set('campaigns', newCampaigns);
    default:
      return state;
  }
}

export default globalReducer;
