import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import LineCharts from '../components/LineCharts';

const Charts = () => {
  return (
    <div className="columns is-mobile">
      <div className="column">
        <LineCharts>
          <Title>Line Chart</Title>
        </LineCharts>
      </div>
      <div className="column">dfasdfsa</div>
    </div>
  );
};

export const ChartsContainer = withRouter(Charts);

const Title = styled.h2`
  color: #313435;
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;
