import React, { useState, useEffect, useCallback } from 'react';
import Card from '../card';
import { search, getListingLocations } from '../../api/apiCore';
import { wasSuburbSelected, wasStateSelected, wasPostCodeSelected } from '../../helpers/locationTypes';
const SearchResults = ({ match }) => {
  const listingTypeEnums = ['Rent', 'Sale'];
  const [propertyList, setPropertyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState(match.params.searchTerm);
  const [invalidSearchTerm, setInvalidSearchTerm] = useState(false);
  const [searchLocationQueryError, setSearchLocationQueryError] = useState(false);
  const [searchLocationQuerySuccess, setSearchLocationQuerySuccess] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [values, setValues] = useState({
    listingTypeParam: listingTypeEnums[0],
    updatedSinceParam: '2019-10-23T04:04:05.892Z',
    pageSize: 200 /*set to max limit for this example */,
    locations: [],
    sort: {
      sortKey: 'Price',
      direction: 'Ascending',
      proximityTo: {
        lat: 0,
        lon: 0
      }
    }
  });

  // post code and state included for free in response
  // input of "Bondi" could return "Bondi Junction" , or "Bondi", or "Bondi Forest"
  // we would want to grab the record that exact matches the input
  // capitalize first char of input to match record returned from the server
  const getLocations = () => {
    getListingLocations(searchTerm)
      .then(result => {
        console.log(result);
        if (result.data.length < 1) {
          setInvalidSearchTerm(true);
          setPropertyList([]);
        } else {
          //check for suburb or postcode
          if (wasSuburbSelected(searchTerm)) {
            setSuburbSearchQuery(searchTerm, result.data);
          }
          if (wasPostCodeSelected(searchTerm)) {
            setPostCodeSearchQuery(result.data[0]);
          }
          setInvalidSearchTerm(false);
        }
      })
      .catch(error => console.error(error));
  };

  const performSearch = () => {
    search(values)
      .then(result => {
        const filtered = result.data.filter(({ type }) => type !== 'Project');
        console.log(result);
        setPropertyList(filtered);
      })
      .catch();
  };

  const setSuburbSearchQuery = (searchTerm, results) => {
    const newLocationObj = [];
    let tmpObj = {};
    tmpObj = results.find(({ name }) => name === searchTerm[0].toUpperCase() + searchTerm.slice(1, searchTerm.length));
    newLocationObj.push(tmpObj);
    setValues({ ...values, locations: newLocationObj });
    setSearchLocationQuerySuccess(true);
  };

  const setPostCodeSearchQuery = result => {
    const newLocationObj = [];
    let tmpObj = {};
    tmpObj = {
      state: result.state.toUpperCase(),
      region: result.region,
      area: result.area,
      suburb: result.name,
      postCode: result.postcode,
      includeSurroundingSuburbs: true
    };
    newLocationObj.push(tmpObj);
    setValues({ ...values, locations: newLocationObj });
    setSearchLocationQuerySuccess(true);
  };

  const onInvalidSearchTerm = () => (
    <div className="alert alert-info">
      <h2>Invalid search term</h2> Only search by state , postcode , or suburb
    </div>
  );
  const onSearchLocationQueryError = () => <h2>Your location search returned 0 results</h2>;

  useEffect(() => {
    getLocations(match.params.searchTerm);
    if (searchLocationQuerySuccess) {
      performSearch();
    }
  }, [setSearchTerm]);

  console.log(match.params.mode);
  return (
    <div>
      {invalidSearchTerm && onInvalidSearchTerm()}
      {!setSearchLocationQueryError && onSearchLocationQueryError()}
      {searchLocationQuerySuccess && <h1>The location query was successful</h1>}
      <div className=" mt-5">
        {JSON.stringify(propertyList)}
        {/* {propertyList.length > 0 && <Card data={{ list: propertyList, searchterm: searchTerm }} />} */}
      </div>
    </div>
  );
};

export default SearchResults;
