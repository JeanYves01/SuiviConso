import React from "react";
import { IconProps, List, ListItem, Text } from "@chakra-ui/react";
import {
    MdHome,
    MdBarChart,
    MdPerson,
    MdOutlineLogout,
} from "react-icons/md";
import { NavItem } from "./NavItem";

const items = [
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
];

export const Navigation = ({ collapse }) => (
  <List w="full" my={8}>
    {items.map((item, index) => (
      <ListItem key={index}>
        <NavItem item={item} isActive={index === 0} collapse={collapse} />
      </ListItem>
    ))}
  </List>
);