import React from 'react';
import Slider from 'react-slick';
import '../../styles/affordable-properties.css';
const AffordableProperties = ({ title, data, slideSpeed }) => {
  const settings = {
    accessibility: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: slideSpeed,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const handleSelectChange = e => {
    console.log(e.target.value);
  };
  return (
    <div className=" mt-5 mb-5 affordable-properties">
      <div className="title">
        <h2>{title}</h2>
        <select value="" onChange={handleSelectChange}>
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Brisbane">Brisbane</option>
          <option value="Canberra">Canberra</option>
          <option value="Adelaide">Adelaide</option>
          <option value="Perth">Perth</option>
          <option value="Tasmania">Tasmania</option>
          <option value="Northern-Territory">Northern Territory</option>
        </select>
      </div>

      <Slider {...settings}>
        {data.map((listingArea, idx) => {
          return (
            <div className="slide card affordable-properties" key={idx}>
              <a
                href={`https://www.domain.com.au/sale/${listingArea.description}/?price=0-850000`}
                data-id={listingArea.description}
                style={{ color: 'black' }}
              >
                <div className="property card-body" style={{ height: '126px' }}>
                  <div className="property__description">{listingArea.description}</div>
                  <div className="property__property-count">
                    <svg viewBox="0 0 24 24" className="domain-icon css-1v994a0 is-regular">
                      <path fill="none" stroke="currentColor" strokeWidth="2" d="M5 11l7-5 7 5"></path>
                      <path
                        d="M17 10v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8m-6 0l6-5 2.8 2.3M23 10l-6-5-2.8 2.3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M7 17H3a1 1 0 0 1-1-1V9m15 8h4a1 1 0 0 0 1-1V9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                      <circle cx="12" cy="12" r="1.5" fill="none" stroke="currentColor"></circle>
                      <path
                        d="M11 15.5h2a.5.5 0 0 1 .5.5v2.5h-3V16a.5.5 0 0 1 .5-.5z"
                        fill="none"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    {listingArea.propertyCount} properties for sale
                  </div>
                  <p className="view-properties" style={{ color: 'green' }}>
                    View Properties
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default AffordableProperties;
