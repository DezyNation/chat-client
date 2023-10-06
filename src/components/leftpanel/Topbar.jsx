"use client";
import {
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

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack gap={4} p={2}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FiMenu />}
            rounded={"full"}
            bgColor={"transparent"}
          ></MenuButton>
          <MenuList filter={"auto"} backdropBlur={"5px"}>
            <MenuItem>
              <HStack w={"full"} justifyContent={"space-between"}>
                <Text fontSize={"sm"}>Dark Theme</Text>
                <Switch
                  size={"sm"}
                  isChecked={colorMode === "dark"}
                  onChange={() => toggleColorMode()}
                />
              </HStack>
            </MenuItem>
          </MenuList>
        </Menu>
        <InputGroup>
          <InputLeftElement children={<BiSearch />} />
          <Input
            bgColor={
              colorMode == "dark"
                ? "rgba(50,50,50,0.4)"
                : "rgba(200,200,200,0.2)"
            }
            rounded={"full"}
            border={"none"}
            placeholder="Search"
          />
        </InputGroup>
      </HStack>
    </>
  );
};

export default Topbar;
