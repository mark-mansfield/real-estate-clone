import React from 'react';
import Slider from 'react-slick';
import '../../styles/recommended-properties.css';

const RecommendedProperties = ({ title, data, slideSpeed }) => {
  const settings = {
    accessibility: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: slideSpeed,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className=" mt-5 mb-5 recommended-properties">
      <h2>{title}</h2>
      <Slider {...settings}>
        {data.map((property, idx) => {
          return (
            <div className="slide card" key={idx}>
              <a style={{ color: 'black' }} href={property.link} data-id={property.headline}>
                <span className="green-label">New</span>
                <div className="image-wrapper">
                  <img className="slide-img" alt={property.headline} src={property.image} style={{ height: '153px' }} />
                </div>
                <div className="property card-body " style={{ height: '126px' }}>
                  <h2 className="custom-h2">{property.viewingDetails}</h2>
                  <div>{property.streetAddress}</div>
                  <div className="property-region">
                    {property.addressLocality}&nbsp;
                    {property.addressRegion}&nbsp;
                    {property.postalCode}
                  </div>
                  <div className="property-features is-compact is-regular ">
                    <div className="property-features__default-wrapper">
                      <span className="property-feature__feature">
                        <span className="property-feature__feature-text-container">
                          {property.features.bedrooms}
                          <span className="property-features__feature-text">Beds</span>
                        </span>
                        <svg width="24" height="24" className="domain-icon property-feature__icon" viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            d="M4.00002 19.00001v2M20.00002 19.00001v2M8 11h8a5 5 0 0 1 5 5v3H3v-3a5 5 0 0 1 5-5z"
                          ></path>
                          <path
                            d="M6.5 11V9A1.5 1.5 0 0 1 8 7.5h2A1.5 1.5 0 0 1 11.5 9v1M12.5 10V9A1.5 1.5 0 0 1 14 7.5h2A1.5 1.5 0 0 1 17.5 9v2"
                            fill="none"
                            stroke="currentColor"
                          ></path>
                          <path
                            d="M20 13V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                          <path fill="none" stroke="currentColor" d="M3.5 15.5h17"></path>
                        </svg>
                      </span>
                      <span className="property-feature__feature">
                        <span className="property-feature__feature-text-container">
                          {property.features.bathrooms}
                          <span className="property-features__feature-text">Beds</span>
                        </span>
                        <svg width="24" height="24" className="domain-icon property-feature__icon" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeWidth="2" d="M6 19v2M18 19v2"></path>
                          <g fill="currentColor">
                            <circle cx="15.5" cy="8.5" r=".5"></circle>
                            <circle cx="13.5" cy="8.5" r=".5"></circle>
                            <circle cx="11.5" cy="8.5" r=".5"></circle>
                            <circle cx="13.5" cy="6.5" r=".5"></circle>
                            <circle cx="13.5" cy="10.5" r=".5"></circle>
                            <circle cx="11.5" cy="10.5" r=".5"></circle>
                            <circle cx="17.5" cy="10.5" r=".5"></circle>
                            <circle cx="15.5" cy="10.5" r=".5"></circle>
                          </g>
                          <g fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 13h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2zM4 12V7a3 3 0 0 1 3-3h1"></path>
                            <path d="M8 6.3V4a1 1 0 0 1 1-1h2.3a.7.7 0 0 1 .5 1.2L9.2 6.8A.7.7 0 0 1 8 6.3zM3 13h18"></path>
                          </g>
                        </svg>
                      </span>
                      <span className="property-feature__feature">
                        <span className="property-feature__feature-text-container">
                          {property.features.carspaces}
                          <span className="property-features__feature-text">Beds</span>
                        </span>
                        <svg width="24" height="24" className="domain-icon property-feature__icon" viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M21 10h-2M5 10H3"
                          ></path>
                          <path fill="none" stroke="currentColor" strokeMiterlimit="10" d="M9.5 15.5h5m-9-5h13"></path>
                          <path
                            d="M20.6 12.6L19 10l-1.5-3.7A2 2 0 0 0 15.6 5H8.4a2 2 0 0 0-1.9 1.3L5 10l-1.6 2.6a3 3 0 0 0-.4 1.5V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.9a3 3 0 0 0-.4-1.5z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M7 19v1a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-1m14 0v1a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-1"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M3.5 14.5H7a.5.5 0 0 1 .5.5v.5a1 1 0 0 1-1 1h-3v-2zm13.5 0h3.5v2h-3a1 1 0 0 1-1-1V15a.5.5 0 0 1 .5-.5z"
                            fill="none"
                            stroke="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default RecommendedProperties;
