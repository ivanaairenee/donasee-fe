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
} from 'globalConstants';

const initialState = fromJS({
  user: {
    account: fromJS({}),
  },
  error: '',
  currentlySending: false,
  userLoaded: false,
  loggedIn: auth.loggedIn(),
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default globalReducer;
