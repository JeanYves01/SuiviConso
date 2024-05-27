import React from 'react';
import ReactApexChart from "react-apexcharts";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  LineChart,
  AreaChart,
  Area,
  Line,

  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function MyLineChart(props) {
  const data = [
    {
      name: '07:02:10',
     
      Conso: 220,
      
    },
    {
      name: '07:02:20',
     
      Conso: 306,
      
    },
    {
      name: '07:02:30',
     
      Conso: 100,
      
    },
    {
      name: '07:02:40',
     
      Conso: 340,
      
    },
    {
      name: '07:02:50',
     
      Conso: 215,
      
    },
    {
      name: '07:03:00',
     
      Conso: 402,
      
    },
    {
      name: '07:03:10',
     
      Conso: 190,
      
    },
  ];

  return (
    <Box width='85%' height="35vh" bg='white' borderRadius='10px'>
      <Flex justify="center" align="center"  >
        <Box w="95%" marginTop='10px'>
          <Text fontSize="xl" marginBottom='15px'>Consommation actuelle</Text>

          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="20%" stopColor="#7E6CF1" />
                  <stop offset="80%" stopColor="#7E6CF1" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 5" />
              <XAxis dataKey="name" fontSize='12px' />
              <YAxis fontSize='12px' />
              <Tooltip />
              <Area type="monotone" dataKey="Conso" stroke="#7E6CF1" fill="url(#fillGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

      </Flex>
    </Box>

  );
}