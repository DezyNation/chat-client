"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  Box,
  useColorMode,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import LeftPanel from "@/components/leftpanel/LeftPanel";
import ChatWindow from "@/components/middlewindow/ChatWindow";
import RightPanel from "@/components/rightpanel/RightPanel";

const ChatApp = () => {
  const [leftPanelIntent, setLeftPanelIntent] = useState("chats");
  const [rightPanel, setRightPanel] = useState({
    status: false,
    intent: null,
  });

  function handleClick(intent) {
    setRightPanel((prev) => ({
      ...prev,
      status: true,
      intent: intent,
    }));
  }

  useEffect(() => {
    if (rightPanel?.intent) {
      setRightPanel((prev) => ({
        ...prev,
        status: true,
      }));
    } else {
      setRightPanel((prev) => ({
        ...prev,
        status: false,
      }));
    }
  }, [rightPanel?.intent]);

  return (
    <>
      <HStack
        pos={"relative"}
        w={"full"}
        h={"100vh"}
        overflow={"hidden"}
        alignItems={"flex-start"}
        gap={0}
      >
        <LeftPanel />

        <ChatWindow
          onAvatarClick={() => handleClick("profile")}
          onSearchClick={() => handleClick("search")}
        />

        <RightPanel
          status={rightPanel?.status}
          onClose={() => handleClick(null)}
          intent={rightPanel?.intent}
        />
      </HStack>
    </>
  );
};

export default ChatApp;
