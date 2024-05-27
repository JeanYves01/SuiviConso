import React, { PureComponent } from 'react';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import DropdownCalendar from "views/admin/dataTables/components/Calendrier";
import CommonlyUsedComponents from "views/admin/dataTables/components/Demo";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',

    pv: 2400,
    amt: 0,
  },
  {
    name: 'Fev',

    pv: 3600,
    amt: 1000,
  },
  {
    name: 'Mar',

    pv: 2000,
    amt: 0,
  },
  {
    name: 'Avl',

    pv: 1000,
    amt: 0,
  },
  {
    name: 'Mai',

    pv: 1700,
    amt: 0,
  },
  {
    name: 'Jun',

    pv: 3600,
    amt: 2000,
  },
  {
    name: 'Jul',

    pv: 3500,
    amt: 1100,
  },
  {
    name: 'Aout',

    pv: 3000,
    amt: 0,
  },
  {
    name: 'Sep',

    pv: 3000,
    amt: 0,
  },
  {
    name: 'Oct',

    pv: 1500,
    amt: 0,
  },
  {
    name: 'Nov',

    pv: 3200,
    amt: 1500,
  },
  {
    name: 'Dec',

    pv: 3600,
    amt: 1200,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <Box width='100%' height="41vh" bg='white' borderRadius='10px'>
        <Box w="100%" marginTop='10px'>
          <Flex gap='100px' mt='20px' ml='15px'>
            <Text fontSize="xl" marginBottom='50px' >Historique</Text>

            <DropdownCalendar/>
          </Flex>

          <ResponsiveContainer width="100%" height={200} marginTop='40px'>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#84F8FF" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#84F8FF" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="red" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="red" stopOpacity={0.09} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="pv" stackId="a" fill="url(#colorPv)" />
              <Bar dataKey="amt" stackId="a" fill="url(#colorAmt)" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    );
  }
}

