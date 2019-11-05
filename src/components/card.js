import React from 'react';
import { Link, Router } from 'react-router-dom';
const Card = data => {
  console.log(data.data.searchterm);
  return (
    <div className=" ">
      <h5 className="h5">
        {data.data.list.length} properties for rent in {data.data.searchterm}
      </h5>

      {data.data.list.map((property, idx) => {
        return (
          <div
            key={idx}
            className="row align-items-center "
            style={{ border: '1px solid lightgrey', minHeight: '80px' }}
          >
            <div className="col-sm">
              <Link to={`/listing/${property.listing.id}`}>{property.listing.headline}</Link>
              <br />
              {property.listing.propertyDetails.displayableAddress}
            </div>
            <div className="col-sm">{property.listing.priceDetails.displayPrice}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
