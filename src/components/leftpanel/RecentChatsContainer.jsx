"use client";
import React from "react";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import { BsVolumeMuteFill } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import AvatarContainer from "../misc/AvatarContainer";
import ChatContainer from "./ChatContainer";

const RecentChatsContainer = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <VStack p={2} w={"full"} h={"full"} overflowY={"scroll"}>
        <ChatContainer
          avatar={"/test/lotusfeet.jpeg"}
          name={"Krishna's Sukas - Parrot of Sri Krishna"}
          titleIcons={[<BsVolumeMuteFill key={"mute"} />]}
          content={"**Master King Xiao Pao:** Happy Krishna Conscious Night"}
          time={"08:52"}
          badge={12}
          isActive={false}
          onClick={() => console.log("Chat Click")}
        />
        <ChatContainer
          name={"ISKCON,Inc. Web Development"}
          content={"**Sangam Kumar**: Hare Krishna"}
          time={"08:52"}
          badge={12}
          isActive={false}
          onClick={() => console.log("Chat Click")}
        />
        <ChatContainer
          avatar={"/logo.jpeg"}
          name={"ISKCON,Inc. Sanga"}
          content={
            "**Raga manjari devi dasi_ACBSP:** Happy Krishna Conscious Night"
          }
          time={"08:52"}
          badge={12}
          isActive={true}
          onClick={() => console.log("Chat Click")}
        />
      </VStack>
    </>
  );
};

export default RecentChatsContainer;
