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
import { FaArrowLeftLong, FaUserShield, FaUsers } from "react-icons/fa6";
import { FaUserAltSlash, FaUserTimes } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import ResizeTextarea from "react-textarea-autosize";
import IconCard from "../misc/IconCard";
import { LuLink } from "react-icons/lu";
import { BsShieldFill, BsTrashFill } from "react-icons/bs";

const EditGroup = ({ onClose }) => {
  const { colorMode } = useColorMode();
  const Formik = useFormik({
    initialValues: {
      name: "ISKCON,Inc. Sanga",
      description: "Hare Krishna!",
      avatar: "",
      groupType: "private",
      inviteLink: "",
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
            onClick={() => onClose("profile")}
          />
          <Text fontWeight={"semibold"} fontSize={"lg"}>
            Edit
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
            <FormLabel fontSize={"xs"}>Group Name</FormLabel>
            <Input
              variant={"flushed"}
              placeholder="Enter Group Name"
              name="name"
              value={Formik.values.name}
              onChange={Formik.handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize={"xs"}>Group Description (optional)</FormLabel>
            <Textarea
              as={ResizeTextarea}
              variant={"flushed"}
              placeholder="Enter Group Description"
              name="description"
              value={Formik.values.description}
              onChange={Formik.handleChange}
              transition={"all .3s ease"}
              minH={"24"}
              resize={"none"}
            />
          </FormControl>
        </VStack>

        <Box p={4} color={colorMode == "dark" ? "gray.500" : "gray.500"}>
          <Text fontSize={"xs"}>Manage your group settings</Text>
        </Box>
        <VStack w={"full"} px={4}>
          <IconCard
            title={
              Formik.values.groupType == "private"
                ? "Private Group"
                : "Public Group"
            }
            caption={
              Formik.values.groupType == "private"
                ? "Only invited people can join"
                : "Anyone can join"
            }
            hasSwitch={true}
            switchStatus={Formik.values.groupType == "private"}
            onClick={() => {
              if (Formik.values.groupType == "private")
                Formik.setFieldValue("groupType", "public");
              else Formik.setFieldValue("groupType", "private");
            }}
          />

          <IconCard
            icon={<LuLink />}
            title={"Invite Link"}
            caption={"Click to copy"}
          />

          <IconCard
            icon={<BsShieldFill />}
            title={"Permissions"}
            caption={"Group permissions"}
          />
        </VStack>

        <Box p={4} color={colorMode == "dark" ? "gray.500" : "gray.500"}>
          <Text fontSize={"xs"}>Manage group members</Text>
        </Box>
        <VStack w={"full"} px={4} h={"max-content"}>
          <IconCard
            icon={<FaUserShield />}
            title={"Administrators"}
            caption={"2 Users"}
          />

          <IconCard icon={<FaUsers />} title={"Members"} caption={"23 Users"} />

          <IconCard
            icon={<FaUserAltSlash />}
            title={"Removed Users"}
            caption={"2 Users"}
          />
        </VStack>
        <Box w={"full"} h={"24"}></Box>
        <HStack p={"4"} justifyContent={"center"}>
          <Button bgColor={"red.500"} w={"full"} leftIcon={<BsTrashFill />}>
            Delete and Leave Group
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default EditGroup;
