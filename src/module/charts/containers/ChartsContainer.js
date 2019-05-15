import React from 'react';
import {withRouter} from 'react-router-dom';
import LineCharts from '../components/LineCharts';

const Charts = () => {
  return (
    <div className="columns is-mobile">
      <div className="column">
        <LineCharts />
      </div>
      <div className="column">dfasdfsa</div>
    </div>
  );
};

export const ChartsContainer = withRouter(Charts);
