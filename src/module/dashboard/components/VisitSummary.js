import React from 'react';
import styled from 'styled-components';
import BoxWrapper from './../../common/BoxWrapper';

const VisitSummary = () => {
  return (
    <div className="columns is-desktop">
      <div className="column">
        <BoxWrapper>
          <Card>
            <Title>Total Visits</Title>
            <Count status="visit">+10%</Count>
          </Card>
        </BoxWrapper>
      </div>
      <div className="column">
        <BoxWrapper>
          <Card>
            <Title>Total Page Views</Title>
            <Count status="views">-7%</Count>
          </Card>
        </BoxWrapper>
      </div>
      <div className="column">
        <BoxWrapper>
          <Card>
            <Title>Unique Visitor</Title>
            <Count status="visitor">~12%</Count>
          </Card>
        </BoxWrapper>
      </div>
      <div className="column">
        <BoxWrapper>
          <Card>
            <Title>Bounce Rate</Title>
            <Count>33%</Count>
          </Card>
        </BoxWrapper>
      </div>
    </div>
  );
};

export default VisitSummary;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0;
  color: #72777a;
`;

const Count = styled.span`
  padding: 5px 15px;
  border-radius: 25px;
  color: #4caf50;
  font-size: 14px;
  background-color: ${({status}) =>
    status === 'visit'
      ? '#e8f5e9'
      : status === 'views'
      ? '#ffebee'
      : status === 'visitor'
      ? '#f3e5f5'
      : '#e3f2fd'};
  color: ${({status}) =>
    status === 'visit'
      ? '#4caf50'
      : status === 'views'
      ? '#f44336'
      : status === 'visitor'
      ? '#9c27b0'
      : '#2196f3'};
`;
