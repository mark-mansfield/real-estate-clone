import React from 'react';
import FooterMainNavBar from './FooterMainNavBar';
import FooterMainContent from './FooterMainContent';
import FooterSubNavBar from '../stateful/FooterSubNavBar';
import '../../styles/footer-structure.css';
const Footer = () => {
  return (
    <footer className="footer" style={{ position: 'relative', zIndex: '50' }}>
      <div className="footer-copyright">
        <small className="footer_copyright-text">&copy; Domain Holdings Australia</small>
      </div>

      <FooterMainNavBar />
      <FooterMainContent />
      <FooterSubNavBar />
    </footer>
  );
};
export default Footer;
