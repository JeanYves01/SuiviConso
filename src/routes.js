import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlineLogout,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
// inscr Imports
import SignUpCentered from "views/inscr/signUp";
import ScannerPage from "views/inscr/scanner/ScannerPage";

const routes = [
  {
    name: "Acceuil",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Suivi Conso",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdBarChart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Rapports",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Contact",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Déconnexion",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdOutlineLogout} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    layout: "/inscr",
    path: "/sign-up",
    component: SignUpCentered,
 },
  {
    layout: "/inscr",
    path: "/inscr/scaner/ScannerPage",
    component: ScannerPage,
 },
];



export default routes;
