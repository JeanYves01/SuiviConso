// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Box,
  Icon
} from "@chakra-ui/react";
import { MdBarChart } from "react-icons/md";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React from "react";

export default function Default(props) {
  const { startContent, endContent, name, growth, value, style } = props;
  const textColor = useColorModeValue("black", "white");
  const textColorSecondary = "black";

  return (
    <Box bg='#FFFFFF' width='338px' height='15vh' borderRadius='10px' boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)" cursor='pointer'>
      <Box>
        <Text transform='translate(8%,40%)' fontSize='xl' color='#FFB038' fontWeight='bold'>Energie consommée</Text>
        <Flex transform='translate(8%,120%)' >
          <Icon w='20px' h='30px' as={MdBarChart} color='#FFB038'  />
          <Text fontSize='xl' color='#FFB038' transform='translate(20%,-1%)' fontWeight={500}>90kwh</Text>
        </Flex>
      </Box>
    </Box>
  );
}
