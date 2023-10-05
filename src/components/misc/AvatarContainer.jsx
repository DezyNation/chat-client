"use client";
import React from "react";
import Markdown from 'react-markdown'
import { Avatar, HStack, Box, Text } from "@chakra-ui/react";


const AvatarContainer = ({ avatarSize, src, title, titleSize, content }) => {
  return (
    <>
      <HStack>
        <Avatar size={avatarSize || "md"} src={src} name={title} />
        <Box>
          <Text fontSize={titleSize || "sm"}>{title}</Text>
          <Markdown>{content || ""}</Markdown>
        </Box>
      </HStack>
    </>
  );
};

export default AvatarContainer;
