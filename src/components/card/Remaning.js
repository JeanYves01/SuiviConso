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
      <Box bg='#008F75' width='338px' height='15vh' borderRadius='10px' boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
      opacity='0.7'
      cursor='pointer'
      _hover={{
        bg: '#008F75',  // Changez la couleur de survol ici
        opacity: '1',    // Changez l'opacité au survol
        transition: 'all 0.3s ease-in-out' // Ajout de la transition
      }}>
        <Box>
        <Text transform='translate(8%,40%)' fontSize='xl' color='#FFFFFF' fontWeight='bold'>Energie restante</Text>
        <Flex transform='translate(8%,120%)' >
          <Icon w='20px' h='30px' as={MdBarChart} color='#FFFFFF'  />
          <Text fontSize='xl' color='#FFFFFF' transform='translate(20%,-1%)'>90kwh</Text>
        </Flex>
        </Box>
    </Box>
      // <Card  
      // bg='#BBF5FF'>
        
      //   <Flex
      //     my='auto'
      //     h='100%'
      //     align={{ base: "center", xl: "start" }}
      //     justify={{ base: "center", xl: "center" }}
      //     cursor='pointer'>
      //     {style}
      //     {startContent}
  
      //     <Stat my='auto'  ms={startContent ? "2px" : "0px"}>
      //       <StatLabel
      //         lineHeight='100%'
      //         color={textColorSecondary}
      //         fontSize={{
      //           base: "sm",
      //           md: "xl",
      //           lg: "xl"
      //         }}
      //         transform='translate(-8%,0%)'>
      //         {name}
      //       </StatLabel>
      //       <StatNumber
      //         color={textColor}
      //         mt='34px'
      //         fontSize={{
      //           base: "xl",
      //         }} transform='translate(6%,0%)'>
      //         {value}
      //       </StatNumber>
      //       {growth ? (
      //         <Flex align='center'>
      //           <Text color='green.500' fontSize='xs' fontWeight='700' me='5px'>
      //             {growth}
      //           </Text>
      //           <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
      //             since last month
      //           </Text>
      //         </Flex>
      //       ) : null}
      //     </Stat>
      //     <Flex ms='auto' w='max-content'>
      //       {endContent}
      //     </Flex>
      //   </Flex>
      // </Card>
    );
  }
  