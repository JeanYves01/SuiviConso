// Chakra imports
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import cieImage from 'assets/img/cie.jpg';
// Custom components
import { NavLink } from "react-router-dom";
// Assets
function AuthIllustration(props) {
  const { children, illustrationBackground } = props;
  // Chakra color mode
  return (
    <Flex position='relative' h='max-content' >
      <Flex>
      </Flex>
      <Flex>
        <Text fontSize='36px' fontWeight='bold' color='#008F75'>
          SuiviConso.
        </Text>
        <Image
          transform='translate(2400%,55%)'
          height='30px'
          width='50px'
          src={cieImage}
        />
      </Flex>



      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w='50%'
        maxW={{ md: "66%", lg: "1313px" }}
        mx='auto'
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent='center'
        direction='column'>
        {children}
        <Box
          display={{ base: "none", md: "block" }}
          h='100%'
          minH='100vh'
          w={{ lg: "100vw", "": "100vw" }}
          position='absolute'
          right='0px'>
          {<Flex
            bg='gray.100'
            // justify='center'
            // align='end'
            w='100%'
            h='100%'
            // bgSize='cover'
            // bgPosition='100%'
            position='absolute'
          ></Flex>}
        </Box>
      </Flex>
      <FixedPlugin />
    </Flex>
  );
}
// PROPS

AuthIllustration.propTypes = {
  illustrationBackground: PropTypes.string,
  image: PropTypes.any,
};

export default AuthIllustration;
