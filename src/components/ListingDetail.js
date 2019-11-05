import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { getListingDetail } from '../api/apiCore';

const ListingDetail = ({ match }) => {
  const [listingData, setListingData] = useState({});
  const [headline, setHeadline] = useState('');
  const [dateAvailable, setDateAvailable] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [bond, setBond] = useState('');
  const [images, setImages] = useState([{}]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getListingData();
  }, []);

  const getListingData = () => {
    const token = localStorage.getItem('_nekot');
    getListingDetail(match.params.listingId, token).then(data => {
      if (data.error) {
        setLoading(false);
        setError(true);
      } else {
        setSuccess(true);
        setListingData(data.data);
        setAddress(data.data.addressParts.displayAddress);
        setHeadline(data.data.headline);
        setDateAvailable(data.data.dateAvailable);
        setDescription(data.data.description);
        setPrice(data.data.priceDetails.displayPrice);
        setBond(data.data.priceDetails.bond);
        setImages(data.data.media);
        setLoading(false);
      }
    });
  };

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
      <h2 className="h2">There was an error accessing the data</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading...</h2>
      </div>
    );

  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
      <h6>Listing Details</h6>
      <ul className="list-group">
        <li className="list-group-item">{headline}</li>
        <li className="list-group-item">{address}</li>
        <li className="list-group-item">Available: {dateAvailable}</li>
        <li className="list-group-item">{description}</li>
        <li className="list-group-item">Price: {price}</li>
        <li className="list-group-item"> Bond: {bond}</li>
        <li className="list-group-item">
          <img style={{ width: '100%' }} src={images[0].url} alt="image of the garage" />
        </li>
      </ul>
    </div>
  );

  console.log(listingData);

  return (
    <Layout title="Listing Details for property:" description={match.params.listingId}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showLoading()}
          {showSuccess()}
          {showError()}
        </div>
      </div>
    </Layout>
  );
};

export default ListingDetail;
