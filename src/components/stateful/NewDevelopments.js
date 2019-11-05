import React from 'react';

import '../../styles/slick.css';
import '../../styles/slick-theme.css';
import '../../styles/slick-custom.css';

const NewDevelopments = ({ title, data }) => {
  return (
    <div className=" mt-5 mb-5 new-developments">
      <h2 className="mb-4">{title}</h2>
      <div className="new-developments-wrapper">
        {data.map((property, idx) => {
          return (
            <div className="custom-card" key={idx}>
              <a
                className="custom-card-link"
                href="https://www.domain.com.au/167-brygon-creek-drive-upper-coomera-qld-4209-2015809719"
                data-id={property.headline}
                style={{ color: 'black' }}
              >
                <img
                  className="card-img"
                  alt={property.headline}
                  src={property.img}
                  style={{ width: '100%', height: '246px' }}
                />
                <span data-testid="featured-projects-card-childCount" className="label">
                  {property.propertyCount} Properties
                </span>
                <div className="summary-text">
                  <div className="summary-headline">{property.headline}</div>
                  <div className="summary-address">{property.address}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NewDevelopments;
