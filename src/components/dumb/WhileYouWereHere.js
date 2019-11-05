import React from 'react';
import '../../styles/while-you-were-here.css';
const WhileYouWereHere = ({ title }) => {
  return (
    <div className="domain-home">
      <div className="domain-home__wrapper">
        <h2>{title}</h2>
        <ul className="">
          <li>
            <a href="https://www.domain.com.au/home-loans/">
              <svg viewBox="0 0 24 24" className="domain-icon is-regular">
                <g fill="currentColor">
                  <rect
                    x="5"
                    y="3"
                    width="14"
                    height="18"
                    rx="2"
                    ry="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></rect>
                  <path fill="none" stroke="currentColor" d="M8.5 6.5h7v4h-7z"></path>
                  <circle cx="9" cy="14" r="1"></circle>
                  <circle cx="12" cy="14" r="1"></circle>
                  <circle cx="15" cy="14" r="1"></circle>
                  <circle cx="9" cy="17" r="1"></circle>
                  <circle cx="12" cy="17" r="1"></circle>
                  <circle cx="15" cy="17" r="1"></circle>
                </g>
              </svg>
              Explore home loans
            </a>
          </li>
          <li>
            <a href="https://www.domain.com.au/property-profile">
              <svg viewBox="0 0 24 24" className="domain-icon is-regular">
                <path
                  d="M1 10l9.2-6.6a2.2 2.2 0 0 1 2.6 0L22 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <path
                  d="M19 8v12a1 1 0 0 1-1.1 1H5.1A1 1 0 0 1 4 20V8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <path
                  d="M9.5 15c0 .8.9 1.5 2 1.5s2-.7 2-1.5-.9-1.5-2-1.5-2-.7-2-1.5.9-1.5 2-1.5a2 2 0 0 1 2 1.2 1.1 1.1 0 0 1 0 .3m-2 4.5v1m0-8v1"
                  fill="none"
                  stroke="currentColor"
                ></path>
              </svg>
              See what your home may be worth
            </a>
          </li>
          <li>
            <a href="https://www.domain.com.au/real-estate-agents/">
              <svg viewBox="0 0 24 24" className="domain-icon is-regular">
                <circle cx="12" cy="10" r="3.5" fill="none" stroke="currentColor"></circle>
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"></circle>
                <path d="M5 16.8a8 8 0 0 1 6.5-3.3h1a8 8 0 0 1 6.6 3.4" fill="none" stroke="currentColor"></path>
                <rect x="10.5" y="13.5" width="3" height="3" rx="1" ry="1" fill="none" stroke="currentColor"></rect>
                <path fill="none" stroke="currentColor" strokeWidth=".93" d="M14 21l-1.1-4.5h-1.8L10 21"></path>
              </svg>
              Find an Agent
            </a>
          </li>
          <li>
            <a href="https://www.domain.com.au/services/appraisal">
              <svg viewBox="0 0 24 24" className="domain-icon is-regular">
                <path d="M2 10l8.8-6.6a2 2 0 0 1 2.4 0L22 10" fill="none" stroke="currentColor" strokeWidth="2"></path>
                <path
                  d="M19 8v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <path
                  d="M10 14.5h4a.5.5 0 0 1 .5.5v6.5h-5V15a.5.5 0 0 1 .5-.5z"
                  fill="none"
                  stroke="currentColor"
                ></path>
                <circle cx="12" cy="10" r="1.5" fill="none" stroke="currentColor"></circle>
              </svg>
              Request a free home appraisal
            </a>
          </li>
          <li>
            <a href="https://www.domain.com.au/auction-results/">
              <svg viewBox="0 0 24 24" className="domain-icon is-regular">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 20l-8-8M4.21959595 11.14852814l7.99030663-7.99030663 4.77297077 4.77297078-7.99030663 7.99030663zM3 21h7"
                ></path>
                <path fill="none" stroke="currentColor" d="M6.5 9.5l4 4"></path>
              </svg>
              See auction results
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhileYouWereHere;
