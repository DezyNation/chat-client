"use client";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import {
  Avatar,
  HStack,
  Box,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

const AvatarContainer = ({
  avatarSize,
  src,
  name,
  titleSize,
  titleIcons,
  titleColor,
  content,
  contentColor,
  time,
  badge,
  badgeColor,
  onClick,
}) => {
  const { colorMode } = useColorMode();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <HStack pos={'relative'} cursor={'pointer'} gap={2} onClick={() => onClick()}>
        <Avatar boxSize={avatarSize || "48px"} src={src} name={name} />
        <Box w={"full"}>
          <HStack>
            <Text
              fontWeight={"semibold"}
              fontSize={titleSize || "sm"}
              color={colorMode == "dark" ? "#FFF" : titleColor || "#111"}
            >
              {name?.length > 26 ? name?.slice(0, 26) + "..." : name}
            </Text>
            {titleIcons?.length ? titleIcons?.map((icon) => icon) : ""}
          </HStack>

          <Box
            maxW={["80vw", "16vw"]}
            fontSize={"xs"}
            color={contentColor || "whiteAlpha.700"}
            overflow={"hidden"}
            whiteSpace="nowrap" // this is not working for some reason...
            textOverflow={"ellipsis"}
          >
            <HStack gap={0}>
              <Markdown>{content}</Markdown>
              <Text fontSize={'xs'}>{content?.length > 20 ? "..." : ""}</Text>
            </HStack>
          </Box>
        </Box>
        <VStack gap={1} h={"8"} justifyContent={"flex-start"}>
          {time ? <Text fontSize={"10px"}>{time}</Text> : null}
          {badge ? (
            <Text
              py={"2px"}
              px={2}
              bgColor={badgeColor || "orange.500"}
              color={"#FFF"}
              rounded={"full"}
              fontSize={"8px"}
            >
              {badge}
            </Text>
          ) : null}
        </VStack>
      </HStack>
    </>
  );
};

export default AvatarContainer;
