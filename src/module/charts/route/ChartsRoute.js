import React, {Component, Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';

const ChartsContainer = lazy(() =>
  import('../containers/ChartsContainer').then(mod => ({
    default: mod.ChartsContainer
  }))
);

class ChartsRoute extends Component {
  render() {
    return (
      <Suspense>
        <Switch>
          <Route exact path="/charts" component={ChartsContainer} />
        </Switch>
      </Suspense>
    );
  }
}

export default ChartsRoute;
