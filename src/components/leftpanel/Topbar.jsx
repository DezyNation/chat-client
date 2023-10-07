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
  Spacer,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { BsBugFill, BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { PiGearSixFill } from "react-icons/pi";
import { HiMiniUserGroup } from "react-icons/hi2";

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack gap={4} p={2}>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={IconButton}
            icon={<FiMenu />}
            rounded={"full"}
            bgColor={"transparent"}
          ></MenuButton>
          <MenuList
            bgColor={colorMode == "dark" ? "blackAlpha.600" : "whiteAlpha.600"}
            filter={"auto"}
            backdropFilter={'blur(10px)'}
          >
            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
              onClick={() => toggleColorMode()}
            >
              <HStack w={"full"}>
                {colorMode == "dark" ? <BsMoonStarsFill /> : <BsSunFill />}
                <Text fontSize={"sm"}>Dark Theme</Text>
                <Spacer />
                <Switch
                  size={"sm"}
                  isChecked={colorMode === "dark"}
                  onChange={() => toggleColorMode()}
                />
              </HStack>
            </MenuItem>

            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
            >
              <HStack w={"full"}>
                <PiGearSixFill />
                <Text fontSize={"sm"}>Settings</Text>
              </HStack>
            </MenuItem>

            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
            >
              <HStack w={"full"}>
                <HiMiniUserGroup />
                <Text fontSize={"sm"}>Contacts</Text>
              </HStack>
            </MenuItem>

            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
            >
              <HStack w={"full"}>
                <BsBugFill />
                <Text fontSize={"sm"}>Report a Bug</Text>
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
