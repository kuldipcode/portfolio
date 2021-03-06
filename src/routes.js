import React from 'react';
import {
  IndexRoute,
  Route} from 'react-router';
import {
    App,
    NotFound,
    ProjectPage,
    HomePage,
    ProjectFroDev
  } from 'containers';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/projects" component={ProjectPage} >
        <Route path="/projects/frodev" component={ProjectFroDev} />
      </Route>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
