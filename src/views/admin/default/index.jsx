/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _|
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|

=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import Seuil from "components/card/Seuil";
import Remaning from "components/card/Remaning";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("black", "white");
  const orangeColor = "#FFD18B";
  const blueColor = "#BBF5FF";
  const boxBg = useColorModeValue("orange.50", "");
  const bgSeuil = useColorModeValue("orange.50", "whiteAlpha.100");
  return (
    <Box pt={{ base: "120px", md: "80px", xl: "80px" }} marginLeft='40px' marginRight='40px'>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 3, "2xl": 6 }}
        gap='20px'
     
        
      >
        <Seuil
        
          startContent={
            <Icon mt='70px' w='28px' h='28px' as={MdBarChart} color={brandColor} />
          }
          name='Seuil de consommation'
          value='90 kWh'
        />
        <MiniStatistics
          startContent={
            <Icon mt='70px' w='28px' h='28px' as={MdAttachMoney} color={brandColor} />
          }

          name='Energie consommée'
          value='76 kWh'
        />
        <Remaning
          startContent={
            <Icon mt='70px' w='28px' h='28px' as={MdAttachMoney} color={brandColor} />
          }
          pt='0px'
          name='Marge de consommation restante'
          value='14 kWh'
        />
      </SimpleGrid>
      


      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        {/* <WeeklyRevenue /> */}
      </SimpleGrid>
      <PieCard/>
    </Box>
  );
}
