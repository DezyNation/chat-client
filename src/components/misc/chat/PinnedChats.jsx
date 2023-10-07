"use client";
import React from "react";
import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";

const PinnedChats = () => {
  return (
    <>
      <HStack w={["50%", "xs"]} gap={4} cursor={'pointer'}>
        <Box>
          <Text fontWeight={"semibold"} fontSize={"sm"} color={"twitter.500"}>
            Pinned Message #108
          </Text>
          <Text fontSize={"sm"}>Hare Krishna Hare...</Text>
        </Box>
      </HStack>
    </>
  );
};

export default PinnedChats;
