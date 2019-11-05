import axios from 'axios';
const querystring = require('querystring');

function base64(str) {
  return Buffer.from(str).toString('base64');
}

export const authenticate = (clientId, secret) => {
  const data = querystring.stringify({
    grant_type: 'client_credentials',
    scope: 'api_agencies_read api_listings_read'
  });
  return axios
    .post('https://auth.domain.com.au/v1/connect/token', data, {
      headers: {
        Authorization: `Basic ${base64(`${clientId}:${secret}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(result => {
      return result;
      //   setHasToken(true);
      //   setAuthSuccess(true);
      //   localStorage.setItem('_nekot', result.data.access_token);
    })
    .catch(error => {
      console.error(error.response.data);
    });
};
