"use client";
import React from "react";
import Markdown from "react-markdown";
import { Avatar, HStack, Box, Text, VStack } from "@chakra-ui/react";

const AvatarContainer = ({
  avatarSize,
  src,
  title,
  titleSize,
  titleIcons,
  content,
  contentColor,
  time,
  badge,
  badgeColor,
}) => {
  return (
    <>
      <HStack w={"full"} gap={2} cursor={"pointer"}>
        <Avatar boxSize={avatarSize || "48px"} src={src} name={title} />
        <Box w={"full"}>
          <HStack>
            <Text fontWeight={"semibold"} fontSize={titleSize || "sm"}>
              {title?.length > 26 ? title?.slice(0, 26) + "..." : title}
            </Text>
            {titleIcons?.length ? titleIcons?.map((icon) => icon) : ""}
          </HStack>
          <Box fontSize={"xs"} color={contentColor || "whiteAlpha.700"}>
            <Markdown>
              {content?.length > 36 ? content?.slice(0, 36) + "..." : content}
            </Markdown>
          </Box>
        </Box>
        <VStack gap={1} h={'8'} justifyContent={'flex-start'}>
          {time ? <Text fontSize={'10px'}>{time}</Text> : null}
          {badge ? (
            <Text
              py={'2px'}
              px={2}
              bgColor={badgeColor || "orange.500"}
              color={'#FFF'}
              rounded={"full"}
              fontSize={'8px'}
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
