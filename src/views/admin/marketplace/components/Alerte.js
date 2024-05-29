import React from "react";
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
import { MdCheckCircle, MdCheckCircleOutline, MdDangerous, MdEmergency, MdEmergencyRecording, MdEmergencyShare, MdOutlineDangerous, MdOutlineWarning, MdOutlineWarningAmber, MdWarning } from "react-icons/md";


export default function Alerte() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box height='35vh' bg='white' boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)" borderRadius='10px'>
      <Text fontSize='xl' transform='translate(5%, 5%)'>Détails heure par heure</Text>
      <Flex justifyContent='center' transform='translate(0%,15%)' gap='10px'>
        <Box width='22%' height='25vh' borderRadius='15px' boxShadow="4px 4px 8px rgba(0, 0, 0, 0.5)" bg='white' transform='translate(0%,-5%)'>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" gap='40px' cursor='pointer'>
            <Text>12:00</Text>
            <Icon w='28px' h='28px' as={MdCheckCircleOutline} color='green.500' />
            <Text >Pas d'alerte</Text>
          </Box>
        </Box>
        <Box width='22%' height='25vh' borderRadius='15px' boxShadow="4px 4px 8px rgba(0, 0, 0, 0.5)" bg='white' transform='translate(0%,-5%)'>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" gap='40px' cursor='pointer'>
            <Text>13:00</Text>
            <Icon w='28px' h='28px' as={MdOutlineWarningAmber} color='orange.500' />
            <Text w='95%'>Avertissement</Text>
          </Box>
        </Box>
        <Box width='22%' height='25vh' borderRadius='15px' boxShadow="4px 4px 8px rgba(0, 0, 0, 0.5)" bg='white' transform='translate(0%,-5%)'>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" gap='40px' cursor='pointer'>
            <Text>14:00</Text>
            <Icon w='28px' h='28px' as={MdOutlineDangerous} color='red.500' />
            <Text>Urgence</Text>
          </Box>
        </Box>
        <Box width='22%' height='25vh' borderRadius='15px' boxShadow="4px 4px 8px rgba(0, 0, 0, 0.5)" bg='white' >
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" gap='40px' cursor='pointer'>
            <Text>Maintenant</Text>
            <Icon w='28px' h='28px' as={MdCheckCircleOutline} color='green.500' />
            <Text>Pas d'alerte</Text>
          </Box>
        </Box>
      </Flex>
    </Box>

  );
}