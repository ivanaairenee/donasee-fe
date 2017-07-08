import request, { API_PREFIX } from './request';

// let localStorage;

// // If we're testing, use a local storage polyfill
// if (global.process && process.env.NODE_ENV === 'test') {
//   localStorage = require('localStorage');
// } else {
//   // If not, use the browser one
//   localStorage = global.window.localStorage;
// }

const auth = {
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} email The email of the user
  * @param  {string} password The password of the user
  */
  login(email, password) {
    if (auth.loggedIn()) return Promise.resolve(true);

    // Post a fake request
    return request
      .post(`${API_PREFIX}/login/`)
      .send({ email, password })
      .then((response) => {
        localStorage.token = response.body.token;
        request.set('Authorization', `JWT ${response.body.token}`);
        console.log('pas lg call', localStorage);
        return Promise.resolve(true);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getUserData() {
    if (!auth.loggedIn()) return Promise.resolve(null);
    request.set('Authorization', `JWT ${localStorage.token}`);
    return request.post(`${API_PREFIX}/login-jwt/`);
  },

  /**
  * Logs the current user out
  */
  logout() {
    localStorage.removeItem('token');
    request.unset('Authorization');
  },

  /**
  * Checks if a user is logged in
  */
  loggedIn() {
    return !!localStorage.token;
  },

  /**
  * Send forget password reset
  */
  forgetPassword(email) {
    return request
      .post(`${API_PREFIX}/password/reset/`)
      .send({
        email,
      })
      .then(() => Promise.resolve(true));
  },

  /**
  * Send new password to backend
  */
  confirmForgetPassword(password, uid, token) {
    return request
      .post(`${API_PREFIX}/password/reset/confirm/`)
      .send({ new_password: password, uid, token })
      .then(() => Promise.resolve(true));
  },

  /**
  * Registers a user and then logs them in
  * @param  {string} email The email of the user
  * @param  {string} password The password of the user
  */
  register(email, community_name, admin_name, docs_link) {
    // Post a fake request
    var password = 'test123456789';
    return (
      request
        .post(`${API_PREFIX}/register/`)
        .send({
          email,
          password: password,
          community_name,
          admin_name,
          docs_link,
        })
        // Log user in after registering
        .then(() => auth.login(email, password))
    );
  },
};

export default auth;
