"use client";
import {
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const LeftPanel = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box flex={1} p={4} borderWidth={'0.5px'} borderColor={colorMode == "dark" ? 'gray.700' : 'gray.200'} h={'full'}>
        <HStack gap={4}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FiMenu />}
              rounded={"full"}
              bgColor={"transparent"}
            ></MenuButton>
            <MenuList filter={"auto"} backdropBlur={"5px"}>
              <MenuItem>
                <HStack w={'full'} justifyContent={'space-between'}>
                  <Text fontSize={'sm'}>Dark Theme</Text>
                  <Switch
                    size={"sm"}
                    defaultChecked={colorMode === "dark"}
                    onChange={() => toggleColorMode()}
                  />
                </HStack>
              </MenuItem>
            </MenuList>
          </Menu>
          <InputGroup>
            <InputLeftElement children={<BiSearch />} />
            <Input bgColor={'rgba(200,200,200,0.2)'} rounded={"full"} border={'none'} placeholder="Search" />
          </InputGroup>
        </HStack>
      </Box>
    </>
  );
};

export default LeftPanel;
