/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
  SET_AUTH,
  SET_USER,
  SET_USER_ACCOUNT,
  FETCH_LOGIN,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  FORGET_PASSWORD_REQUEST,
  CONFIRM_FORGET_PASSWORD_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR,
  DEFAULT_ACTION,
  FETCH_CAMPAIGNS,
  CHOOSE_CAMPAIGN,
} from './globalConstants';

export function chooseCampaign(campaignIndex) {
  return { type: CHOOSE_CAMPAIGN, campaignIndex };
}

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(newAuthState) {
  return { type: SET_AUTH, newAuthState };
}

export function setUser(data) {
  return { type: SET_USER, data };
}

export function setUserAccount(data) {
  return { type: SET_USER_ACCOUNT, data };
}

export function fetchLogin() {
  return { type: FETCH_LOGIN };
}

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending };
}

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function loginRequest(data) {
  return { type: LOGIN_REQUEST, data };
}

/**
 * Tells the app we want to send reset user's password
 * @param  {string} email The email that user use to register
 */
export function forgetPasswordRequest(email) {
  return { type: FORGET_PASSWORD_REQUEST, email };
}

/**
 * Tells the app we want to confirm user's reset password
 * @param  {object} the data we're sending for reset confirmation
 * @param  {string} data.password user's new password
 * @param  {string} data.uid user's confirmation uid
 * @param  {string} data.token user's confirmation token
 */
export function confirmForgetPasswordRequest(data) {
  return { type: CONFIRM_FORGET_PASSWORD_REQUEST, data };
}

/**
 * Tells the app we want to log out a user
 */
export function logout() {
  return { type: LOGOUT };
}

/**
 * Tells the app we want to register a user
 * @param  {object} data          The data we're sending for registration
 * @param  {string} data.username The username of the user to register
 * @param  {string} data.password The password of the user to register
 */
export function registerRequest(data) {
  return { type: REGISTER_REQUEST, data };
}

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError(error) {
  return { type: REQUEST_ERROR, error };
}

/**
 * Sets the `error` state as empty
 */
export function clearError() {
  return { type: CLEAR_ERROR };
}

/**
 * Tells the app to fetch all available campaigns
 */
export function fetchAllCampaigns() {
  return {
    type: FETCH_CAMPAIGNS,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
