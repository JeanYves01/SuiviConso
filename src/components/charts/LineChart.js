import React from 'react';
import ReactApexChart from "react-apexcharts";
import { Box, Flex } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function MyLineChart (props) {
  const data = [
    { name: 'Sem 1', Conso: 5200 },
    { name: 'Sem 2', Conso: 9000 },
    { name: 'Sem 3', Conso: 5000 },
    { name: 'Sem 4', Conso: 5300 },
    { name: 'Sem 5', Conso: 1800 },
    { name: 'Sem 6', Conso: 2100 },
    { name: 'Sem 7', Conso: 1200 },
    { name: 'Sem 8', Conso: 4300 },
  ];
   
  return (
    <Flex justify="center" align="center" height="300px">
      <Box width="95%" height="100%">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              
              dataKey="Conso"
              stroke="#FA9A0B"
              fill="#FA9A0B"
              fillOpacity={1}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
}