"use client";
import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

const ChatWindow = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        flex={3}
        w={"full"}
        h={"full"}
        bgImage={
          colorMode == "dark"
            ? "/backgrounds/dark.jpg"
            : "/backgrounds/light.jpg"
        }
      ></Box>
    </>
  );
};

export default ChatWindow;
