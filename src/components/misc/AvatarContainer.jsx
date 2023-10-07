"use client";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { Avatar, HStack, Box, Text, VStack, useColorMode } from "@chakra-ui/react";

const AvatarContainer = ({
  avatarSize,
  src,
  title,
  titleSize,
  titleIcons,
  titleColor,
  content,
  contentColor,
  time,
  badge,
  badgeColor,
}) => {
  const {colorMode} = useColorMode()
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <HStack w={"full"} gap={2} cursor={"pointer"}>
        <Avatar boxSize={avatarSize || "48px"} src={src} name={title} />
        <Box w={"full"}>
          <HStack>
            <Text fontWeight={"semibold"} fontSize={titleSize || "sm"} color={colorMode == "dark" ? "#FFF" : titleColor || "#111"}>
              {title?.length > 26 ? title?.slice(0, 26) + "..." : title}
            </Text>
            {titleIcons?.length ? titleIcons?.map((icon) => icon) : ""}
          </HStack>

          <Box
          maxW={['80vw', '16vw']}
            fontSize={"xs"}
            color={contentColor || "whiteAlpha.700"}
          >
            {isClient ? (
              <Text isTruncated noOfLines={1}>
                <Markdown>{content}</Markdown>{content?.length > 20 ? "..." : ""}
              </Text>
            ) : null}
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
