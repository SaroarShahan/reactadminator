import React, {Component, Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from './../../common/Loader';

const Calendar = lazy(() => import('../containers/Calendar'));

class CalenadrRoute extends Component {
  render() {
    return (
      <Suspense fallback={<Loader fullscreen />}>
        <Switch>
          <Route exact path="/readminator/calendar" component={Calendar} />
        </Switch>
      </Suspense>
    );
  }
}

export default CalenadrRoute;
