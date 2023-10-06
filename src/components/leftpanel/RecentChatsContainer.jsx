"use client";
import React from "react";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import AvatarContainer from "../misc/AvatarContainer";
import { BsVolumeMuteFill } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";

const RecentChatsContainer = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <VStack p={2} w={"full"} h={"full"} overflowY={"scroll"}>
        <Box w={"full"} p={3} rounded={8}>
          <AvatarContainer
            src={"/test/lotusfeet.jpeg"}
            title={"Krishna's Sukas - Parrot of Sri Krishna"}
            titleSize={"14px"}
            titleIcons={[<BsVolumeMuteFill />]}
            content={"**Master King Xiao Pao:** Happy Krishna Conscious Night"}
            contentColor={colorMode == "dark" ? "#fff" : "gray.500"}
            time={"01:52"}
            badge={"168"}
          />
        </Box>
        <Box
          w={"full"}
          p={3}
          bgColor={"yellow.500"}
          bgGradient={"linear(225deg, #FFD93D 0%, orange 0%)"}
          rounded={8}
        >
          <AvatarContainer
            src={"/logo.jpeg"}
            title={"ISKCON,Inc. Sanga"}
            titleSize={"14px"}
            titleIcons={[<HiBadgeCheck size={16} />, <BsVolumeMuteFill />]}
            content={
              "**Raga manjari devi dasi_ACBSP:** Happy Krishna Conscious Night"
            }
            contentColor={"#fff"}
            time={"01:52"}
          />
        </Box>
      </VStack>
    </>
  );
};

export default RecentChatsContainer;
