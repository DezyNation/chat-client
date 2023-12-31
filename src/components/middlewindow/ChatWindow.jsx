"use client";
import {
  Box,
  Container,
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
import { ImAttachment } from "react-icons/im";
import ResizeTextarea from "react-textarea-autosize";
import SentMessage from "../misc/chat/SentMessage";
import ReceivedMessage from "../misc/chat/ReceivedMessage";
import timeformat from '../../utils/timeformat'

const ChatWindow = ({ onAvatarClick, onSearchClick, onPinClick }) => {
  const { colorMode } = useColorMode();
  const [emojiPickerStatus, setEmojiPickerStatus] = useState(false);
  const [message, setMessage] = useState("");

  const [intent, setIntent] = useState("audio");

  const now = new Date('August 19, 2023 1:15');

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
        pos={"relative"}
        flex={2}
        flexGrow={3}
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
              name={"ISKCON,Inc. Sanga"}
              content={"1984 Members"}
              contentColor={colorMode == "dark" ? "#fff" : "gray.500"}
              onClick={() => onAvatarClick()}
            />
            <Spacer />
            <PinnedChats />
            <NavbarIconsGroup
              onSearchClick={() => onSearchClick()}
              onPinClick={() => onPinClick()}
            />
          </HStack>
        </Box>

        {/* Chats container */}
        <Box w={"full"} height={"80%"} my={4} overflow={"scroll"}>
          <Container>
            <SentMessage
              name={"Sangam"}
              message={"Hare Krishna Guru ji🙏🙏🙇"}
              blueTick={true}
              timestamp={now.toLocaleTimeString(undefined , timeformat)}
            />
            <ReceivedMessage
              name={"HG Gauranga Sundar Prabhu"}
              message={"Hare Krishna"}
              timestamp={now.toLocaleTimeString(undefined , timeformat)}
            />
            <SentMessage
              name={"Sangam"}
              message={"Guru ji when will I get my name??🙏🙏🙇"}
              greenTick={true}
              timestamp={now?.toLocaleTimeString(undefined , timeformat)}
            />
          </Container>
        </Box>

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
              minH={"unset"}
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
            <IconButton
              rounded={"full"}
              bgColor={"transparent"}
              icon={<ImAttachment />}
            />
          </HStack>
          <IconButton
            rounded={"full"}
            size={"lg"}
            colorScheme="orange"
            bgColor={colorMode == "dark" ? "orange.500" : "#333"}
            color={"#FFF"}
            fontSize={20}
            icon={intent == "audio" ? <BsMicFill /> : <IoSend />}
          />
        </HStack>
      </Box>
    </>
  );
};

export default ChatWindow;
