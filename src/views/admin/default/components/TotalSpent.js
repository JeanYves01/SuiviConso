// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";

export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("black", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
    <Card
      justifyContent='center'
      w={{ base: '100%', md: '204%', lg: '204%' }}
      h={{ base: 'auto', md: '80vh', lg: '51vh' }}
      mt='25px'
      {...rest}
    >
      <Flex justify='space-between' px='20px' pt='5px'>
        <Flex w='100%'  flexDirection={{ base: 'column', md: 'row' }} align='center'>
          <Text
            color={textColor}
            fontSize='xl'
            textAlign={{ base: 'center', md: 'start' }}
            fontWeight='500'
            mb={{ base: '10px', md: '0' }}
          >
            Consommation depuis le dernier mois
          </Text>
          <Button
            bg={boxBg}
            fontSize='sm'
            fontWeight='500'
            ml={{ base: '0', md: 'auto' }}
            mt={{ base: '10px', md: '0' }}
            color={textColorSecondary}
            borderRadius='7px'
            alignSelf={{ base: 'center', md: 'flex-end' }}
          >
            <Icon as={MdOutlineCalendarToday} color={textColorSecondary} mr='4px' />
            Cette semaine
          </Button>
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }} align='center'>
        <Box minH='260px' w={{ base: '100%', lg: '90%' }} mt='15px'>
          <LineChart />
        </Box>
      </Flex>
    </Card>
  );
}
