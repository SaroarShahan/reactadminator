import React from 'react';
import Sidebar from './Sidebar';
import {Switch} from 'react-router-dom';
import {MainRoute} from '../route/MainRoute';
import RouteRendered from '../route/RouteRendered';

const App = () => {
  return (
    <>
      <Sidebar>
        <Switch>
          {MainRoute.map((data, index) => (
            <RouteRendered
              {...data === '/' && {exact: true}}
              key={index}
              path={data.path}
              component={data.component}
            />
          ))}
        </Switch>
      </Sidebar>
    </>
  );
};

export default App;
