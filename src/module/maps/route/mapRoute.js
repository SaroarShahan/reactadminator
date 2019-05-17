import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from './../../common/Loader';

const MapContainer = lazy(() => import('../containers/MapContainer'));

const mapRoute = () => {
  return (
    <Suspense fallback={<Loader fullscreen />}>
      <Switch>
        <Route exact path="/map" component={MapContainer} />
      </Switch>
    </Suspense>
  );
};

export default mapRoute;
