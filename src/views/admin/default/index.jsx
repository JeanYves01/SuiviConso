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

  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,

  Avatar,
  Button,


  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,

  Input,
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
  MdDateRange,
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
import Card from "components/card/Card.js";
export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("black", "white");
  const orangeColor = "#FFD18B";
  const blueColor = "#BBF5FF";
  const boxBg = useColorModeValue("orange.50", "");
  const bgSeuil = useColorModeValue("orange.50", "whiteAlpha.100");
  let menuBg = useColorModeValue('white', 'navy.800');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
  );
  const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
  return (
    <Card mt={{ base: "180px", md: "80px", xl: "76px", }} height='75vh' bg='white' transform='translate(0%, 7%)'> 
      <Box pt={{ base: "120px", md: "80px", xl: "80px" }} marginLeft='40px' marginRight='40px' transform='translate(0%,-14%)'>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 3, "2xl": 6 }}
        gap='20px'


      >
        <Menu>
          <MenuButton width='338px' height='15vh' borderRadius='10px' bg='#FFC163'
      cursor='pointer'
      boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
      
      _hover={{
        bg: '#EF7D00',  // Changez la couleur de survol ici
        opacity: '1',    // Changez l'opacité au survol
        transition: 'all 0.3s ease-in-out' // Ajout de la transition
      }}>
            <Seuil
              
              startContent={
                <Icon mt='75px' w='20px' h='30px' as={MdBarChart} color={brandColor} />
              }
              name='Seuil de consommation'
              value='90 kWh'

            />
          </MenuButton>
          <MenuList boxShadow={shadow} p="0px" mt="10px" borderRadius="15px" bg={menuBg} border="none">
            <Flex w="100%" mb="0px" borderBottom="1px solid" borderColor={borderColor}>
              <Text
                ps="20px"
                pt="16px"
                pb="10px"
                w="80%"

                borderColor={borderColor}
                fontSize="sm"
                fontWeight="700"
                color={textColor}>
                Choisir la période
              </Text>
              <Icon as={MdDateRange} color={brandColor} transform='translate(0%,120%)' />
            </Flex>
            <Flex flexDirection="row" p="25px">
              <FormLabel
                display='flex'
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}

              >
                Définir le seuil en (kWh)
              </FormLabel>
              <Input
                isRequired
                variant='auth'
                fontSize='sm'
                type='text'
                placeholder='86'

                fontWeight='500'
                width={{ base: "70px", md: "70px", xl: "70px" }}
                height={{ base: "30px", md: "30px", xl: "30px" }}
                borderRadius='8px'

              />
            </Flex>
          </MenuList>
        </Menu>

        <MiniStatistics
          startContent={
            <Icon mt='75px' w='20px' h='30px' as={MdBarChart} color={brandColor} />
          }

          name='Energie consommée'
          value='76 kWh'

        />
        <Remaning
          startContent={
            <Icon mt='75px' w='20px' h='30px' as={MdAttachMoney} color={brandColor} />
          }
          pt='0px'
          name='Marge de consommation restante'
          value='14 kWh'
        />
      </SimpleGrid>



      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />

      </SimpleGrid>
    </Box>
 </Card>
    
  );
}
