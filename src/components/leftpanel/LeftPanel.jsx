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
  ScaleFade,
  Slide,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import RecentChatsContainer from "../leftpanel/RecentChatsContainer";
import SearchContainer from "../leftpanel/SearchContainer";
import TopBar from "../leftpanel/Topbar";

const LeftPanel = ({}) => {
  const { colorMode } = useColorMode();
  const [intent, setIntent] = useState("chat");

  return (
    <>
      <Box
        flex={1}
        borderWidth={"0.5px"}
        borderColor={colorMode == "dark" ? "gray.700" : "gray.200"}
        h={"full"}
      >
        <TopBar
          onSearchFocus={() => setIntent("search")}
          onSearchExit={() => setIntent("chat")}
          onSettingsClick={() => setIntent("settings")}
        />
        <Box pos={"relative"} h={'full'}>
          <Slide
            style={{ position: "absolute" }}
            direction="left"
            in={intent == "chat"}
          >
            <RecentChatsContainer />
          </Slide>

          <ScaleFade
            initialScale={0.8}
            reverse
            in={intent == "search"}
          >
            <SearchContainer />
          </ScaleFade>
        </Box>
      </Box>
    </>
  );
};

export default LeftPanel;
