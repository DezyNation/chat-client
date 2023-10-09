"use client";
import React from "react";
import {
  Box,
  Checkbox,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import AvatarContainer from "../misc/AvatarContainer";

const AddMembers = ({ onClose }) => {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode == "light" ? "blackAlpha.100" : "blackAlpha.500";
  return (
    <>
      <Box pos={"relative"} w={"full"} h={"100vh"} overflowY={"scroll"}>
        <HStack w={"full"} p={2} gap={4}>
          <IconButton
            icon={<BsArrowLeft />}
            rounded={"full"}
            bgColor={"transparent"}
            onClick={() => onClose()}
          />
          <Text fontWeight={"semibold"} fontSize={"lg"}>
            Add Members
          </Text>
        </HStack>
        <Box p={2}>
          <InputGroup>
            <InputLeftElement children={<BiSearch />} />
            <Input
              bgColor={
                colorMode == "dark"
                  ? "rgba(50,50,50,0.4)"
                  : "rgba(200,200,200,0.2)"
              }
              rounded={"full"}
              border={"none"}
              placeholder="Search Users"
            />
          </InputGroup>
        </Box>
        <VStack w={"full"} gap={4} p={2}>
          <HStack
            w={"full"}
            justifyContent={"flex-start"}
            rounded={12}
            _hover={{ bgColor: hoverColor }}
            gap={4}
          >
            <Checkbox />
            <AvatarContainer name={"Sangam Kumar"} content={"Bio"} />
          </HStack>
          <HStack
            w={"full"}
            justifyContent={"flex-start"}
            rounded={12}
            _hover={{ bgColor: hoverColor }}
            gap={4}
          >
            <Checkbox />
            <AvatarContainer name={"Subal Das"} content={"Bio"} />
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default AddMembers;
