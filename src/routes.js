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
import MainDashboard from "views/admin/home";
import Conso from "views/admin/conso";
import Contact from "views/admin/contact";
import Rapport from "views/admin/rapport";


// Auth Imports
import SignInCentered from "views/inscr/signIn";
// inscr Imports
import SignUpCentered from "views/inscr/signUp";
import ScannerPage from "views/inscr/scanner/ScannerPage";

const routes = [
  {
    name: "Acceuil",
    layout: "/admin",
    path: "/home",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Suivi Conso",
    layout: "/admin",
    path: "/conso",
    icon: (
      <Icon
        as={MdBarChart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Conso,
    secondary: true,
  },
  {
    name: "Rapports",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/rapport",
    component: Rapport,
  },
  {
    name: "Contact",
    layout: "/admin",
    path: "/contact",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Contact,
  },
  {
    name: "Déconnexion",
    layout: "/inscr",
    path: "/signIn",
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
