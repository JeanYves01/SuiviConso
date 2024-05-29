
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
  MdTrendingUp,
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
    <Card mt={{ base: "180px", md: "80px", xl: "76px", }} height='75vh' bg='white' transform='translate(0%, 7%)'>
      {/* Main Fields */}
      <Flex
        width='100%'
        display='flex'
        flexDirection='row'
        gap='0px'


      >
        <Flex
          flexDirection='column'
          width='55%' gap="7px">
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
              <Box bg='#FFC163'
                width='100%'
                height='15vh'
                borderRadius='10px'
                cursor='pointer'
                boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
                opacity='1'
                _hover={{
                  bg: '#EF7D00',  // Changez la couleur de survol ici
                  opacity: '1',    // Changez l'opacité au survol
                  transition: 'all 0.3s ease-in-out' // Ajout de la transition
                }}>
                <Flex flexDirection='column' gap='35px'>
                  <Flex justifyContent='center' >
                    <Text color='#FFFFFF' fontSize='2xl' transform='translate(-63%,20%)' >+15kWh</Text>
                    <Flex transform='translate(75%,70%)' width='20%' height='3vh' bg='#EF7D00' borderRadius='5px'>
                      <Text fontSize='sm' color='white'>+12%</Text>
                      <Icon w='20px' h='35px' as={MdTrendingUp} color='#FFFFFF' transform='translate(2%,-18%)' />
                    </Flex>
                    
                  </Flex>
                  <Flex flexDirection='row' gap='10px' transform='translate(8%,-15%)'>
                    <Icon mt='5px' w='20px' h='20px' as={MdBarChart} color='#FFFFFF' />
                    <Text fontSize='xl' fontWeight='bold' color='#FFFFFF'>Consommation</Text>

                  </Flex>
                </Flex>
              </Box>
              <Box bg='#008F75'
                width='100%'
                height='15vh'
                borderRadius='10px'
                cursor='pointer'
                boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
                opacity='0.7'
                _hover={{
                  bg: '#008F75',  // Changez la couleur de survol ici
                  opacity: '1',    // Changez l'opacité au survol
                  transition: 'all 0.3s ease-in-out' // Ajout de la transition
                }}>
                <Flex flexDirection='column' gap='35px'>
                  <Flex justifyContent='center' transform='translate(-31%,20%)'>
                    <Icon w='20px' h='35px' as={MdArrowDownward} color='white' />
                    <Text color='white' fontSize='2xl'>218 V</Text>
                  </Flex>
                  <Flex flexDirection='row' gap='20px' transform='translate(8%,-15%)' >
                    <Icon mt='5px' w='20px' h='20px' as={MdElectricBolt} color='white' />
                    <Text fontSize='xl' fontWeight='bold' color='white'>Tension</Text>

                  </Flex>
                </Flex>
              </Box>
            </Flex>

            <Flex flexDirection='row' gap='10px'>
              <Box bg='white' width='50%' height='15vh' borderRadius='10px'>

              </Box>
              {/* <PieChart /> */}
            </Flex>

          </Flex>
          <BarChart />
        </Flex>

      </Flex>
    </Card>
  );
}
