import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Icon,
  Radio
} from "@chakra-ui/react";
import { MdBarChart } from "react-icons/md";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React from "react";

export default function CircularProgressCountUp() {

  return (
    <Box width="50%" height="18vh" bg='white' borderRadius='10px' boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)" justifyContent="center">
      <Text transform='translate(3%,2%)' fontSize='xl'>Puissance</Text>
      <Flex>
        <CircularProgress value={63} size="98px" thickness="6px" color="#FFC163" transform='translate(30%,0%)' />
        <CircularProgressLabel position="fixed" color="black" fontWeight="bold" fontSize transform='translate(-41.5%,-306%)'>
          18kwh
        </CircularProgressLabel>
        <Flex flexDirection='column' transform='translate(90%,25%)'>
        <Radio size='sm' name='1' colorScheme='orange' mb='10px'>
          Elevéé
        </Radio>
        <Radio size='sm' name='1' colorScheme='green' >
          Faible
        </Radio>
        </Flex>
        
      </Flex>


    </Box>
  );
}