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

import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import {
  MdAddTask,
  MdArrowCircleUp,
  MdArrowDownward,
  MdArrowDropUp,
  MdArrowForward,
  MdArrowOutward,
  MdArrowUpward,
  MdAttachMoney,
  MdBarChart,
  MdDirections,
  MdElectricBolt,
  MdFileCopy,
  MdMultilineChart,
  MdOutlineAddChart,
  MdOutlineArrowDropUp,
  MdOutlineChair,
  MdOutlineWaterfallChart,
  MdStackedLineChart,
  MdWaterfallChart,
} from "react-icons/md";
// Custom components
import AeraChart from "views/admin/marketplace/components/AeraChart";
import BarChart from "views/admin/marketplace/components/BarChart";
import Alerte from "views/admin/marketplace/components/Alerte";
import PieChart from "views/admin/marketplace/components/PieChart";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }} >
      {/* Main Fields */}
      <Flex
        flexDirection='row'
        margin='auto'
      >
        <Flex
          flexDirection='column'
          width='60%'>
          <AeraChart />

          <Box bg='white' marginTop='20px' width='85%' height='36vh' borderRadius='10px'>
            <Alerte />
          </Box>

        </Flex>
        <Flex
          flexDirection='column'
          width='50%' gap='10px'>
          <Flex flexDirection='column' gap='10px'>
            <Flex flexDirection='row' gap='10px' >
              <Box bg='#BBF5FF' width='100%' height='15vh' borderRadius='10px' boxShadow="2px 3px 8px rgba(0, 0, 0, 0.3)">
                <Flex flexDirection='column' gap='35px'>
                  <Flex justifyContent='center' transform='translate(-27%,20%)'>
                    <Text color='red' fontSize='2xl'>+15kWh</Text>
                    <Icon w='20px' h='35px' as={MdArrowUpward} color='black' />
                  </Flex>
                  <Flex flexDirection='row' gap='70px' marginLeft='10px'>
                    <Icon mt='5px' w='20px' h='20px' as={MdBarChart} color='black.500' />
                    <Text fontSize='xl' fontWeight='bold'>Consommation</Text>

                  </Flex>
                </Flex>
              </Box>
              <Box bg='#FFEBCD' width='100%' height='15vh' borderRadius='10px' boxShadow="2px 3px 8px rgba(0, 0, 0, 0.3)">
                <Flex flexDirection='column' gap='35px'>
                  <Flex justifyContent='center' transform='translate(-31%,20%)'>
                    <Icon w='20px' h='35px' as={MdArrowDownward} color='black' />
                    <Text color='red' fontSize='2xl'>218 V</Text>
                  </Flex>
                  <Flex flexDirection='row' gap='90px' marginLeft='10px'>
                    <Icon mt='5px' w='20px' h='20px' as={MdElectricBolt} color='black.500' />
                    <Text fontSize='xl' fontWeight='bold'>Tension</Text>

                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Flex flexDirection='row' gap='10px'>
              <Box bg='white' width='100%' height='15vh' borderRadius='10px'>
              
              </Box>
              <Box bg='white' width='100%' height='15vh' borderRadius='10px'></Box>
            </Flex>

          </Flex>
          <BarChart />
        </Flex>

      </Flex>
      {/* Delete Product */}
    </Box>
  );
}
