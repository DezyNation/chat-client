"use client";
import React from "react";
import { Avatar, Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

const ReceivedMessage = ({ message, name, avatar, timestamp }) => {
  return (
    <>
      <HStack
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
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
    </>
  );
};

export default ReceivedMessage;
