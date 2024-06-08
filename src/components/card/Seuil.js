// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  Box,
  Icon,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdDateRange,
  MdFileCopy,
} from "react-icons/md";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React from "react";

export default function Default(props) {
  const { startContent, endContent, name, growth, value, style } = props;
  const textColor = useColorModeValue("black", "white");
  const brandColor = useColorModeValue("black", "white");
  const textColorSecondary = "black";

  return (
    <Box
    >
      <Text color='white' fontSize='xl' transform='translate(-10%,-25%)'>Seuil de consommation</Text>
      <Flex gap='5px' transform='translate(5%,0%)' color='white'>
        <Icon  w='20px' h='35px' as={MdBarChart}  />
        <Text fontSize='xl' transform='translate(5%,7%)'>90 kWh</Text>
      </Flex>


    </Box>
  );
}
