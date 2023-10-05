"use client";
import {
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import RecentChatsContainer from '@/components/leftpanel/RecentChatsContainer'
import TopBar from '../leftpanel/Topbar'

const LeftPanel = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box flex={1} p={2} borderWidth={'0.5px'} borderColor={colorMode == "dark" ? 'gray.700' : 'gray.200'} h={'full'}>
        <TopBar />
        <RecentChatsContainer />
      </Box>
    </>
  );
};

export default LeftPanel;
