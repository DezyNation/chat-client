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
import { BsCheckCircle, BsCheckCircleFill, BsTrash } from "react-icons/bs";
import { ContextMenu } from "chakra-ui-contextmenu";
import { FaRegClone } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

const SentMessage = ({
  message,
  name,
  avatar,
  timestamp,
  blueTick,
  greenTick,
}) => {
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
            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
            >
              <HStack fontSize={"xs"} color={'red'}>
                <BsTrash />
                <Text>Delete</Text>
              </HStack>
            </MenuItem>
          </MenuList>
        )}
      >
        {(ref) => (
          <HStack
            w={"full"}
            alignItems={"flex-start"}
            justifyContent={"flex-end"}
            ref={ref}
          >
            <Box
              w={"full"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-end"}
              justifyContent={"flex-start"}
            >
              <Box
                p={2}
                maxW={"70%"}
                bg={colorMode == "dark" ? "#FF8400" : "#333"}
                rounded={12}
                roundedBottomRight={0}
              >
                <Text fontSize={"xs"} color={"#FFF"}>
                  {message}
                </Text>
              </Box>
              <HStack
                mt={1}
                px={2}
                py={1}
                bgColor={
                  colorMode == "light" ? "whiteAlpha.800" : "transparent"
                }
                rounded={"full"}
              >
                <Text fontSize={"8"}>{timestamp}</Text>
                {greenTick ? (
                  <Icon
                    color={"whatsapp.500"}
                    as={BsCheckCircleFill}
                    fontSize={"12px"}
                  />
                ) : blueTick ? (
                  <Icon
                    color={"twitter.500"}
                    fontSize={"12px"}
                    as={BsCheckCircleFill}
                  />
                ) : null}
              </HStack>
            </Box>
            <Avatar size={"sm"} name={name} src={avatar} />
          </HStack>
        )}
      </ContextMenu>
    </>
  );
};

export default SentMessage;
