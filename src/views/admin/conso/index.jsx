
import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import {
  MdAddTask,
  MdArrowCircleUp,
  MdArrowDownward,
  MdArrowDropUp,
  MdArrowForward,
  MdArrowOutward,
  MdArrowUpward,
  MdAttachMoney,
  MdBarChart,
  MdDirections,
  MdElectricBolt,
  MdFileCopy,
  MdMultilineChart,
  MdOutlineAddChart,
  MdOutlineArrowDropUp,
  MdOutlineChair,
  MdOutlineWaterfallChart,
  MdStackedLineChart,
  MdTrendingUp,
  MdWaterfallChart,
} from "react-icons/md";
// Custom components
import AeraChart from "views/admin/conso/components/AeraChart";
import BarChart from "views/admin/conso/components/BarChart";
import Alerte from "views/admin/conso/components/Alerte";
import PieChart from "views/admin/conso/components/PieChart";
import CircularProgressBar from "views/admin/conso/components/CircularProgressBar";

import Card from "components/card/Card.js";


export default function Conso() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Card mt={{ base: "180px", md: "80px", xl: "76px", }} height='75vh' bg='white' transform='translate(0%, 7%)'>
      {/* Main Fields */}
      <Flex
        width='100%'
        display='flex'
        flexDirection='row'
        gap='0px'
        position='absolute'

      >
        <Flex
          flexDirection='column'
          width='50%' gap="7px">
          
          <AeraChart />
         
          

          <Box bg='white' marginTop='20px' width='95%' height='36vh' borderRadius='10px'>
            <Alerte />
          </Box>

        </Flex>
        <Flex
          flexDirection='column'
          width='45%' gap='10px'>
          <Flex flexDirection='column' gap='10px'>
            <Flex flexDirection='row' gap='10px' >
              <Box bg='#FFC163'
                width='100%'
                height='15vh'
                borderRadius='10px'
                cursor='pointer'
                boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
                opacity='1'
                _hover={{
                  bg: '#EF7D00',  // Changez la couleur de survol ici
                  opacity: '1',    // Changez l'opacité au survol
                  transition: 'all 0.3s ease-in-out' // Ajout de la transition
                }}>
                <Flex flexDirection='column' gap='35px'>
                  <Flex justifyContent='center' >
                    <Text color='#FFFFFF' fontSize='2xl' transform='translate(-63%,20%)' >+15kWh</Text>
                    <Flex transform='translate(75%,70%)' width='20%' height='3vh' bg='#EF7D00' borderRadius='5px'>
                      <Text fontSize='sm' color='white'>+12%</Text>
                      <Icon w='20px' h='35px' as={MdTrendingUp} color='#FFFFFF' transform='translate(2%,-18%)' />
                    </Flex>

                  </Flex>
                  <Flex flexDirection='row' gap='10px' transform='translate(8%,-15%)'>
                    <Icon mt='5px' w='20px' h='20px' as={MdBarChart} color='#FFFFFF' />
                    <Text fontSize='xl' fontWeight='bold' color='#FFFFFF'>Consommation</Text>

                  </Flex>
                </Flex>
              </Box>
              <Box bg='#008F75'
                width='100%'
                height='15vh'
                borderRadius='10px'
                cursor='pointer'
                boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
                opacity='0.7'
                _hover={{
                  bg: '#008F75',  // Changez la couleur de survol ici
                  opacity: '1',    // Changez l'opacité au survol
                  transition: 'all 0.3s ease-in-out' // Ajout de la transition
                }}>
                <Flex flexDirection='column' gap='35px'>
                  <Flex justifyContent='center' transform='translate(-31%,20%)'>
                    <Icon w='20px' h='35px' as={MdArrowDownward} color='white' />
                    <Text color='white' fontSize='2xl'>218 V</Text>
                  </Flex>
                  <Flex flexDirection='row' gap='20px' transform='translate(8%,-15%)' >
                    <Icon mt='5px' w='20px' h='20px' as={MdElectricBolt} color='white' />
                    <Text fontSize='xl' fontWeight='bold' color='white'>Tension</Text>

                  </Flex>
                </Flex>
              </Box>
            </Flex>

            <Flex flexDirection='row' gap='10px'>
              <CircularProgressBar />
              <PieChart />
            </Flex>

          </Flex>
          <BarChart />
        </Flex>

      </Flex>
    </Card>
  );
}
