"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Slide,
  SlideFade,
  useColorMode,
} from "@chakra-ui/react";
import ChannelInfo from "./ChannelInfo";
import EditGroup from "./EditGroup";
import SearchMessages from "./SearchMessages";
import { BsPersonPlusFill } from "react-icons/bs";

const RightPanel = ({ status, onClose, intent }) => {
  const { colorMode } = useColorMode();
  const [currentPanel, setCurrentPanel] = useState(intent);

  const [currentTab, setCurrentTab] = useState(0);

  useEffect(()=>{
    setCurrentPanel(intent)
  },[intent])

  return (
    <>
      <Box
        pos={"relative"}
        transition={"all .3s ease"}
        flex={status ? 2 : 0}
        maxW={"25vw"}
        borderWidth={"0.5px"}
        borderColor={colorMode == "dark" ? "gray.700" : "gray.200"}
      >

        <Slide
          direction="right"
          style={{ position: "absolute", width: "100%" }}
          in={currentPanel == "profile"}
        >
          <ChannelInfo
            onClose={() => {
              onClose();
            }}
            onTabChange={(i) => setCurrentTab(i)}
            onIntentChange={(intent) => setCurrentPanel(intent)}
          />
        </Slide>

        <Slide
          direction="right"
          style={{ position: "absolute", width: "100%" }}
          in={currentPanel == "edit"}
        >
          <EditGroup
            onClose={() => {
              setCurrentPanel("profile");
            }}
          />
        </Slide>

        <Slide
          direction="right"
          style={{ position: "absolute", width: "100%" }}
          in={currentPanel == "search"}
        >
          <SearchMessages
            onClose={() => {
              setCurrentPanel("profile");
            }}
          />
        </Slide>

        <IconButton
          pos={"fixed"}
          bottom={
            status && currentPanel == "profile" && currentTab == 0 ? 4 : "-16"
          }
          size={"lg"}
          transition={"all .3s ease"}
          icon={<BsPersonPlusFill />}
          colorScheme="orange"
          rounded={"full"}
          right={4}
          onClick={() => setCurrentPanel("addMembers")}
        />
      </Box>
    </>
  );
};

export default RightPanel;
