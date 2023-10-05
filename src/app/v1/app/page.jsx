"use client";
import React from "react";
import { Text, Box, useColorMode, HStack } from "@chakra-ui/react";
import LeftPanel from '@/components/leftpanel/LeftPanel'
import ChatWindow from '@/components/middlewindow/ChatWindow'

const ChatApp = () => {

  return (
    <>
    <HStack w={'full'} h={'100vh'} overflow={'hidden'} alignItems={'flex-start'}>
      <LeftPanel />
      <ChatWindow />
    </HStack>
    </>
  );
};

export default ChatApp;
