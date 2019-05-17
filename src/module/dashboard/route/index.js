import React, {Component, Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Loader from '../../common/Loader';
import {PageNotFound} from '../../common/NotFound';

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
          <Route render={() => <PageNotFound history={this.props.history} />} />
        </Switch>
      </Suspense>
    );
  }
}

export default DashboardRoute;
