"use client";
import React from "react";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { ContextMenu } from "chakra-ui-contextmenu";
import { FaRegClone, FaShare } from "react-icons/fa6";

const ReceivedMessage = ({ message, name, avatar, timestamp }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <ContextMenu
        renderMenu={() => (
          <MenuList
            bgColor={colorMode == "dark" ? "blackAlpha.600" : "whiteAlpha.600"}
            filter={"auto"}
            backdropFilter={"blur(10px)"}
          >
            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
            >
              <HStack fontSize={"xs"}>
                <FaRegClone />
                <Text>Copy</Text>
              </HStack>
            </MenuItem>
            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
            >
              <HStack fontSize={"xs"}>
                <FaShare />
                <Text>Forward</Text>
              </HStack>
            </MenuItem>
            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
            >
              <HStack fontSize={"xs"}>
                <BsCheckCircle />
                <Text>Select</Text>
              </HStack>
            </MenuItem>
          </MenuList>
        )}
      >
        {(ref) => (
          <HStack
            w={"full"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            ref={ref}
          >
            <Avatar size={"sm"} name={name} src={avatar} />
            <Box
              w={"full"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
            >
              <Box
                p={2}
                maxW={"70%"}
                bg={"yellow.200"}
                rounded={12}
                roundedBottomLeft={0}
              >
                <Text fontSize={"xs"} color={"#333"}>
                  {message}
                </Text>
              </Box>
              <HStack>
                <Text p={2} fontSize={"8"}>
                  {timestamp}
                </Text>
              </HStack>
            </Box>
          </HStack>
        )}
      </ContextMenu>
    </>
  );
};

export default ReceivedMessage;
