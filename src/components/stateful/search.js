import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/search-structure.css';
const Search = ({ onSearch }) => {
  const [queryUrlStr, setQueryUrlStr] = useState('');
  const [redirectToSearchResults, setRedirectToSearchResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [modes, setModes] = useState([
    {
      name: 'Buy',
      isSelected: true
    },
    {
      name: 'Rent',
      isSelected: false
    },
    {
      name: 'New Homes',
      isSelected: false
    },
    {
      name: 'Sold',
      isSelected: false
    },
    {
      name: 'Rural',
      isSelected: false
    }
  ]);

  const getModeSelected = () => {
    const currentMode = modes.find(({ isSelected }) => isSelected === true);
    return currentMode.name;
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSearchClicked = () => {
    updateSearchQuery(searchTerm, getModeSelected());
  };

  const handleFiltersClicked = () => {
    alert('filters clicked');
  };

  const handleModeChange = idx => {
    const newModes = [...modes];
    newModes.forEach(item => (item.isSelected = false));
    newModes[idx].isSelected = true;
    setModes(newModes);
    console.log(getModeSelected());
    // update UI tabs to reflect the mode selected
  };

  // update searchQuery
  /**
   *
   * @param {mode}  string add as route parameter
   * @param {inputText} string add  term [ postcode , suburb or state] as a route parameter
   */
  const updateSearchQuery = (inputText, mode) => {
    console.log(mode);
    setQueryUrlStr(`/${mode}/search/${inputText}`);
    setRedirectToSearchResults(true);
  };

  useEffect(() => {}, [modes]);

  return (
    <div className="search-wrapper">
      <h3 className="mt-5" style={{ textAlign: 'center', color: 'white' }}>
        Search Australia's home of property
      </h3>

      <div className="search column">
        <div className="search__layout">
          <div className="d-flex justify-content-start">
            {modes.map((item, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => handleModeChange(idx)}
                  className={
                    item.isSelected
                      ? 'button-tab btn-primary p-3 border-white  bg-success  font-weight-bold'
                      : 'btn-primary p-3 border-white  bg-white text-dark font-weight-bold btn-focus'
                  }
                  value={item.name}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <div className="input-group d-flex">
            <div className="input-item-wrapper col-10 d-flex align-items-center">
              <input
                className="form-control"
                placeholder="Search properties..."
                onChange={handleChange}
                placeholder="Try a suburb , State or postcode you want to live in...."
              ></input>
              <div className="filters " onClick={handleFiltersClicked}>
                <svg viewBox="0 0 24 24" className="domain-icon is-regular">
                  <path fill="none" stroke="#515b6e" strokeWidth="2" d="M3 19h2m6 0h10"></path>
                  <circle cx="8" cy="19" r="2.5" fill="none" stroke="#515b6e"></circle>
                  <path fill="none" stroke="#515b6e" strokeWidth="2" d="M3 5h2m6 0h10"></path>
                  <circle cx="8" cy="5" r="2.5" fill="none" stroke="#515b6e"></circle>
                  <path fill="none" stroke="#515b6e" strokeWidth="2" d="M21 12h-2m-6 0H3"></path>
                  <circle cx="16" cy="12" r="2.5" fill="none" stroke="#515b6e"></circle>
                </svg>
                <small>Filters</small>
              </div>
            </div>
            <div className="col-2 no-gutters" style={{ padding: '0px' }}>
              <button
                className="btn col-12"
                style={{ height: '100%', backgroundColor: 'var(--green)', color: 'white' }}
                onClick={onSearchClicked}
              >
                <h5>Search</h5>
              </button>
            </div>
          </div>
        </div>
      </div>

      {redirectToSearchResults ? (
        <Redirect
          to={{
            pathname: queryUrlStr
          }}
        />
      ) : null}
    </div>
  );
};
export default Search;
