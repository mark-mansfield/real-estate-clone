import React, { useState, useEffect } from 'react';

const DesktopNavigation = () => {
  const [displayValues, setDisplayValues] = useState([
    { name: 'searchDropDown', display: false },
    { name: 'researchDropDown', display: false },
    { name: 'sellDropdown', display: false },
    { name: 'newsDropDown', display: false },
    { name: 'loansDropDown', display: false },
    { name: 'moreLinksDropDown', display: false }
  ]);

  useEffect(() => {}, [displayValues]);

  const handleNavDropDownClick = (name, index) => {
    const newDisplayValuesObject = [...displayValues];

    if (!newDisplayValuesObject[index].display) {
      newDisplayValuesObject[index].display = true;
    } else {
      newDisplayValuesObject[index].display = false;
    }

    newDisplayValuesObject.map((obj, idx) => {
      if (idx !== index) {
        newDisplayValuesObject[idx].display = false;
      }
    });
    setDisplayValues(newDisplayValuesObject);
  };
  return (
    <nav className="desktop-nav" role="navigation">
      <div className="desktop-nav__member-panel">
        <div className="header-member">
          <div className="header-member__sign-in-container">
            <button type="button" className="header-member__sign-in" data-type="login" rel="nofollow">
              Log in
            </button>
            <button type="button" className="header-member__sign-up" data-type="signup" rel="nofollow">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <ul className="desktop-nav__list">
        <li className="desktop-nav__menu-option desktop-nav__dropdown">
          <a
            className="desktop-nav__menu-option-link"
            href="#0"
            onClick={e => {
              e.preventDefault();
              handleNavDropDownClick('searchDropDown', 0);
            }}
          >
            Search
            <svg viewBox="0 0 18 18" className="domain-icon is-small">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M13 7l-4 4-4-4"></path>
            </svg>
          </a>
          {displayValues[0].display && (
            <ul className="desktop-nav__dropdown-content">
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link is-selected" href="https://www.domain.com.au/">
                  Buy
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/?mode=rent">
                  Rent
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/new-homes">
                  New Homes
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/?mode=sold">
                  Sold
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.commercialrealestate.com.au/">
                  Commercial
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/rural">
                  Rural
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="desktop-nav__menu-option desktop-nav__dropdown">
          <a
            className="desktop-nav__menu-option-link"
            href="#"
            onClick={() => handleNavDropDownClick('researchDropDown', 1)}
          >
            Research
            <svg viewBox="0 0 18 18" className="domain-icon is-small">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M13 7l-4 4-4-4"></path>
            </svg>
          </a>
          {displayValues[1].display && (
            <ul className="desktop-nav__dropdown-content">
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/advice/">
                  Advice
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/research/">
                  Reports
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/auction-results/">
                  Auction Results
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/?mode=sold">
                  Sold Properties
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/property-profile">
                  Property Price Estimates
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="desktop-nav__menu-option desktop-nav__dropdown">
          <a
            className="desktop-nav__menu-option-link"
            href="#"
            onClick={() => handleNavDropDownClick('sellDropdown', 2)}
          >
            Sell
            <svg viewBox="0 0 18 18" className="domain-icon is-small">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M13 7l-4 4-4-4"></path>
            </svg>
          </a>
          {displayValues[2].display && (
            <ul className="desktop-nav__dropdown-content">
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/real-estate-agents/">
                  Find an agent
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/sell">
                  Seller Tools
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="desktop-nav__menu-option desktop-nav__dropdown">
          <a
            className="desktop-nav__menu-option-link"
            href="#"
            onClick={() => handleNavDropDownClick('newsDropDown', 3)}
          >
            News
            <svg viewBox="0 0 18 18" className="domain-icon is-small">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M13 7l-4 4-4-4"></path>
            </svg>
          </a>
          {displayValues[3].display && (
            <ul className="desktop-nav__dropdown-content">
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/news/">
                  News
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/living/">
                  Living
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/money-markets/">
                  Money &amp; Markets
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="desktop-nav__menu-option desktop-nav__dropdown">
          <a
            className="desktop-nav__menu-option-link"
            href="#"
            onClick={() => handleNavDropDownClick('loansDropDown', 4)}
          >
            Home Loans
            <svg viewBox="0 0 18 18" className="domain-icon is-small">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M13 7l-4 4-4-4"></path>
            </svg>
          </a>
          {displayValues[4].display && (
            <ul className="desktop-nav__dropdown-content">
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/home-loans/">
                  Home Loans
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a
                  className="desktop-nav__dropdown-item-link"
                  href="https://www.domain.com.au/home-loans/calculators/home-loan-repayment-calculator/"
                >
                  Repayment Calculator
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a
                  className="desktop-nav__dropdown-item-link"
                  href="https://www.domain.com.au/home-loans/calculators/stamp-duty-calculator/"
                >
                  Stamp Duty Calculator
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a
                  className="desktop-nav__dropdown-item-link"
                  href="https://www.domain.com.au/home-loans/calculators/equity-calculator/"
                >
                  Equity Calculator
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="desktop-nav__menu-option">
          <a className="desktop-nav__menu-option-link no-svg-nav-link" href="//www.commercialrealestate.com.au/">
            Commercial
          </a>
        </li>
        <li className="desktop-nav__menu-option desktop-nav__dropdown">
          <a
            className="desktop-nav__menu-option-link"
            href="#"
            onClick={() => handleNavDropDownClick('moreLinksDropDown', 5)}
          >
            More
            <svg viewBox="0 0 18 18" className="domain-icon is-small">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M13 7l-4 4-4-4"></path>
            </svg>
          </a>
          {displayValues[5].display && (
            <ul className="desktop-nav__dropdown-content">
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/home?mode=share">
                  Share
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a
                  className="desktop-nav__dropdown-item-link"
                  href="https://www.domain.com.au/connections/?ltm_source=domain&amp;ltm_medium=referral&amp;ltm_campaign=domain_nav-menu_web&amp;ltm_content=Connections"
                >
                  Connections
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a
                  className="desktop-nav__dropdown-item-link"
                  href="https://www.domaininsure.com.au/?utm_source=domain&amp;utm_medium=referral&amp;utm_campaign=domain_nav-menu_web&amp;utm_content=Insurance"
                >
                  Insurance
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/property-profile">
                  Home Price Guide
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://www.domain.com.au/suburb-profile/">
                  Suburb Profiles
                </a>
              </li>
              <li className="desktop-nav__dropdown-item">
                <a className="desktop-nav__dropdown-item-link" href="https://advertisers.com.au/domain">
                  Create an ad
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
