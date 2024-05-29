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
    Icon,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/card/Card.js";
  // Custom icons
  import React from "react";
import { MdBarChart } from "react-icons/md";
  
  export default function Default(props) {
    const { startContent, endContent, name, growth, value, style } = props;
    const textColor = useColorModeValue("black", "white");
    const textColorSecondary = "black";
  
    return (
      <Box   >
        <Box>
        <Text transform='translate(-8%,-40%)' fontSize='xl' color='#FFFFFF' fontWeight='bold'>Seuil de consommation</Text>
        <Flex transform='translate(8%,40%)' >
          <Icon w='20px' h='30px' as={MdBarChart} color='#FFFFFF'  />
          <Text fontSize='xl' color='#FFFFFF' transform='translate(20%,-1%)'>90kwh</Text>
        </Flex>
        </Box>
        

      
          
      </Box>



     
    );
  }
  

   // <Card  
      // bg='#FFD18B' >
        
      //   <Flex
      //     my='auto'
      //     h='100%'
      //     align={{ base: "center", xl: "start" }}
      //     justify={{ base: "center", xl: "start" }}
      //     cursor='pointer'>
      //     
      //   </Flex>
      // </Card>