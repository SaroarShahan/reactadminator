import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
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

const LineCharts = () => {
  console.log(data);
  return (
    <BoxWrapper>
      <ResponsiveContainer width={'100%'} height={300}>
        <LineChart
          data={data}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} tick={<TickFormater />} />
          <YAxis tickFormatter={formatter} />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </BoxWrapper>
  );
};

export default LineCharts;
