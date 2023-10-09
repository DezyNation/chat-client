"use client";
import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { BsPenFill, BsVolumeMuteFill } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import ChatContainer from "./ChatContainer";

const RecentChatsContainer = () => {
  const { colorMode } = useColorMode();
  const members = [0, 8, 9];
  return (
    <>
      <Box pos={"relative"} w={"full"} p={2} h={"full"} overflowY={"scroll"}>
        {members?.map((member, key) => (
          <ChatContainer
            key={key}
            avatar={"/test/lotusfeet.jpeg"}
            name={"Krishna's Sukas - Parrot of Sri Krishna"}
            titleIcons={[<BsVolumeMuteFill key={"mute"} />]}
            content={"**Master King Xiao Pao:** Happy Krishna Conscious Night"}
            time={"08:52"}
            badge={12}
            isActive={false}
            onClick={() => console.log("Chat Click")}
          />
        ))}
      </Box>
    </>
  );
};

export default RecentChatsContainer;
