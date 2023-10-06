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
import ResizeTextarea from "react-textarea-autosize";

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

  const handleTextareaResize = (event) => {
    const textarea = event.target;
    textarea.style.maxHeight = "auto"; // Reset the height to auto to recalculate
    textarea.style.maxHeight = `${Math.min(textarea.scrollHeight, 256)}px`; // Set the new height
  };

  return (
    <>
      <Box
        pos={"relative"}
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

        <HStack
          position={"absolute"}
          w={"full"}
          bottom={0}
          p={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <HStack
            p={2}
            rounded={12}
            bgColor={colorMode == "dark" ? "#1a202c" : "#fff"}
            roundedBottomRight={0}
            alignItems={"flex-end"}
          >
            <CustomEmojiPicker
              onClick={() => setEmojiPickerStatus(true)}
              isOpen={emojiPickerStatus}
              onClose={() => setEmojiPickerStatus(false)}
              onEmojiSelect={(emojiData) =>
                setMessage(`${message}${emojiData?.native}`)
              }
            />
            <Textarea
              w={["full", "lg"]}
              resize={"none"}
              border={"none"}
              minH={'unset'}
              variant={"unstyled"}
              placeholder="Message"
              _placeholder={{ fontWeight: "medium", color: "whiteAlpha.800" }}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}

              minRows={1}
              maxRows={20}
              as={ResizeTextarea}
              transition={"all 0.3s ease"}
            />
          </HStack>
          <IconButton
            rounded={"full"}
            size={"lg"}
            colorScheme="orange"
            bgColor={colorMode == "dark" ? "orange.500" : "#333"}
            color={"#FFF"}
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
