// Chakra imports
// Chakra imports
import {
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Text,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/card/Card.js";
  // Custom icons
  import React from "react";
  
  export default function Default(props) {
    const { startContent, endContent, name, growth, value, style } = props;
    const textColor = useColorModeValue("black", "white");
    const textColorSecondary = "black";
  
    return (
      <Card  
      bg='#FFD18B'>
        
        <Flex
          my='auto'
          h='100%'
          align={{ base: "center", xl: "start" }}
          justify={{ base: "center", xl: "center" }}>
          {style}
          {startContent}
  
          <Stat my='auto'  ms={startContent ? "2px" : "0px"}>
            <StatLabel
              lineHeight='100%'
              color={textColorSecondary}
              fontSize={{
                base: "sm",
              }}>
              {name}
            </StatLabel>
            <StatNumber
              color={textColor}
              mt='58px'
              fontSize={{
                base: "xl",
              }}>
              {value}
            </StatNumber>
            {growth ? (
              <Flex align='center'>
                <Text color='green.500' fontSize='xs' fontWeight='700' me='5px'>
                  {growth}
                </Text>
                <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                  since last month
                </Text>
              </Flex>
            ) : null}
          </Stat>
          <Flex ms='auto' w='max-content'>
            {endContent}
          </Flex>
        </Flex>
      </Card>
    );
  }
  