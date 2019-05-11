import React, {Component, Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store';
import RouteRendered from '../module/core/route/RouteRendered';

const MainContainer = lazy(() => import('../module/core/components/App'));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <RouteRendered path="/" component={MainContainer} />
          </Switch>
        </Suspense>
      </Provider>
    );
  }
}

export default App;
