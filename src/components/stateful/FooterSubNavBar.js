import React, { useState } from 'react';
import SubNavIconLinks from '../dumb/subNavIconLinks';
import '../../styles/footer-sub-nav-structure.css';

const FooterSubNavBar = () => {
  const [displayValues, setDisplayValues] = useState([
    { name: 'leftDropDown', display: false },
    { name: 'rightDropDown', display: false }
  ]);

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

  const handleDropDownOnBlur = () => {
    setDisplayValues([{ name: 'leftDropDown', display: false }, { name: 'rightDropDown', display: false }]);
  };

  return (
    <div className="footer__sub-nav-bar">
      <div className="footer-sub-nav-bar__wrapper">
        <div className="footer-sub-nav-bar__inner">
          <div className="sub-nav__left">
            <div className="sub-nav-left__svg-container">
              <svg
                viewBox="0 0 283.5 283.5"
                x="0px"
                y="0px"
                xmlns="http://www.w3.org/2000/svg"
                alt="Commercial Real Estate"
              >
                <path
                  d="M97.8,206.1l37.8,21.8c1,0.6,2.2,0.5,2.2,0.5V113.3l-35.6-20.6c-1.9-1.1-4.4,0.3-4.4,2.5V206.1z"
                  fill="currentColour"
                ></path>
                <path
                  d="M145.4,228l38.4-21c0.9-0.5,1.5-1.5,1.5-2.5V94.5c0-2.2-2.4-3.6-4.3-2.5l-37.7,21.3v115.2 C143.2,228.4,144.4,228.5,145.4,228z"
                  fill="currentColour"
                ></path>
                <path
                  d="M4.9,203.6c0,1.5,0.8,3,2.2,3.7L42.7,228c1,0.6,2.2,0.5,2.2,0.5v-68.7L9.4,139.1c-1.9-1.1-4.4,0.3-4.4,2.5 V203.6z"
                  fill="currentColour"
                ></path>
                <path
                  d="M52.5,228l38.4-21c0.9-0.5,1.5-1.5,1.5-2.5v-63.5c0-2.2-2.4-3.6-4.3-2.5l-37.7,21.3v68.7 C50.3,228.4,51.5,228.5,52.5,228z"
                  fill="currentColour"
                ></path>
                <path
                  d="M190.6,206.1l37.8,21.8c1,0.6,2.2,0.5,2.2,0.5V67l-35.6-20.6c-1.9-1.1-4.4,0.3-4.4,2.5V206.1z"
                  fill="currentColour"
                ></path>
                <path
                  d="M238.2,228l37.7-20.6c1.4-0.8,2.2-2.2,2.2-3.8V48.2c0-2.2-2.4-3.6-4.3-2.5L236.1,67v161.5 C236.1,228.4,237.3,228.5,238.2,228z"
                  fill="currentColour"
                ></path>
              </svg>
            </div>
            <div className="sub-nav-left__dropdown">
              <div>
                <div>
                  <button
                    className="button is-icon is-ghost is-small"
                    type="button"
                    onClick={e => {
                      e.preventDefault();
                      handleNavDropDownClick('leftDropDown', 0);
                    }}
                    onBlur={handleDropDownOnBlur}
                  >
                    <span className="button__label">
                      <span>Commercial Real Estate</span>
                    </span>
                    <span className="button__icon is-right">
                      <svg viewBox="0 0 18 18" className="domain-icon is-small" aria-hidden="true">
                        <path fill="none" stroke="currentColor" strokeWidth="2" d="M13 7l-4 4-4-4"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                {displayValues[0].display && (
                  <ul>
                    <li>
                      <h4 className="css-199da4v"></h4>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.commercialrealestate.com.au/">Commercial Property</a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.commercialrealestate.com.au/business/">Business for Sale</a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.commercialrealestate.com.au/coworking/">Co-working</a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.commercialrealestate.com.au/franchise/">Franchise for Sale</a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.commercialrealestate.com.au/news/">Commercial Property News</a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.commercialrealestate.com.au/findanagent/">
                        Commercial Real Estate Agent search
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <SubNavIconLinks />
          </div>
          <div className="sub-nav_right">
            <div className="sub-nav-right__dropdown">
              <div>
                <div>
                  <button
                    className="button is-icon is-ghost is-small"
                    type="button"
                    onClick={e => {
                      e.preventDefault();
                      handleNavDropDownClick('rightDropDown', 1);
                    }}
                    onBlur={handleDropDownOnBlur}
                  >
                    <span className="button__label">
                      <span>Partners</span>
                    </span>
                    <span className="button__icon is-right">
                      <svg viewBox="0 0 18 18" className="domain-icon is-small" aria-hidden="true">
                        <path fill="none" stroke="currentColor" strokeWidth="2" d="M13 7l-4 4-4-4"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                {displayValues[1].display && (
                  <ul className="right-drop-down">
                    <li>
                      <h4>Partners</h4>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.propertyguru.com.sg" rel="nofollow">
                        PropertyGuru Singapore
                      </a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.propertyguru.com.my" rel="nofollow">
                        PropertyGuru Malaysia
                      </a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.ddproperty.com" rel="nofollow">
                        DDproperty
                      </a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.rumah.com" rel="nofollow">
                        Rumah
                      </a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.commercialguru.com.sg" rel="nofollow">
                        CommercialGuru
                      </a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://www.oneflare.com.au/" rel="nofollow">
                        Oneflare
                      </a>
                    </li>
                    <li data-testid="list-item">
                      <a href="https://urbanyou.com.au/" rel="nofollow">
                        UrbanYou
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSubNavBar;
