"use client";
import React from "react";
import { useFormik } from "formik";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
  Textarea,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { FaArrowLeftLong, FaArrowRightLong, FaCheck } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import ResizeTextarea from "react-textarea-autosize";
import { BsCheckLg } from "react-icons/bs";

const NewGroup = ({ onClose, onSubmit }) => {
  const Formik = useFormik({
    initialValues: {
      name: "ISKCON,Inc. Sanga",
      bio: "Hare Krishna!",
      avatar: "",
    },
  });
  return (
    <>
      <Box pos={"relative"} w={"full"} h={"100vh"} overflowY={"scroll"}>
        <HStack w={"full"} p={2}>
          <IconButton
            icon={<FaArrowLeftLong size={20} />}
            rounded={"full"}
            bgColor={"transparent"}
            onClick={() => onClose()}
          />
          <Text fontWeight={"semibold"} fontSize={"lg"}>
            New Group
          </Text>
        </HStack>

        <VStack p={4} gap={8} mb={4}>
          <Avatar pos={"relative"} name={Formik.values.name} size={"2xl"}>
            <Box
              pos={"absolute"}
              width={"inherit"}
              height={"inherit"}
              rounded={"full"}
              bgColor={"blackAlpha.600"}
              color={"#FFF"}
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.2)" }}
              cursor={"pointer"}
            >
              <IoCameraOutline />
            </Box>
          </Avatar>

          <FormControl>
            <FormLabel fontSize={"xs"}>Display Name</FormLabel>
            <Input
              variant={"flushed"}
              placeholder="Enter Group Name"
              name="name"
              value={Formik.values.name}
              onChange={Formik.handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize={"xs"}>Your Bio (optional)</FormLabel>
            <Textarea
              as={ResizeTextarea}
              variant={"flushed"}
              placeholder="Enter something about this group..."
              name="bio"
              value={Formik.values.bio}
              onChange={Formik.handleChange}
              transition={"all .3s ease"}
              minH={"24"}
              resize={"none"}
            />
          </FormControl>
        </VStack>

        <IconButton
          icon={<FaCheck />}
          colorScheme="orange"
          onClick={() => onSubmit(Formik.values)}
          size={"lg"}
          rounded={"full"}
          position={"fixed"}
          bottom={4}
          right={4}
        />
      </Box>
    </>
  );
};

export default NewGroup;
