import defaults from 'superagent-defaults';

// DEV
let API_PREFIX_CONFIG = 'https://donasee-be.herokuapp.com/api/v1';
let SIGN_PREFIX_CONFIG = 'http://localhost:3333/api/sign';
// https://donasee-be.herokuapp.com/api/v1/login/

// PROD
if (process.env.NODE_ENV === 'production') {
  API_PREFIX_CONFIG = 'https://donasee-be.herokuapp.com/api/v1';
  SIGN_PREFIX_CONFIG = 'https://cp-sign.compfest.web.id/api/sign';
}

export const API_PREFIX = API_PREFIX_CONFIG;
export const SIGN_PREFIX = SIGN_PREFIX_CONFIG;

export const instance = defaults();
export const signing = defaults();

export default instance;

export { instance as apiRequest, signing as signingRequest };
