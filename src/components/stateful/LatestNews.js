import React from 'react';
import '../../styles/latest-news-structure.css';

const LatestNews = ({ title, data }) => {
  return (
    <div className="latest-news">
      <h2>{title}</h2>
      <div className="latest-news__wrapper">
        {data.map((newsItem, idx) => {
          return (
            <div className="news-card" key={idx}>
              <a className="" href={newsItem.link} alt={newsItem.text} title={newsItem.text}>
                <img
                  className="news-card__image"
                  alt={newsItem.text}
                  src={newsItem.image}
                  style={{ width: '100%', height: '153px' }}
                />
                <div className="news-card__text">{newsItem.text}</div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestNews;
