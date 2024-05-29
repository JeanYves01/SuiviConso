/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// chakra imports
import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

export function SidebarLinks(props) {
  //   Chakra color mode
  let location = useLocation();
  let activeColor = useColorModeValue("white", "white");
  let inactiveColor = useColorModeValue(
    "white",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("white", "white");
  let textColor = useColorModeValue("white", "white");
  let lastItemColor = useColorModeValue("black", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;

  // Cette fonction prendra un tableau de routes et renverra un objet contenant le dernier lien et une liste de tous les autres liens.
  const separateLastLink = (routes) => {
    const lastLink = routes.pop(); // Retirez et stockez le dernier lien.
    return { lastLink, otherLinks: routes }; // Retournez le dernier lien et les autres liens.
  };

  const createLinks = (routes) => {
    const { lastLink, otherLinks } = separateLastLink([...routes]); // Clonez le tableau de routes pour éviter les mutations.

    const links = otherLinks.map((route, index) => {
      // Générez les liens pour toutes les autres routes.
      if (route.category) {
        return (
          <>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight='bold'
              mx='auto'
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt='18px'
              pb='12px'
              key={index}>
              {route.name}
            </Text>
            {createLinks(route.items)}
          </>
        );
      } else if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <NavLink key={index} to={route.layout + route.path}>
            {route.icon ? (
              <Box>
                <HStack
                  spacing={
                    activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                  }
                  py='5px'
                  ps='10px'>
                  <Flex w='100%' alignItems='center' justifyContent='center'>
                    <Box
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeIcon
                          : textColor
                      }
                      me='18px'>
                      {route.icon}
                    </Box>
                    <Text
                      me='auto'
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : textColor
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase())
                          ? "bold"
                          : "normal"
                      }>
                      {route.name}
                    </Text>
                  </Flex>
                  <Box
                    h='36px'
                    w='4px'
                    bg={
                      activeRoute(route.path.toLowerCase())
                        ? brandColor
                        : "transparent"
                    }
                    borderRadius='5px'
                  />
                </HStack>
              </Box>
            ) : (
              <Box>
                <HStack
                  spacing={
                    activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                  }
                  py='5px'
                  ps='10px'>
                  <Text
                    me='auto'
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={
                      activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                    }>
                    {route.name}
                  </Text>
                  <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                </HStack>
              </Box>
            )}
          </NavLink>
        );
      }
    });

    // Ajoutez le dernier lien à la fin de la liste des liens.
    if (lastLink) {
      links.push(
        <NavLink key={otherLinks.length} to={lastLink.layout + lastLink.path}>
          {lastLink.icon ? (
            <Box>
              <HStack
                spacing={
                  activeRoute(lastLink.path.toLowerCase()) ? "22px" : "26px"
                }
                py='5px'
                ps='10px'>
                <Flex w='100%' alignItems='center' justifyContent='center'>
                  <Box
                    color={
                      activeRoute(lastLink.path.toLowerCase())
                        ? activeIcon
                        : textColor
                    }
                    me='18px'>
                    {lastLink.icon}
                  </Box>
                  <Text
                    me='auto'
                    color={
                      activeRoute(lastLink.path.toLowerCase())
                        ? activeColor
                        : textColor
                    }
                    fontWeight={
                      activeRoute(lastLink.path.toLowerCase())
                        ? "bold"
                        : "normal"
                    }>
                    {lastLink.name}
                  </Text>
                </Flex>
                <Box
                  h='36px'
                  w='4px'
                  bg={
                    activeRoute(lastLink.path.toLowerCase())
                      ? brandColor
                      : "transparent"
                  }
                  borderRadius='5px'
                />
              </HStack>
            </Box>
          ) : (
            <Box>
              <HStack
                spacing={
                  activeRoute(lastLink.path.toLowerCase()) ? "22px" : "26px"
                }
                py='5px'
                ps='10px'>
                <Text
                  me='auto'
                  color={
                    activeRoute(lastLink.path.toLowerCase())
                      ? activeColor
                      : inactiveColor
                  }
                  fontWeight={
                    activeRoute(lastLink.path.toLowerCase()) ? "bold" : "normal"
                  }>
                  {lastLink.name}
                </Text>
                <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
              </HStack>
            </Box>
          )}
        </NavLink>
      );
    }

    return links; // Retournez la liste complète des liens.
  };

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  //  BRAND
  return createLinks(routes);
}

export default SidebarLinks;
