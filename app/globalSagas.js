// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place
import request, { API_PREFIX } from 'request';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import { take, call, put, fork, race } from 'redux-saga/effects';
import { getAllCampaigns, postMakeDonations } from 'api';
import swal from 'sweetalert';
import auth from 'auth';

import {
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  FORGET_PASSWORD_REQUEST,
  CONFIRM_FORGET_PASSWORD_REQUEST,
  SET_AUTH,
  SET_USER,
  LOGOUT,
  FETCH_LOGIN,
  REQUEST_ERROR,
  FETCH_CAMPAIGNS,
  MAKE_DONATIONS,
} from 'globalConstants';

import { fetchAllCampaigns } from 'globalActions';

/**
 * Effect to handle authorization
 * @param  {string} email               The email of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
export function* authorize({ email, password, isRegistering, community_name, admin_name, docs_link }) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  // We then try to register or log in the user, depending on the request
  try {
    let response;

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(auth.register, email, community_name, admin_name, docs_link);
    } else {
      response = yield call(auth.login, email, password);
    }

    return response;
  } catch (error) {
    // If we get an error we send Redux the appropiate action and return
    //console.log(error);
    //alert("here hereee errorrr");
    swal('Error!', error.response.body.detail, 'error');

    yield put({ type: REQUEST_ERROR, error: error.response.body.detail });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

/**
 * Effect to handle forget password
 */
export function* forgetPasswordHandler(email) {
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const response = yield call(auth.forgetPassword, email);

    return response;
  } catch (error) {
    swal('Error!', error.response, 'error');

    return false;
  } finally {
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

/**
 * Effect to handle confirm forget password
 */
export function* confirmForgetPasswordHandler({ password, uid, token }) {
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const response = yield call(auth.confirmForgetPassword, password, uid, token);

    return response;
  } catch (error) {
    swal('Error!', error.response, 'error');

    return false;
  } finally {
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

/**
 * Effect to handle logging out
 */
export function* logout() {
  // We tell Redux we're in the middle of a request
  yield put({ type: SENDING_REQUEST, sending: true });

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    const response = yield call(auth.logout);
    yield put({ type: SET_USER, data: {} });
    yield put({ type: SENDING_REQUEST, sending: false });

    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  }
}

export function* fetchLogin() {
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const response = yield call(auth.getUserData);
    yield put({ type: SET_USER, data: response.body });
    yield put({ type: SENDING_REQUEST, sending: false });

    return response;
  } catch (error) {
    yield put({ type: LOGOUT });
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  }
}

/**
 * Log in saga
 */
export function* loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"

  // eslint-disable-next-line no-constant-condition
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const request = yield take(LOGIN_REQUEST);
    const { email, password } = request.data;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(authorize, { email, password, isRegistering: false }),
      logout: take(LOGOUT),
    });

    // If `authorize` was the winner...
    if (winner.auth) {
      // ...we send Redux appropiate actions
      yield put({ type: SET_AUTH, newAuthState: true }); // User is logged in (authorized)
      yield put({ type: FETCH_LOGIN });
      yield put(push('/dashboard')); // Go to dashboard page
    }
  }
}

export function* fetchLoginFlow() {
  while (yield take(FETCH_LOGIN)) {
    yield call(fetchLogin);
  }
}

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
export function* logoutFlow() {
  while (yield take(LOGOUT)) {
    yield put({ type: SET_AUTH, newAuthState: false });

    yield call(logout);
    yield put(push('/'));
  }
}

/**
 * Register saga
 * Very similar to log in saga!
 */
export function* registerFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take(REGISTER_REQUEST);
    const { email, community_name, admin_name, docs_link } = request.data;
    const password = 'password';

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    const wasSuccessful = yield call(authorize, {
      email,
      password,
      isRegistering: true,
      community_name,
      admin_name,
      docs_link,
    });

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put({ type: SET_AUTH, newAuthState: true }); // User is logged in (authorized) after being registered
      yield put({ type: FETCH_LOGIN });
      yield put(push('/dashboard')); // Go to dashboard page
    }
  }
}

/**
 * Forget Password saga
 *
 */
export function* forgetPasswordFlow() {
  while (true) {
    const request = yield take(FORGET_PASSWORD_REQUEST);
    const email = request.email;

    const wasSuccessful = yield call(forgetPasswordHandler, email);

    if (wasSuccessful) {
      swal({
        title: 'Success',
        text: 'Check your email to reset your password',
      });
    }
  }
}

/**
 * Confirm Forget Password saga
 *
 */

export function* confirmForgetPasswordFlow() {
  while (true) {
    const request = yield take(CONFIRM_FORGET_PASSWORD_REQUEST);
    const { password, uid, token } = request.data;

    const wasSuccessful = yield call(confirmForgetPasswordHandler, {
      password,
      uid,
      token,
    });

    if (wasSuccessful) {
      swal({
        title: 'Success',
        text: 'Your password has been reset successfully!',
        type: 'success',
      }, () => {
        forwardTo('/login');
      });
    }
  }
}

export function* getCampaigns() {
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const response = yield call(getAllCampaigns);
    yield put({ type: FETCH_CAMPAIGNS, data: response.body });
    yield put({ type: SENDING_REQUEST, sending: false });

    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  }
}

export function* getCampaignsWatcher() {
  while (true) {
    const request = yield take(FETCH_CAMPAIGNS);

    const wasSuccessful = yield call(getCampaigns);
  }
}

export function* makeDonations(data) {
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const response = yield call(postMakeDonations, data);
    yield put({ type: MAKE_DONATIONS, data: response.body });
    yield put({ type: SENDING_REQUEST, sending: false });

    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  }
}

export function* makeDonationsWatcher() {
  while (true) {
    const request = yield take(MAKE_DONATIONS);

    const data = request.data;
    const response = yield call(makeDonations, data);

    if (response) {
      swal({
        title: 'Success',
        text: 'Donation has been send successfully!',
        type: 'success',
      }, () => {
        forwardTo('/');
      });
    }
  }
}


// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* root() {
  yield fork(loginFlow);
  yield fork(logoutFlow);
  yield fork(registerFlow);
  yield fork(forgetPasswordFlow);
  yield fork(confirmForgetPasswordFlow);
  yield fork(fetchLoginFlow);
  yield fork(getCampaignsWatcher);
  yield fork(makeDonationsWatcher);
}

// Little helper function to abstract going to different pages
function forwardTo(location) {
  browserHistory.push(location);
}
