"use client";
import {
  Box,
  Slide,
  ScaleFade,
  useColorMode,
  IconButton,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RecentChatsContainer from "./RecentChatsContainer";
import SearchContainer from "./SearchContainer";
import TopBar from "./Topbar";
import SettingsOverview from "./SettingsOverview";
import NewChat from "./NewChat";
import NewChannel from "./NewChannel";
import NewGroup from "./NewGroup";
import AddMembers from "./AddMembers";
import { BsChatRight, BsMegaphone, BsPenFill, BsPeople } from "react-icons/bs";

const LeftPanel = ({}) => {
  const { colorMode } = useColorMode();
  const [intent, setIntent] = useState("chat");

  const createGroup = () => {
    setIntent("addMembers")
  }

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

          <Slide
            style={{ position: "absolute" }}
            direction="left"
            in={intent == "newChannel"}
          >
            <NewChannel onClose={() => setIntent("chat")} onSubmit={(values) => setIntent("addMembers")} />
          </Slide>

          <Slide
            style={{ position: "absolute" }}
            direction="left"
            in={intent == "newGroup"}
          >
            <NewGroup onClose={() => setIntent("chat")} onSubmit={(values) => setIntent("addMembers")} />
          </Slide>

          <Slide
            style={{ position: "absolute" }}
            direction="left"
            in={intent == "newChat"}
          >
            <NewChat onClose={() => setIntent("chat")} />
          </Slide>

          <Slide
            style={{ position: "absolute" }}
            direction="left"
            in={intent == "addMembers"}
          >
            <AddMembers onClose={() => setIntent("chat")} />
          </Slide>
        </Box>

        <Menu>
          <MenuButton
            as={IconButton}
            size={"lg"}
            icon={<BsPenFill />}
            rounded={"full"}
            colorScheme="red"
            bgColor={"orange.500"}
            color={"#fff"}
            pos={"absolute"}
            bottom={intent == "chat" ? 4 : "-16"}
            right={4}
            transition={"all .3s ease"}
          ></MenuButton>
          <MenuList
            bgColor={colorMode == "dark" ? "blackAlpha.600" : "whiteAlpha.600"}
            filter={"auto"}
            backdropFilter={"blur(10px)"}
          >
            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
              onClick={() => setIntent("newChannel")}
            >
              <HStack w={"full"}>
                <BsMegaphone />
                <Text fontSize={"sm"}>New Channel</Text>
              </HStack>
            </MenuItem>

            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
              onClick={() => setIntent("newGroup")}
            >
              <HStack w={"full"}>
                <BsPeople />
                <Text fontSize={"sm"}>New Group</Text>
              </HStack>
            </MenuItem>

            <MenuItem
              bgColor={"transparent"}
              _hover={{
                bgColor:
                  colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200",
              }}
              onClick={() => setIntent("newChat")}
            >
              <HStack w={"full"}>
                <BsChatRight />
                <Text fontSize={"sm"}>New Private Chat</Text>
              </HStack>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default LeftPanel;
