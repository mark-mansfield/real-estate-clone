import axios from 'axios';
export const getListingDetail = (id, token) => {
  console.log(id);
  return axios
    .get(`https://api.domain.com.au/v1/listings/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return { error: 'invalid ID' };
    });
};

export const search = values => {
  const token = localStorage.getItem('_nekot');
  return axios
    .post('https://api.domain.com.au/v1/listings/residential/_search', values, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(result => {
      return result;
    })
    .catch(error => console.error(error.response.data));
};

export const getListingLocations = inputText => {
  const token = localStorage.getItem('_nekot');
  return axios
    .get(`https://api.domain.com.au/v1/listings/locations?terms=${inputText}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};
