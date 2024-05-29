import React, { PureComponent } from 'react';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import DropdownCalendar from "views/admin/dataTables/components/Calendrier";
import CommonlyUsedComponents from "views/admin/dataTables/components/Demo";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',

    Conso: 2400,
   
  },
  {
    name: 'Fev',

    Conso: 3600,
    
  },
  {
    name: 'Mar',

    Conso: 2000,
   
  },
  {
    name: 'Avl',

    Conso: 1000,
   
  },
  {
    name: 'Mai',

    Conso: 1700,
    
  },
  {
    name: 'Jun',

    Conso: 3600,
    
  },
  {
    name: 'Jul',

    Conso: 3500,
  
  },
  {
    name: 'Aout',

    Conso: 3000,
  
  },
  {
    name: 'Sep',

    Conso: 3000,

  },
  {
    name: 'Oct',

    Conso: 1500,
   
  },
  {
    name: 'Nov',

    Conso: 3200,
    
  },
  {
    name: 'Dec',

    Conso: 3600,
   
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <Box width='100%' height="38vh" bg='white' borderRadius='10px' boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)">
        <Box w="100%" marginTop='10px' >
          <Flex gap='100px' mt='20px' ml='15px' transform='translate(6%,-3%)'>
            <Text fontSize="xl"  >Historique</Text>

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
                  <stop offset="5%" stopColor="#FFB038" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#FFB038" stopOpacity={0.8} />
                </linearGradient>
                
              </defs>
            
              <XAxis dataKey="name" />
              <YAxis fontSize='12px'/>
              <Tooltip />

              <Bar dataKey="Conso" stackId="a" fill="url(#colorPv)" />
              
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    );
  }
}

