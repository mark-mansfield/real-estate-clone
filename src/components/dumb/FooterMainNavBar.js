import React from 'react';
import '../../styles/footer-main-nav-bar-structure.css';
const FooterMainNavBar = () => {
  return (
    <div className="footer-main-nav-bar">
      <div className="footer-main-nav-bar__wrapper">
        <div className="footer-main-nav-bar__inner">
          <div className="footer__logo">
            <a alt="Domain" href="https://www.domain.com.au" data-testid="domain-logo" className=" inline-block">
              <div className="domain-logo__wrapper">
                <svg viewBox="0 0 97 22" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="domain-logo__svg-icon"
                    d="M7.21 1.172c3.05 0 5.817 1.035 7.79 2.914 1.95 1.858 3.022 4.427 3.022 7.233v.053c0 2.81-1.073 5.39-3.02 7.26-1.973 1.9-4.74 2.946-7.79 2.946H0V1.174l7.21-.003zm0 2.902H3.07l.004 14.607H7.21c4.508-.004 7.657-2.986 7.657-7.25v-.057c0-2.02-.732-3.858-2.06-5.18-1.407-1.386-3.342-2.12-5.596-2.12zM27.3 5.97c2.153 0 4.136.833 5.584 2.344 1.42 1.48 2.2 3.46 2.2 5.572v.055c0 4.47-3.442 7.97-7.837 7.972-4.347 0-7.752-3.474-7.752-7.91v-.06c0-2.126.79-4.118 2.223-5.61 1.46-1.523 3.442-2.36 5.583-2.36zm3.432 11.644c.863-.95 1.338-2.234 1.338-3.612v-.06c0-2.92-2.12-5.206-4.825-5.206-2.7 0-4.735 2.215-4.735 5.152v.054c.002 2.905 2.107 5.182 4.792 5.182 1.328 0 2.546-.536 3.43-1.51zM53.58 5.26l6.554 4.308.003 12.018h-2.955v-10.49l-3.602-2.36-3.598 2.362v10.488h-2.957l-.002-10.488-3.603-2.36-3.602 2.36v10.488h-2.953V6.282h2.858v1.402L43.42 5.26l5.08 3.33 5.08-3.33zm15.335.79c2.112 0 3.75.58 4.868 1.723 1.063 1.083 1.602 2.613 1.602 4.547v9.253H72.45v-1.47c-.943.88-2.448 1.78-4.655 1.78-2.834 0-5.703-1.694-5.703-4.93V16.9c-.002-1.625.64-2.963 1.852-3.87 1.13-.838 2.724-1.283 4.616-1.283 1.62 0 2.75.192 3.89.485-.045-2.23-1.307-3.36-3.753-3.36-1.432 0-2.7.305-4.106.99l-.427.213-.92-2.58.348-.168c1.863-.906 3.404-1.276 5.325-1.276zm2.35 12.258c.796-.638 1.217-1.492 1.217-2.472v-1.01c-.955-.258-2.14-.51-3.707-.51-2.315 0-3.696.925-3.696 2.472v.057c0 1.604 1.57 2.442 3.123 2.442 1.185 0 2.273-.348 3.062-.98zm6.81 3.265v-15.3h2.962v15.3h-2.963zM79.554 0C80.74 0 81.7.964 81.7 2.148c0 1.183-.96 2.147-2.145 2.147-1.183 0-2.146-.964-2.146-2.147C77.41.964 78.37 0 79.554 0zM91.12 5.966c3.552 0 5.846 2.44 5.846 6.213v9.393h-2.96v-8.865c0-2.53-1.237-3.923-3.485-3.923-2.24 0-3.807 1.682-3.807 4.09v8.698h-2.96v-15.3h2.96v1.634c1.146-1.305 2.594-1.94 4.408-1.94z"
                    fill="#FEFEFE"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <ul className="footer-main-nav-bar__links-left-col" data-testid="desktop-nav">
            <li>
              <a href="https://support.domain.com.au/hc/en-us" className="nav-item">
                Help
              </a>
            </li>
            <li>
              <a href="https://www.domain.com.au/group/contact-us/" className="nav-item">
                Contact
              </a>
            </li>
            <li>
              <a href="https://www.domain.com.au/group/" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="https://www.domain.com.au/group/career/" className="nav-item">
                Careers
              </a>
            </li>
            <li>
              <a href="https://www.domain.com.au/product/mobile/" className="nav-item">
                Mobile
              </a>
            </li>
            <li>
              <a href="https://advertisers.com.au/domain" className="nav-item">
                Place an ad
              </a>
            </li>
          </ul>
          <ul className="footer-main-nav-bar__links" data-testid="agency-nav">
            <li>
              <a href="https://agent.domain.com.au" data-testid="agency-centre-link" className="agency-link">
                Domain for Agents
              </a>
            </li>
            <li>
              <a
                href="//admin.domain.com.au/"
                rel="nofollow"
                data-testid="agent-admin-link"
                className="button is-a-tag is-icon is-ghost is-small"
              >
                <span className="button__icon is-left">
                  <svg viewBox="0 0 24 24" className="domain-icon is-small" aria-hidden="true">
                    <path
                      d="M7 9h10a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-6a2 2 0 0 1 2-2zm1 0V7a4 4 0 0 1 4-4 4 4 0 0 1 4 4v2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                    <circle fill="currentColor" cx="12" cy="14" r="2"></circle>
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M12 15v2"></path>
                  </svg>
                </span>
                <span className="button__label">Agent admin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterMainNavBar;
