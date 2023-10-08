"use client";
import React, { useRef, useState } from "react";
import {
  Avatar,
  Box,
  HStack,
  IconButton,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { BsBellFill, BsPen, BsPersonPlusFill } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { LuLink } from "react-icons/lu";
import AvatarContainer from "../misc/AvatarContainer";
import IconCard from "../misc/IconCard";

const ChannelInfo = ({
  isAdmin,
  avatar,
  name,
  caption,
  description,
  type,
  username,
  link,
  fabStatus,
  onClose,
  onIntentChange,
  onTabChange,
}) => {
  const { colorMode } = useColorMode();
  const [currentTab, setCurrentTab] = useState(0);
  const tabRef = useRef(null);

  const [members, setMembers] = useState([1, 1, 1, 1, 1, 1]);

  function handleTabChange(i) {
    tabRef.current.scrollLeft += (i - currentTab) * 40;
    setCurrentTab(i);
    onTabChange(i);
  }

  return (
    <>
      <Box pos={"absolute"} w={"full"} h={"100vh"} overflowY={"scroll"}>
        <HStack w={"full"} p={2}>
          <IconButton
            icon={<IoMdClose size={20} />}
            rounded={"full"}
            bgColor={"transparent"}
            onClick={() => onClose()}
          />
          <Text fontWeight={"semibold"} fontSize={"lg"}>
            Profile
          </Text>
          <Spacer />
          <IconButton
            icon={<BsPen />}
            rounded={"full"}
            bgColor={"transparent"}
            onClick={() => onIntentChange("edit")}
          />
          {/* {isAdmin ? (
            <IconButton
              icon={<BsPen />}
              rounded={"full"}
              bgColor={"transparent"}
              onClick={() => onIntentChange("edit")}
            />
          ) : null} */}
        </HStack>

        <VStack h={"xs"} justifyContent={"center"}>
          <>
            <Avatar name="ISKCON,Inc. Sanga" size={"2xl"} />
            <Text fontSize={"lg"} fontWeight={"semibold"}>
              ISKCON,Inc. Sanga
            </Text>
            <Text fontSize={"xs"}>1330 Members</Text>
          </>
        </VStack>

        <VStack w={"full"} justifyContent={"center"} p={2}>
          <IconCard
            icon={<LuLink />}
            title={
              "htts://chat.kcs.com/c/kHJGVIjhY7658HBJf"?.slice(0, 28) + "..."
            }
            caption={"Channel Link"}
            onClick={() => console.log("Channel Link")}
          />

          <IconCard
            icon={<SiMaildotru />}
            title={"sangam4742"}
            caption={"Username"}
            onClick={() => console.log("Username")}
          />

          <IconCard
            icon={<BsBellFill />}
            title={"Notifications"}
            hasSwitch={true}
            switchStatus={true}
            onClick={() => console.log("Notifications")}
          />
        </VStack>

        <Tabs isLazy onChange={(i) => handleTabChange(i)}>
          <Box overflowX={"scroll"} ref={tabRef}>
            <TabList w={"max-content"}>
              <Tab>Members</Tab>
              <Tab>Media</Tab>
              <Tab>Files</Tab>
              <Tab>Links</Tab>
              <Tab>Music</Tab>
              <Tab>Voice</Tab>
            </TabList>
          </Box>

          <TabPanels h={"92.5vh"} overflowY={"scroll"}>
            <TabPanel h={"inherit"} px={0} pos={"relative"}>
              {members?.map((user, key) => (
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
      </Box>
    </>
  );
};

export default ChannelInfo;
