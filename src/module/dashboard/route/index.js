import React, {Component, Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Loader from '../../common/Loader';

const DashboardContainer = lazy(() =>
  import('../containers/DashboardContainer').then(mod => ({
    default: mod.DashboardContainer
  }))
);

class DashboardRoute extends Component {
  render() {
    return (
      <Suspense fallback={<Loader fullscreen />}>
        <Switch>
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Redirect exact from="/" to="/dashboard" />
          <Route render={() => <div>Page not found</div>} />
        </Switch>
      </Suspense>
    );
  }
}

export default DashboardRoute;
