import request, { API_PREFIX, SIGN_PREFIX, signing } from 'request';

export function getAllCampaigns() {
  return request.get(`${API_PREFIX}/campaign/`);
}