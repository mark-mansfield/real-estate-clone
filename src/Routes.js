import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ListingDetail from './components/ListingDetail';
import SearchResults from './components/stateful/searchResults';
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/listing/:listingId" exact component={ListingDetail} />
        <Route path="/:mode/search/:searchTerm" exact component={SearchResults} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
