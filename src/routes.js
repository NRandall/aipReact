import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import StoreListing from './containers/store_listing';
import StoreDetail from './containers/store_detail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StoreListing} />
    <Route path="store/:id" component={StoreDetail} />
  </Route>

);
