"use client";
import { Box, Slide, ScaleFade, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RecentChatsContainer from "./RecentChatsContainer";
import SearchContainer from "./SearchContainer";
import TopBar from "./Topbar";
import SettingsOverview from "./SettingsOverview";

const LeftPanel = ({}) => {
  const { colorMode } = useColorMode();
  const [intent, setIntent] = useState("chat");

  return (
    <>
      <Box
        pos={"relative"}
        flex={1}
        borderWidth={"0.5px"}
        borderColor={colorMode == "dark" ? "gray.700" : "gray.200"}
        h={"full"}
      >
        <Slide
          direction="top"
          style={{ position: "absolute", zIndex: 5 }}
          in={intent == "chat" || intent == "search"}
        >
          <TopBar
            onSearchFocus={() => setIntent("search")}
            onSearchExit={() => setIntent("chat")}
            onSettingsClick={() => setIntent("settings")}
          />
        </Slide>

        {intent == "chat" || intent == "search" ? (
          <Box w={"full"} h={"8vh"}></Box>
        ) : null}

        {intent == "chat" ? <RecentChatsContainer /> : null}

        <Box maxW={["full", "25vw"]} pos={"relative"} h={"full"} zIndex={0}>
          <ScaleFade initialScale={0.8} reverse in={intent == "search"}>
            <SearchContainer />
          </ScaleFade>

          <Slide
            style={{ position: "absolute" }}
            direction="left"
            in={intent == "settings"}
          >
            <SettingsOverview onClose={() => setIntent("chat")} />
          </Slide>
        </Box>
      </Box>
    </>
  );
};

export default LeftPanel;
