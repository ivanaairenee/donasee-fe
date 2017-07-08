/*
 *
 * Global reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from 'globalConstants';

const initialState = fromJS({
  user: null,
  isLoading: false,
  isLoaded: false,
  isError: null,
  selectedCampaign: 1,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default globalReducer;
