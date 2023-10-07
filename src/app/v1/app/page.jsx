"use client";
import React, { useState } from "react";
import { Text, Box, useColorMode, HStack } from "@chakra-ui/react";
import LeftPanel from '@/components/leftpanel/LeftPanel'
import ChatWindow from '@/components/middlewindow/ChatWindow'
import RightPanel from '@/components/rightpanel/RightPanel'

const ChatApp = () => {
  const [rightPanelStatus, setRightPanelStatus] = useState(false)

  return (
    <>
    <HStack pos={'relative'} w={'full'} h={'100vh'} overflow={'hidden'} alignItems={'flex-start'} gap={0}>
      <LeftPanel />
      <ChatWindow onAvatarClick={()=>setRightPanelStatus(true)} />
      
      <RightPanel status={rightPanelStatus} onClose={()=>setRightPanelStatus(false)} intent={'profile'} />
    </HStack>
    </>
  );
};

export default ChatApp;
