"use client";
import {
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AvatarContainer from "../misc/AvatarContainer";
import PinnedChats from "../misc/chat/PinnedChats";
import NavbarIconsGroup from "../misc/chat/NavbarIconsGroup";
import CustomEmojiPicker from "../misc/chat/CustomEmojiPicker";
import { BsMicFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

const ChatWindow = () => {
  const { colorMode } = useColorMode();
  const [emojiPickerStatus, setEmojiPickerStatus] = useState(false);
  const [message, setMessage] = useState("");

  const [intent, setIntent] = useState("audio");

  useEffect(() => {
    if (message) {
      setIntent("message");
    } else {
      setIntent("audio");
    }
  }, [message]);

  return (
    <>
      <Box
        flex={3}
        w={"full"}
        h={"full"}
        bgImage={
          colorMode == "dark"
            ? "/backgrounds/dark.png"
            : "/backgrounds/light.png"
        }
        bgSize={"cover"}
        backdropFilter={{ opacity: "60%" }}
      >
        <Box
          boxShadow={"lg"}
          px={4}
          py={2}
          bgColor={colorMode == "dark" ? "#1a202c" : "#fff"}
        >
          <HStack>
            <AvatarContainer
              src={"/logo.jpeg"}
              avatarSize={"40px"}
              title={"ISKCON,Inc. Sanga"}
              content={"1984 Members"}
              contentColor={colorMode == "dark" ? "#fff" : "gray.500"}
            />
            <Spacer />
            <PinnedChats />
            <NavbarIconsGroup />
          </HStack>
        </Box>

        {/* Chats container */}
        <Box w={"full"} height={"80%"}></Box>

        <HStack p={2} alignItems={"center"} justifyContent={"center"}>
          <HStack
            p={2}
            rounded={12}
            bgColor={colorMode == "dark" ? "#1a202c" : "#fff"}
            roundedBottomRight={0}
          >
            <CustomEmojiPicker
              onClick={() => setEmojiPickerStatus(true)}
              isOpen={emojiPickerStatus}
              onClose={() => setEmojiPickerStatus(false)}
              onEmojiSelect={(emojiData) =>
                setMessage(`${message}${emojiData?.native}`)
              }
            />
            <Input
              w={["full", "lg"]}
              noOfLines={999999999}
              border={"none"}
              variant={'unstyled'}
              placeholder="Message"
              _placeholder={{fontWeight: 'medium', color: 'whiteAlpha.800'}}
            />
          </HStack>
          <IconButton
            rounded={"full"}
            size={"lg"}
            colorScheme="yellow"
            bgColor={colorMode == "dark" ? 'orange.500' : '#333'}
            color={'#FFF'}
            transition={"all .3s ease"}
            fontSize={20}
            icon={intent == "audio" ? <BsMicFill /> : <IoSend />}
          />
        </HStack>
      </Box>
    </>
  );
};

export default ChatWindow;
