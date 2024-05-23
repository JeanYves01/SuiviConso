// chakra imports
import { Box, Flex, HStack, Icon, Link, Stack } from "@chakra-ui/react";


//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import { NavLink } from "react-router-dom";
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import SignInCentered from "views/auth/signIn";
// inscr Imports
import SignUpCentered from "views/inscr/signUp";
import React from "react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlineLogout,
} from "react-icons/md";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' px="16px" borderRadius='30px'>
      {/* <Brand /> */}
      <Stack 
      direction='column' mb='auto' mt='18px' gap='7' paddingLeft='30px'>
        <HStack color='white'>
          <Icon as={MdHome} width='20px' height='20px' color='inherit' />
          <NavLink to="/admin/default" exact activeClassName="active"  className="sidebar-link">
          Accueil
        </NavLink>
        </HStack>
        <HStack color='white'>
          <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />
          <NavLink to="/admin/nft-marketplace" activeClassName="active"  className="sidebar-link">
          Suivi Conso
        </NavLink>
        </HStack>
        <HStack color='white'>
          <Icon as={MdHome} width='20px' height='20px' color='inherit' />
          <NavLink to="/admin/data-tables" activeClassName="active"  className="sidebar-link">
          Rapports
        </NavLink>
        </HStack>
        <HStack color='white'>
          <Icon as={MdPerson} width='20px' height='20px' color='inherit' />
          <NavLink to="/admin/profile" activeClassName="active"  className="sidebar-link">
          Contact
        </NavLink>
        </HStack>
        <HStack transform='translate(0%,800%)' color='white'>
          <Icon as={MdOutlineLogout} width='20px' height='20px' color='inherit' />
          <NavLink to="/auth/sign-in" activeClassName="active"  className="sidebar-link">
          Déconnexion
        </NavLink>
        </HStack>
      </Stack>


      {/* { <Box
        mt='60px'
        mb='40px'
        borderRadius='30px'>
        <SidebarCard />
      </Box> } */}
    </Flex>
  );
}

export default SidebarContent;
