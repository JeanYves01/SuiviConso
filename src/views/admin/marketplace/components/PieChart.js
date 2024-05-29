/* eslint-disable no-shadow */
import React from 'react';
import { PieChart, Pie, Cell, Text as RechartsText } from 'recharts';
import { Box, Center, Text } from '@chakra-ui/react';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 30, color: 'url(#grad1)' }, // Use gradient ID
  { name: 'B', value: 50, color: 'url(#grad2)' },
  // { name: 'C', value: 25, color: '#0000ff' },
];
const cx = 142;
const cy = 62;
const iR = 40;
const oR = 50;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key="path" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />,
  ];
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <RechartsText x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </RechartsText>
  );
};

export default function MyPieChart(props) {
  return (

      <Box width="50%" height="15vh" bg='white'  borderRadius='10px' boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)" >
        <Text fontSize='xl' transform='translate(5%, 0%)'>Intensité du circuit</Text>
        <PieChart width={400} height={500} >
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#33FF91', stopOpacity: 1}} />
              <stop offset="100%" style={{ stopColor: '#33FF91', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#FF8A00', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#FF8A00', stopOpacity:  0.8}} />
            </linearGradient>
          </defs>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
            // label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, '#ECE9FF')}
        </PieChart>
      </Box>

  );
}
