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
import { BsBell, BsBellSlash, BsShieldFill, BsTrashFill } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";

const SettingsOverview = ({ onClose }) => {
  const { colorMode } = useColorMode();
  const Formik = useFormik({
    initialValues: {
      name: "ISKCON,Inc. Sanga",
      bio: "Hare Krishna!",
      avatar: "",
      groupPreference: "allow",
      inviteLink: "",
      notifications: true,
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
            Overview
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
              placeholder="Enter something about yourself..."
              name="bio"
              value={Formik.values.bio}
              onChange={Formik.handleChange}
              transition={"all .3s ease"}
              minH={"24"}
              resize={"none"}
            />
          </FormControl>
        </VStack>

        <Box p={4} color={colorMode == "dark" ? "gray.500" : "gray.500"}>
          <Text fontSize={"xs"}>Manage your preferences</Text>
        </Box>
        <VStack w={"full"} px={4}>
          <IconCard
            title={"Group Joining"}
            caption={
              Formik.values.groupPreference == "allow"
                ? "Anyone can add you in groups"
                : "You will only revceive group invites"
            }
            hasSwitch={true}
            switchStatus={Formik.values.groupPreference == "allow"}
            onClick={() => {
              if (Formik.values.groupPreference == "allow")
                Formik.setFieldValue("groupPreference", "inviteOnly");
              else Formik.setFieldValue("groupPreference", "allow");
            }}
          />

          <IconCard
            icon={Formik.values.notifications ? <BsBell /> : <BsBellSlash />}
            title={"Notifications"}
            caption={
              Formik.values.notifications ? "Enabled" : "Notifications are off"
            }
            hasSwitch={true}
            switchStatus={Formik.values.notifications}
            onClick={() => {
              if (Formik.values.notifications)
                Formik.setFieldValue("notifications", false);
              else Formik.setFieldValue("notifications", true);
            }}
          />
        </VStack>
        <Box w={"full"} h={8}></Box>
        <Box p={4} color={colorMode == "dark" ? "gray.500" : "gray.500"}>
          <Text fontSize={"xs"}>Other Settings</Text>
        </Box>
        <VStack w={"full"} px={4} h={"max-content"}>
          <IconCard
            icon={<SiMaildotru />}
            title={"sangam4742"}
            caption={"Username"}
          />

          <IconCard
            icon={<FaUsers />}
            title={"Joined Groups"}
            caption={"2 Groups"}
          />

          <IconCard
            icon={<FaUserAltSlash />}
            title={"Blocked Users"}
            caption={"2 Users"}
          />
        </VStack>
        <Box w={"full"} h={"24"}></Box>
        <HStack p={"4"} justifyContent={"center"}>
          <Button
            colorScheme="red"
            bgColor={"red.500"}
            w={"full"}
            leftIcon={<BsTrashFill />}
          >
            Delete Account
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default SettingsOverview;
