"use client";
import React from "react";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

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
      <HStack w={"full"} alignItems={"flex-start"} justifyContent={"flex-end"}>
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
            bgColor={colorMode == "light" ? "whiteAlpha.800" : "transparent"}
            rounded={"full"}
          >
            <Text fontSize={"8"}>
              {timestamp}
            </Text>
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
    </>
  );
};

export default SentMessage;
