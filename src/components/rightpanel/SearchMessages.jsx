"use client";
import React from "react";
import {
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

const SearchMessages = ({ onClose }) => {
  const { colorMode } = useColorMode();
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
              placeholder="Search"
            />
          </InputGroup>
        </HStack>
      </Box>
    </>
  );
};

export default SearchMessages;
