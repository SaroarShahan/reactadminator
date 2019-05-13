import React, {Component, Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from '../../common/Loader';

const FormsContainer = lazy(() => import('../containers/FormsContainer'));

class FormRoute extends Component {
  render() {
    return (
      <Suspense fallback={<Loader fullscreen />}>
        <Switch>
          <Route exact path="/forms" component={FormsContainer} />
        </Switch>
      </Suspense>
    );
  }
}

export default FormRoute;
