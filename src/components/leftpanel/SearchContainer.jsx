"use client";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import AvatarContainer from "../misc/AvatarContainer";

const SearchContainer = () => {
  const { colorMode } = useColorMode();
  const [currentTab, setCurrentTab] = useState(0);
  const tabRef = useRef(null);

  const [recentChats, setRecentChats] = useState([1, 1, 1, 1, 1, 1]);

  function handleTabChange(i) {
    tabRef.current.scrollLeft += (i - currentTab) * 40;
    setCurrentTab(i);
  }

  return (
    <>
      <Tabs isLazy onChange={(i) => handleTabChange(i)}>
        <Box overflowX={"scroll"} ref={tabRef}>
          <TabList w={"max-content"}>
            <Tab>Chats</Tab>
            <Tab>Media</Tab>
            <Tab>Files</Tab>
            <Tab>Links</Tab>
            <Tab>Music</Tab>
            <Tab>Voice</Tab>
          </TabList>
        </Box>

        <TabPanels h={"92.5vh"} overflowY={"scroll"}>
          <TabPanel h={"inherit"} px={0} pos={"relative"}>
            <Text fontSize={'sm'} fontWeight={'semibold'} p={4}>Recent Chats</Text>
            {recentChats?.map((user, key) => (
              <Box
                w={"full"}
                p={2}
                key={key}
                transition={"all .1s ease"}
                _hover={{
                  bgColor:
                    colorMode == "dark" ? "whiteAlpha.50" : "blackAlpha.50",
                }}
              >
                <AvatarContainer
                  avatarSize={"10"}
                  name={"Sangam"}
                  titleSize={"sm"}
                  content={"last seen 2 hours ago"}
                  onClick={() => console.log("User avatar click")}
                />
              </Box>
            ))}
          </TabPanel>
          <TabPanel>Media</TabPanel>
          <TabPanel>Files</TabPanel>
          <TabPanel>Links</TabPanel>
          <TabPanel>Music</TabPanel>
          <TabPanel>Voice</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default SearchContainer;
