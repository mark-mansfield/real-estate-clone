import React from 'react';
import '../styles/layout.css';
import HeaderToolBar from '../components/dumb/HeaderToolBar';
import SubsidiaryNav from '../components/dumb/SubsidiaryNav';
import Footer from '../components/dumb/Footer';
const Layout = ({ title = 'Title', description = 'Description', authenticated = false, className, children }) => {
  return (
    <div>
      <div className="header">
        <SubsidiaryNav />
        <HeaderToolBar />
      </div>

      <div className="domain-home__background">
        <div className="domain-home__background-image"></div>
      </div>
      <div className="domain-home__place-an-ad-wrap">
        <a href="https://advertisers.com.au/domain" className="domain-home__place-an-ad-link" rel="nofollow">
          + Place an ad
        </a>
      </div>

      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
