import React, {Component, Suspense, lazy} from 'react';
import {Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store';
import RouteRendered from '../module/core/route/RouteRendered';
import Loader from '../module/common/Loader';

const MainContainer = lazy(() => import('../module/core/components/App'));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<Loader fullscreen />}>
          <Switch>
            <RouteRendered path="/" component={MainContainer} />
          </Switch>
        </Suspense>
      </Provider>
    );
  }
}

export default App;
