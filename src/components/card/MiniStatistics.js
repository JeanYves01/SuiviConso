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
   border='1px solid rgba(90, 88, 88, 0.2)'

   >
      
      <Flex
        my='auto'
        h='100%'
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
        cursor='pointer'>
        {style}
        {startContent}

        <Stat my='auto'  ms={startContent ? "2px" : "0px"}>
          <StatLabel
            lineHeight='100%'
            color={textColorSecondary}
            fontSize={{
              base: "sm",
              md: "xl",
              lg: "xl"
            }}
            transform='translate(-8%,0%)'>
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            mt='55px'
            fontSize={{
              base: "xl",
            }} transform='translate(6%,0%)'>
            {value}
          </StatNumber>
          
        </Stat>
        <Flex ms='auto' w='max-content'>
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
