"use client";
import React, { useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import AvatarContainer from "../misc/AvatarContainer";

const ChatContainer = ({
  name,
  content,
  titleIcons,
  avatar,
  time,
  badge,
  isActive,
  onClick,
}) => {
  const { colorMode } = useColorMode();
  const [hovering, setHovering] = useState(false);
  const hoverColor = !isActive
    ? colorMode == "light"
      ? "blackAlpha.100"
      : "blackAlpha.500"
    : "auto";

  return (
    <>
      <Box
        pos={"relative"}
        w={"full"}
        p={3}
        transition={"all .1s ease"}
        bgColor={
          isActive ? "yellow.500" : hovering ? hoverColor : "transparent"
        }
        bgGradient={isActive ? "linear(225deg, #FFD93D 0%, orange 0%)" : "none"}
        rounded={8}
        _hover={{
          bgColor: hoverColor,
        }}
        cursor={"pointer"}
        onClick={() => onClick()}
      >
        <AvatarContainer
          src={avatar}
          name={name}
          titleSize={"14px"}
          titleIcons={titleIcons || []}
          content={content}
          titleColor={colorMode == "dark" ? "#fff" : isActive ? "#fff" : "#000"}
          contentColor={
            colorMode == "dark" ? "#fff" : isActive ? "#fff" : "gray.500"
          }
          time={time}
          onClick={() => console.log("Chat Click")}
          badge={badge}
        />
      </Box>
    </>
  );
};

export default ChatContainer;
