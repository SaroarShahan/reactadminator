import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import VisitSummary from '../components/VisitSummary';
import LineCharts from './../../charts/components/LineCharts';

const Dashboard = () => {
  return (
    <>
      <VisitSummary />
      <LineCharts>
        <Title>Monthly Stats</Title>
      </LineCharts>
    </>
  );
};

export const DashboardContainer = withRouter(Dashboard);

const Title = styled.h2`
  color: #313435;
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;
