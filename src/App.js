import React, { useState, useEffect } from 'react';
import Layout from './core/Layout';
import Search from './components/stateful/search';
import { authenticate } from './api/auth/auth';
import FeaturedProperties from './components/stateful/featuredProperties';
import RecommendedProperties from './components/stateful/ReccomendedProperties';
import AffordableProperties from './components/stateful/AffordableProperties';
import NewDevelopments from './components/stateful/NewDevelopments';
import WhileYouWereHere from './components/dumb/WhileYouWereHere';
import LatestNews from './components/stateful/LatestNews';
import AppPromoter from './components/dumb/AppPromoter';

const App = () => {
  const DOMAIN_PROJECT_CLIENT_ID = 'client_5709bdf41500dd4426e9a2bba8dc791d';
  const DOMAIN_PROJECT_SECRET = 'secret_42e45d9ac28d57752ec22ac4929ca135';
  const SLIDE_SPEED = 1100;
  const [latestNews, setLatestNews] = useState([
    {
      //
      link:
        'https://www.domain.com.au/living/heres-what-you-can-do-with-your-old-sleepout-reinventing-the-balcony-899282/',
      image:
        'https://res.akamaized.net/domain/image/upload/t_web/c_fill,w_320/c_fill,w_300,h_200/v1572394142/An_elevated_bedroom_with_all_the_breezy_attributes_of_a_sleepout._Pix_Katherine_Lu_dk8fmt.jpg',
      text: 'This renovation brings back the way our grandparents slept in their houses'
    },
    {
      //
      link:
        'https://www.domain.com.au/living/heres-what-you-can-do-with-your-old-sleepout-reinventing-the-balcony-899282/',
      image:
        'https://res.akamaized.net/domain/image/upload/t_web/c_fill,w_320/c_fill,w_300,h_200/v1572394142/An_elevated_bedroom_with_all_the_breezy_attributes_of_a_sleepout._Pix_Katherine_Lu_dk8fmt.jpg',
      text: 'This renovation brings back the way our grandparents slept in their houses'
    },
    {
      //
      link:
        'https://www.domain.com.au/living/heres-what-you-can-do-with-your-old-sleepout-reinventing-the-balcony-899282/',
      image:
        'https://res.akamaized.net/domain/image/upload/t_web/c_fill,w_320/c_fill,w_300,h_200/v1572394142/An_elevated_bedroom_with_all_the_breezy_attributes_of_a_sleepout._Pix_Katherine_Lu_dk8fmt.jpg',
      text: 'This renovation brings back the way our grandparents slept in their houses'
    },
    ,
    {
      //
      link:
        'https://www.domain.com.au/living/heres-what-you-can-do-with-your-old-sleepout-reinventing-the-balcony-899282/',
      image:
        'https://res.akamaized.net/domain/image/upload/t_web/c_fill,w_320/c_fill,w_300,h_200/v1572394142/An_elevated_bedroom_with_all_the_breezy_attributes_of_a_sleepout._Pix_Katherine_Lu_dk8fmt.jpg',
      text: 'This renovation brings back the way our grandparents slept in their houses'
    }
  ]);
  const [recommendedData, setRecommendedData] = useState([
    {
      label: 'New',
      image:
        'https://rimh2.domainstatic.com.au/vuQY0s1WKw853iAuCd4NDPhrwa8=/660x440/filters:format(jpeg):quality(80)/2015810806_1_1_191024_051321-w1600-h1200',
      link: 'https://www.domain.com.au/b46-13-19-pastoral-circuit-pemulwuy-nsw-2145-2015810806',
      viewingDetails: 'Contact agent',
      streetAddress: 'B46/13-19 Pastoral Circuit',
      addressLocality: 'Pemulwuy',
      addressRegion: 'NSW',
      postalCode: '2145',
      features: { bathrooms: '2', carspaces: '3', bedrooms: '4' }
    },
    {
      label: 'New',
      image:
        'https://rimh2.domainstatic.com.au/vuQY0s1WKw853iAuCd4NDPhrwa8=/660x440/filters:format(jpeg):quality(80)/2015810806_1_1_191024_051321-w1600-h1200',
      link: 'https://www.domain.com.au/b46-13-19-pastoral-circuit-pemulwuy-nsw-2145-2015810806',
      viewingDetails: 'Contact agent',
      streetAddress: 'B46/13-19 Pastoral Circuit',
      addressLocality: 'Pemulwuy',
      addressRegion: 'NSW',
      postalCode: '2145',
      features: { bathrooms: '2', carspaces: '3', bedrooms: '4' }
    },
    {
      label: 'New',
      image:
        'https://rimh2.domainstatic.com.au/vuQY0s1WKw853iAuCd4NDPhrwa8=/660x440/filters:format(jpeg):quality(80)/2015810806_1_1_191024_051321-w1600-h1200',
      link: 'https://www.domain.com.au/b46-13-19-pastoral-circuit-pemulwuy-nsw-2145-2015810806',
      viewingDetails: 'Contact agent',
      streetAddress: 'B46/13-19 Pastoral Circuit',
      addressLocality: 'Pemulwuy',
      addressRegion: 'NSW',
      postalCode: '2145',
      features: { bathrooms: '2', carspaces: '3', bedrooms: '4' }
    },
    {
      label: 'New',
      image:
        'https://rimh2.domainstatic.com.au/vuQY0s1WKw853iAuCd4NDPhrwa8=/660x440/filters:format(jpeg):quality(80)/2015810806_1_1_191024_051321-w1600-h1200',
      link: 'https://www.domain.com.au/b46-13-19-pastoral-circuit-pemulwuy-nsw-2145-2015810806',
      viewingDetails: 'Contact agent',
      streetAddress: 'B46/13-19 Pastoral Circuit',
      addressLocality: 'Pemulwuy',
      addressRegion: 'NSW',
      postalCode: '2142',
      features: { bathrooms: '2', carspaces: '1', bedrooms: '4' }
    },
    {
      label: 'New',
      image:
        'https://rimh2.domainstatic.com.au/vuQY0s1WKw853iAuCd4NDPhrwa8=/660x440/filters:format(jpeg):quality(80)/2015810806_1_1_191024_051321-w1600-h1200',
      link: 'https://www.domain.com.au/b46-13-19-pastoral-circuit-pemulwuy-nsw-2145-2015810806',
      viewingDetails: 'Contact agent',
      streetAddress: 'B46/13-19 Pastoral Circuit',
      addressLocality: 'Pemulwuy',
      addressRegion: 'NSW',
      postalCode: '2145',
      features: { bathrooms: '2', carspaces: '3', bedrooms: '4' }
    },
    {
      label: 'New',
      image:
        'https://rimh2.domainstatic.com.au/vuQY0s1WKw853iAuCd4NDPhrwa8=/660x440/filters:format(jpeg):quality(80)/2015810806_1_1_191024_051321-w1600-h1200',
      link: 'https://www.domain.com.au/b46-13-19-pastoral-circuit-pemulwuy-nsw-2145-2015810806',
      viewingDetails: 'Contact agent',
      streetAddress: 'B46/13-19 Pastoral Circuit',
      addressLocality: 'Pemulwuy',
      addressRegion: 'NSW',
      postalCode: '2145',
      features: { bathrooms: '2', carspaces: '3', bedrooms: '4' }
    },
    {
      label: 'New',
      image:
        'https://rimh2.domainstatic.com.au/vuQY0s1WKw853iAuCd4NDPhrwa8=/660x440/filters:format(jpeg):quality(80)/2015810806_1_1_191024_051321-w1600-h1200',
      link: 'https://www.domain.com.au/b46-13-19-pastoral-circuit-pemulwuy-nsw-2145-2015810806',
      viewingDetails: 'Contact agent',
      streetAddress: 'B46/13-19 Pastoral Circuit',
      addressLocality: 'Pemulwuy',
      addressRegion: 'NSW',
      postalCode: '2145',
      features: { bathrooms: '2', carspaces: '3', bedrooms: '4' }
    },
    {
      label: 'New',
      image:
        'https://rimh2.domainstatic.com.au/vuQY0s1WKw853iAuCd4NDPhrwa8=/660x440/filters:format(jpeg):quality(80)/2015810806_1_1_191024_051321-w1600-h1200',
      link: 'https://www.domain.com.au/b46-13-19-pastoral-circuit-pemulwuy-nsw-2145-2015810806',
      viewingDetails: 'Contact agent',
      streetAddress: 'B46/13-19 Pastoral Circuit',
      addressLocality: 'Pemulwuy',
      addressRegion: 'NSW',
      postalCode: '2142',
      features: { bathrooms: '2', carspaces: '1', bedrooms: '4' }
    }
  ]);

  const [newDevelopementData, setNewDevelopementData] = useState([
    {
      propertyCount: 4,
      headline: 'REFINED',
      address: '51-55 Lindfield Avenue, Lindfield, NSW 2070',
      img:
        'https://rimh2.domainstatic.com.au/iLQO0RFcxbWtykxwyFfU-4UNH0A=/648x452/filters:format(jpeg):quality(80):no_upscale()/3156_1_13_191008_040654-w3410-h2160',
      link: 'https://www.domain.com.au/project/3156/refined-lindfield-nsw/'
    },
    {
      propertyCount: 5,
      headline: 'Eastlakes Live by Crown Group',
      address: '19 Evans Ave, Eastlakes, NSW 2018',
      img:
        'https://rimh2.domainstatic.com.au/L0FMY_cMxEXwv1UU3Oxgt59c6WM=/648x452/filters:format(jpeg):quality(80):no_upscale()/2821_6_13_190118_042958-w1600-h1070',
      link: 'https://www.domain.com.au/project/2821/eastlakes-live-by-crown-group-eastlakes-nsw/'
    },
    {
      propertyCount: 9,
      headline: 'Spring Square by Poly',
      address: '32 Kitchener Parade, Bankstown, NSW 2200',
      img:
        'https://rimh2.domainstatic.com.au/eLUeBStKC9ZSx31T60ZZkKRHX_E=/648x452/filters:format(jpeg):quality(80):no_upscale()/3667_1_13_190919_010350-w1324-h1080',
      link: 'https://www.domain.com.au/project/3667/spring-square-by-poly-bankstown-nsw/  '
    }
  ]);
  const [affordableData, setAffordableData] = useState([
    {
      description: 'Blue Mountains and Surrounds',
      propertyCount: 395
    },
    {
      description: 'Canterbury / Bankstown',
      propertyCount: 659
    },
    {
      description: 'Eastern Suburbs',
      propertyCount: 433
    },
    {
      description: 'Hawkesbury',
      propertyCount: 292
    },
    {
      description: 'Hills',
      propertyCount: 395
    },
    {
      description: 'Inner West',
      propertyCount: 359
    },
    {
      description: 'BlueMountains and Surrounds',
      propertyCount: 832
    },
    {
      description: 'Liverpool / Fairfield',
      propertyCount: 925
    },
    {
      description: 'Macurthur / Camden',
      propertyCount: 2011
    },
    {
      description: 'North Shore - Lower',
      propertyCount: 185
    },
    {
      description: 'North Shore - Upper',
      propertyCount: 311
    }
  ]);
  const [featuredData, setFeaturedData] = useState([
    {
      features: 'bath 2',
      agent: 'Knight Frank Australia – Prestige Residential',
      region: 'Sydney',
      state: 'NSW',
      image: 'https://strap.domain.com.au/dream-homes-nsw/DreamHomes2015783207.jpg',
      link: 'https://www.domain.com.au/503-27-barangaroo-avenue-sydney-nsw-2000-2015783207'
    },
    {
      features: 'bath 2',
      agent: 'Elders Real Estate Port Macquarie',
      region: 'Rawdon Island',
      state: 'NSW',
      image: 'https://strap.domain.com.au/dream-homes-nsw/DreamHomes2015814478.jpg',
      link: 'https://www.domain.com.au/479-rawdon-island-road-rawdon-island-nsw-2446-2015814478'
    },
    {
      features: 'bath 2',
      agent: 'Breakfast Point Realty',
      region: 'Breakfast Point',
      state: 'NSW',
      image: 'https://strap.domain.com.au/dream-homes-nsw/DreamHomes2015794296.jpg',
      link: 'https://www.domain.com.au/403-8-village-drive-breakfast-point-nsw-2137-2015794296'
    },
    {
      features: 'bath 2',
      agent: 'The Agency Inner West',
      region: 'Glebe',
      state: 'NSW',
      image: 'https://strap.domain.com.au/dream-homes-nsw/DreamHomes2015757883.jpg',
      link: 'https://www.domain.com.au/8-avenue-road-glebe-nsw-2037-2015757883'
    }
  ]);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [authError, setAuthError] = useState(false);

  const [hasToken, setHasToken] = useState(false);

  const getAccessToken = (clientId, secret) => {
    authenticate(clientId, secret).then(result => {
      if (result.error) {
        setAuthError(true);
      } else {
        setHasToken(true);
        setAuthSuccess(true);
        localStorage.setItem('_nekot', result.data.access_token);
      }
    });
  };

  useEffect(() => {
    if (!hasToken) {
      console.log('obtaining token');
      getAccessToken(DOMAIN_PROJECT_CLIENT_ID, DOMAIN_PROJECT_SECRET);
    }
  }, [hasToken]);

  return (
    <Layout
      title=""
      description="a clone of the domain.com.au website"
      className="domain-home__main-area"
      authenticated={authSuccess}
    >
      <Search />
      <FeaturedProperties title="Dream Homes" data={featuredData} slideSpeed={SLIDE_SPEED} />
      <RecommendedProperties title="We found these just for you" data={recommendedData} slideSpeed={SLIDE_SPEED} />
      <AffordableProperties title="Buy for under $850,000 in" data={affordableData} slideSpeed={SLIDE_SPEED} />
      <NewDevelopments title="New developments" data={newDevelopementData} />
      <WhileYouWereHere title="While you're here" />
      <LatestNews title="Latest News" data={latestNews} />
      <div className="domain-home__ads">
        <div className="adspot__wrapper">
          <div>
            <div id="adspot-970x250_728x90-pos-1" className="adspot__inner"></div>
          </div>
        </div>
      </div>

      <AppPromoter />

    </Layout>
  );
};

export default App;
