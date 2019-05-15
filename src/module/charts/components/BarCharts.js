import React from 'react';
import {BarChart, XAxis, YAxis, Bar, Cell, ResponsiveContainer} from 'recharts';
import BoxWrapper from '../../common/BoxWrapper';
import {data} from '../constants/data';
let abbreviate = require('number-abbreviate');

const formatter = value => `${abbreviate(value)}`;
const TickFormater = props => {
  const {x, y, payload} = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        fontSize={10}
        textAnchor="end"
        fill="#666"
        transform="rotate(-25)">
        {payload.value}
      </text>
    </g>
  );
};

const BarCharts = ({children}) => {
  return (
    <BoxWrapper>
      {children}
      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name" interval={0} tick={<TickFormater />} />
          <YAxis tickFormatter={formatter} />
          <Bar dataKey="pv" barSize={40} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </BoxWrapper>
  );
};

export default BarCharts;
