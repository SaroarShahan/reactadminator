import React, {Component, Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from '../../common/Loader';

const ChartsContainer = lazy(() =>
  import('../containers/ChartsContainer').then(mod => ({
    default: mod.ChartsContainer
  }))
);

class ChartsRoute extends Component {
  render() {
    return (
      <Suspense fallback={<Loader fullscreen />}>
        <Switch>
          <Route exact path="/readminator/charts" component={ChartsContainer} />
        </Switch>
      </Suspense>
    );
  }
}

export default ChartsRoute;
