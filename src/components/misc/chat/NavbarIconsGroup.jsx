"use client";
import React from "react";
import {
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  BsBell,
  BsBellSlash,
  BsCheckCircle,
  BsPinAngle,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const NavbarIconsGroup = ({ onSearchClick, onPinClick }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <HStack gap={2}>
        <IconButton
          onClick={() => onPinClick()}
          bgColor={"transparent"}
          icon={<BsPinAngle size={20} />}
          rounded={"full"}
        />
        <IconButton
          onClick={() => onSearchClick()}
          bgColor={"transparent"}
          icon={<FiSearch size={20} />}
          rounded={"full"}
        />

        <Menu>
          <MenuButton
            as={IconButton}
            icon={<BsThreeDotsVertical size={20} />}
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
            >
              <HStack w={"full"}>
                <Icon as={BsBellSlash} />
                <Text fontSize={"sm"}>Mute</Text>
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
                <Icon as={BsCheckCircle} />
                <Text fontSize={"sm"}>Select Messages</Text>
              </HStack>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </>
  );
};

export default NavbarIconsGroup;
