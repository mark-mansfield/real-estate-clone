import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../styles/AppPromoter-structure.css';
const AppPromoter = () => {
  return (
    <div className="domain-home__app-promoter">
      <section className="app-promoter__wrapper">
        <div className="app-promoter-footer-strip-content-wrap">
          <div>
            <h3 data-testid="app-promoter-footer-strip-heading" className="css-1t0luvr">
              Download the property app that lets you hunt together
            </h3>
            <p className="css-usyual">Get a better view of what you both want. Shortlist together in the Domain app.</p>
            <a
              data-testid="app-promoter-footer-strip-banner-link"
              href="https://apps.apple.com/app/apple-store/id319908646?pt=270216&amp;ct=HomepageShortlistTogether&amp;mt=8"
              className="css-9dmsvx"
            />
            <a>
              <img
                src="https://static.domain.com.au/content/fe-static/@domain-group/fe-co-app-promoter-footer-strip/static/apple-store_12e927c0.svg"
                alt="Download our app from Apple App Store"
                height="55px"
                style={{ marginRight: '54px' }}
              />
            </a>
            <a
              data-testid="app-promoter-footer-strip-banner-link"
              href="https://play.google.com/store/apps/details?id=com.fairfax.domain&amp;referrer=utm_source%3DDomain%26utm_medium%3DHomepageShortlistTogether%26utm_term%3DBottom%252Blink%26utm_campaign%3DDomain%2520Android%2520app"
              className="css-9dmsvx"
            >
              <img
                src="https://static.domain.com.au/content/fe-static/@domain-group/fe-co-app-promoter-footer-strip/static/google-play_c8d9c1a1.png"
                alt="Download our app from Google Play Store"
                height="55px"
              />
            </a>
          </div>
          <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
            <a href="https://www.domain.com.au/mobile" className="css-5eh2bk">
              <img
                src="https://static.domain.com.au/content/fe-static/@domain-group/fe-co-app-promoter-footer-strip/static/iPhoneX_b5a75146.png"
                data-testid="app-promoter-footer-strip-phone-image"
                alt="Download our app from Apple App store"
                className="css-iq305g"
              />
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default AppPromoter;
